import fs from 'fs';
import table from '../table';

export default function buildIRepository() {
  const { entity, entityPlural, module } = table;

  let fileString = `\
import ICreate${entity}DTO from '@modules/${module}/dtos/ICreate${entity}DTO';
import ${entity} from '@modules/${module}/infra/typeorm/entities/${entity}';

export default interface I${entityPlural}Repository {
  findAll(): Promise<${entity}[]>;
  findById(id: number): Promise<${entity} | undefined>;
  create(data: ICreate${entity}DTO): Promise<${entity}>;
  save(data: Partial<${entity}>): Promise<${entity}>;
  delete(id: number): Promise<void>;
};
`;

  fs.writeFileSync(
    `generated_files/repositories/I${entityPlural}Repository.ts`,
    fileString,
  );
}
