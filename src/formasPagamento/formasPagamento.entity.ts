import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class FormaPagamento{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;
}