import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Produto } from '../produtos/produtos.entity';

@Entity()
export class CategoriaProduto {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @OneToMany(() => Produto, (produto) => produto.categoria)
  categorias: Categoria[]
}