import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateVendaDto } from 'src/venda/dto/createVendaDto.dto';
import { CreateVendedoraDto } from './dto/createVendedoraDto.dto';
import { Vendedora } from './vendedora.entity';
import { VendedoraService } from './vendedora.service';

@Controller('vendedora')
export class VendedoraController {
    private readonly vendedoraService: VendedoraService
    constructor(vendedoraService: VendedoraService){
        this.vendedoraService = vendedoraService
    }

    
    @Get()
    getAll(): Promise<Vendedora[]>{
        return this.vendedoraService.getAllVendas()
    }

    @Post()
    @UsePipes(ValidationPipe)
    insert(@Body() createVendedoraDto: CreateVendedoraDto): Promise<Vendedora>{
        return this.vendedoraService.insertVenda(createVendedoraDto)
    }

    @Delete('/:id')
    remove(@Param('id') id: number): Promise<number>{
        return this.vendedoraService.removeVenda(id)
    }

    @Get('/:id')
    getById(@Param('id') id: number): Promise<Vendedora>{
        return this.vendedoraService.getVendaById(id)
    }

    @Put('/:id')
    update(@Param('id', ParseIntPipe) id: number, @Body() createVendedoraDto: CreateVendedoraDto): Promise<Vendedora>{
        return this.vendedoraService.updateVendedora(id, createVendedoraDto)
    }

}
