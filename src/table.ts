const table = {
  module: 'commercial',
  name: 'orders_domains_emails',
  entity: 'OrderDomainEmail',
  entityCamel: 'orderDomainEmail',
  entityPlural: 'OrdersDomainsEmails',
  entityPluralCamel: 'ordersDomainsEmails',
  cache: 'order-domain-email-get-${id}',
  cacheList: 'orders-domains-emails-list',
  columns: [
    { name: 'domain', type: 'varchar(45)', jsType: 'string', null: false },
  ],
  relations: [],
};

export default table;
