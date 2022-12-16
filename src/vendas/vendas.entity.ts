import { FormaPagamento } from 'src/formasPagamento/formasPagamento.entity';
import { Pessoa } from 'src/pessoas/pessoas.entity';
import { Entity, OneToMany, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Venda {

  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Pessoa, Pessoa => Pessoa.id)
  @JoinColumn()
  cod_pessoa: Pessoa;

  @OneToMany(() => FormaPagamento, FormaPagamento => FormaPagamento.id)
  @JoinColumn()
  cod_formaPagamento: FormaPagamento;
}