import { Module } from '@nestjs/common';
import { MaletaService } from './maleta.service';
import { MaletaController } from './maleta.controller';

@Module({
  providers: [MaletaService],
  controllers: [MaletaController]
})
export class MaletaModule {}
