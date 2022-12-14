import { Module } from "@nestjs/common";
import {TypeOrmModule} from '@nestjs/typeorm'
import { FormaPagamentoController } from "./formaPagamento.controller";
import { FormaPagamento } from "./formaPagamento.entity";
import { FormaPagamentoService } from "./formaPagamento.service";

@Module({
  imports: [TypeOrmModule.forFeature([FormaPagamento])],
  controllers: [FormaPagamentoController],
  providers: [FormaPagamentoService] 
})
export class FormaPagamentoModule{}