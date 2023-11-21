export default interface ICreateOrderNoteServiceDTO {
  type: string;
  note: string;
  active: boolean;
  user_id: number;
  user_name: string;
}
