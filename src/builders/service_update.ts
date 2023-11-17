import fs from 'fs';
import table from '../table';

export default function buildServiceUpdate() {
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

import AppError from '@shared/errors/AppError';
import ICacheProvider from '@shared/contanier/providers/CacheProvider/models/ICacheProvider';
import ICreate${entity}DTO from '@modules/${module}/dtos/ICreate${entity}DTO';
import I${entityPlural}Repository from '@modules/${module}/repositories/I${entityPlural}Repository';
import ${entity} from '@modules/${module}/infra/typeorm/entities/${entity}';

interface IRequest extends ICreate${entity}DTO {
  id: number;
}

@injectable()
class UpdateService {
  constructor(
    @inject('${entityPlural}Repository')
    private ${entityPluralCamel}Repository: I${entityPlural}Repository,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(${entityCamel}Update: IRequest): Promise<${entity}> {
    const id = ${entityCamel}Update.id;
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

    await this.${entityPluralCamel}Repository.save({
      ...${entityCamel},
      ...${entityCamel}Update,
    });
    await this.cacheProvider.invalidate('${cacheList}');
    await this.cacheProvider.invalidate(cacheKey);

    return ${entityCamel};
  }
}

export default UpdateService;
`;

  fs.writeFileSync(
    `generated_files/services/${entity}/UpdateService.ts`,
    fileString,
  );
}
