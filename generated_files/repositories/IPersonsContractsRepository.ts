import ICreatePersonContractDTO from '@modules/commercial/dtos/ICreatePersonContractDTO';
import PersonContract from '@modules/commercial/infra/typeorm/entities/PersonContract';

export default interface IPersonsContractsRepository {
  findAll(): Promise<PersonContract[]>;
  findById(id: number): Promise<PersonContract | undefined>;
  create(data: ICreatePersonContractDTO): Promise<PersonContract>;
  save(data: Partial<PersonContract>): Promise<PersonContract>;
  delete(id: number): Promise<void>;
};
