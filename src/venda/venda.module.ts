import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendaController } from './venda.controller';
import { VendaRepository } from './venda.repository';
import { VendaService } from './venda.service';

@Module({
   imports:[TypeOrmModule.forFeature([VendaRepository])],
  controllers: [VendaController],
  providers: [VendaService]
})
export class VendaModule {}
