import { NextResponse } from 'next/server'
import { createRouteHandlerClient } from '../../../utils/supabase/route'

export async function POST(request: Request) {
    const supabase = createRouteHandlerClient()
    await supabase.auth.signOut()
    const res = NextResponse.redirect(new URL('/', request.url))
    res.cookies.delete('sid')
    return res
}
