export type Table = {
  module: string;
  name: string;
  entity: string;
  entityCamel: string;
  entityPlural: string;
  entityPluralCamel: string;
  cache: string;
  cacheList: string;
  columns: { name: string; type: string; null: boolean }[];
  relations: {
    tableName: string;
    column: string;
    relatedColumn: string;
    entity: string;
    type: string;
    columnNameInEntity: string;
  }[];
};

export default table;
