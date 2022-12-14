import { Controller, Get, Post, Patch, Delete, Req, Res, HttpException } from '@nestjs/common';
import { Request, response, Response } from 'express';
import { VendaDetalheService } from './vendasDetalhe.service';


@Controller('vendaDetalhe')
class VendaDetalheController {
  constructor(private readonly vendaDetalheService: VendaDetalheService) { }

  @Post()
  async create(@Req() request: Request, @Res() response: Response){
    const {cod_produto, quantidade}= request.body;
    const vendaDetalhe = await this.vendaDetalheService.create({cod_produto, quantidade});

    return response.status(201).json(vendaDetalhe).send();
  }

  @Get('/')
  async findAll(@Res() response: Response) {
    const vendasDetalhe = await this.vendaDetalheService.findAll();
    if (vendasDetalhe.length <= 0) {
      throw new HttpException('Not found', 404);
    }
    return response.json(vendasDetalhe).send();
  }

  @Get('/:id')
  async findById(@Req() request: Request, @Res() response: Response) {
    const { id } = request.params;
    const vendaDetalhe = await this.vendaDetalheService.findById(Number(id))

    if(!vendaDetalhe) {
      throw new HttpException('Not found', 404);
    }
    return response.json(vendaDetalhe).send();
  }

  @Patch('/: id')
  async update(@Req() request: Request, @Res() response: Response){
      const id =  request.params
      const {cod_produto, quantidade} = request.body
      const updatevendaDetalhe = await this.vendaDetalheService.update(Number(id),{cod_produto, quantidade})

      return response.json(updatevendaDetalhe).send()
  }

  @Delete('/:id')
  async remove(@Req() request: Request, @Res() response: Response){
    const { id } = request.params;

    const vendaDetalhe = await this.vendaDetalheService.remove(Number(id));

    return response.json(vendaDetalhe).send();
  }


}
export { VendaDetalheController }