import fs from 'fs';
import table from '../table';

export default function buildMigration() {
  const { name, columns, relations } = table;

  let fileString = `\
public async up(queryRunner: QueryRunner): Promise<void> {
  const checkIfTableExist = await queryRunner.hasTable('${name}');
  if (!checkIfTableExist) {
    await queryRunner.createTable(
      new Table({
        name: '${name}',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
`;

  columns.forEach(column => {
    fileString += `\
          {
            name: '${column.name}',
            type: '${column.type}',
            isNullable: ${column.null},
          },  
`;
  });

  fileString += `\
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );
`;

  relations
    ?.filter(relation => relation.type === 'ManyToOne')
    ?.forEach(relation => {
      fileString += `\
    await queryRunner.createForeignKey(
      '${name}',
      new TableForeignKey({
        name: 'fk_${name}_${relation.name}',
        columnNames: ['${relation.column}'],
        referencedColumnNames: ['${relation.relatedColumn}'],
        referencedTableName: '${relation.name}',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
`;
    });

  fileString += `\
  }
}

  public async down(queryRunner: QueryRunner): Promise<void> {
    const checkIfTableExist = await queryRunner.hasTable('${name}');
    if (checkIfTableExist) {
`;
  relations
    ?.filter(relation => relation.type === 'ManyToOne')
    ?.forEach(relation => {
      fileString += `\
      await queryRunner.dropForeignKey('${name}', 'fk_${name}_${relation.name}');
`;
    });
  fileString += `\
      await queryRunner.dropTable('${name}');
    }
  }
`;

  fs.writeFileSync(`generated_files/migrations/migration.ts`, fileString);
}
