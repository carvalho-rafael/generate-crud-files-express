import fs from 'fs';
import table from '../table';

export default function buildServiceCreate() {
  const {
    entity,
    entityPlural,
    module,
    entityCamel,
    entityPluralCamel,
    cacheList,
  } = table;

  let fileString = `\
import { inject, injectable } from 'tsyringe';

import ICacheProvider from '@shared/contanier/providers/CacheProvider/models/ICacheProvider';
import ICreate${entity}DTO from '@modules/${module}/dtos/ICreate${entity}DTO';
import ${entity} from '@modules/${module}/infra/typeorm/entities/${entity}';
import I${entityPlural}Repository from '@modules/${module}/repositories/I${entityPlural}Repository';

@injectable()
class CreateService {
  constructor(
    @inject('${entityPlural}Repository')
    private ${entityPluralCamel}Repository: I${entityPlural}Repository,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(
    createData: ICreate${entity}DTO,
  ): Promise<${entity}> {
    const ${entityCamel} = await this.${entityPluralCamel}Repository.create(createData);
    await this.cacheProvider.invalidatePrefix('${cacheList}');

    return ${entityCamel};
  }
}

export default CreateService;
`;

  const dir = `generated_files/services/${entity}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFileSync(
    `generated_files/services/${entity}/CreateService.ts`,
    fileString,
  );
}
