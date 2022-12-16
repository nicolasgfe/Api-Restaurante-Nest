import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateProduto1671156394374 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'produto',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'nome',
                        type: 'varchar'
                    },
                    {
                        name: 'cod_categoriaProduto',
                        type: 'integer',
                    },
                    {
                        name: 'valor',
                        type: 'float'
                    }
                ]
            })

        );
        await queryRunner.createForeignKey('produto',
        new TableForeignKey({
            name: 'fk_produto_categoriaProduto',
            columnNames: ['cod_categoriaProduto'],
            referencedColumnNames: ['id'],
            referencedTableName: 'categoriaProduto'
        })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('produto',
        new TableForeignKey({
            name: 'fk_produto_categoriaProduto',
            columnNames: ['cod_categoriaProduto'],
            referencedColumnNames: ['id'],
            referencedTableName: 'categoriaProduto'
        })
        );
        await queryRunner.dropTable('produto')
    }
}
