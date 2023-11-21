import { getRepository, Repository } from 'typeorm';

import IOrdersNotesServicesRepository from '@modules/commercial/repositories/IOrdersNotesServicesRepository';
import ICreateOrderNoteServiceDTO from '@modules/commercial/dtos/ICreateOrderNoteServiceDTO';
import OrderNoteService from '../entities/OrderNoteService';

class OrdersNotesServicesRepository implements IOrdersNotesServicesRepository {
  private ormRepository: Repository<OrderNoteService>;

  constructor() {
    this.ormRepository = getRepository(OrderNoteService);
  }

  public async findAll(): Promise<OrderNoteService[]> {
    const ordersNotesServices = await this.ormRepository.find();
    return ordersNotesServices;
  }

  public async findById(id: number): Promise<OrderNoteService | undefined> {
    const orderNoteService = await this.ormRepository.findOne(id);
    return orderNoteService;
  }

  public async create(
    orderNoteServiceData: ICreateOrderNoteServiceDTO,
  ): Promise<OrderNoteService> {
    const orderNoteService = this.ormRepository.create({
      ...orderNoteServiceData,
    });

    await this.ormRepository.save(orderNoteService);

    return orderNoteService;
  }

  public save(orderNoteService: OrderNoteService): Promise<OrderNoteService> {
    return this.ormRepository.save(orderNoteService);
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default OrdersNotesServicesRepository;
