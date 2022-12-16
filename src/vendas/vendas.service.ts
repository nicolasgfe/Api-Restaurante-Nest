import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { FormaPagamento } from 'src/formasPagamento/formasPagamento.entity';
import { Pessoa } from 'src/pessoas/pessoas.entity';
import { Repository } from 'typeorm';
import { Venda } from './vendas.entity';

interface CreateVendaDTO {
  cod_pessoa: Pessoa;
  cod_formaPagamento: FormaPagamento;
}

@Injectable()
export class VendaService {
  constructor(
    @InjectRepository(Venda)
    private vendaRepository: Repository<Venda>,
  ) { }

  async create({ cod_pessoa, cod_formaPagamento }: CreateVendaDTO): Promise<Venda> {
    try {
      const venda = await this.vendaRepository.create({
        cod_pessoa, cod_formaPagamento
      })
      await this.vendaRepository.save(venda)
      return venda;
    } catch (error) {
      throw new HttpException('Not created', 500)
    }
  }


  async findAll(): Promise<Venda[]> {
    try {
      const vendas = await this.vendaRepository.find();
      return vendas;
    } catch (error) {
      throw new HttpException('Not found', 404);
    }
  }

  async findById(id: number): Promise<Venda> {
    try {
      const venda = await this.vendaRepository.findOneBy({ id })

      return venda;
    } catch (error) {
      console.log(error);
      throw new HttpException('Not found', 404)

    }
  }

  async update(id: number, { cod_pessoa, cod_formaPagamento }: CreateVendaDTO): Promise<void> {
    await this.vendaRepository.update({ id }, { cod_pessoa, cod_formaPagamento })
  }


  async remove(id: number): Promise<void> {
    try {
      await this.vendaRepository.delete({
        id
      });
    } catch (error) {
      throw new HttpException('Not found', 404);
    }
  }


}