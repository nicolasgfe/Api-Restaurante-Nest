import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProdutosController } from "./produtos.controller";
import { Produto } from "./Produtos.entity";
import { ProdutoService } from "./produtos.service";
@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  controllers: [ProdutosController],
  providers: [ProdutoService]
})
export class ProdutoModule { }