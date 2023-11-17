import fs from 'fs';
import table from '../table';

export default function buildController() {
  const { entity, entityPlural, module, entityCamel, entityPluralCamel } =
    table;

  let fileString = `\
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListService from '@modules/${module}/services/${entity}/ListService';
import GetService from '@modules/${module}/services/${entity}/GetService';
import CreateService from '@modules/${module}/services/${entity}/CreateService';
import UpdateService from '@modules/${module}/services/${entity}/UpdateService';
import DeleteService from '@modules/${module}/services/${entity}/DeleteService';
import ICreate${entity}DTO from '@modules/${module}/dtos/ICreate${entity}DTO';

export default class ${entityPlural}Controller {
  public async list(request: Request, response: Response): Promise<Response> {
    const list${entityPlural} = container.resolve(ListService);
    const ${entityPluralCamel} = await list${entityPlural}.execute();

    return response.json(classToClass(${entityPluralCamel}));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const data: ICreate${entity}DTO = request.body;
    const create${entity} = container.resolve(CreateService);
    const ${entityCamel} = await create${entity}.execute({
      ...data,
    });

    return response.json(classToClass(${entityCamel}));
  }

  public async get(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const get${entity} = container.resolve(GetService);
    const ${entityCamel} = await get${entity}.execute(Number(id));

    return response.json(classToClass(${entityCamel}));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data: ICreate${entity}DTO = request.body;
    const update${entity} = container.resolve(UpdateService);
    const ${entityCamel} = await update${entity}.execute({
      id: Number(id),
      ...data,
    });

    return response.json(classToClass(${entityCamel}));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const delete${entity} = container.resolve(DeleteService);
    await delete${entity}.execute({
      id: Number(id),
    });

    return response.status(204).json({ message: '${entity} removed' });
  }
}
`;

  fs.writeFileSync(
    `generated_files/infra/http/controllers/${entityPlural}Controller.ts`,
    fileString,
  );
}
