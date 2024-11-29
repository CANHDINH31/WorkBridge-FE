import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

import { paths } from './paths';

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = request.nextUrl;

  if (token && (pathname === paths.auth.signIn || pathname === paths.auth.signUp)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
