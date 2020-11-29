import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('vendedora')
export class VendedoraController {
    private readonly vendedoraService: VendedoraController
    constructor(vendedoraService: VendedoraController){
        this.vendedoraService = vendedoraService
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

    @Put('/:id')
    async update(@Param('id') id: number){
        
    }

}
