import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const res = await request.json();
  return Response.json(
    { res },
    {
      status: 200,
      headers: {
        'Set-cookie': 'access_token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT',
      },
    }
  );
}
