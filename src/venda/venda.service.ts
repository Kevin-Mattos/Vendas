import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVendaDto } from './dto/createVendaDto.dto';
import { UpdateVendaDto } from './dto/updateVendaDto.dto';
import { Venda } from './venda.entity';
import { VendaRepository } from './venda.repository';

@Injectable()
export class VendaService {
    readonly table = 'venda'
    constructor(@InjectRepository(VendaRepository) private repository: VendaRepository){}
    async getAllVendas(): Promise<Venda[]>{
        return await this.repository.find()
    }

    async getVendaById(id: number): Promise<Venda>{
        return await this.repository.findOne(id)
    }

    async insertVenda(createVendaDto: CreateVendaDto): Promise<Venda>{
        console.log(createVendaDto)
        return this.repository.insertVenda(createVendaDto)
    }

    async removeVenda(id: number): Promise<number>{
        await this.repository.delete(id)
        return id
    }

    async updateVenda(id: number, updateVendaDto: UpdateVendaDto): Promise<Venda>{
        return await this.repository.updateVenda(id, updateVendaDto)
    }

}
