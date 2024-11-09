'use client';

import type { IUser } from '@/types/user';

function generateToken(): string {
  const arr = new Uint8Array(12);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, (v) => v.toString(16).padStart(2, '0')).join('');
}

export interface ISignUpParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ISignInWithOAuthParams {
  provider: 'google' | 'discord';
}

export interface ISignInWithPasswordParams {
  email: string;
  password: string;
}

export interface IResetPasswordParams {
  email: string;
}

class AuthClient {
  async signUp(_: ISignUpParams): Promise<{ error?: string }> {
    // Make API request

    // We do not handle the API, so we'll just generate a token and store it in localStorage.
    const token = generateToken();
    localStorage.setItem('access_token', token);

    return {};
  }

  async signInWithOAuth(_: ISignInWithOAuthParams): Promise<{ error?: string }> {
    return { error: 'Social authentication not implemented' };
  }

  async signInWithPassword(params: ISignInWithPasswordParams): Promise<{ error?: string }> {
    const { email, password } = params;

    // Make API request

    // We do not handle the API, so we'll check if the credentials match with the hardcoded ones.
    if (email !== 'sofia@devias.io' || password !== 'Secret1') {
      return { error: 'Invalid credentials' };
    }

    const token = generateToken();
    localStorage.setItem('access_token', token);

    return {};
  }

  async resetPassword(_: IResetPasswordParams): Promise<{ error?: string }> {
    return { error: 'Password reset not implemented' };
  }

  async updatePassword(_: IResetPasswordParams): Promise<{ error?: string }> {
    return { error: 'Update reset not implemented' };
  }

  async getUser(): Promise<{ data?: IUser | null; error?: string }> {
    const token = localStorage.getItem('access_token');

    if (!token) {
      return { data: null };
    }

    return { data: null };
  }

  async signOut(): Promise<{ error?: string }> {
    localStorage.removeItem('access_token');

    return {};
  }
}

export const authClient = new AuthClient();
