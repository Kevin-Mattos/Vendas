import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/createProdutoDto.dto';

@Injectable()
export class ProdutoService {
    readonly table = 'produto'
    
    getAllProduto(){

    }

    getProdutoById(id: number){

    }

    insertProduto(createProdutoDto: CreateProdutoDto){
        console.log(createProdutoDto)

    }

    removeProduto(id: number){

    }
}
