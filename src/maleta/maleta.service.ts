import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMaletaDto } from './dto/create-maleta.dto';
import { Maleta } from './maleta.entity';
import { MaletaRepository } from './maleta.repository';

@Injectable()
export class MaletaService {

    constructor(@InjectRepository(MaletaRepository) private repository: MaletaRepository){}

    readonly table = 'maleta'
    async getAllMaletas(): Promise<Maleta[]>{
        return await this.repository.find()
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

    async removeMaleta(id: number): Promise<Maleta>{
        const mal = await this.getMaletaById(id)
        const remov = await this.repository.delete(id)
        console.log(remov)
        return mal
    }

}
