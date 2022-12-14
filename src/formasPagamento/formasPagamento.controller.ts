import { Controller, Get, Post, Patch, Delete, Req, Res, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { FormaPagamentoService } from './formasPagamento.service';


@Controller('formaPagamento')
class FormaPagamentoController {
  constructor(private readonly formaPagamentoService: FormaPagamentoService) { }

  @Post()
  async create(@Req() request: Request, @Res() response: Response) {
    const { descricao } = request.body;
    const produto = await this.formaPagamentoService.create({ descricao });

    return response.status(201).json(produto).send();
  }

  @Get('/')
  async findAll(@Res() response: Response) {
    const produtos = await this.formaPagamentoService.findAll();
    if (produtos.length <= 0) {
      throw new HttpException('Not found', 404);
    }
    return response.json(produtos).send();
  }

  @Get('/:id')
  async findById(@Req() request: Request, @Res() response: Response) {
    const { id } = request.params;
    const produto = await this.formaPagamentoService.findById(Number(id))

    if (!produto) {
      throw new HttpException('Not found', 404);
    }
    return response.json(produto).send();
  }

  @Patch('/: id')
  async update(@Req() request: Request, @Res() response: Response) {
    const id = request.params
    const { descricao } = request.body
    const updateProduto = await this.formaPagamentoService.update(Number(id), { descricao })

    return response.json(updateProduto).send()
  }

  @Delete('/:id')
  async remove(@Req() request: Request, @Res() response: Response) {
    const { id } = request.params;

    const produto = await this.formaPagamentoService.remove(Number(id));

    return response.json(produto).send();
  }


}
export { FormaPagamentoController }