import {Entity, OneToOne, Column, JoinColumn, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class FormaPagamento{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;
}