import fs from 'fs';
import table from '../table';

export default function buildRepository() {
  const { entity, entityPlural, entityPluralCamel, entityCamel, module } =
    table;

  let fileString = `\
import { getRepository, Repository } from 'typeorm';

import I${entityPlural}Repository from '@modules/${module}/repositories/I${entityPlural}Repository';
import ICreate${entity}DTO from '@modules/${module}/dtos/ICreate${entity}DTO';
import ${entity} from '../entities/${entity}';
  
class ${entityPlural}Repository implements I${entityPlural}Repository {
  private ormRepository: Repository<${entity}>;

  constructor() {
    this.ormRepository = getRepository(${entity});
  }

  public async findAll(): Promise<${entity}[]> {
    const ${entityPluralCamel} = await this.ormRepository.find();
    return ${entityPluralCamel};
  }

  public async findById(id: number): Promise<${entity} | undefined> {
    const ${entityCamel} = await this.ormRepository.findOne(id);
    return ${entityCamel};
  }

  public async create(
    ${entityCamel}Data: ICreate${entity}DTO,
  ): Promise<${entity}> {
    const ${entityCamel} = this.ormRepository.create({
      ...${entityCamel}Data,
    });

    await this.ormRepository.save(${entityCamel});

    return ${entityCamel};
  }

  public save(${entityCamel}: ${entity}): Promise<${entity}> {
    return this.ormRepository.save(${entityCamel});
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
  
export default ${entityPlural}Repository;
`;

  fs.writeFileSync(
    `generated_files/infra/typeorm/repositories/${entityPlural}Repository.ts`,
    fileString,
  );
}
