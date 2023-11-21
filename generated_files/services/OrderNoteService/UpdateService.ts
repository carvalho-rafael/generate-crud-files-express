import { inject, injectable } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AppError from '@shared/errors/AppError';
import ICacheProvider from '@shared/contanier/providers/CacheProvider/models/ICacheProvider';
import ICreateOrderNoteServiceDTO from '@modules/commercial/dtos/ICreateOrderNoteServiceDTO';
import IOrdersNotesServicesRepository from '@modules/commercial/repositories/IOrdersNotesServicesRepository';
import OrderNoteService from '@modules/commercial/infra/typeorm/entities/OrderNoteService';

interface IRequest extends ICreateOrderNoteServiceDTO {
  id: number;
}

@injectable()
class UpdateService {
  constructor(
    @inject('OrdersNotesServicesRepository')
    private ordersNotesServicesRepository: IOrdersNotesServicesRepository,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(orderNoteServiceUpdate: IRequest): Promise<OrderNoteService> {
    const id = orderNoteServiceUpdate.id;
    const cacheKey = `order-note-service-get-${id}`;
    let orderNoteService = await this.cacheProvider.recover<OrderNoteService | undefined>(
      cacheKey,
    );
    if (!orderNoteService) {
      orderNoteService = await this.ordersNotesServicesRepository.findById(id);
      this.cacheProvider.save(cacheKey, classToClass(orderNoteService));
    }
    if (!orderNoteService) {
      throw new AppError('orderNoteService not found.', 404);
    }

    await this.ordersNotesServicesRepository.save({
      ...orderNoteService,
      ...orderNoteServiceUpdate,
    });
    await this.cacheProvider.invalidate('orders-notes-services-list');
    await this.cacheProvider.invalidate(cacheKey);

    return orderNoteService;
  }
}

export default UpdateService;
