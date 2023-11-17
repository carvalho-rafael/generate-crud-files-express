import { MainEntity } from '@shared/infra/typeorm/entities/MainEntity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'persons_contracts' })
class PersonContract {
  @Column()
  name: number;

  @Column()
  undefined: number;
}
  
export default PersonContract;