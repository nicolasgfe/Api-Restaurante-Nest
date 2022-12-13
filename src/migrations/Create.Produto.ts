import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProduto implements MigrationInterface{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'produto',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'nome',
                        type: 'varchar'
                    },
                    {
                        name: 'cod_categoria',
                        type: 'int',
                        foreignKeyConstraintName: 'CategoriaProduto'
                    },
                    {
                        name: 'valor',
                        type: 'float'
                    }
                ]
            })

        )        

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('produto')
    }
}