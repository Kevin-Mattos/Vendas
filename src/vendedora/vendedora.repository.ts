import { BadRequestException } from "@nestjs/common";
import { EntityRepository, QueryFailedError, Repository } from "typeorm";
import { CreateVendedoraDto } from "./dto/createVendedoraDto.dto";
import { Vendedora } from "./vendedora.entity";


@EntityRepository(Vendedora)
export class VendedoraRepository extends Repository<Vendedora>{

    async insertVendedora(createVendedoraDto: CreateVendedoraDto): Promise<Vendedora>{
        const {nome} = createVendedoraDto
        let vendedora = new Vendedora()
        vendedora.nome = nome
        try{
            await vendedora.save()
        }catch (e){
            console.log(e)
            throw new BadRequestException(`nome ${nome} em uso`)
        }
        
        return vendedora
    }


    async getAllVendedoras(): Promise<Vendedora[]>{
        let query = this.createQueryBuilder('vendedora')
        
        query.leftJoinAndSelect("vendedora.produtos", "produto")

        return await query.getMany()

    }
}