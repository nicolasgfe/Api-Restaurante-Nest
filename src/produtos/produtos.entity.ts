import { CategoriaProduto } from 'src/categoriaProdutos/categoriasProdutos.entity';
import {Entity, OneToOne, Column, JoinColumn, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Produto{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
  
  @OneToOne(() => CategoriaProduto, CategoriaProduto => CategoriaProduto.id)
  @JoinColumn()
  codCategoria: CategoriaProduto;


  @Column()
  valor: number;
}