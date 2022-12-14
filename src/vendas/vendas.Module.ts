import { Module } from "@nestjs/common";
import {TypeOrmModule} from '@nestjs/typeorm'
import { VendaController } from "./vendas.controller";
import { Venda } from "./vendas.entity";
import { VendaService } from "./vendas.service";

@Module({
  imports: [TypeOrmModule.forFeature([Venda])],
  controllers: [VendaController],
  providers: [VendaService] 
})
export class vendaModule{}