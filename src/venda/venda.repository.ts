import { EntityRepository, Repository } from "typeorm";
import { CreateVendaDto } from "./dto/createVendaDto.dto";
import { Venda } from "./venda.entity";


@EntityRepository(Venda)
export class VendaRepository extends Repository<Venda>{

    async insertVenda(createProdutoDto: CreateVendaDto): Promise<Venda>{
        const {valor, desconto, id_produto, id_vendedora} = createProdutoDto
        let venda = new Venda()
 
        venda.valor = valor
        venda.desconto = desconto
        venda.id_produto = id_produto,
        venda.id_vendedora = id_vendedora
     
        await   venda.save()      
        
        return  venda
    }
}