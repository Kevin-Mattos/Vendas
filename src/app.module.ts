import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { MaletaModule } from './maleta/maleta.module';
import { TipoModule } from './tipo/tipo.module';
import { VendaModule } from './venda/venda.module';
import { VendedoraModule } from './vendedora/vendedora.module';

@Module({
  imports: [ProdutoModule, MaletaModule, TipoModule, VendaModule, VendedoraModule],
})
export class AppModule {}
