import { NextResponse } from 'next/server'
import { createRouteHandlerClient } from '../../../utils/supabase/route'

export async function GET(req: Request) {
    const url = new URL(req.url)
    const code = url.searchParams.get('code')

    if (code) {
        const supabase = createRouteHandlerClient()
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (error) {
            // optional: log or surface
            console.error('exchangeCodeForSession error:', error)
            return NextResponse.redirect(new URL('/login?error=oauth', req.url))
        }
        // touching getUser() is optional now, cookies are set by exchange
    }

    return NextResponse.redirect(new URL('/private', req.url))
}
