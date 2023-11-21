import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListService from '@modules/commercial/services/OrderNoteService/ListService';
import GetService from '@modules/commercial/services/OrderNoteService/GetService';
import CreateService from '@modules/commercial/services/OrderNoteService/CreateService';
import UpdateService from '@modules/commercial/services/OrderNoteService/UpdateService';
import DeleteService from '@modules/commercial/services/OrderNoteService/DeleteService';
import ICreateOrderNoteServiceDTO from '@modules/commercial/dtos/ICreateOrderNoteServiceDTO';

export default class OrdersNotesServicesController {
  public async list(request: Request, response: Response): Promise<Response> {
    const listOrdersNotesServices = container.resolve(ListService);
    const ordersNotesServices = await listOrdersNotesServices.execute();

    return response.json(classToClass(ordersNotesServices));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const data: ICreateOrderNoteServiceDTO = request.body;
    const createOrderNoteService = container.resolve(CreateService);
    const orderNoteService = await createOrderNoteService.execute({
      ...data,
    });

    return response.json(classToClass(orderNoteService));
  }

  public async get(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const getOrderNoteService = container.resolve(GetService);
    const orderNoteService = await getOrderNoteService.execute(Number(id));

    return response.json(classToClass(orderNoteService));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data: ICreateOrderNoteServiceDTO = request.body;
    const updateOrderNoteService = container.resolve(UpdateService);
    const orderNoteService = await updateOrderNoteService.execute({
      id: Number(id),
      ...data,
    });

    return response.json(classToClass(orderNoteService));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteOrderNoteService = container.resolve(DeleteService);
    await deleteOrderNoteService.execute({
      id: Number(id),
    });

    return response.status(204).json({ message: 'OrderNoteService removed' });
  }
}
