import { BadRequestException } from "@nestjs/common";
import { EntityRepository, QueryFailedError, Repository } from "typeorm";
import { CreateTipoDto } from "./dto/createTipoDto.dto";
import { Tipo } from "./tipo.entity";


@EntityRepository(Tipo)
export class TipoRepository extends Repository<Tipo>{

    async insertTipo(createTipoDto: CreateTipoDto): Promise<Tipo>{
        const {nome} = createTipoDto
        let tipo = new Tipo()
        tipo.nome = nome
        try{
            await tipo.save()
        }catch (e){
            console.log(e)
            throw new BadRequestException(`nome ${nome} em uso`)
        }
        
        return tipo
    }

    async atualizaTipo(id: number, createTipoDto: CreateTipoDto): Promise<Tipo>{
        
        const {nome} = createTipoDto
        let tipo = new Tipo()
        tipo.id = id       
        tipo.nome = nome

        return await this.save(tipo)      
        
        
    }
}