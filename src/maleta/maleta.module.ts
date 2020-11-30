import { Module } from '@nestjs/common';
import { MaletaService } from './maleta.service';
import { MaletaController } from './maleta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaletaRepository } from './maleta.repository';

@Module({
  imports:[TypeOrmModule.forFeature([MaletaRepository])],
  providers: [MaletaService],
  controllers: [MaletaController]
})
export class MaletaModule {}
