import { Table } from 'types/table';

const table: Table = {
  module: 'commercial',
  name: 'orders_notes_services',
  entity: 'OrderNoteService',
  entityCamel: 'orderNoteService',
  entityPlural: 'OrdersNotesServices',
  entityPluralCamel: 'ordersNotesServices',
  cache: 'order-note-service-get-${id}',
  cacheList: 'orders-notes-services-list',
  columns: [
    {
      name: 'type',
      type: 'ENUM("sale","location","sale_location")',
      jsType: 'string',
      null: false,
    },
    { name: 'note', type: 'varchar(200)', jsType: 'string', null: false },
    { name: 'active', type: 'boolean', jsType: 'boolean', null: false },
    { name: 'user_id', type: 'int', jsType: 'number', null: false },
    { name: 'user_name', type: 'varchar(45)', jsType: 'string', null: true },
  ],
  relations: [
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
