import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { MaletaModule } from './maleta/maleta.module';
import { TipoModule } from './tipo/tipo.module';
import { VendaModule } from './venda/venda.module';
import { VendedoraModule } from './vendedora/vendedora.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ProdutoModule,
    MaletaModule,
    TipoModule,
    VendaModule,
    VendedoraModule,
  ],
})
export class AppModule {}
