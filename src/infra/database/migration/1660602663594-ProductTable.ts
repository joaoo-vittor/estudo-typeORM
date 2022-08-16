import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class ProductTable1660602663594 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'amount',
                        type: 'int',
                    },
                    {
                        name: 'user_id',
                        type: 'int',
                    }
                ],
                schema: 'public'
            }),
        );

        await queryRunner.createForeignKey(
            new Table({ name: 'products', schema: 'public' }),
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                referencedSchema: 'public',
                onDelete: 'CASCADE'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(new Table({ name: 'products', schema: 'public' }));
    }

}
