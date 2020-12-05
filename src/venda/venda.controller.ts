import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateVendedoraDto } from 'src/vendedora/dto/createVendedoraDto.dto';
import { CreateVendaDto } from './dto/createVendaDto.dto';
import { UpdateVendaDto } from './dto/updateVendaDto.dto';
import { Venda } from './venda.entity';
import { VendaService } from './venda.service';

@Controller('venda')
export class VendaController {
    private readonly vendaService: VendaService;
  constructor(vendaService: VendaService) {
    this.vendaService = vendaService;
  }

  @Get()
  getAll(): Promise<Venda[]> {
    return this.vendaService.getAllVendas();
  }

  @Post()
  @UsePipes(ValidationPipe)
  insert(@Body() createVendaDto: CreateVendaDto): Promise<Venda> {
    return this.vendaService.insertVenda(createVendaDto);
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<number> {
    return this.vendaService.removeVenda(id);
  }

  @Get('/:id')
  getById(@Param('id', ParseIntPipe) id: number): Promise<Venda> {
    return this.vendaService.getVendaById(id);
  }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateVendaDto: UpdateVendaDto,
  ): Promise<Venda> {
    return this.vendaService.updateVenda(id, updateVendaDto);
  }
}
