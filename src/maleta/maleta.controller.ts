import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MaletaService } from './maleta.service';

@Controller('maleta')
export class MaletaController {
    private readonly maletaService: MaletaService
    constructor(maletaService: MaletaService){
        this.maletaService = maletaService
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
