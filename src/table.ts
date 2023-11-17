const table = {
  module: 'commercial',
  name: 'persons_contacts',
  entity: 'PersonContact',
  entityCamel: 'personContact',
  entityPlural: 'PersonsContacts',
  entityPluralCamel: 'personsContacts',
  cache: 'person-contact-get-${id}',
  cacheList: 'persons-contacts-list',
  columns: [
    { name: 'name', type: 'int', jsType: 'number', null: false },
    {
      name: 'type',
      type: `enum('location', 'sale')`,
      jsType: 'string',
      null: true,
    },
    {
      name: 'data',
      type: `datetime`,
      jsType: 'Date',
      null: true,
    },
  ],
  relations: [
    {
      name: 'persons',
      column: 'person_id',
      relatedColumn: 'id',
      entity: 'Person',
      type: 'ManyToOne',
      columnNameInEntity: 'person',
    },
  ],
};

export default table;
