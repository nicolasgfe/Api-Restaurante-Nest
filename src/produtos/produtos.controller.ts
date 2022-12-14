import { Controller, Get, Post, Patch, Delete, Req, Res, HttpException } from '@nestjs/common';
import { Request, response, Response } from 'express';
import { ProdutoService } from './produtos.service';


@Controller('produto')
class ProdutosController {
  constructor(private readonly produtoService: ProdutoService) { }

  @Post()
  async create(@Req() request: Request, @Res() response: Response) {
    const { nome, codCategoria, valor } = request.body;
    const produto = await this.produtoService.create({ nome, codCategoria, valor });

    return response.status(201).json(produto).send();
  }

  @Get('/')
  async findAll(@Res() response: Response) {
    const produtos = await this.produtoService.findAll();
    if (produtos.length <= 0) {
      throw new HttpException('Not found', 404);
    }
    return response.json(produtos).send();
  }

  @Get('/:id')
  async findById(@Req() request: Request, @Res() response: Response) {
    const { id } = request.params;
    const produto = await this.produtoService.findById(Number(id))

    if (!produto) {
      throw new HttpException('Not found', 404);
    }
    return response.json(produto).send();
  }

  @Patch('/: id')
  async update(@Req() request: Request, @Res() response: Response) {
    const id = request.params
    const { nome, codCategoria, valor } = request.body
    const updateProduto = await this.produtoService.update(Number(id), { nome, codCategoria, valor })

    return response.json(updateProduto).send()
  }

  @Delete('/:id')
  async remove(@Req() request: Request, @Res() response: Response) {
    const { id } = request.params;

    const produto = await this.produtoService.remove(Number(id));

    return response.json(produto).send();
  }


}
export { ProdutosController }