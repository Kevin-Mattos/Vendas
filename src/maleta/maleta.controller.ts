import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateMaletaDto } from './dto/create-maleta.dto';
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
    @UsePipes(ValidationPipe)
    async insert(@Body() createMaletaDto: CreateMaletaDto){
        return this.maletaService.insertMaleta(createMaletaDto)
    }

    @Delete()
    async remove(){

    }

    @Get('/:id')
    async getById(@Param('id') id: number){

    }



}
