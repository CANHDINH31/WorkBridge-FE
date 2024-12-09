import { request } from '@/utilities/request';

import { IGoogleResponse } from '@/types';
import { ITransactionParams } from '@/types/transaction';

class TransactionService {
  public create = async (data: ITransactionParams): Promise<IGoogleResponse> => {
    try {
      const rs = await request.post('/transactions', data);
      return Promise.resolve(rs.data);
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

export const transactionService = new TransactionService();
