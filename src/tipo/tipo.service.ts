import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTipoDto } from './dto/createTipoDto.dto';
import { Tipo } from './tipo.entity';
import { TipoRepository } from './tipo.repository';
@Injectable()
export class TipoService {
    readonly table = 'tipo'

    constructor(@InjectRepository(Tipo) private repository: TipoRepository){}

    async getAllTipos(): Promise<Tipo[]>{
        return await this.repository.find()
    }

    async getTipoById(id: number): Promise<Tipo>{
        return await this.repository.findOne(id)
    }

    async insertTipo(createTipoDto: CreateTipoDto): Promise<Tipo>{
        console.log(createTipoDto)
        return await this.repository.insertTipo(createTipoDto)
    }

    async removeTipo(id: number): Promise<number>{
        await this.repository.delete(id)
        return id
    }

    async updateTipo(id: number, createTipoDto: CreateTipoDto): Promise<Tipo>{
        return await this.repository.atualizaTipo(id, createTipoDto)
    }
}
