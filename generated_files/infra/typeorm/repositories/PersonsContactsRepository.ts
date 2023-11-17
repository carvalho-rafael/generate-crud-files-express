import { getRepository, Repository } from 'typeorm';

import IPersonsContactsRepository from '@modules/commercial/repositories/IPersonsContactsRepository';
import ICreatePersonContactDTO from '@modules/commercial/dtos/ICreatePersonContactDTO';
import PersonContact from '../entities/PersonContact';
  
class PersonsContactsRepository implements IPersonsContactsRepository {
  private ormRepository: Repository<PersonContact>;

  constructor() {
    this.ormRepository = getRepository(PersonContact);
  }

  public async findAll(): Promise<PersonContact[]> {
    const personsContacts = await this.ormRepository.find();
    return personsContacts;
  }

  public async findById(id: number): Promise<PersonContact | undefined> {
    const personContact = await this.ormRepository.findOne(id);
    return personContact;
  }

  public async create(
    personContactData: ICreatePersonContactDTO,
  ): Promise<PersonContact> {
    const personContact = this.ormRepository.create({
      ...personContactData,
    });

    await this.ormRepository.save(personContact);

    return personContact;
  }

  public save(personContact: PersonContact): Promise<PersonContact> {
    return this.ormRepository.save(personContact);
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
  
export default PersonsContactsRepository;
