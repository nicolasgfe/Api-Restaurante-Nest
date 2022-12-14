import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaProduto } from './categoriaProdutos/categoriasProdutos.entity';
import { CategoriaProdutoModule } from './categoriaProdutos/categoriasProdutos.Module';
import { FormaPagamento } from './formasPagamento/formasPagamento.entity';
import { FormaPagamentoModule } from './formasPagamento/formasPagamento.Module';
import { Produto } from './produtos/Produtos.entity';
import { ProdutoModule } from './produtos/produtos.Module';
import { Venda } from './vendas/vendas.entity';
import { vendaModule } from './vendas/vendas.Module';
import { VendaDetalhe } from './vendasDetalhe/vendasDetalhe.entity';
import { vendaDetalheModule } from './vendasDetalhe/vendasDetalhe.Module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mysql',
      database: 'apis-restaurante',
      entities: [
        Produto, 
        CategoriaProduto, 
        FormaPagamento, 
        VendaDetalhe, 
        Venda
      ],
      // migrations: ['./migrations'],
      synchronize: true,
      // logging: true,
    }),
    ProdutoModule, 
    CategoriaProdutoModule, 
    FormaPagamentoModule, 
    vendaDetalheModule, 
    vendaModule

  ],
})
export class AppModule { }
