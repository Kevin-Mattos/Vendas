import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProdutoDto } from './dto/createProdutoDto.dto';
import { Produto } from './produto.entity';
import { ProdutoRepository } from './produto.repository';
@Injectable()
export class ProdutoService {
    readonly table = 'produto'
    constructor(@InjectRepository(ProdutoRepository) private repository: ProdutoRepository){}

    async getAllProduto(): Promise<Produto[]>{
        return await this.repository.find()//this.repository.getProdutos()//
    }

    async getProdutoById(id: number): Promise<Produto>{
        return await this.repository.findOne(id)
    }

    async insertProduto(createProdutoDto: CreateProdutoDto): Promise<Produto>{
        console.log(createProdutoDto)
        return await this.repository.insertProduto(createProdutoDto)
    }

    async updateProduto(id: number, createProdutoDto: CreateProdutoDto): Promise<Produto>{
        console.log(createProdutoDto)
        return await this.repository.updateProduto(id,createProdutoDto)
    }

    async removeProduto(id: number): Promise<void>{
        await this.repository.delete(id)
    }
}
