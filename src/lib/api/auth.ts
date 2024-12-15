import { request } from '@/utilities/request';

import {
  IGoogleParams,
  IGoogleResponse,
  ISignInParams,
  ISignInResponse,
  ISignUpParams,
  ISignUpResponse,
} from '@/types';

class AuthService {
  private _prefixURLNextServer = '/api/auth';

  public signUp = async (data: ISignUpParams): Promise<ISignUpResponse> => {
    try {
      const rs = await request.post('/auth/register', data);
      return Promise.resolve(rs.data);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  public loginGoogle = async (data: IGoogleParams): Promise<IGoogleResponse> => {
    try {
      const rs = await request.post('/auth/google', data);
      return Promise.resolve(rs.data);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  public signIn = async (data: ISignInParams): Promise<ISignInResponse> => {
    try {
      const rs = await request.post('/auth/sign-in', data);
      return Promise.resolve(rs.data);
    } catch (error) {
      return Promise.reject(error);
    }
  };

<<<<<<< HEAD
  public forgotPassword = async ({ email }: { email: string }): Promise<ISignInResponse> => {
=======
  public forgotPassword = async (email: string): Promise<ISignInResponse> => {
>>>>>>> a5decaeef4503245b7a1d9d59cbf7543df2a4a83
    try {
      const rs = await request.post('/auth/forgot-password', { email });
      return Promise.resolve(rs.data);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  public verifyToken = async (token: string): Promise<ISignInResponse> => {
    try {
      const rs = await request.post('/auth/verify-token', { token });
      return Promise.resolve(rs.data);
    } catch (error) {
      console.log(error, 'errorrrrr');
      return Promise.reject(error);
    }
  };

  private async handleFetch(url: string, accessToken?: string): Promise<void> {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accessToken }),
    });
  }

  public async setCookiesByNextServer(accessToken: string): Promise<void> {
    try {
      await this.handleFetch(`${this._prefixURLNextServer}/sign-in`, accessToken);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async removeCookiesByNextServer(): Promise<void> {
    try {
      await this.handleFetch(`${this._prefixURLNextServer}/sign-out`);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export const authService = new AuthService();
