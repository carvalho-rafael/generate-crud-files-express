import { inject, injectable } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AppError from '@shared/errors/AppError';
import ICacheProvider from '@shared/contanier/providers/CacheProvider/models/ICacheProvider';
import ICreateOrderDTO from '@modules/commercial/dtos/ICreateOrderDTO';
import IOrdersRepository from '@modules/commercial/repositories/IOrdersRepository';
import Order from '@modules/commercial/infra/typeorm/entities/Order';

interface IRequest extends ICreateOrderDTO {
  id: number;
}

@injectable()
class UpdateService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(orderUpdate: IRequest): Promise<Order> {
    const id = orderUpdate.id;
    const cacheKey = `order-get-${id}`;
    let order = await this.cacheProvider.recover<Order | undefined>(
      cacheKey,
    );
    if (!order) {
      order = await this.ordersRepository.findById(id);
      this.cacheProvider.save(cacheKey, classToClass(order));
    }
    if (!order) {
      throw new AppError('order not found.', 404);
    }

    await this.ordersRepository.save({
      ...order,
      ...orderUpdate,
    });
    await this.cacheProvider.invalidate('orders-list');
    await this.cacheProvider.invalidate(cacheKey);

    return order;
  }
}

export default UpdateService;
