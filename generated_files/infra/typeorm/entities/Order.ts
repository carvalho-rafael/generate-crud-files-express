import { MainEntity } from '@shared/infra/typeorm/entities/MainEntity';
import { Entity, Column, ManyToOne, ManyToOne, ManyToOne, ManyToOne, ManyToOne } from 'typeorm';
import ClientNew from '@modules/commercial/infra/typeorm/entities/ClientNew';
,import OrderExpeditionStatus from '@modules/commercial/infra/typeorm/entities/OrderExpeditionStatus';
,import OrderExpeditionStatus from '@modules/commercial/infra/typeorm/entities/OrderExpeditionStatus';
,import Agent from '@modules/commercial/infra/typeorm/entities/Agent';
,import Carrier from '@modules/commercial/infra/typeorm/entities/Carrier';

@Entity({ name: 'orders' })
class Order extends MainEntity {
  @Column()
  type: string;

  @Column()
  purchase_id?: number;

  @Column()
  client_id?: number;

  @Column()
  agent_id?: number;

  @Column()
  old_agent_id?: number;

  @Column()
  transfer_order_date?: date;

  @Column()
  transferencia_usuario_id?: number;

  @Column()
  consultant_id?: number;

  @Column()
  invoice_id?: number;

  @Column()
  final_consumer?: number;

  @Column()
  provider_companies?: number;

  @Column()
  purchase_number?: string;

  @Column()
  client_name?: string;

  @Column()
  date?: date;

  @Column()
  delivery_deadline?: string;

  @Column()
  production_limit_date?: number;

  @Column()
  period?: number;

  @Column()
  contact_name?: string;

  @Column()
  contact_phone_number?: string;

  @Column()
  contact_cellphone_number?: string;

  @Column()
  contact_email?: string;

  @Column()
  contact_position?: string;

  @Column()
  pay_with?: string;

  @Column()
  payment_method?: string;

  @Column()
  payment_method_type?: string;

  @Column()
  payment_method_text?: string;

  @Column()
  days?: number;

  @Column()
  installments?: number;

  @Column()
  history?: string;

  @Column()
  validity?: string;

  @Column()
  notes?: string;

  @Column()
  budget_notes?: string;

  @Column()
  invoice_notes?: string;

  @Column()
  os_notes?: string;

  @Column()
  status: string;

  @Column()
  status_date?: date;

  @Column()
  situation: string;

  @Column()
  email_situation?: number;

  @Column()
  email_situation_agent?: number;

  @Column()
  quality_situation: string;

  @Column()
  quality_situation?: string;

  @Column()
  quality_date?: date;

  @Column()
  email_date?: date;

  @Column()
  email_date_agent?: date;

  @Column()
  disaproval_reason?: string;

  @Column()
  negative: number;

  @Column()
  negative: number;

  @Column()
  items_type: string;

  @Column()
  items_text?: string;

  @Column()
  products_value?: string;

  @Column()
  ipi_value?: string;

  @Column()
  industry_value?: string;

  @Column()
  market_value?: string;

  @Column()
  total_value: string;

  @Column()
  total_value_with_shipping_embedded?: string;

  @Column()
  freight_percentage?: string;

  @Column()
  freight_value?: string;

  @Column()
  paid_freight_value?: string;

  @Column()
  operational_profit_value?: string;

  @Column()
  manual_freight?: boolean;

  @Column()
  discount_value?: string;

  @Column()
  discount_percentage?: string;

  @Column()
  interests?: undefined;

  @Column()
  event?: string;

  @Column()
  do_mounting?: number;

  @Column()
  company_delivery: number;

  @Column()
  delivery_destination?: string;

  @Column()
  delivery_destination_street?: string;

  @Column()
  delivery_destination_number?: string;

  @Column()
  delivery_destination_complement?: string;

  @Column()
  delivery_destination_district?: string;

  @Column()
  delivery_destination_city?: string;

  @Column()
  delivery_destination_state?: string;

  @Column()
  delivery_destination_zip_code?: string;

  @Column()
  delivery_destination_reference?: string;

  @Column()
  pick_up_location?: string;

  @Column()
  pick_up_location_zip_code?: string;

