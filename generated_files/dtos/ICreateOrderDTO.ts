export default interface ICreateOrderDTO {
  type: string;
  purchase_id?: number;
  client_id?: number;
  agent_id?: number;
  old_agent_id?: number;
  transfer_order_date?: date;
  transferencia_usuario_id?: number;
  consultant_id?: number;
  invoice_id?: number;
  final_consumer?: number;
  provider_companies?: number;
  purchase_number?: string;
  client_name?: string;
  date?: date;
  delivery_deadline?: string;
  production_limit_date?: number;
  period?: number;
  contact_name?: string;
  contact_phone_number?: string;
  contact_cellphone_number?: string;
  contact_email?: string;
  contact_position?: string;
  pay_with?: string;
  payment_method?: string;
  payment_method_type?: string;
  payment_method_text?: string;
  days?: number;
  installments?: number;
  history?: string;
  validity?: string;
  notes?: string;
  budget_notes?: string;
  invoice_notes?: string;
  os_notes?: string;
  status: string;
  status_date?: date;
  situation: string;
  email_situation?: number;
  email_situation_agent?: number;
  quality_situation: string;
  quality_situation?: string;
  quality_date?: date;
  email_date?: date;
  email_date_agent?: date;
  disaproval_reason?: string;
  negative: number;
  negative: number;
  items_type: string;
  items_text?: string;
  products_value?: string;
  ipi_value?: string;
  industry_value?: string;
  market_value?: string;
  total_value: string;
  total_value_with_shipping_embedded?: string;
  freight_percentage?: string;
  freight_value?: string;
  paid_freight_value?: string;
  operational_profit_value?: string;
  manual_freight?: boolean;
  discount_value?: string;
  discount_percentage?: string;
  interests?: undefined;
  event?: string;
  do_mounting?: number;
  company_delivery: number;
  delivery_destination?: string;
  delivery_destination_street?: string;
  delivery_destination_number?: string;
  delivery_destination_complement?: string;
  delivery_destination_district?: string;
  delivery_destination_city?: string;
  delivery_destination_state?: string;
  delivery_destination_zip_code?: string;
  delivery_destination_reference?: string;
  pick_up_location?: string;
  pick_up_location_zip_code?: string;
  pick_up_location_reference?: string;
  pick_up_location_street?: string;
  pick_up_location_number?: string;
  pick_up_location_complement?: string;
  pick_up_location_district?: string;
  pick_up_location_city?: string;
  pick_up_location_state?: string;
  delivery_date?: date;
  pick_up_date?: date;
  delivery_time?: string;
  pick_up_time?: string;
  carrier_id?: number;
  invoice_date?: date;
  freights_services?: string;
  show_orders_complete_data?: number;
  show_history?: number;
  show_notes?: number;
  show_responsibles?: number;
  user_id?: number;
  user_name?: string;
  hash: string;
  ref?: string;
  stock: number;
  released: number;
  os_delivey_printed: number;
  os_delivery_by_printed?: string;
  os_pick_up_printed: number;
  os_pick_up_by_printed?: string;
  invoice_printed: number;
  invoice_number_sequence?: number;
  bill_printed: number;
  invoice_number?: string;
  show_total_value: number;
  show_unit_value: number;
  show_budget_unit_value: number;
  show_daily_value?: number;
  show_included_freight?: boolean;
  show_tape?: number;
  pending_stock: number;
  volume?: number;
  weight?: string;
  dispatch_date?: date;
  dispatch?: boolean;
  dispatch_user?: string;
  delivered?: boolean;
  delivered_datee?: date;
  delivered_date_user?: string;
  picked_up?: boolean;
  picked_up_date?: date;
  picked_up_user?: string;
  important: string;
  defaulting?: boolean;
  defaulting?: boolean;
  financial_reversed?: boolean;
  monitoring_situation?: string;
  dir?: number;
  location_contract_signed?: string;
  order_origin?: number;
  location_renewed?: number;
  location_extended?: number;
  order_previous?: number;
  order_signed?: string;
  checklist?: string;
  expedicao_status_id?: number;
  expedicao_status_expiracao?: date;
  expedicao_status_data?: date;
  expedicao_status_anterior_id?: number;
  nfe_printed?: boolean;
  height?: string;
  length?: string;
  width?: string;
  volumes_json?: undefined;
  date_goal_accomplished?: date;
}