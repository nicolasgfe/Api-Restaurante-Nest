import { Injectable, HttpException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { CategoriaProduto } from 'src/categoriaProdutos/categoriasProdutos.entity';
import { Repository } from 'typeorm';
import { Produto } from './Produtos.entity';

interface CreateProdutoDTO{
  nome: string;
  codCategoria: CategoriaProduto
  valor: number
}

@Injectable()
export class ProdutoService {
  constructor(
  @InjectRepository(Produto)
  private produtoRepository: Repository<Produto>,
  ) { }

  async create ({nome, codCategoria, valor}: CreateProdutoDTO): Promise<Produto>{
    try {
      const produto = await this.produtoRepository.create({
        nome, codCategoria, valor
      })
      await this.produtoRepository.save(produto)
      return produto;
    } catch (error) {
      throw new HttpException('Not created', 500)
    }
  }


  async findAll(): Promise<Produto[]> {
    try {
      const produtos = await this.produtoRepository.find();
      return produtos;
    } catch (error) {
      throw new HttpException('Not found', 404);
    }
  }

  async findById(id: number): Promise<Produto>{
    try {
      const produto = await this.produtoRepository.findOneBy({id})
      
      return produto;
    } catch (error) { 
      console.log(error);
      throw new HttpException('Not found', 404)
      
    }
  }

  async update(id: number ,{nome, codCategoria, valor}: CreateProdutoDTO): Promise<void>{
    await this.produtoRepository.update({id},{nome, codCategoria, valor})
  }


  async remove(id: number): Promise<void> {
    try{
      await this.produtoRepository.delete({
        id
      });
    } catch (error) {
      throw new HttpException('Not found', 404);
    }
  }


}