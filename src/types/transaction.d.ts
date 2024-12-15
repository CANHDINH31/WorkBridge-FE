export interface ITransactionParams {
  title: string;
  inspection_period: number;
  role?: 'seller' | 'buyer' | 'broker';
  currency?: 'vnd' | 'usd';
  name?: string;
  price: number;
  description?: string;
  category: string;
  fee_price?: number;
  shipping_method?: 'standard_shipping' | 'cargo_shipping' | 'no_shipping';
  shipping_fee_paid_by?: 'buyer' | 'seller';
  make?: string;
  model?: string;
  year?: string;
  odometerear?: string;
  vin?: string;
  fee_workbridge?: 'buyer' | 'seller' | 'fair';
  email?: string;
  phone?: string;
  disclosure?: 'confidential' | 'buyer' | 'seller' | 'buyer_and_seller';
}

export interface ITransactionResponse {
  message: string;
  data: ITransactionParams & { _id: string };
}
