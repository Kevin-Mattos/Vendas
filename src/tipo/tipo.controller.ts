import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { report } from 'process';
import { Repository } from 'typeorm';
import { CreateTipoDto } from './dto/createTipoDto.dto';
import { Tipo } from './tipo.entity';
import { TipoRepository } from './tipo.repository';
import { TipoService } from './tipo.service';

@Controller('tipo')
export class TipoController {
    private readonly tipoService: TipoService
    constructor(tipoService: TipoService){
        this.tipoService = tipoService
    }

    
    @Get()
    getAll(): Promise<Tipo[]>{
        return this.tipoService.getAllTipos()
    }

    @Post()
    @UsePipes(ValidationPipe)
    insert(@Body() createTipoDto: CreateTipoDto): Promise<Tipo>{
        return this.tipoService.insertTipo(createTipoDto)
    }

    @Delete('/:id')
    remove(@Param('id') id: number): Promise<void>{
        return this.remove(id)
    }

    @Get('/:id')
    getById(@Param('id') id: number): Promise<Tipo>{
        return this.tipoService.getTipoById(id)
    }

}
