import { Injectable } from '@nestjs/common';
import { CreateVendaDto } from 'src/venda/dto/createVendaDto.dto';

@Injectable()
export class VendedoraService {
    readonly table = 'vendedora'
    getAllVendas(){

    }

    getVendaById(id: number){

    }

    insertVenda(createVendaDto: CreateVendaDto){
        console.log(createVendaDto)
       
    }

    removeVenda(id: number){

    }
}
