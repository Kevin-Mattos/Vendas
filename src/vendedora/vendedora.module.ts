import { Module } from '@nestjs/common';
import { VendedoraService } from './vendedora.service';
import { VendedoraController } from './vendedora.controller';

@Module({
  providers: [VendedoraService],
  controllers: [VendedoraController]
})
export class VendedoraModule {}
