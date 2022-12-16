import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTableVenda implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'venda',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'cod_pessoa',
                        type: 'integer'
                    },
                    {
                        name: 'cod_formaPagamento',
                        type: 'integer'
                    }
                ]
            })

        );
        await queryRunner.createForeignKeys('venda', [
            new TableForeignKey({
                name: 'fk_venda_pessoa',
                columnNames: ['cod_pessoa'],
                referencedColumnNames: ['id'],
                referencedTableName: 'pessoa',
            }),
            new TableForeignKey({
                name: 'fk_venda_pessoa',
                columnNames: ['cod_formaPagamento'],
                referencedColumnNames: ['id'],
                referencedTableName: 'formaPagamento',
            })
        ]
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKeys('venda', [
            new TableForeignKey({
                name: 'fk_venda_pessoa',
                columnNames: ['cod_pessoa'],
                referencedColumnNames: ['id'],
                referencedTableName: 'pessoa',
            }),
            new TableForeignKey({
                name: 'fk_venda_pessoa',
                columnNames: ['cod_formaPagamento'],
                referencedColumnNames: ['id'],
                referencedTableName: 'formaPagamento',
            }),
            ]);
        await queryRunner.dropTable('venda')
    }
}