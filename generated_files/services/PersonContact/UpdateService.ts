import { inject, injectable } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AppError from '@shared/errors/AppError';
import ICacheProvider from '@shared/contanier/providers/CacheProvider/models/ICacheProvider';
import ICreatePersonContactDTO from '@modules/commercial/dtos/ICreatePersonContactDTO';
import IPersonsContactsRepository from '@modules/commercial/repositories/IPersonsContactsRepository';
import PersonContact from '@modules/commercial/infra/typeorm/entities/PersonContact';

interface IRequest extends ICreatePersonContactDTO {
  id: number;
}

@injectable()
class UpdateService {
  constructor(
    @inject('PersonsContactsRepository')
    private personsContactsRepository: IPersonsContactsRepository,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(personContactUpdate: IRequest): Promise<PersonContact> {
    const id = personContactUpdate.id;
    const cacheKey = `person-contact-get-${id}`;
    let personContact = await this.cacheProvider.recover<PersonContact | undefined>(
      cacheKey,
    );
    if (!personContact) {
      personContact = await this.personsContactsRepository.findById(id);
      this.cacheProvider.save(cacheKey, classToClass(personContact));
    }
    if (!personContact) {
      throw new AppError('personContact not found.', 404);
    }

    await this.personsContactsRepository.save({
      ...personContact,
      ...personContactUpdate,
    });
    await this.cacheProvider.invalidate('persons-contacts-list');
    await this.cacheProvider.invalidate(cacheKey);

    return personContact;
  }
}

export default UpdateService;
