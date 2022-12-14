import { Injectable, HttpException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Produto } from 'src/produtos/Produtos.entity';
import { Repository } from 'typeorm';
import { VendaDetalhe } from './vendasDetalhe.entity';

interface CreateVendaDetalheDTO{
  cod_produto: Produto;
  quantidade: number;
}

@Injectable()
export class VendaDetalheService {
  constructor(
  @InjectRepository(VendaDetalhe)
  private vendaDetalheRepository: Repository<VendaDetalhe>,
  ) { }

  async create ({cod_produto, quantidade}: CreateVendaDetalheDTO): Promise<VendaDetalhe>{
    try {
      const vendaDetalhe = await this.vendaDetalheRepository.create({
        cod_produto, quantidade
      })
      await this.vendaDetalheRepository.save(vendaDetalhe)
      return vendaDetalhe;
    } catch (error) {
      throw new HttpException('Not created', 500)
    }
  }


  async findAll(): Promise<VendaDetalhe[]> {
    try {
      const vendasDetalhe = await this.vendaDetalheRepository.find();
      return vendasDetalhe;
    } catch (error) {
      throw new HttpException('Not found', 404);
    }
  }

  async findById(id: number): Promise<VendaDetalhe>{
    try {
      const vendaDetalhe = await this.vendaDetalheRepository.findOneBy({id})
      
      return vendaDetalhe;
    } catch (error) { 
      console.log(error);
      throw new HttpException('Not found', 404)
      
    }
  }

  async update(id: number ,{cod_produto, quantidade}: CreateVendaDetalheDTO): Promise<void>{
    await this.vendaDetalheRepository.update({id},{cod_produto, quantidade})
  }


  async remove(id: number): Promise<void> {
    try{
      await this.vendaDetalheRepository.delete({
        id
      });
    } catch (error) {
      throw new HttpException('Not found', 404);
    }
  }


}