import { Injectable } from '@nestjs/common';
import { CreateMaletaDto } from './dto/create-maleta.dto';


@Injectable()
export class MaletaService {
    readonly table = 'maleta'
    getAllMaletas(){

    }

    getMaletaById(id: number){

    }

    async insertMaleta(createMaletaDto: CreateMaletaDto){
        console.log(createMaletaDto)  
          
    }

    removeMaleta(id: number){

    }

}
