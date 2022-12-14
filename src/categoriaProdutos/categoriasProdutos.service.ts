import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { CategoriaProduto } from './categoriasProdutos.entity';

interface CreateCategoriaProdutoDTO {
  descricao: string;
}

@Injectable()
export class CategoriaProdutoservice {
  constructor(
    @InjectRepository(CategoriaProduto)
    private categoriaProdutoRepository: Repository<CategoriaProduto>,
  ) { }

  async create({ descricao }: CreateCategoriaProdutoDTO): Promise<CategoriaProduto> {
    try {
      const categoriaProduto = await this.categoriaProdutoRepository.create({
        descricao
      })
      await this.categoriaProdutoRepository.save(categoriaProduto)
      return categoriaProduto;
    } catch (error) {
      throw new HttpException('Not created', 500)
    }
  }


  async findAll(): Promise<CategoriaProduto[]> {
    try {
      const categoriasProduto = await this.categoriaProdutoRepository.find();
      return categoriasProduto;
    } catch (error) {
      throw new HttpException('Not found', 404);
    }
  }

  async findById(id: number): Promise<CategoriaProduto> {
    try {
      const categoriaProduto = await this.categoriaProdutoRepository.findOneBy({ id })

      return categoriaProduto;
    } catch (error) {
      console.log(error);
      throw new HttpException('Not found', 404)

    }
  }
  async remove(id: number): Promise<void> {
    try {
      await this.categoriaProdutoRepository.delete({
        id
      });
    } catch (error) {
      throw new HttpException('Not found', 404);
    }
  }


}