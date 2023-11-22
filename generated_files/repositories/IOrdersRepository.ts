import ICreateOrderDTO from '@modules/commercial/dtos/ICreateOrderDTO';
import Order from '@modules/commercial/infra/typeorm/entities/Order';

export default interface IOrdersRepository {
  findAll(): Promise<Order[]>;
  findById(id: number): Promise<Order | undefined>;
  create(data: ICreateOrderDTO): Promise<Order>;
  save(data: Partial<Order>): Promise<Order>;
  delete(id: number): Promise<void>;
}
