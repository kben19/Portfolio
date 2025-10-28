import { NextResponse } from 'next/server'
import { cookies } from "next/headers";

export async function GET() {
    'use server'
    const jar = cookies()
    const existing = jar.get('sid')?.value
    const sid = crypto.randomUUID()
    const res = NextResponse.json({ sid: existing ?? 'new' })

    if (!existing) {
        const isDev = process.env.NODE_ENV !== 'production'
        res.cookies.set({
            name: 'sid',
            value: sid,
            path: '/',
            httpOnly: true,
            sameSite: 'lax',
            secure: !isDev, // MUST be false locally
            maxAge: 60 * 60 * 24 * 365, // 1 year
        })
    }

    res.headers.set('Cache-Control', 'no-store')
    return res
}
