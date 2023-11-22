public async up(queryRunner: QueryRunner): Promise<void> {
  const checkIfTableExist = await queryRunner.hasTable('orders');
  if (!checkIfTableExist) {
    await queryRunner.createTable(
      new Table({
        name: 'orders',
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
            type: 'char(1)',
            isNullable: false,
          },  
          {
            name: 'purchase_id',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'client_id',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'agent_id',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'old_agent_id',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'transfer_order_date',
            type: 'date',
            isNullable: true,
          },  
          {
            name: 'transferencia_usuario_id',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'consultant_id',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'invoice_id',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'final_consumer',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'provider_companies',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'purchase_number',
            type: 'varchar(45)',
            isNullable: true,
          },  
          {
            name: 'client_name',
            type: 'varchar(100)',
            isNullable: true,
          },  
          {
            name: 'date',
            type: 'date',
            isNullable: true,
          },  
          {
            name: 'delivery_deadline',
            type: 'varchar(20)',
            isNullable: true,
          },  
          {
            name: 'production_limit_date',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'period',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'contact_name',
            type: 'varchar(200)',
            isNullable: true,
          },  
          {
            name: 'contact_phone_number',
            type: 'varchar(14)',
            isNullable: true,
          },  
          {
            name: 'contact_cellphone_number',
            type: 'varchar(14)',
            isNullable: true,
          },  
          {
            name: 'contact_email',
            type: 'varchar(100)',
            isNullable: true,
          },  
          {
            name: 'contact_position',
            type: 'varchar(60)',
            isNullable: true,
          },  
          {
            name: 'pay_with',
            type: 'varchar(20)',
            isNullable: true,
          },  
          {
            name: 'payment_method',
            type: 'char(1)',
            isNullable: true,
          },  
          {
            name: 'payment_method_type',
            type: 'char(1)',
            isNullable: true,
          },  
          {
            name: 'payment_method_text',
            type: 'text',
            isNullable: true,
          },  
          {
            name: 'days',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'installments',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'history',
            type: 'text',
            isNullable: true,
          },  
          {
            name: 'validity',
            type: 'varchar(50)',
            isNullable: true,
          },  
          {
            name: 'notes',
            type: 'text',
            isNullable: true,
          },  
          {
            name: 'budget_notes',
            type: 'text',
            isNullable: true,
          },  
          {
            name: 'invoice_notes',
            type: 'text',
            isNullable: true,
          },  
          {
            name: 'os_notes',
            type: 'text',
            isNullable: true,
          },  
          {
            name: 'status',
            type: 'char(1)',
            isNullable: false,
          },  
          {
            name: 'status_date',
            type: 'date',
            isNullable: true,
          },  
          {
            name: 'situation',
            type: 'varchar(15)',
            isNullable: false,
          },  
          {
            name: 'email_situation',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'email_situation_agent',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'quality_situation',
            type: 'varchar(15)',
            isNullable: false,
          },  
          {
            name: 'quality_situation',
            type: 'varchar(15)',
            isNullable: true,
          },  
          {
            name: 'quality_date',
            type: 'date',
            isNullable: true,
          },  
          {
            name: 'email_date',
            type: 'datetime',
            isNullable: true,
          },  
          {
            name: 'email_date_agent',
            type: 'datetime',
            isNullable: true,
          },  
          {
            name: 'disaproval_reason',
            type: 'text',
            isNullable: true,
          },  
          {
            name: 'negative',
            type: 'int',
            isNullable: false,
          },  
          {
            name: 'negative',
            type: 'int',
            isNullable: false,
          },  
          {
            name: 'items_type',
            type: 'char(1)',
            isNullable: false,
          },  
          {
            name: 'items_text',
            type: 'text',
            isNullable: true,
          },  
          {
            name: 'products_value',
            type: 'varchar(20)',
            isNullable: true,
          },  
          {
            name: 'ipi_value',
            type: 'varchar(20)',
            isNullable: true,
          },  
          {
            name: 'industry_value',
            type: 'varchar(20)',
            isNullable: true,
          },  
          {
            name: 'market_value',
            type: 'varchar(20)',
            isNullable: true,
          },  
          {
            name: 'total_value',
            type: 'varchar(20)',
            isNullable: false,
          },  
          {
            name: 'total_value_with_shipping_embedded',
            type: 'decimal(10,2)',
            isNullable: true,
          },  
          {
            name: 'freight_percentage',
            type: 'decimal(10,2)',
            isNullable: true,
          },  
          {
            name: 'freight_value',
            type: 'varchar(20)',
            isNullable: true,
          },  
          {
            name: 'paid_freight_value',
            type: 'varchar(20)',
            isNullable: true,
          },  
          {
            name: 'operational_profit_value',
            type: 'varchar(20)',
            isNullable: true,
          },  
          {
            name: 'manual_freight',
            type: 'boolean',
            isNullable: true,
          },  
          {
            name: 'discount_value',
            type: 'varchar(20)',
            isNullable: true,
          },  
          {
            name: 'discount_percentage',
            type: 'varchar(11)',
            isNullable: true,
          },  
          {
            name: 'interests',
            type: 'float',
            isNullable: true,
          },  
          {
            name: 'event',
            type: 'varchar(200)',
            isNullable: true,
          },  
          {
            name: 'do_mounting',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'company_delivery',
            type: 'int',
            isNullable: false,
          },  
          {
            name: 'delivery_destination',
            type: 'varchar(250)',
            isNullable: true,
          },  
          {
            name: 'delivery_destination_street',
            type: 'varchar(100)',
            isNullable: true,
          },  
          {
            name: 'delivery_destination_number',
            type: 'varchar(20)',
            isNullable: true,
          },  
          {
            name: 'delivery_destination_complement',
            type: 'varchar(45)',
            isNullable: true,
          },  
          {
            name: 'delivery_destination_district',
            type: 'varchar(45)',
            isNullable: true,
          },  
          {
            name: 'delivery_destination_city',
            type: 'varchar(45)',
            isNullable: true,
          },  
          {
            name: 'delivery_destination_state',
            type: 'char(2)',
            isNullable: true,
          },  
          {
            name: 'delivery_destination_zip_code',
            type: 'varchar(10)',
            isNullable: true,
          },  
          {
            name: 'delivery_destination_reference',
            type: 'varchar(45)',
            isNullable: true,
          },  
          {
            name: 'pick_up_location',
            type: 'varchar(300)',
            isNullable: true,
          },  
          {
            name: 'pick_up_location_zip_code',
            type: 'varchar(10)',
            isNullable: true,
          },  
          {
            name: 'pick_up_location_reference',
            type: 'varchar(45)',
            isNullable: true,
          },  
          {
            name: 'pick_up_location_street',
            type: 'varchar(100)',
            isNullable: true,
          },  
          {
            name: 'pick_up_location_number',
            type: 'varchar(20)',
            isNullable: true,
          },  
          {
            name: 'pick_up_location_complement',
            type: 'varchar(45)',
            isNullable: true,
          },  
          {
            name: 'pick_up_location_district',
            type: 'varchar(45)',
            isNullable: true,
          },  
          {
            name: 'pick_up_location_city',
            type: 'varchar(45)',
            isNullable: true,
          },  
          {
            name: 'pick_up_location_state',
            type: 'char(2)',
            isNullable: true,
          },  
          {
            name: 'delivery_date',
            type: 'date',
            isNullable: true,
          },  
          {
            name: 'pick_up_date',
            type: 'date',
            isNullable: true,
          },  
          {
            name: 'delivery_time',
            type: 'varchar(50)',
            isNullable: true,
          },  
          {
            name: 'pick_up_time',
            type: 'varchar(50)',
            isNullable: true,
          },  
          {
            name: 'carrier_id',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'invoice_date',
            type: 'date',
            isNullable: true,
          },  
          {
            name: 'freights_services',
            type: 'text',
            isNullable: true,
          },  
          {
            name: 'show_orders_complete_data',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'show_history',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'show_notes',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'show_responsibles',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'user_id',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'user_name',
            type: 'varchar(100)',
            isNullable: true,
          },  
          {
            name: 'hash',
            type: 'varchar(50)',
            isNullable: false,
          },  
          {
            name: 'ref',
            type: 'varchar(50)',
            isNullable: true,
          },  
          {
            name: 'stock',
            type: 'int',
            isNullable: false,
          },  
          {
            name: 'released',
            type: 'int',
            isNullable: false,
          },  
          {
            name: 'os_delivey_printed',
            type: 'int',
            isNullable: false,
          },  
          {
            name: 'os_delivery_by_printed',
            type: 'varchar(100)',
            isNullable: true,
          },  
          {
            name: 'os_pick_up_printed',
            type: 'int',
            isNullable: false,
          },  
          {
            name: 'os_pick_up_by_printed',
            type: 'varchar(100)',
            isNullable: true,
          },  
          {
            name: 'invoice_printed',
            type: 'int',
            isNullable: false,
          },  
          {
            name: 'invoice_number_sequence',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'bill_printed',
            type: 'int',
            isNullable: false,
          },  
          {
            name: 'invoice_number',
            type: 'varchar(30)',
            isNullable: true,
          },  
          {
            name: 'show_total_value',
            type: 'int',
            isNullable: false,
          },  
          {
            name: 'show_unit_value',
            type: 'int',
            isNullable: false,
          },  
          {
            name: 'show_budget_unit_value',
            type: 'int',
            isNullable: false,
          },  
          {
            name: 'show_daily_value',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'show_included_freight',
            type: 'boolean',
            isNullable: true,
          },  
          {
            name: 'show_tape',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'pending_stock',
            type: 'int',
            isNullable: false,
          },  
          {
            name: 'volume',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'weight',
            type: 'varchar(10)',
            isNullable: true,
          },  
          {
            name: 'dispatch_date',
            type: 'date',
            isNullable: true,
          },  
          {
            name: 'dispatch',
            type: 'boolean',
            isNullable: true,
          },  
          {
            name: 'dispatch_user',
            type: 'varchar(45)',
            isNullable: true,
          },  
          {
            name: 'delivered',
            type: 'boolean',
            isNullable: true,
          },  
          {
            name: 'delivered_datee',
            type: 'date',
            isNullable: true,
          },  
          {
            name: 'delivered_date_user',
            type: 'varchar(45)',
            isNullable: true,
          },  
          {
            name: 'picked_up',
            type: 'boolean',
            isNullable: true,
          },  
          {
            name: 'picked_up_date',
            type: 'date',
            isNullable: true,
          },  
          {
            name: 'picked_up_user',
            type: 'varchar(45)',
            isNullable: true,
          },  
          {
            name: 'important',
            type: 'char(1)',
            isNullable: false,
          },  
          {
            name: 'defaulting',
            type: 'boolean',
            isNullable: true,
          },  
          {
            name: 'defaulting',
            type: 'boolean',
            isNullable: true,
          },  
          {
            name: 'financial_reversed',
            type: 'boolean',
            isNullable: true,
          },  
          {
            name: 'monitoring_situation',
            type: 'varchar(20)',
            isNullable: true,
          },  
          {
            name: 'dir',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'location_contract_signed',
            type: 'varchar(255)',
            isNullable: true,
          },  
          {
            name: 'order_origin',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'location_renewed',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'location_extended',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'order_previous',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'order_signed',
            type: 'varchar(255)',
            isNullable: true,
          },  
          {
            name: 'checklist',
            type: 'varchar(255)',
            isNullable: true,
          },  
          {
            name: 'expedicao_status_id',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'expedicao_status_expiracao',
            type: 'date',
            isNullable: true,
          },  
          {
            name: 'expedicao_status_data',
            type: 'datetime',
            isNullable: true,
          },  
          {
            name: 'expedicao_status_anterior_id',
            type: 'int',
            isNullable: true,
          },  
          {
            name: 'nfe_printed',
            type: 'boolean',
            isNullable: true,
          },  
          {
            name: 'height',
            type: 'varchar(10)',
            isNullable: true,
          },  
          {
            name: 'length',
            type: 'varchar(10)',
            isNullable: true,
          },  
          {
            name: 'width',
            type: 'varchar(10)',
            isNullable: true,
          },  
          {
            name: 'volumes_json',
            type: 'json',
            isNullable: true,
          },  
          {
            name: 'date_goal_accomplished',
            type: 'date',
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
      'orders',
      new TableForeignKey({
        name: 'fk_orders_clients',
        columnNames: ['client_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'clients',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'orders',
      new TableForeignKey({
        name: 'fk_orders_orders_expedition_status',
        columnNames: ['expedicao_status_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'orders_expedition_status',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'orders',
      new TableForeignKey({
        name: 'fk_orders_orders_expedition_status',
        columnNames: ['expedicao_status_anterior_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'orders_expedition_status',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'orders',
      new TableForeignKey({
        name: 'fk_orders_representantes',
        columnNames: ['agent_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'representantes',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'orders',
      new TableForeignKey({
        name: 'fk_orders_transportadoras',
        columnNames: ['carrier_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'transportadoras',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }
}

  public async down(queryRunner: QueryRunner): Promise<void> {
    const checkIfTableExist = await queryRunner.hasTable('orders');
    if (checkIfTableExist) {
      await queryRunner.dropForeignKey('orders', 'fk_orders_clients');
      await queryRunner.dropForeignKey('orders', 'fk_orders_orders_expedition_status');
      await queryRunner.dropForeignKey('orders', 'fk_orders_orders_expedition_status');
      await queryRunner.dropForeignKey('orders', 'fk_orders_representantes');
      await queryRunner.dropForeignKey('orders', 'fk_orders_transportadoras');
      await queryRunner.dropTable('orders');
    }
  }
