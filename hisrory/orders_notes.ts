import { Table } from 'types/table';

const table: Table = {
  module: 'commercial',
  name: 'orders_notes_budgets',
  entity: 'OrderNoteBudget',
  entityCamel: 'orderNoteBudget',
  entityPlural: 'OrdersNotesBudgets',
  entityPluralCamel: 'ordersNotesBudgets',
  cache: 'order-note-budget-get-${id}',
  cacheList: 'orders-notes-budgets-list',
  columns: [
    {
      name: 'type',
      type: 'ENUM("sale","location","sale_location")',
      null: false,
    },
    { name: 'note', type: 'varchar(200)', null: false },
    { name: 'active', type: 'boolean', null: false },
    { name: 'user_id', type: 'int', null: false },
    { name: 'user_name', type: 'varchar(45)', null: true },
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
