import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { Pessoa } from './pessoas.entity';

interface CreatePessoaDTO {
  nome: string,
  cpf: string;
}

@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(Pessoa)
    private pessoaRepository: Repository<Pessoa>,
  ) { }

  async create({ nome, cpf }: CreatePessoaDTO): Promise<Pessoa> {
    try {
      const pessoa = await this.pessoaRepository.create({
        nome, cpf
      })
      await this.pessoaRepository.save(pessoa)
      return pessoa;
    } catch (error) {
      throw new HttpException('Not created', 500)
    }
  }


  async findAll(): Promise<Pessoa[]> {
    try {
      const pessoas = await this.pessoaRepository.find();
      return pessoas;
    } catch (error) {
      throw new HttpException('Not found', 404);
    }
  }

  async findById(id: number): Promise<Pessoa> {
    try {
      const pessoa = await this.pessoaRepository.findOneBy({ id })

      return pessoa;
    } catch (error) {
      console.log(error);
      throw new HttpException('Not found', 404)

    }
  }

  async update(id: number, { nome, cpf }: CreatePessoaDTO): Promise<void> {
    await this.pessoaRepository.update({ id }, { nome, cpf })
  }


  async remove(id: number): Promise<void> {
    try {
      await this.pessoaRepository.delete({
        id
      });
    } catch (error) {
      throw new HttpException('Not found', 404);
    }
  }


}