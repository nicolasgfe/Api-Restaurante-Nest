
import { Entity, OneToMany, JoinColumn, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Pessoa {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cpf: string;
}