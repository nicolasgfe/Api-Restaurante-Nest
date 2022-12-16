import { Controller, Get, Post, Patch, Delete, Req, Res, HttpException } from '@nestjs/common';
import { Request, response, Response } from 'express';
import { PessoaService } from './pessoas.service';


@Controller('pessoa')
class PessoaController {
  constructor(private readonly pessoaService: PessoaService) { }

  @Post()
  async create(@Req() request: Request, @Res() response: Response) {
    const { nome, cpf } = request.body;
    const pessoa = await this.pessoaService.create({ nome, cpf });

    return response.status(201).json(pessoa).send();
  }

  @Get('/')
  async findAll(@Res() response: Response) {
    const pessoas = await this.pessoaService.findAll();
    if (pessoas.length <= 0) {
      throw new HttpException('Not found', 404);
    }
    return response.json(pessoas).send();
  }

  @Get('/:id')
  async findById(@Req() request: Request, @Res() response: Response) {
    const { id } = request.params;
    const pessoa = await this.pessoaService.findById(Number(id))

    if (!pessoa) {
      throw new HttpException('Not found', 404);
    }
    return response.json(pessoa).send();
  }

  @Patch('/: id')
  async update(@Req() request: Request, @Res() response: Response) {
    const id = request.params
    const { nome, cpf } = request.body
    const updatepessoa = await this.pessoaService.update(Number(id), { nome, cpf })

    return response.json(updatepessoa).send()
  }

  @Delete('/:id')
  async remove(@Req() request: Request, @Res() response: Response) {
    const { id } = request.params;

    const pessoa = await this.pessoaService.remove(Number(id));

    return response.json(pessoa).send();
  }


}
export { PessoaController }