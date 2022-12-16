import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTableProduto implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'vendaDetalhe',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true, 
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'cod_produto',
                        type: 'integer'
                    },
                    {
                        name: 'quantidade',
                        type: 'integer'
                    }, 
                    {
                        name: 'cod_venda',
                        type: 'integer'
                    }
                ]
            })

        ),
        await queryRunner.createForeignKeys('vendaDetalhe', [
            new TableForeignKey({
                name: 'fk_vendaDetalhe_produto',
                columnNames: ['cod_produto'],
                referencedColumnNames: ['id'],
                referencedTableName: 'produto'
            },
            ),
            new TableForeignKey({
                name: 'fk_vendaDetalhe_venda',
                columnNames: ['cod_venda'],
                referencedColumnNames: ['id'],
                referencedTableName: 'venda'
            })
        ]);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKeys('vendaDetalhe', [
            new TableForeignKey({
                name: 'fk_vendaDetalhe_produto',
                columnNames: ['cod_produto'],
                referencedColumnNames: ['id'],
                referencedTableName: 'produto'
            },
            ),
            new TableForeignKey({
                name: 'fk_vendaDetalhe_venda',
                columnNames: ['cod_venda'],
                referencedColumnNames: ['id'],
                referencedTableName: 'venda'
            })
        ]);
        await queryRunner.dropTable('vendaDetalhe')
    }
}