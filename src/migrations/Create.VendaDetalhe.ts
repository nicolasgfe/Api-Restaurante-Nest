import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProduto implements MigrationInterface{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'vendaDetalhe',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'cod_produto',
                        type: 'int',
                        foreignKeyConstraintName: 'produto'
                    },
                    {
                        name: 'quantidade',
                        type: 'int'
                    }
                ]
            })

        )        

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('vendaDetalhe')
    }
}