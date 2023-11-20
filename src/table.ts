import { Table } from 'types/table';

const table: Table = {
  module: 'commercial',
  name: 'orders_notes_freights',
  entity: 'OrderNoteFreight',
  entityCamel: 'orderNoteFreight',
  entityPlural: 'OrdersNotesFreights',
  entityPluralCamel: 'ordersNotesFreights',
  cache: 'order-note-freight-get-${id}',
  cacheList: 'orders-notes-freights-list',
  columns: [
    { name: 'order_id', type: 'int', jsType: 'number', null: false },
    {
      name: 'type',
      type: 'ENUM("sale","location","sale_location")',
      jsType: 'string',
      null: false,
    },
    { name: 'note', type: 'varchar(200)', jsType: 'string', null: false },
    { name: 'active', type: 'boolean', jsType: 'boolean', null: false },
    { name: 'user_id', type: 'varchar(45)', jsType: 'number', null: false },
    { name: 'user_name', type: 'varchar(45)', jsType: 'string', null: true },
  ],
  relations: [
    {
      column: 'order_id',
      columnNameInEntity: 'order',
      entity: 'Order',
      relatedColumn: 'id',
      tableName: 'orders',
      type: 'ManyToOne',
    },
    {
      column: 'user_id',
      columnNameInEntity: 'user',
      entity: 'User',
      relatedColumn: 'id',
      tableName: 'users',
      type: 'ManyToOne',
    },
  ],
};

export default table;
