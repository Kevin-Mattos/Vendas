import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { timeStamp } from 'console';
import { CreateProdutoDto } from './dto/createProdutoDto.dto';
import { Produto } from './produto.entity';
import { ProdutoService } from './produto.service';

@Controller('produto')
export class ProdutoController {
    private readonly produtoService: ProdutoService
    constructor(produtoService: ProdutoService){
        this.produtoService = produtoService
    }

    
    @Get()
    getAll(): Promise<Produto[]>{
        return this.produtoService.getAllProduto()
    }

    @Post()
    @UsePipes(ValidationPipe)
    insert(@Body() createProdutoDto: CreateProdutoDto): Promise<Produto>{
        return this.produtoService.insertProduto(createProdutoDto)
    }

    @Delete('/:id')
    async remove(@Param('id', ParseIntPipe) id: number) :Promise<void>{
        return this.produtoService.removeProduto(id)
    }

    @Get('/:id')
    async getById(@Param('id', ParseIntPipe) id: number): Promise<Produto>{
        return this.produtoService.getProdutoById(id)
    }

    @Put('/:id')
    @UsePipes(ValidationPipe)
    update(@Param('id', ParseIntPipe) id: number, @Body() createProdutoDto: CreateProdutoDto): Promise<Produto>{
        return this.produtoService.updateProduto(id, createProdutoDto)
    }


}
