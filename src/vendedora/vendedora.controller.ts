import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateVendaDto } from 'src/venda/dto/createVendaDto.dto';
import { CreateVendedoraDto } from './dto/createVendedoraDto.dto';
import { VendedoraService } from './vendedora.service';

@Controller('vendedora')
export class VendedoraController {
    private readonly vendedoraService: VendedoraService
    constructor(vendedoraService: VendedoraService){
        this.vendedoraService = vendedoraService
    }

    
    @Get()
    async getAll(){

    }

    @Post()
    @UsePipes(ValidationPipe)
    async insert(@Body() createVendaDto: CreateVendaDto){

    }

    @Delete('/:id')
    async remove(@Param('id') id: number){

    }

    @Get('/:id')
    async getById(@Param('id') id: number){

    }

    // @Put('/:id')
    // async update(@Param('id') id: number){
        
    // }

}
