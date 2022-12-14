import { Produto } from 'src/produtos/Produtos.entity';
import { Entity, OneToMany, Column, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class VendaDetalhe {

  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Produto, Produto => Produto.id)
  @JoinColumn()
  cod_produto: Produto;

  @Column()
  quantidade: number;
}