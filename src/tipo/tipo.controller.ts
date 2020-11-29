import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTipoDto } from './dto/createTipoDto.dto';
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
    @UsePipes(ValidationPipe)
    async insert(@Body() createTipoDto: CreateTipoDto){

    }

    @Delete()
    async remove(){

    }

    @Get('/:id')
    async getById(@Param('id') id: number){

    }

}
