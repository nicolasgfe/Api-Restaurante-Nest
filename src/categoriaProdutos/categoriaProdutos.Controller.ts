import { Controller, Get, Post, Delete, Req, Res, HttpException } from '@nestjs/common';
import { Request, response, Response } from 'express';
import { CategoriaProdutoservice } from "./categoriasProdutos.service";


@Controller('categoriasproduto')
class CategoriaProdutosController {
  constructor(private readonly categoriaProdutoService: CategoriaProdutoservice) { }

  @Post()
  async create(@Req() request: Request, @Res() response: Response) {
    const { descricao } = request.body;
    const categoriaProduto = await this.categoriaProdutoService.create({ descricao });

    return response.status(201).json(categoriaProduto).send();
  }

  @Get('/')
  async findAll(@Res() response: Response) {
    const categoriasprodutos = await this.categoriaProdutoService.findAll();
    if (categoriasprodutos.length <= 0) {
      throw new HttpException('Not found', 404);
    }
    return response.json(categoriasprodutos).send();
  }

  @Get('/:id')
  async findById(@Req() request: Request, @Res() response: Response) {
    const { id } = request.params;
    const categoriaProduto = await this.categoriaProdutoService.findById(Number(id))

    if (!categoriaProduto) {
      throw new HttpException('Not found', 404);
    }
    return response.json(categoriaProduto).send();
  }

  @Delete('/:id')
  async remove(@Req() request: Request, @Res() response: Response) {
    const { id } = request.params;

    const categoriaProduto = await this.categoriaProdutoService.remove(Number(id));

    return response.json(categoriaProduto).send();
  }


}
export { CategoriaProdutosController }