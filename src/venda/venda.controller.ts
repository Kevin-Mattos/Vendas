import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateVendedoraDto } from 'src/vendedora/dto/createVendedoraDto.dto';
import { VendaService } from './venda.service';

@Controller('venda')
export class VendaController {
    private readonly vendaService: VendaService
    constructor(vendaService: VendaService){
        this.vendaService = vendaService
    }

    
    @Get()
    async getAll(){

    }

    @Post()
    @UsePipes(ValidationPipe)
    async insert(@Body() createVendedoraDto: CreateVendedoraDto){

    }

    @Delete()
    async remove(){

    }

    @Get('/:id')
    async getById(@Param('id') id: number){

    }


}
