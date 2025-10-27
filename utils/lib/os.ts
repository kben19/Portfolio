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