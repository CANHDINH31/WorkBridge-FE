import 'next-auth';

declare module 'next-auth' {
  interface Session {
    info: { email: string };
    token: string | null;
  }
}
