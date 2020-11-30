import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateMaletaDto } from './dto/create-maleta.dto';
import { Maleta } from './maleta.entity';
import { MaletaService } from './maleta.service';

@Controller('maleta')
export class MaletaController {
    private readonly maletaService: MaletaService
    constructor(maletaService: MaletaService){
        this.maletaService = maletaService
    }

    @Get()
    getAll(): Promise<Maleta[]>{
        return this.maletaService.getAllMaletas()
    }

    @Post()
    @UsePipes(ValidationPipe)
    insert(@Body() createMaletaDto: CreateMaletaDto): Promise<Maleta>{
        return this.maletaService.insertMaleta(createMaletaDto)
    }

    @Delete('/:id')
    remove(@Param('id', ParseIntPipe) id: number): Promise<Maleta>{
        return this.maletaService.removeMaleta(id)
    }

    @Get('/:id')
    getById(@Param('id', ParseIntPipe) id: number): Promise<Maleta>{
        return this.maletaService.getMaletaById(id)
    }



}
