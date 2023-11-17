import { inject, injectable } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AppError from '@shared/errors/AppError';
import ICacheProvider from '@shared/contanier/providers/CacheProvider/models/ICacheProvider';
import IPersonsContactsRepository from '@modules/commercial/repositories/IPersonsContactsRepository';
import PersonContact from '@modules/commercial/infra/typeorm/entities/PersonContact';

@injectable()
class GetService {
  constructor(
    @inject('PersonsContactsRepository')
    private personsContactsRepository: IPersonsContactsRepository,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(id: number): Promise<PersonContact> {
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

    return personContact;
  }
}

export default GetService;
