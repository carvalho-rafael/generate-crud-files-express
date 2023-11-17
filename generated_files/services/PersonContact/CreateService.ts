import { inject, injectable } from 'tsyringe';

import ICacheProvider from '@shared/contanier/providers/CacheProvider/models/ICacheProvider';
import ICreatePersonContactDTO from '@modules/commercial/dtos/ICreatePersonContactDTO';
import PersonContact from '@modules/commercial/infra/typeorm/entities/PersonContact';
import IPersonsContactsRepository from '@modules/commercial/repositories/IPersonsContactsRepository';

@injectable()
class CreateService {
  constructor(
    @inject('PersonsContactsRepository')
    private personsContactsRepository: IPersonsContactsRepository,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(
    createData: ICreatePersonContactDTO,
  ): Promise<PersonContact> {
    const personContact = await this.personsContactsRepository.create(createData);
    await this.cacheProvider.invalidatePrefix('persons-contacts-list');

    return personContact;
  }
}

export default CreateService;
