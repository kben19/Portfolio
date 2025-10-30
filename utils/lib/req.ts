// lib/req.ts
import {headers} from 'next/headers'

export function getReferrer() {
    // header is "referer" (single r) in HTTP
    return headers().get('referer') || null
}

export function getUserAgent() {
    // header is "referer" (single r) in HTTP
    return headers().get('user-agent') || null
}

export function getUserAgentPlatform() {
    // header is "referer" (single r) in HTTP
    return headers().get('sec-ch-ua-platform') || null
}

export function getCountry() {
    // header is "referer" (single r) in HTTP
    return headers().get('x-vercel-ip-country') || 'ZZ'
}

export function getClientIP() {
    // Vercel/most proxies: comma-separated list, take the first
    const xfwd = headers().get('x-forwarded-for')
    if (xfwd) return xfwd.split(',')[0].trim()
    return headers().get('x-real-ip') || null
}

// Simple sticky session id (1y) for grouping a visitor across pages
export async function getOrSetSessionId() {
    'use server'
    return headers().get('x-session-id')
}
