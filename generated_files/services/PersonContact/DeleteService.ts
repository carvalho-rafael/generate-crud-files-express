import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import ICacheProvider from '@shared/contanier/providers/CacheProvider/models/ICacheProvider';
import IPersonsContactsRepository from '@modules/commercial/repositories/IPersonsContactsRepository';

interface IRequest {
  id: number;
}

@injectable()
class DeleteService {
  constructor(
    @inject('PersonsContactsRepository')
    private personsContactsRepository: IPersonsContactsRepository,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ id }: IRequest): Promise<boolean> {
    const personContact = await this.personsContactsRepository.findById(id);
    if (!personContact) {
      throw new AppError('PersonContact not found.', 404);
    }

    await this.personsContactsRepository.delete(id);
    await this.cacheProvider.invalidate('persons-contacts-list');
    await this.cacheProvider.invalidate(`person-contact-get-${id}`);

    return true;
  }
}

export default DeleteService;
