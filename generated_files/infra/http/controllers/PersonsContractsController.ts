import { inject, injectable } from 'tsyringe';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListService from '@modules/commercial/services/PersonContract/ListService';
import GetService from '@modules/commercial/services/PersonContract/GetService';
import CreateService from '@modules/commercial/services/PersonContract/CreateService';
import UpdateService from '@modules/commercial/services/PersonContract/UpdateService';
import DeleteService from '@modules/commercial/services/PersonContract/DeleteService';
import ICreatePersonContractDTO from '@modules/commercial/dtos/ICreatePersonContractDTO';

export default class PersonsContractsController {
  public async list(request: Request, response: Response): Promise<Response> {
    const listPersonsContracts = container.resolve(ListService);
    const personsContracts = await listPersonsContracts.execute();

    return response.json(classToClass(personsContracts));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const data: ICreatePersonContractDTO = request.body;
    const createPersonContract = container.resolve(CreateService);
    const personContract = await createPersonContract.execute({
      ...data,
    });

    return response.json(classToClass(personContract));
  }

  public async get(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const getPersonContract = container.resolve(GetService);
    const personContract = await getPersonContract.execute(Number(id));

    return response.json(classToClass(personContract));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data: ICreatePersonContractDTO = request.body;
    const updatePersonContract = container.resolve(UpdateService);
    const personContract = await updatePersonContract.execute({
      id: Number(id),
      ...data,
    });

    return response.json(classToClass(personContract));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deletePersonContract = container.resolve(DeleteService);
    await deletePersonContract.execute({
      id: Number(id),
    });

    return response.status(204).json({ message: 'PersonContract removed' });
  }
}
