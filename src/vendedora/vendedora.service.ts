import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVendaDto } from 'src/venda/dto/createVendaDto.dto';
import { Venda } from 'src/venda/venda.entity';
import { VendaRepository } from 'src/venda/venda.repository';

@Injectable()
export class VendedoraService {
    readonly table = 'vendedora'

    constructor(@InjectRepository(VendaRepository) private repository: VendaRepository){}

    async getAllVendas(): Promise<Venda[]>{
        return this.repository.find()
    }

    async getVendaById(id: number): Promise<Venda>{
        return this.repository.findOne(id)
    }

    async insertVenda(createVendaDto: CreateVendaDto): Promise<Venda>{
        return await this.repository.insertVenda(createVendaDto)       
    }

    async removeVenda(id: number): Promise<void>{
        this.repository.delete(id)
        return
    }
}
