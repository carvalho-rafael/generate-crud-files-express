import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListService from '@modules/commercial/services/PersonContact/ListService';
import GetService from '@modules/commercial/services/PersonContact/GetService';
import CreateService from '@modules/commercial/services/PersonContact/CreateService';
import UpdateService from '@modules/commercial/services/PersonContact/UpdateService';
import DeleteService from '@modules/commercial/services/PersonContact/DeleteService';
import ICreatePersonContactDTO from '@modules/commercial/dtos/ICreatePersonContactDTO';

export default class PersonsContactsController {
  public async list(request: Request, response: Response): Promise<Response> {
    const listPersonsContacts = container.resolve(ListService);
    const personsContacts = await listPersonsContacts.execute();

    return response.json(classToClass(personsContacts));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const data: ICreatePersonContactDTO = request.body;
    const createPersonContact = container.resolve(CreateService);
    const personContact = await createPersonContact.execute({
      ...data,
    });

    return response.json(classToClass(personContact));
  }

  public async get(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const getPersonContact = container.resolve(GetService);
    const personContact = await getPersonContact.execute(Number(id));

    return response.json(classToClass(personContact));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data: ICreatePersonContactDTO = request.body;
    const updatePersonContact = container.resolve(UpdateService);
    const personContact = await updatePersonContact.execute({
      id: Number(id),
      ...data,
    });

    return response.json(classToClass(personContact));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deletePersonContact = container.resolve(DeleteService);
    await deletePersonContact.execute({
      id: Number(id),
    });

    return response.status(204).json({ message: 'PersonContact removed' });
  }
}
