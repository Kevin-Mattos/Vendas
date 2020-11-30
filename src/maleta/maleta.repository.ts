import { BadRequestException } from "@nestjs/common";
import { EntityRepository, QueryFailedError, Repository } from "typeorm";
import { CreateMaletaDto } from "./dto/create-maleta.dto";
import { Maleta } from "./maleta.entity";

@EntityRepository(Maleta)
export class MaletaRepository extends Repository<Maleta>{

    async insertMaleta(createMaletaDto: CreateMaletaDto): Promise<Maleta>{
        const {nome} = createMaletaDto
        let maleta = new Maleta()
        maleta.nome = nome
        try{
            await maleta.save()
        }catch (e){
            console.log(e)
            throw new BadRequestException(`nome ${nome} em uso`)
        }
        
        return maleta
    }
}