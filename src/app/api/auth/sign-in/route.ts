import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const res = await request.json();
  const accessToken = res?.accessToken;
  if (!accessToken) {
    return new Response('Invalid access token', { status: 401 });
  }
  return Response.json(
    { res },
    {
      status: 200,
      headers: {
        'Set-cookie': `access_token=${accessToken}; Secure; Path=/`,
      },
    }
  );
}
