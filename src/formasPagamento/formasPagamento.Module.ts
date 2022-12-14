import { Module } from "@nestjs/common";
import {TypeOrmModule} from '@nestjs/typeorm'
import { FormaPagamentoController } from "./formasPagamento.controller";
import { FormaPagamento } from "./formasPagamento.entity";
import { FormaPagamentoService } from "./formasPagamento.service";

@Module({
  imports: [TypeOrmModule.forFeature([FormaPagamento])],
  controllers: [FormaPagamentoController],
  providers: [FormaPagamentoService] 
})
export class FormaPagamentoModule{}