import { getRepository, Repository } from 'typeorm';

import IPersonsContractsRepository from '@modules/commercial/repositories/IPersonsContractsRepository';
import ICreatePersonContractDTO from '@modules/commercial/dtos/ICreatePersonContractDTO';
import PersonContract from '../entities/PersonContract';
  
class PersonsContractsRepository implements IPersonsContractsRepository {
  private ormRepository: Repository<PersonContract>;

  constructor() {
    this.ormRepository = getRepository(PersonContract);
  }

  public async findAll(): Promise<PersonContract[]> {
    const personsContracts = await this.ormRepository.find();
    return personsContracts;
  }

  public async findById(id: number): Promise<PersonContract | undefined> {
    const personContract = await this.ormRepository.findOne(id);
    return personContract;
  }

  public async create(
    personContractData: ICreatePersonContractDTO,
  ): Promise<PersonContract> {
    const personContract = this.ormRepository.create({
      ...personContractData,
    });

    await this.ormRepository.save(personContract);

    return personContract;
  }

  public save(personContract: PersonContract): Promise<PersonContract> {
    return this.ormRepository.save(personContract);
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
  
export default PersonsContractsRepository;
