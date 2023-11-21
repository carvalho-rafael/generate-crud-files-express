import ICreateOrderNoteServiceDTO from '@modules/commercial/dtos/ICreateOrderNoteServiceDTO';
import OrderNoteService from '@modules/commercial/infra/typeorm/entities/OrderNoteService';

export default interface IOrdersNotesServicesRepository {
  findAll(): Promise<OrderNoteService[]>;
  findById(id: number): Promise<OrderNoteService | undefined>;
  create(data: ICreateOrderNoteServiceDTO): Promise<OrderNoteService>;
  save(data: Partial<OrderNoteService>): Promise<OrderNoteService>;
  delete(id: number): Promise<void>;
}
