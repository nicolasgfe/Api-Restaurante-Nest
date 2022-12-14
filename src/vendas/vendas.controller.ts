import { Controller, Get, Post, Patch, Delete, Req, Res, HttpException } from '@nestjs/common';
import { Request, response, Response } from 'express';
import { VendaService } from './vendas.service';


@Controller('venda')
class VendaController {
  constructor(private readonly vendaService: VendaService) { }

  @Post()
  async create(@Req() request: Request, @Res() response: Response) {
    const { cod_vendaDetalhe, cod_formaPagamento } = request.body;
    const venda = await this.vendaService.create({ cod_vendaDetalhe, cod_formaPagamento });

    return response.status(201).json(venda).send();
  }

  @Get('/')
  async findAll(@Res() response: Response) {
    const vendas = await this.vendaService.findAll();
    if (vendas.length <= 0) {
      throw new HttpException('Not found', 404);
    }
    return response.json(vendas).send();
  }

  @Get('/:id')
  async findById(@Req() request: Request, @Res() response: Response) {
    const { id } = request.params;
    const venda = await this.vendaService.findById(Number(id))

    if (!venda) {
      throw new HttpException('Not found', 404);
    }
    return response.json(venda).send();
  }

  @Patch('/: id')
  async update(@Req() request: Request, @Res() response: Response) {
    const id = request.params
    const { cod_vendaDetalhe, cod_formaPagamento } = request.body
    const updatevenda = await this.vendaService.update(Number(id), { cod_vendaDetalhe, cod_formaPagamento })

    return response.json(updatevenda).send()
  }

  @Delete('/:id')
  async remove(@Req() request: Request, @Res() response: Response) {
    const { id } = request.params;

    const venda = await this.vendaService.remove(Number(id));

    return response.json(venda).send();
  }


}
export { VendaController }