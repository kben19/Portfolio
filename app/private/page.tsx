import { redirect } from 'next/navigation'
import { createServerComponentClient } from '../../utils/supabase/server'

export default async function PrivatePage() {
    const supabase = createServerComponentClient()
    const { data, error } = await supabase.auth.getUser()

    if (error || !data?.user) {
        console.error('Redirecting to /login due to missing user or error:', error)
        // 👇 Debug log (prints in your Vercel/Next.js server logs, not browser)
        // console.log('Supabase getUser result:', JSON.stringify({ data, error }, null, 2))
        redirect('/login')
    }

    return (
        <main className="p-6">
            <h1 className="text-xl">Hello, {data.user.email}</h1>
            <form action="/auth/signout" method="post">
                <button className="mt-4 rounded bg-gray-900 px-4 py-2 text-white">Sign out</button>
            </form>
        </main>
    )
}
