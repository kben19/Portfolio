export function detectOS({
                             ua,
                             uaPlatform,
                         }: { ua?: string | null; uaPlatform?: string | null }):
    'windows'|'macos'|'linux'|'android'|'ios'|'chromeos'|'other' {

    const p = (uaPlatform || '').toLowerCase();
    if (p.includes('windows')) return 'windows';
    if (p.includes('mac') || p.includes('macos') || p.includes('darwin')) return 'macos';
    if (p.includes('android')) return 'android';
    if (p.includes('ios') || p.includes('iphone') || p.includes('ipad')) return 'ios';
    if (p.includes('chrome os') || p.includes('chromeos') || p.includes('cros')) return 'chromeos';
    if (p.includes('linux')) return 'linux';

    const u = (ua || '').toLowerCase(); // fallback
    if (/windows/i.test(u)) return 'windows';
    if (/mac os x|macintosh|darwin/i.test(u)) return 'macos';
    if (/android/i.test(u)) return 'android';
    if (/iphone|ipad|ipod|ios/i.test(u)) return 'ios';
    if (/cros/i.test(u)) return 'chromeos';
    if (/linux/i.test(u)) return 'linux';
    return 'other';
}

export function detectBrowser(ua: string): string {
    ua = ua.toLowerCase();

    if (ua.includes("edg/") || ua.includes("edga/") || ua.includes("edgios")) return "Microsoft Edge";
    if (ua.includes("opr/") || ua.includes("opera")) return "Opera";
    if (ua.includes("chrome") && !ua.includes("chromium") && !ua.includes("edg/")) return "Chrome";
    if (ua.includes("firefox")) return "Firefox";
    if (ua.includes("safari") && !ua.includes("chrome")) return "Safari";
    if (ua.includes("chromium")) return "Chromium";
    if (ua.includes("brave")) return "Brave";
    if (ua.includes("vivaldi")) return "Vivaldi";
    if (ua.includes("duckduckgo")) return "DuckDuckGo";
    if (ua.includes("vercel-favicon") || ua.includes("vercel-screenshot")) return "Vercel Bot";
    if (ua.includes("bot") || ua.includes("crawler") || ua.includes("spider")) return "Bot";

    return "Unknown";
}
