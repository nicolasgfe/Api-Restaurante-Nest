import { FormaPagamento } from 'src/formasPagamento/formasPagamento.entity';
import { VendaDetalhe } from 'src/vendasDetalhe/vendasDetalhe.entity';
import {Entity, OneToMany, JoinColumn, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Venda{
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => VendaDetalhe, VendaDetalhe => VendaDetalhe.id)
  @JoinColumn()
  cod_vendaDetalhe: VendaDetalhe;

  @OneToMany(() => FormaPagamento, FormaPagamento => FormaPagamento.id)
  @JoinColumn()
  cod_formaPagamento: FormaPagamento;
}