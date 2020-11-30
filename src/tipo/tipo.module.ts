import { Module } from '@nestjs/common';
import { TipoService } from './tipo.service';
import { TipoController } from './tipo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoRepository } from './tipo.repository';

@Module({
  imports:[TypeOrmModule.forFeature([TipoRepository])],
  providers: [TipoService],
  controllers: [TipoController]
})
export class TipoModule {}
