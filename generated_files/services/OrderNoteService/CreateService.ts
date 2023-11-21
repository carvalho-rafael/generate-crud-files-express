import { inject, injectable } from 'tsyringe';

import ICacheProvider from '@shared/contanier/providers/CacheProvider/models/ICacheProvider';
import ICreateOrderNoteServiceDTO from '@modules/commercial/dtos/ICreateOrderNoteServiceDTO';
import OrderNoteService from '@modules/commercial/infra/typeorm/entities/OrderNoteService';
import IOrdersNotesServicesRepository from '@modules/commercial/repositories/IOrdersNotesServicesRepository';

@injectable()
class CreateService {
  constructor(
    @inject('OrdersNotesServicesRepository')
    private ordersNotesServicesRepository: IOrdersNotesServicesRepository,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(
    createData: ICreateOrderNoteServiceDTO,
  ): Promise<OrderNoteService> {
    const orderNoteService = await this.ordersNotesServicesRepository.create(createData);
    await this.cacheProvider.invalidatePrefix('orders-notes-services-list');

    return orderNoteService;
  }
}

export default CreateService;
