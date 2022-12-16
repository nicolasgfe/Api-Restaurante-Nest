import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaProduto } from './categoriaProdutos/categoriasProdutos.entity';
import { CategoriaProdutoModule } from './categoriaProdutos/categoriasProdutos.Module';
import { FormaPagamento } from './formasPagamento/formasPagamento.entity';
import { FormaPagamentoModule } from './formasPagamento/formasPagamento.module';
import { Pessoa } from './pessoas/pessoas.entity';
import { PessoaModule } from './pessoas/pessoas.module';
import { Produto } from './produtos/Produtos.entity';
import { ProdutoModule } from './produtos/produtos.module';
import { Venda } from './vendas/vendas.entity';
import { vendaModule } from './vendas/vendas.module';
import { VendaDetalhe } from './vendasDetalhe/vendasDetalhe.entity';
import { vendaDetalheModule } from './vendasDetalhe/vendasDetalhe.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mysql',
      database: 'teste2',
      entities: [
        Produto, 
        CategoriaProduto, 
        FormaPagamento, 
        VendaDetalhe, 
        Venda,
        Pessoa
      ],
      migrations: ["dist/migrations/*{.ts,.js}"],
      migrationsTableName: "migrations_typeorm",
      // synchronize: true,
      logging: true,
    }),
    ProdutoModule, 
    CategoriaProdutoModule, 
    FormaPagamentoModule, 
    vendaDetalheModule, 
    vendaModule,
    PessoaModule

  ],
})
export class AppModule { }
