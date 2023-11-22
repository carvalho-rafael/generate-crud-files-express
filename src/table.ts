import { Table } from 'types/table';

const table: Table = {
  module: 'commercial',
  name: 'orders',
  entity: 'Order',
  entityCamel: 'order',
  entityPlural: 'Orders',
  entityPluralCamel: 'orders',
  cache: 'order-get-${id}',
  cacheList: 'orders-list',
  columns: [
    {
      name: 'type',
      type: 'char(1)',
      null: false,
    },
    {
      name: 'purchase_id',
      type: 'int',
      null: true,
    },
    {
      name: 'client_id',
      type: 'int',
      null: true,
    },
    {
      name: 'agent_id',
      type: 'int',
      null: true,
    },
    {
      name: 'old_agent_id',
      type: 'int',
      null: true,
    },
    {
      name: 'transfer_order_date',
      type: 'date',
      null: true,
    },
    {
      name: 'transferencia_usuario_id',
      type: 'int',
      null: true,
    },
    {
      name: 'consultant_id',
      type: 'int',
      null: true,
    },
    {
      name: 'invoice_id',
      type: 'int',
      null: true,
    },
    {
      name: 'final_consumer',
      type: 'int',
      null: true,
    },
    {
      name: 'provider_companies',
      type: 'int',
      null: true,
    },
    {
      name: 'purchase_number',
      type: 'varchar(45)',
      null: true,
    },
    {
      name: 'client_name',
      type: 'varchar(100)',
      null: true,
    },
    {
      name: 'date',
      type: 'date',
      null: true,
    },
    {
      name: 'delivery_deadline',
      type: 'varchar(20)',
      null: true,
    },
    {
      name: 'production_limit_date',
      type: 'int',
      null: true,
    },
    {
      name: 'period',
      type: 'int',
      null: true,
    },
    {
      name: 'contact_name',
      type: 'varchar(200)',
      null: true,
    },
    {
      name: 'contact_phone_number',
      type: 'varchar(14)',
      null: true,
    },
    {
      name: 'contact_cellphone_number',
      type: 'varchar(14)',
      null: true,
    },
    {
      name: 'contact_email',
      type: 'varchar(100)',
      null: true,
    },
    {
      name: 'contact_position',
      type: 'varchar(60)',
      null: true,
    },

    {
      name: 'pay_with',
      type: 'varchar(20)',
      null: true,
    },
    {
      name: 'payment_method',
      type: 'char(1)',
      null: true,
    },
    {
      name: 'payment_method_type',
      type: 'char(1)',
      null: true,
    },
    {
      name: 'payment_method_text',
      type: 'text',
      null: true,
    },
    {
      name: 'days',
      type: 'int',
      null: true,
    },
    {
      name: 'installments',
      type: 'int',
      null: true,
    },
    {
      name: 'history',
      type: 'text',
      null: true,
    },
    {
      name: 'validity',
      type: 'varchar(50)',
      null: true,
    },
    {
      name: 'notes',
      type: 'text',
      null: true,
    },
    {
      name: 'budget_notes',
      type: 'text',
      null: true,
    },
    {
      name: 'invoice_notes',
      type: 'text',
      null: true,
    },
    {
      name: 'os_notes',
      type: 'text',
      null: true,
    },

    {
      name: 'status',
      type: 'char(1)',
      null: false,
    },
    {
      name: 'status_date',
      type: 'date',
      null: true,
    },
    {
      name: 'situation',
      type: 'varchar(15)',
      null: false,
    },
    {
      name: 'email_situation',
      type: 'int',
      null: true,
    },
    {
      name: 'email_situation_agent',
      type: 'int',
      null: true,
    },
    {
      name: 'quality_situation',
      type: 'varchar(15)',
      null: false,
    },
    {
      name: 'quality_situation',
      type: 'varchar(15)',
      null: true,
    },
    {
      name: 'quality_date',
      type: 'date',
      null: true,
    },
    {
      name: 'email_date',
      type: 'datetime',
      null: true,
    },
    {
      name: 'email_date_agent',
      type: 'datetime',
      null: true,
    },
    {
      name: 'disaproval_reason',
      type: 'text',
      null: true,
    },
    {
      name: 'negative',
      type: 'int',
      null: false,
    },
    {
      name: 'negative',
      type: 'int',
      null: false,
    },
    {
      name: 'items_type',
      type: 'char(1)',
      null: false,
    },
    {
      name: 'items_text',
      type: 'text',
      null: true,
    },
    {
      name: 'products_value',
      type: 'varchar(20)',
      null: true,
    },
    {
      name: 'ipi_value',
      type: 'varchar(20)',
      null: true,
    },
    {
      name: 'industry_value',
      type: 'varchar(20)',
      null: true,
    },
    {
      name: 'market_value',
      type: 'varchar(20)',
      null: true,
    },
    {
      name: 'total_value',
      type: 'varchar(20)',
      null: false,
    },
    {
      name: 'total_value_with_shipping_embedded',
      type: 'decimal(10,2)',
      null: true,
    },
    {
      name: 'freight_percentage',
      type: 'decimal(10,2)',
      null: true,
    },
    {
      name: 'freight_value',
      type: 'varchar(20)',
      null: true,
    },
    {
      name: 'paid_freight_value',
      type: 'varchar(20)',
      null: true,
    },
    {
      name: 'operational_profit_value',
      type: 'varchar(20)',
      null: true,
    },
    {
      name: 'manual_freight',
      type: 'boolean',
      null: true,
    },
    {
      name: 'discount_value',
      type: 'varchar(20)',
      null: true,
    },
    {
      name: 'discount_percentage',
      type: 'varchar(11)',
      null: true,
    },
    {
      name: 'interests',
      type: 'float',
      null: true,
    },
    {
      name: 'event',
      type: 'varchar(200)',
      null: true,
    },
    {
      name: 'do_mounting',
      type: 'int',
      null: true,
    },
    {
      name: 'company_delivery',
      type: 'int',
      null: false,
    },
    {
      name: 'delivery_destination',
      type: 'varchar(250)',
      null: true,
    },
    {
      name: 'delivery_destination_street',
      type: 'varchar(100)',
      null: true,
    },
    {
      name: 'delivery_destination_number',
      type: 'varchar(20)',
      null: true,
    },
    {
      name: 'delivery_destination_complement',
      type: 'varchar(45)',
      null: true,
    },
    {
      name: 'delivery_destination_district',
      type: 'varchar(45)',
      null: true,
    },
    {
      name: 'delivery_destination_city',
      type: 'varchar(45)',
      null: true,
    },
    {
      name: 'delivery_destination_state',
      type: 'char(2)',
      null: true,
    },
    {
      name: 'delivery_destination_zip_code',
      type: 'varchar(10)',
      null: true,
    },
    {
      name: 'delivery_destination_reference',
      type: 'varchar(45)',
      null: true,
    },

    {
      name: 'pick_up_location',
      type: 'varchar(300)',
      null: true,
    },
    {
      name: 'pick_up_location_zip_code',
      type: 'varchar(10)',
      null: true,
    },
    {
      name: 'pick_up_location_reference',
      type: 'varchar(45)',
      null: true,
    },
    {
      name: 'pick_up_location_street',
      type: 'varchar(100)',
      null: true,
    },
    {
      name: 'pick_up_location_number',
      type: 'varchar(20)',
      null: true,
    },
    {
      name: 'pick_up_location_complement',
      type: 'varchar(45)',
      null: true,
    },
    {
      name: 'pick_up_location_district',
      type: 'varchar(45)',
      null: true,
    },
    {
      name: 'pick_up_location_city',
      type: 'varchar(45)',
      null: true,
    },
    {
      name: 'pick_up_location_state',
      type: 'char(2)',
      null: true,
    },
    {
      name: 'delivery_date',
      type: 'date',
      null: true,
    },
    {
      name: 'pick_up_date',
      type: 'date',
      null: true,
    },
    {
      name: 'delivery_time',
      type: 'varchar(50)',
      null: true,
    },
    {
      name: 'pick_up_time',
      type: 'varchar(50)',
      null: true,
    },
    {
      name: 'carrier_id',
      type: 'int',
      null: true,
    },
    {
      name: 'invoice_date',
      type: 'date',
      null: true,
    },
    {
      name: 'freights_services',
      type: 'text',
      null: true,
    },
    {
      name: 'show_orders_complete_data',
      type: 'int',
      null: true,
    },
    {
      name: 'show_history',
      type: 'int',
      null: true,
    },
    {
      name: 'show_notes',
      type: 'int',
      null: true,
    },
    {
      name: 'show_responsibles',
      type: 'int',
      null: true,
    },
    {
      name: 'user_id',
      type: 'int',
      null: true,
    },
    {
      name: 'user_name',
      type: 'varchar(100)',
      null: true,
    },
    {
      name: 'hash',
      type: 'varchar(50)',
      null: false,
    },
    {
      name: 'ref',
      type: 'varchar(50)',
      null: true,
    },
    {
      name: 'stock',
      type: 'int',
      null: false,
    },
    {
      name: 'released',
      type: 'int',
      null: false,
    },
    {
      name: 'os_delivey_printed',
      type: 'int',
      null: false,
    },
    {
      name: 'os_delivery_by_printed',
      type: 'varchar(100)',
      null: true,
    },
    {
      name: 'os_pick_up_printed',
      type: 'int',
      null: false,
    },
    {
      name: 'os_pick_up_by_printed',
      type: 'varchar(100)',
      null: true,
    },
    {
      name: 'invoice_printed',
      type: 'int',
      null: false,
    },
    {
      name: 'invoice_number_sequence',
      type: 'int',
      null: true,
    },
    {
      name: 'bill_printed',
      type: 'int',
      null: false,
    },
    {
      name: 'invoice_number',
      type: 'varchar(30)',
      null: true,
    },
    {
      name: 'show_total_value',
      type: 'int',
      null: false,
    },

    {
      name: 'show_unit_value',
      type: 'int',
      null: false,
    },
    {
      name: 'show_budget_unit_value',
      type: 'int',
      null: false,
    },
    {
      name: 'show_daily_value',
      type: 'int',
      null: true,
    },
    {
      name: 'show_included_freight',
      type: 'boolean',
      null: true,
    },
    {
      name: 'show_tape',
      type: 'int',
      null: true,
    },
    {
      name: 'pending_stock',
      type: 'int',
      null: false,
    },
    {
      name: 'volume',
      type: 'int',
      null: true,
    },
    {
      name: 'weight',
      type: 'varchar(10)',
      null: true,
    },
    {
      name: 'dispatch_date',
      type: 'date',
      null: true,
    },
    {
      name: 'dispatch',
      type: 'boolean',
      null: true,
    },
    {
      name: 'dispatch_user',
      type: 'varchar(45)',
      null: true,
    },
    {
      name: 'delivered',
      type: 'boolean',
      null: true,
    },
    {
      name: 'delivered_datee',
      type: 'date',
      null: true,
    },
    {
      name: 'delivered_date_user',
      type: 'varchar(45)',
      null: true,
    },
    {
      name: 'picked_up',
      type: 'boolean',
      null: true,
    },
    {
      name: 'picked_up_date',
      type: 'date',
      null: true,
    },
    {
      name: 'picked_up_user',
      type: 'varchar(45)',
      null: true,
    },
    {
      name: 'important',
      type: 'char(1)',
      null: false,
    },
    {
      name: 'defaulting',
      type: 'boolean',
      null: true,
    },
    {
      name: 'defaulting',
      type: 'boolean',
      null: true,
    },
    {
      name: 'financial_reversed',
      type: 'boolean',
      null: true,
    },
    {
      name: 'monitoring_situation',
      type: 'varchar(20)',
      null: true,
    },
    {
      name: 'dir',
      type: 'int',
      null: true,
    },
    {
      name: 'location_contract_signed',
      type: 'varchar(255)',
      null: true,
    },
    {
      name: 'order_origin',
      type: 'int',
      null: true,
    },
    {
      name: 'location_renewed',
      type: 'int',
      null: true,
    },
    {
      name: 'location_extended',
      type: 'int',
      null: true,
    },
    {
      name: 'order_previous',
      type: 'int',
      null: true,
    },
    {
      name: 'order_signed',
      type: 'varchar(255)',
      null: true,
    },
    {
      name: 'checklist',
      type: 'varchar(255)',
      null: true,
    },
    {
      name: 'expedicao_status_id',
      type: 'int',
      null: true,
    },
    {
      name: 'expedicao_status_expiracao',
      type: 'date',
      null: true,
    },

    {
      name: 'expedicao_status_data',
      type: 'datetime',
      null: true,
    },
    {
      name: 'expedicao_status_anterior_id',
      type: 'int',
      null: true,
    },
    {
      name: 'nfe_printed',
      type: 'boolean',
      null: true,
    },

    {
      name: 'height',
      type: 'varchar(10)',
      null: true,
    },
    {
      name: 'length',
      type: 'varchar(10)',
      null: true,
    },
    {
      name: 'width',
      type: 'varchar(10)',
      null: true,
    },
    {
      name: 'volumes_json',
      type: 'json',
      null: true,
    },
    {
      name: 'date_goal_accomplished',
      type: 'date',
      null: true,
    },
  ],
  relations: [
    {
      column: 'client_id',
      columnNameInEntity: 'clientNew',
      entity: 'ClientNew',
      relatedColumn: 'id',
      tableName: 'clients',
      type: 'ManyToOne',
    },
    {
      column: 'expedicao_status_id',
      columnNameInEntity: 'expedition',
      entity: 'OrderExpeditionStatus',
      relatedColumn: 'id',
      tableName: 'orders_expedition_status',
      type: 'ManyToOne',
    },
    {
      column: 'expedicao_status_anterior_id',
      columnNameInEntity: 'expedition',
      entity: 'OrderExpeditionStatus',
      relatedColumn: 'id',
      tableName: 'orders_expedition_status',
      type: 'ManyToOne',
    },
    {
      column: 'agent_id',
      columnNameInEntity: 'agent',
      entity: 'Agent',
      relatedColumn: 'id',
      tableName: 'representantes',
      type: 'ManyToOne',
    },
    {
      column: 'carrier_id',
      columnNameInEntity: 'carrier',
      entity: 'Carrier',
      relatedColumn: 'id',
      tableName: 'transportadoras',
      type: 'ManyToOne',
    },
  ],
};

export default table;
