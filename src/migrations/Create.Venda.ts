import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateVenda implements MigrationInterface{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'venda',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'cod_vendaDetalhe',
                        type: 'int',
                        foreignKeyConstraintName: 'vendaDetalhe'
                    },
                    {
                        name: 'cod_formaPagamento',
                        type: 'int',
                        foreignKeyConstraintName: 'formapagamento'
                    }
                ]
            })

        )        

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('venda')
    }
}