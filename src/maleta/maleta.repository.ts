import { BadRequestException } from "@nestjs/common";
import { EntityRepository, QueryFailedError, Repository } from "typeorm";
import { CreateMaletaDto } from "./dto/create-maleta.dto";
import { GetMaletaFilterDto } from "./dto/getMaletaFilter.dto";
import { UpdateMaletaDto } from "./dto/updateMaleta.dto";
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


    async getMaletas(maletasFilter: GetMaletaFilterDto): Promise<Maleta[]>{
        const {nome} = maletasFilter
        let query = this.createQueryBuilder('maleta')
        

        if(nome){
            query.andWhere('maleta.nome LIKE :nome', {nome: `%${nome}%`})
        }

        const tasks = await query.getMany()
        return tasks

    }


    async updateMaleta(id: number, updateMaletaDto: UpdateMaletaDto): Promise<Maleta>{
        let maleta = new Maleta()
        console.log(updateMaletaDto)
        if(updateMaletaDto.nome)
            maleta.nome = updateMaletaDto.nome

        if(updateMaletaDto.id_vendedora == null && typeof(updateMaletaDto.id_vendedora) !== "undefined"){
            maleta.id_vendedora = null
        }else if(typeof(updateMaletaDto.id_vendedora) !== "undefined"){
            maleta.id_vendedora = updateMaletaDto.id_vendedora
        }
        maleta.id = id

        return await this.save(maleta)  

    }

}