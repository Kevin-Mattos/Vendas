import { EntityRepository, Repository } from "typeorm";
import { CreateProdutoDto } from "./dto/createProdutoDto.dto";
import { Produto } from "./produto.entity";

@EntityRepository(Produto)
export class ProdutoRepository extends Repository<Produto>{

    async insertProduto(createProdutoDto: CreateProdutoDto): Promise<Produto>{
        const {nome, valor, id_maleta, id_tipo, id_vendedora} = createProdutoDto
        let produto = new Produto()
        produto.nome = nome
        produto.valor = valor
        produto.id_maleta = id_maleta
        produto.id_tipo = id_tipo,
        produto.id_vendedora = id_vendedora
     
        await produto.save()
       
        
        return produto
    }
}