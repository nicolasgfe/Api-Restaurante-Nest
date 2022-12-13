import { Module } from "@nestjs/common";
import {TypeOrmModule} from '@nestjs/typeorm'
import { CategoriaProduto } from "./categoriasProdutos.entity";
import { CategoriaProdutosController } from "./categoriaProdutos.Controller";
import { CategoriaProdutoservice } from "./categoriasProdutos.service";

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaProduto])],
  controllers: [CategoriaProdutosController],
  providers: [CategoriaProdutoservice] 
})
export class CategoriaProdutoModule{}