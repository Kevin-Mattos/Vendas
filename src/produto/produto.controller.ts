import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
    async insert(){

    }

    @Delete()
    async remove(){

    }

    @Get('/:id')
    async getById(@Param('id') id: number){

    }



}
