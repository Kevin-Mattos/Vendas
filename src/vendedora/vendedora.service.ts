import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVendaDto } from 'src/venda/dto/createVendaDto.dto';
import { CreateVendedoraDto } from './dto/createVendedoraDto.dto';
import { Vendedora } from './vendedora.entity';
import { VendedoraRepository } from './vendedora.repository';

@Injectable()
export class VendedoraService {
    readonly table = 'vendedora'

    constructor(@InjectRepository(VendedoraRepository) private repository: VendedoraRepository){}

    async getAllVendas(): Promise<Vendedora[]>{
        return this.repository.find()//this.repository.getAllVendedoras()//
    }

    async getVendaById(id: number): Promise<Vendedora>{
        return this.repository.findOne(id)
    }

    async insertVenda(createVendedoraDto: CreateVendedoraDto): Promise<Vendedora>{
        return await this.repository.insertVendedora(createVendedoraDto)       
    }

    async removeVenda(id: number): Promise<void>{
        this.repository.delete(id)
        return
    }
}
