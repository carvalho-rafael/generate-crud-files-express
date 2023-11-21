import { MainEntity } from '@shared/infra/typeorm/entities/MainEntity';
import { Entity, Column, ManyToOne } from 'typeorm';
import User from '@modules/commercial/infra/typeorm/entities/User';

@Entity({ name: 'orders_notes_services' })
class OrderNoteService extends MainEntity {
  @Column()
  type: string;

  @Column()
  note: string;

  @Column()
  active: boolean;

  @Column()
  user_id: number;

  @Column()
  user_name?: string;

  @ManyToOne(() => User, user => user.orderNoteService)
  @JoinColumn({ name: 'user_id' })
  user?: User;
}
  
export default OrderNoteService;
