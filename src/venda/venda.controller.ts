import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
    async insert(){

    }

    @Delete()
    async remove(){

    }

    @Get('/:id')
    async getById(@Param('id') id: number){

    }


}
