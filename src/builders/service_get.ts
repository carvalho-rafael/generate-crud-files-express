import fs from 'fs';
import table from '../table';

export default function buildServiceGet() {
  const {
    entity,
    entityPlural,
    module,
    entityCamel,
    entityPluralCamel,
    cache,
  } = table;

  let fileString = `\
import { inject, injectable } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AppError from '@shared/errors/AppError';
import ICacheProvider from '@shared/contanier/providers/CacheProvider/models/ICacheProvider';
import I${entityPlural}Repository from '@modules/${module}/repositories/I${entityPlural}Repository';
import ${entity} from '@modules/${module}/infra/typeorm/entities/${entity}';

@injectable()
class GetService {
  constructor(
    @inject('${entityPlural}Repository')
    private ${entityPluralCamel}Repository: I${entityPlural}Repository,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(id: number): Promise<${entity}> {
    const cacheKey = \`${cache}\`;
    let ${entityCamel} = await this.cacheProvider.recover<${entity} | undefined>(
      cacheKey,
    );
    if (!${entityCamel}) {
      ${entityCamel} = await this.${entityPluralCamel}Repository.findById(id);
      this.cacheProvider.save(cacheKey, classToClass(${entityCamel}));
    }
    if (!${entityCamel}) {
      throw new AppError('${entityCamel} not found.', 404);
    }

    return ${entityCamel};
  }
}

export default GetService;
`;

  fs.writeFileSync(
    `generated_files/services/${entity}/GetService.ts`,
    fileString,
  );
}