  @Column()
  pick_up_location_reference?: string;

  @Column()
  pick_up_location_street?: string;

  @Column()
  pick_up_location_number?: string;

  @Column()
  pick_up_location_complement?: string;

  @Column()
  pick_up_location_district?: string;

  @Column()
  pick_up_location_city?: string;

  @Column()
  pick_up_location_state?: string;

  @Column()
  delivery_date?: date;

  @Column()
  pick_up_date?: date;

  @Column()
  delivery_time?: string;

  @Column()
  pick_up_time?: string;

  @Column()
  carrier_id?: number;

  @Column()
  invoice_date?: date;

  @Column()
  freights_services?: string;

  @Column()
  show_orders_complete_data?: number;

  @Column()
  show_history?: number;

  @Column()
  show_notes?: number;

  @Column()
  show_responsibles?: number;

  @Column()
  user_id?: number;

  @Column()
  user_name?: string;

  @Column()
  hash: string;

  @Column()
  ref?: string;

  @Column()
  stock: number;

  @Column()
  released: number;

  @Column()
  os_delivey_printed: number;

  @Column()
  os_delivery_by_printed?: string;

  @Column()
  os_pick_up_printed: number;

  @Column()
  os_pick_up_by_printed?: string;

  @Column()
  invoice_printed: number;

  @Column()
  invoice_number_sequence?: number;

  @Column()
  bill_printed: number;

  @Column()
  invoice_number?: string;

  @Column()
  show_total_value: number;

  @Column()
  show_unit_value: number;

  @Column()
  show_budget_unit_value: number;

  @Column()
  show_daily_value?: number;

  @Column()
  show_included_freight?: boolean;

  @Column()
  show_tape?: number;

  @Column()
  pending_stock: number;

  @Column()
  volume?: number;

  @Column()
  weight?: string;

  @Column()
  dispatch_date?: date;

  @Column()
  dispatch?: boolean;

  @Column()
  dispatch_user?: string;

  @Column()
  delivered?: boolean;

  @Column()
  delivered_datee?: date;

  @Column()
  delivered_date_user?: string;

  @Column()
  picked_up?: boolean;

  @Column()
  picked_up_date?: date;

  @Column()
  picked_up_user?: string;

  @Column()
  important: string;

  @Column()
  defaulting?: boolean;

  @Column()
  defaulting?: boolean;

  @Column()
  financial_reversed?: boolean;

  @Column()
  monitoring_situation?: string;

  @Column()
  dir?: number;

  @Column()
  location_contract_signed?: string;

  @Column()
  order_origin?: number;

  @Column()
  location_renewed?: number;

  @Column()
  location_extended?: number;

  @Column()
  order_previous?: number;

  @Column()
  order_signed?: string;

  @Column()
  checklist?: string;

  @Column()
  expedicao_status_id?: number;

  @Column()
  expedicao_status_expiracao?: date;

  @Column()
  expedicao_status_data?: date;

  @Column()
  expedicao_status_anterior_id?: number;

  @Column()
  nfe_printed?: boolean;

  @Column()
  height?: string;

  @Column()
  length?: string;

  @Column()
  width?: string;

  @Column()
  volumes_json?: undefined;

  @Column()
  date_goal_accomplished?: date;

  @ManyToOne(() => ClientNew, clientnew => clientnew.order)
  @JoinColumn({ name: 'client_id' })
  clientNew?: ClientNew;
  @ManyToOne(() => OrderExpeditionStatus, orderexpeditionstatus => orderexpeditionstatus.order)
  @JoinColumn({ name: 'expedicao_status_id' })
  expedition?: OrderExpeditionStatus;
  @ManyToOne(() => OrderExpeditionStatus, orderexpeditionstatus => orderexpeditionstatus.order)
  @JoinColumn({ name: 'expedicao_status_anterior_id' })
  expedition?: OrderExpeditionStatus;
  @ManyToOne(() => Agent, agent => agent.order)
  @JoinColumn({ name: 'agent_id' })
  agent?: Agent;
  @ManyToOne(() => Carrier, carrier => carrier.order)
  @JoinColumn({ name: 'carrier_id' })
  carrier?: Carrier;
}
  
export default Order;
