import { Injectable } from '@nestjs/common';
import { CreateTipoDto } from './dto/createTipoDto.dto';

@Injectable()
export class TipoService {
    readonly table = 'tipo'
    getAllTipos(){

    }

    getTipoById(id: number){

    }

    insertTipo(createTipoDto: CreateTipoDto){
        console.log(createTipoDto)
       
    }

    removeTipo(id: number){

    }
}
