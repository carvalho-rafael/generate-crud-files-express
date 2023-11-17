import ICreatePersonContactDTO from '@modules/commercial/dtos/ICreatePersonContactDTO';
import PersonContact from '@modules/commercial/infra/typeorm/entities/PersonContact';

export default interface IPersonsContactsRepository {
  findAll(): Promise<PersonContact[]>;
  findById(id: number): Promise<PersonContact | undefined>;
  create(data: ICreatePersonContactDTO): Promise<PersonContact>;
  save(data: Partial<PersonContact>): Promise<PersonContact>;
  delete(id: number): Promise<void>;
};
