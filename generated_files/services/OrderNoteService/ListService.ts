import { inject, injectable } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ICacheProvider from '@shared/contanier/providers/CacheProvider/models/ICacheProvider';
import IOrdersNotesServicesRepository from '@modules/commercial/repositories/IOrdersNotesServicesRepository';
import OrderNoteService from '@modules/commercial/infra/typeorm/entities/OrderNoteService';

@injectable()
class ListService {
  constructor(
    @inject('OrdersNotesServicesRepository')
    private ordersNotesServicesRepository: IOrdersNotesServicesRepository,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(): Promise<OrderNoteService[]> {
    const cacheKey = 'orders-notes-services-list';
    let ordersNotesServices = await this.cacheProvider.recover<OrderNoteService[]>(
      cacheKey,
    );

    if (!ordersNotesServices) {
      ordersNotesServices = await this.ordersNotesServicesRepository.findAll();
      await this.cacheProvider.save(cacheKey, classToClass(ordersNotesServices));
    }

    return ordersNotesServices;
  }
}

export default ListService;
