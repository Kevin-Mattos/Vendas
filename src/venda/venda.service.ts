import { Injectable } from '@nestjs/common';
import { CreateVendedoraDto } from 'src/vendedora/dto/createVendedoraDto.dto';

@Injectable()
export class VendaService {
    readonly table = 'venda'
    getAllVendedoras(){

    }

    getVendedoraById(id: number){

    }

    insertVendedora(createVendedoraDto: CreateVendedoraDto){
        console.log(createVendedoraDto)
      
    }

    removeVendedora(id: number){

    }
}
