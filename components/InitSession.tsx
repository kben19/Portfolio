'use client'
import { useEffect } from 'react'

export function InitSessionCookie() {
    useEffect(() => {
        fetch('/api/session', {
            method: 'GET',
            cache: 'no-store',
            credentials: 'include', // belt & suspenders for Safari
        }).catch(console.error)
    }, [])
    return null
}
