import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateMaletaDto } from './dto/create-maleta.dto';
import { GetMaletaFilterDto } from './dto/getMaletaFilter.dto';
import { Maleta } from './maleta.entity';
import { MaletaService } from './maleta.service';
import { UpdateMaletaDto } from './dto/updateMaleta.dto';
@Controller('maleta')
export class MaletaController {
    private readonly maletaService: MaletaService
    constructor(maletaService: MaletaService){
        this.maletaService = maletaService
    }

    @Get()
    getAll(@Query(ValidationPipe) maletaFilterDto: GetMaletaFilterDto): Promise<Maleta[]>{        
      
            return this.maletaService.getAllMaletas(maletaFilterDto)
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


    @Patch('/:id')
    @UsePipes(ValidationPipe)
    update(@Param('id',ParseIntPipe) id: number, @Body() updateMaletaDto: UpdateMaletaDto): Promise<Maleta>{
        return this.maletaService.updateMaleta(id, updateMaletaDto)

    }



}
