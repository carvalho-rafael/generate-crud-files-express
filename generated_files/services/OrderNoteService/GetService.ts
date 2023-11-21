import { inject, injectable } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AppError from '@shared/errors/AppError';
import ICacheProvider from '@shared/contanier/providers/CacheProvider/models/ICacheProvider';
import IOrdersNotesServicesRepository from '@modules/commercial/repositories/IOrdersNotesServicesRepository';
import OrderNoteService from '@modules/commercial/infra/typeorm/entities/OrderNoteService';

@injectable()
class GetService {
  constructor(
    @inject('OrdersNotesServicesRepository')
    private ordersNotesServicesRepository: IOrdersNotesServicesRepository,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(id: number): Promise<OrderNoteService> {
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

    return orderNoteService;
  }
}

export default GetService;
