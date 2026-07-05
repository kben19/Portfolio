// utils/geo.ts
// Row shape returned by the `count_traffic_by_country` RPC — one row per
// country over the date range, with both page views and distinct visitors.
export type CountryRow = {
    country: string | null;
    page_views: number | string;
    unique_visitors: number | string;
};

export function rowsToCountriesProp(rows: CountryRow[]) {
    // Use built-in Intl to resolve country names (fast + no deps)
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

    return rows
        .map((r) => {
            const code = (r.country || '').toUpperCase().trim();
            const isISO2 = /^[A-Z]{2}$/.test(code);
            const name =
                isISO2 ? regionNames.of(code) ?? 'Unknown' : 'Unknown';

            const pageViews = Number(r.page_views) || 0;
            const uniqueVisitors = Number(r.unique_visitors) || 0;

            return {
                code: isISO2 ? code : 'XX',         // fallback code
                name,
                visitors: pageViews,                // percent basis (share of page views)
                pageViews,
                uniqueVisitors,
            };
        })
        .filter((x) => x.pageViews > 0)
        .sort((a, b) => b.pageViews - a.pageViews);
}
