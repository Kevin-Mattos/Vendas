import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
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
    remove(@Param('id', ParseIntPipe) id: number): Promise<number>{       
        return this.tipoService.removeTipo(id)
    }

    @Get('/:id')
    getById(@Param('id', ParseIntPipe) id: number): Promise<Tipo>{
        return this.tipoService.getTipoById(id)
    }

    @Put('/:id')
    @UsePipes(ValidationPipe)
    update(@Param('id', ParseIntPipe) id: number, @Body() createTipoDto: CreateTipoDto): Promise<Tipo>{
        return this.tipoService.updateTipo(id, createTipoDto)
    }

}
