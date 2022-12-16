import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFormaPagamento1671156448904 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'formaPagamento',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'descricao',
                        type: 'varchar'
                    }
                ]
            })

        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('formaPagamento')
    }
}