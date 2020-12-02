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


    async getProdutos(): Promise<Produto[]>{
        let query = this.createQueryBuilder('produto')
        
        query.leftJoinAndSelect("produto.vendedora", "vendedora")

        return await query.getMany()
    }


    async updateProduto(id:number, createProdutoDto: CreateProdutoDto): Promise<Produto>{
        const {nome, valor, id_maleta, id_tipo, id_vendedora} = createProdutoDto
        let produto = new Produto()
        produto.id = id
        produto.nome = nome
        produto.valor = valor
        produto.id_maleta = id_maleta
        produto.id_tipo = id_tipo,
        produto.id_vendedora = id_vendedora
     
        await produto.save()
       
        
        return produto
    }

}