import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListService from '@modules/commercial/services/Order/ListService';
import GetService from '@modules/commercial/services/Order/GetService';
import CreateService from '@modules/commercial/services/Order/CreateService';
import UpdateService from '@modules/commercial/services/Order/UpdateService';
import DeleteService from '@modules/commercial/services/Order/DeleteService';
import ICreateOrderDTO from '@modules/commercial/dtos/ICreateOrderDTO';

export default class OrdersController {
  public async list(request: Request, response: Response): Promise<Response> {
    const listOrders = container.resolve(ListService);
    const orders = await listOrders.execute();

    return response.json(classToClass(orders));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const data: ICreateOrderDTO = request.body;
    const createOrder = container.resolve(CreateService);
    const order = await createOrder.execute({
      ...data,
    });

    return response.json(classToClass(order));
  }

  public async get(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const getOrder = container.resolve(GetService);
    const order = await getOrder.execute(Number(id));

    return response.json(classToClass(order));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data: ICreateOrderDTO = request.body;
    const updateOrder = container.resolve(UpdateService);
    const order = await updateOrder.execute({
      id: Number(id),
      ...data,
    });

    return response.json(classToClass(order));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteOrder = container.resolve(DeleteService);
    await deleteOrder.execute({
      id: Number(id),
    });

    return response.status(204).json({ message: 'Order removed' });
  }
}
