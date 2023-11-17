import { MainEntity } from '@shared/infra/typeorm/entities/MainEntity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'persons_contacts' })
class PersonContact {
  @Column()
  name: number;

  @Column()
  type: number;

  @ManyToOne(() => Person, person => person.personContact)
  @JoinColumn({ name: 'person_id' })
  person?: Person;
}
  
export default PersonContact;
