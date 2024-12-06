import 'next-auth';

declare module 'next-auth' {
  interface Session {
    info: unknown;
    token: string | null;
  }
}
