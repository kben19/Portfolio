'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '../../utils/supabase/client'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState<string | null>(null)
    const router = useRouter()
    const supabase = createClient()

    async function onEmailPassword(e: React.FormEvent) {
        e.preventDefault()
        setErrorMsg(null); setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        setLoading(false)
        if (error) return setErrorMsg(error.message)
        router.replace('/private') // full redirect so server sees cookies
    }

    async function onOAuth(provider: 'google' | 'github') {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider,
            options: { redirectTo: `${location.origin}/auth/callback` },
        })
        if (error) setErrorMsg(error.message)
        // for OAuth you’ll be redirected automatically
    }

    return (
        <main className="mx-auto max-w-sm p-6">
            <h1 className="mb-4 text-xl font-semibold">Sign in</h1>

            <form onSubmit={onEmailPassword} className="space-y-3">
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    className="w-full rounded border p-2"
                />
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    className="w-full rounded border p-2"
                />
                <button
                    disabled={loading}
                    className="w-full rounded bg-gray-900 p-2 text-white"
                >
                    {loading ? 'Signing in…' : 'Sign in'}
                </button>
            </form>

            <div className="mt-4 flex gap-2">
                <button onClick={() => onOAuth('google')} className="flex-1 rounded border p-2">
                    Continue with Google
                </button>
                <button onClick={() => onOAuth('github')} className="flex-1 rounded border p-2">
                    Continue with GitHub
                </button>
            </div>

            {errorMsg && <p className="mt-3 text-sm text-red-600">{errorMsg}</p>}
        </main>
    )
}
