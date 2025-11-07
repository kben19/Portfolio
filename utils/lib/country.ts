// utils/geo.ts
export type CountryRow = { country: string | null; event_count: number };

export function rowsToCountriesProp(rows: CountryRow[]) {
    // Use built-in Intl to resolve country names (fast + no deps)
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

    return rows
        .map((r) => {
            const code = (r.country || '').toUpperCase().trim();
            const isISO2 = /^[A-Z]{2}$/.test(code);
            const name =
                isISO2 ? regionNames.of(code) ?? 'Unknown' : 'Unknown';

            return {
                code: isISO2 ? code : 'XX',         // fallback code
                name,
                visitors: Number(r.event_count) || 0,
            };
        })
        .filter((x) => x.visitors > 0)
        .sort((a, b) => b.visitors - a.visitors);
}
