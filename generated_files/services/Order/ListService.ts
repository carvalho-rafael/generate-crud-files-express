import { inject, injectable } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ICacheProvider from '@shared/contanier/providers/CacheProvider/models/ICacheProvider';
import IOrdersRepository from '@modules/commercial/repositories/IOrdersRepository';
import Order from '@modules/commercial/infra/typeorm/entities/Order';

@injectable()
class ListService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(): Promise<Order[]> {
    const cacheKey = 'orders-list';
    let orders = await this.cacheProvider.recover<Order[]>(
      cacheKey,
    );

    if (!orders) {
      orders = await this.ordersRepository.findAll();
      await this.cacheProvider.save(cacheKey, classToClass(orders));
    }

    return orders;
  }
}

export default ListService;
