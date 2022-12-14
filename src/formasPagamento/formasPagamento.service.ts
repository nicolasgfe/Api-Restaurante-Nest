import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { FormaPagamento } from './formasPagamento.entity';

interface CreateFormaPagamentoDTO {
  descricao: string;
}

@Injectable()
export class FormaPagamentoService {
  constructor(
    @InjectRepository(FormaPagamento)
    private formaPagamentoRepository: Repository<FormaPagamento>,
  ) { }

  async create({ descricao }: CreateFormaPagamentoDTO): Promise<FormaPagamento> {
    try {
      const formapagamento = await this.formaPagamentoRepository.create({
        descricao
      })
      await this.formaPagamentoRepository.save(formapagamento)
      return formapagamento;
    } catch (error) {
      throw new HttpException('Not created', 500)
    }
  }


  async findAll(): Promise<FormaPagamento[]> {
    try {
      const formasPagamento = await this.formaPagamentoRepository.find();
      return formasPagamento;
    } catch (error) {
      throw new HttpException('Not found', 404);
    }
  }

  async findById(id: number): Promise<FormaPagamento> {
    try {
      const formapagamento = await this.formaPagamentoRepository.findOneBy({ id })

      return formapagamento;
    } catch (error) {
      console.log(error);
      throw new HttpException('Not found', 404)

    }
  }

  async update(id: number, { descricao }: CreateFormaPagamentoDTO): Promise<void> {
    await this.formaPagamentoRepository.update({ id }, { descricao })
  }


  async remove(id: number): Promise<void> {
    try {
      await this.formaPagamentoRepository.delete({
        id
      });
    } catch (error) {
      throw new HttpException('Not found', 404);
    }
  }


}