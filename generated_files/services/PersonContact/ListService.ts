import { inject, injectable } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ICacheProvider from '@shared/contanier/providers/CacheProvider/models/ICacheProvider';
import IPersonsContactsRepository from '@modules/commercial/repositories/IPersonsContactsRepository';
import PersonContact from '@modules/commercial/infra/typeorm/entities/PersonContact';

@injectable()
class ListService {
  constructor(
    @inject('PersonsContactsRepository')
    private personsContactsRepository: IPersonsContactsRepository,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(): Promise<PersonContact[]> {
    const cacheKey = 'persons-contacts-list';
    let personsContacts = await this.cacheProvider.recover<PersonContact[]>(
      cacheKey,
    );

    if (!personsContacts) {
      personsContacts = await this.personsContactsRepository.findAll();
      await this.cacheProvider.save(cacheKey, classToClass(personsContacts));
    }

    return personsContacts;
  }
}

export default ListService;
