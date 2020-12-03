import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMaletaDto } from './dto/create-maleta.dto';
import { GetMaletaFilterDto } from './dto/getMaletaFilter.dto';
import { UpdateMaletaDto } from './dto/updateMaleta.dto';
import { Maleta } from './maleta.entity';
import { MaletaRepository } from './maleta.repository';

@Injectable()
export class MaletaService {

    constructor(@InjectRepository(MaletaRepository) private repository: MaletaRepository){}

    readonly table = 'maleta'
    async getAllMaletas(maletaFilterDto: GetMaletaFilterDto): Promise<Maleta[]>{
        const found =  await this.repository.getMaletas(maletaFilterDto)

        return found
    }

    async getMaletaById(id: number): Promise<Maleta>{
        const found =  await this.repository.findOne(id)

        if(!found)
            throw new NotFoundException('Maleta com id ' + id + ' não encontrada')

        return found
    }

    async insertMaleta(createMaletaDto: CreateMaletaDto): Promise<Maleta> {
        console.log(createMaletaDto)  
        return await this.repository.insertMaleta(createMaletaDto)
    }

    async removeMaleta(id: number): Promise<number>{        
        const remov = await this.repository.delete(id)
        
        return id
    }

    async updateMaleta(id: number, updateMaletaDto: UpdateMaletaDto): Promise<Maleta>{
        return this.repository.updateMaleta(id, updateMaletaDto)
    }

}
