import { Module } from '@nestjs/common';
import { VendedoraService } from './vendedora.service';
import { VendedoraController } from './vendedora.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendaRepository } from 'src/venda/venda.repository';

@Module({
   imports:[TypeOrmModule.forFeature([VendaRepository])],
  providers: [VendedoraService],
  controllers: [VendedoraController]
})
export class VendedoraModule {}
