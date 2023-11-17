import { MainEntity } from '@shared/infra/typeorm/entities/MainEntity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'orders' })
class Order {
  @Column()
  name: number;

  @Column()
  undefined: number;
}
  
export default Order;