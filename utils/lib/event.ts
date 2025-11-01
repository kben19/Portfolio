import { headers } from "next/headers";
import { getClientIP, getCountry, getOrSetSessionId, getReferrer, getUserAgent, getUserAgentPlatform } from "./req";
import { detectBrowser, detectOS } from "./user-agent";
import { sha256Hex } from "./encode";
import { createServerComponentClient } from "../supabase/server";
import { isoDateKey } from "./date";

export async function insertEvent(path: string) {
    const supabase = createServerComponentClient()
    
        const hdrs = headers()
        const country = getCountry();
        const ua = getUserAgent() || 'unknown';
        const uaPlatform = getUserAgentPlatform(); // UA-CH
        const os = detectOS({ ua, uaPlatform });
        const ip = getClientIP()       // may be null on some proxies/bots
        const ip_hash = ip ? await sha256Hex(ip) : '';
        const session_id = await getOrSetSessionId();
        const browser_type = detectBrowser(ua);
    
        // Insert traffic metadata
        try {
            const isBot = /(vercel-(favicon|screenshot)|bot|crawler|spider|crawl|crawling|preview|uptime)/i.test(ua)
            if (isBot) {
                // Skipping Vercel screenshot bot and other bots
                return;
            }
            const dest = hdrs.get('sec-fetch-dest')      // e.g. 'document', 'image', 'script'
            const mode = hdrs.get('sec-fetch-mode')      // e.g. 'navigate'
            if (!(dest === 'document' && mode === 'navigate')) {
                // e.g. favicon fetches are often not document navigations
                return
            }
            await supabase.from('traffic_events').insert([
                {
                    path: path,
                    country,
                    user_agent: ua,
                    device_type: /mobile|android|iphone/i.test(ua) ? 'mobile' : 'desktop',
                    os_type: os,
                    browser_type: browser_type,
                    meta: {visited_at: new Date().toISOString()},
                    referrer: getReferrer(),
                    ip_hash: ip_hash,
                    session_id: session_id,
                    date_key: isoDateKey(),
                },
            ])
        } catch (e) {
            console.error('Insert failed:', e)
        }
}