import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
    const requestHeaders = new Headers(req.headers)
    const res = NextResponse.next({
        request: { headers: requestHeaders },
    })
    let sid = req.cookies.get('sid')?.value

    if (!sid) {
        sid = crypto.randomUUID()
        res.cookies.set({
            name: 'sid',
            value: sid,
            path: '/',
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production', // false on http://localhost
            maxAge: 60 * 60 * 24 * 365, // 1 year
        })
    }

    // Inject sid into request headers
    requestHeaders.set('x-session-id', sid)
    res.headers.set('x-session-id', sid)

    return res
}

export const config = {
    matcher: ['/:path*'],
}
