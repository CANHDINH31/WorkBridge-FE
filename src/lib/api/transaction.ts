import { request } from '@/utilities/request';

import { ITransactionParams, ITransactionResponse } from '@/types/transaction';

class TransactionService {
  public create = async (data: ITransactionParams): Promise<ITransactionResponse> => {
    try {
      const rs = await request.post('/transactions', data);
      return Promise.resolve(rs.data);
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

export const transactionService = new TransactionService();
