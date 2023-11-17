import fs from 'fs';
import table from '../table';

export default function buildServiceDelete() {
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

import AppError from '@shared/errors/AppError';
import ICacheProvider from '@shared/contanier/providers/CacheProvider/models/ICacheProvider';
import I${entityPlural}Repository from '@modules/${module}/repositories/I${entityPlural}Repository';

interface IRequest {
  id: number;
}

@injectable()
class DeleteService {
  constructor(
    @inject('${entityPlural}Repository')
    private ${entityPluralCamel}Repository: I${entityPlural}Repository,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ id }: IRequest): Promise<boolean> {
    const ${entityCamel} = await this.${entityPluralCamel}Repository.findById(id);
    if (!${entityCamel}) {
      throw new AppError('${entity} not found.', 404);
    }

    await this.${entityPluralCamel}Repository.delete(id);
    await this.cacheProvider.invalidate('${cacheList}');
    await this.cacheProvider.invalidate(\`${cache}\`);

    return true;
  }
}

export default DeleteService;
`;

  fs.writeFileSync(
    `generated_files/services/${entity}/DeleteService.ts`,
    fileString,
  );
}
