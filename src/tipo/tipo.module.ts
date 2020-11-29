import { Module } from '@nestjs/common';
import { TipoService } from './tipo.service';
import { TipoController } from './tipo.controller';

@Module({
  providers: [TipoService],
  controllers: [TipoController]
})
export class TipoModule {}
