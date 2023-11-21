import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import ICacheProvider from '@shared/contanier/providers/CacheProvider/models/ICacheProvider';
import IOrdersNotesServicesRepository from '@modules/commercial/repositories/IOrdersNotesServicesRepository';

interface IRequest {
  id: number;
}

@injectable()
class DeleteService {
  constructor(
    @inject('OrdersNotesServicesRepository')
    private ordersNotesServicesRepository: IOrdersNotesServicesRepository,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ id }: IRequest): Promise<boolean> {
    const orderNoteService = await this.ordersNotesServicesRepository.findById(id);
    if (!orderNoteService) {
      throw new AppError('OrderNoteService not found.', 404);
    }

    await this.ordersNotesServicesRepository.delete(id);
    await this.cacheProvider.invalidate('orders-notes-services-list');
    await this.cacheProvider.invalidate(`order-note-service-get-${id}`);

    return true;
  }
}

export default DeleteService;
