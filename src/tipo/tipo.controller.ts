import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TipoService } from './tipo.service';

@Controller('tipo')
export class TipoController {
    private readonly tipoService: TipoService
    constructor(tipoService: TipoService){
        this.tipoService = tipoService
    }

    
    @Get()
    async getAll(){

    }

    @Post()
    async insert(){

    }

    @Delete()
    async remove(){

    }

    @Get('/:id')
    async getById(@Param('id') id: number){

    }

}
