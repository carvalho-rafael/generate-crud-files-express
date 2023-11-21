public async up(queryRunner: QueryRunner): Promise<void> {
  const checkIfTableExist = await queryRunner.hasTable('orders_notes_services');
  if (!checkIfTableExist) {
    await queryRunner.createTable(
      new Table({
        name: 'orders_notes_services',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'type',
            type: 'ENUM("sale","location","sale_location")',
            isNullable: false,
          },  
          {
            name: 'note',
            type: 'varchar(200)',
            isNullable: false,
          },  
          {
            name: 'active',
            type: 'boolean',
            isNullable: false,
          },  
          {
            name: 'user_id',
            type: 'varchar(45)',
            isNullable: false,
          },  
          {
            name: 'user_name',
            type: 'varchar(45)',
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
      'orders_notes_services',
      new TableForeignKey({
        name: 'fk_orders_notes_services_users',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }
}

  public async down(queryRunner: QueryRunner): Promise<void> {
    const checkIfTableExist = await queryRunner.hasTable('orders_notes_services');
    if (checkIfTableExist) {
      await queryRunner.dropForeignKey('orders_notes_services', 'fk_orders_notes_services_users');
      await queryRunner.dropTable('orders_notes_services');
    }
  }
