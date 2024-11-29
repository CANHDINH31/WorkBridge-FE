import { request } from '@/utilities/request';

import { ISignUpParams, ISignUpResponse } from '@/types';

class AuthService {
  public signUp = async (data: ISignUpParams): Promise<ISignUpResponse> => {
    try {
      const rs = await request.post('/auth/register', data);
      return Promise.resolve(rs.data);
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

export const authService = new AuthService();
