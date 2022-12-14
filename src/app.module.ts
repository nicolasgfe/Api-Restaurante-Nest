import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaProduto } from './categoriaProdutos/categoriasProdutos.entity';
import { CategoriaProdutoModule } from './categoriaProdutos/categoriasProdutos.Module';
import { FormaPagamentoModule } from './formasPagamento/formaPagamento.Module';
import { formaPagamento } from './migrations/Create.Formapagamento';
import { Produto } from './produtos/Produtos.entity';
import { ProdutoModule } from './produtos/produtos.Module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mysql',
      database: 'apis-restaurante',
      entities: [Produto, CategoriaProduto, formaPagamento],
      migrations: ['./migrations'],
      // synchronize: true,
      // logging: true,
    }),
    ProdutoModule, CategoriaProdutoModule, FormaPagamentoModule

  ],
})
export class AppModule { }
