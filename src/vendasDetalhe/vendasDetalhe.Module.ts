import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm'
import { VendaDetalheController } from "./vendasDetalhe.controller";
import { VendaDetalhe } from "./vendasDetalhe.entity";
import { VendaDetalheService } from "./vendasDetalhe.service";

@Module({
  imports: [TypeOrmModule.forFeature([VendaDetalhe])],
  controllers: [VendaDetalheController],
  providers: [VendaDetalheService]
})
export class vendaDetalheModule { }