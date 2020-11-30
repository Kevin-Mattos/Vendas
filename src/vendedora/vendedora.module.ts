import { Module } from '@nestjs/common';
import { VendedoraService } from './vendedora.service';
import { VendedoraController } from './vendedora.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendedoraRepository } from './vendedora.repository';

@Module({
   imports:[TypeOrmModule.forFeature([VendedoraRepository])],
  providers: [VendedoraService],
  controllers: [VendedoraController]
})
export class VendedoraModule {}
