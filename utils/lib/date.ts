export function isoDateKey(d = new Date()) {
    // yyyy-mm-dd
    return d.toISOString().slice(0, 10)
}