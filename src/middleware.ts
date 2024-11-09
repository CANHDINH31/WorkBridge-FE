import { NextURL } from 'next/dist/server/web/next-url';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname }: NextURL = request.nextUrl;
  const accessToken = request.cookies.get('access_token');

  if (pathname.startsWith('/auth')) {
    if (accessToken) {
      //  ACTION WHEN HAS ACCESS TOKEN
    }
    return NextResponse.next();
  }

  if (!accessToken) return NextResponse.redirect(new URL('/auth/sign-in', request.url));
  return NextResponse.next();
}

export const config = {
  matcher: ['/auth/:path*'],
};
