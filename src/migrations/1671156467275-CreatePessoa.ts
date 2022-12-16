import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePessoa1671156467275 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pessoa',
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
                        name: 'cpf',
                        type: 'varchar'
                    }
                ]
            })

        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pessoa')
    }
}