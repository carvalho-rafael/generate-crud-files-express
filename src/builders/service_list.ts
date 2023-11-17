import fs from 'fs';
import table from '../table';

export default function buildServiceList() {
  const {
    entity,
    entityPlural,
    module,
    entityCamel,
    entityPluralCamel,
    cache,
    cacheList,
  } = table;

  let fileString = `\
import { inject, injectable } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ICacheProvider from '@shared/contanier/providers/CacheProvider/models/ICacheProvider';
import I${entityPlural}Repository from '@modules/${module}/repositories/I${entityPlural}Repository';
import ${entity} from '@modules/${module}/infra/typeorm/entities/${entity}';

@injectable()
class ListService {
  constructor(
    @inject('${entityPlural}Repository')
    private ${entityPluralCamel}Repository: I${entityPlural}Repository,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(): Promise<${entity}[]> {
    const cacheKey = '${cacheList}';
    let ${entityPluralCamel} = await this.cacheProvider.recover<${entity}[]>(
      cacheKey,
    );

    if (!${entityPluralCamel}) {
      ${entityPluralCamel} = await this.${entityPluralCamel}Repository.findAll();
      await this.cacheProvider.save(cacheKey, classToClass(${entityPluralCamel}));
    }

    return ${entityPluralCamel};
  }
}

export default ListService;
`;

  fs.writeFileSync(
    `generated_files/services/${entity}/ListService.ts`,
    fileString,
  );
}
