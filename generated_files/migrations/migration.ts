public async up(queryRunner: QueryRunner): Promise<void> {
  const checkIfTableExist = await queryRunner.hasTable('persons_contacts');
  if (!checkIfTableExist) {
    await queryRunner.createTable(
      new Table({
        name: 'persons_contacts',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'int',
            isNullable: false,
          },  
          {
            name: 'type',
            type: 'enum('location', 'sale')',
            isNullable: true,
          },  
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
    await queryRunner.createForeignKey(
      'persons_contacts',
      new TableForeignKey({
        name: 'fk_persons_contacts_persons',
        columnNames: ['person_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'persons',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }
}

  public async down(queryRunner: QueryRunner): Promise<void> {
    const checkIfTableExist = await queryRunner.hasTable('persons_contacts');
    if (checkIfTableExist) {
      await queryRunner.dropForeignKey('persons_contacts', 'fk_persons_contacts_persons');
      await queryRunner.dropTable('persons_contacts');
    }
  }
