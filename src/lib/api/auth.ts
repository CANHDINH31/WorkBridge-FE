import { request } from '@/utilities/request';

import { ISignInParams, ISignInResponse } from '@/types';

class AuthService {
  private _prefixURL = 'api/login';
  private _prefixURLNextServer = '/api/auth';

  private async handleFetch(url: string, accessToken?: string): Promise<void> {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accessToken }),
    });
  }

  public async signIn(data: ISignInParams): Promise<ISignInResponse> {
    try {
      const params = {
        email: data.email,
        password: data.password,
      };
      const rs = await request.post(this._prefixURL, {}, { params });
      return Promise.resolve(rs.data);
    } catch (error) {
      return Promise.reject(error);
    }
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
