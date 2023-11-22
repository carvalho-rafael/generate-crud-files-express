import { inject, injectable } from 'tsyringe';

import ICacheProvider from '@shared/contanier/providers/CacheProvider/models/ICacheProvider';
import ICreateOrderDTO from '@modules/commercial/dtos/ICreateOrderDTO';
import Order from '@modules/commercial/infra/typeorm/entities/Order';
import IOrdersRepository from '@modules/commercial/repositories/IOrdersRepository';

@injectable()
class CreateService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(
    createData: ICreateOrderDTO,
  ): Promise<Order> {
    const order = await this.ordersRepository.create(createData);
    await this.cacheProvider.invalidatePrefix('orders-list');

    return order;
  }
}

export default CreateService;
