import { CategoriaProduto } from 'src/categoriaProdutos/categoriasProdutos.entity';
import { Entity, OneToOne, OneToMany, Column, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Produto {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => CategoriaProduto, categoriaProduto => categoriaProduto.categoria)
  @JoinColumn()
  codCategoria: CategoriaProduto;

  @ManyToOne(() => Produtos, produtos => produtos.venda)
  venda: produtos[]

  @Column()
  valor: number;
}