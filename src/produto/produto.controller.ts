import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProdutoDto } from './dto/createProdutoDto.dto';
import { ProdutoService } from './produto.service';

@Controller('produto')
export class ProdutoController {
    private readonly produtoService: ProdutoService
    constructor(produtoService: ProdutoService){
        this.produtoService = produtoService
    }

    
    @Get()
    async getAll(){

    }

    @Post()
    @UsePipes(ValidationPipe)
    async insert(@Body() CreateProdutoDto: CreateProdutoDto){

    }

    @Delete()
    async remove(){

    }

    @Get('/:id')
    async getById(@Param('id') id: number){

    }



}
