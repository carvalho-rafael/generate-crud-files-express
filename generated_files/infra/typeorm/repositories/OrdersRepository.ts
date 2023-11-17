import { getRepository, Repository } from 'typeorm';

import IOrdersRepository from '@modules/commercial/repositories/IOrdersRepository';
import ICreateOrderDTO from '@modules/commercial/dtos/ICreateOrderDTO';
import Order from '../entities/Order';
  
class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async findAll(): Promise<Order[]> {
    const orders = await this.ormRepository.find();
    return orders;
  }

  public async findById(id: number): Promise<Order | undefined> {
    const order = await this.ormRepository.findOne(id);
    return order;
  }

  public async create(
    orderData: ICreateOrderDTO,
  ): Promise<Order> {
    const order = this.ormRepository.create({
      ...orderData,
    });

    await this.ormRepository.save(order);

    return order;
  }

  public save(order: Order): Promise<Order> {
    return this.ormRepository.save(order);
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
  
export default OrdersRepository;
