import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createProduct1678412213054 implements MigrationInterface {
  private table = new Table({
    name: 'products',
    columns: [
      {
        name: 'id',
        type: 'bigint',
        isPrimary: true,
        isGenerated: true, // Auto-increment
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'varchar',
        length: '255',
        isUnique: false,
        isNullable: false,
      },
      {
        name: 'brand',
        type: 'varchar',
        length: '255',
        isUnique: false,
        isNullable: false,
      },
      {
        name: 'weight',
        type: 'integer',
        isUnique: true,
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'timestamp',
        isNullable: false,
        default: 'now()',
      },
      {
        name: 'updated_at',
        type: 'timestamp',
        isNullable: false,
        default: 'now()',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(this.table);
  }
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.table);
  }
}
