// components/AboutSection.tsx
import DashboardPanel from "./DashboardPanel";
import { createServerComponentClient } from "../utils/supabase/server";
import { SiSupabase } from "react-icons/si";
import SocialLinks from "./SocialLink";
import { rowsToCountriesProp } from "../utils/lib/country";

// Row shape returned by the `count_daily_traffic` RPC — one row per calendar
// day in range (zero-filled, no gaps), ordered ascending by day.
type DailyTrafficRow = { day: string; page_views: number | string; visitors: number | string };

function pctChange(curr?: number | null, prev?: number | null) {
    const c = curr ?? 0;
    const p = prev ?? 0;
    if (p === 0) return c > 0 ? 100 : 0;
    return ((c - p) / p) * 100;
}


export default async function AboutSection() {
    const supabase = createServerComponentClient()
    // make a YYYY-MM-DD string for 7 days ago
    const today = new Date();
    const endPrevious = new Date();
    endPrevious.setMonth(endPrevious.getMonth() - 1);
    endPrevious.setDate(endPrevious.getDate() - 1);
    const endPreviousStr = endPrevious.toISOString().slice(0,10);
    const end = today.toISOString().slice(0, 10);
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const startMonthAgo = oneMonthAgo.toISOString().slice(0, 10);
    const twoMonthAgo = new Date();
    twoMonthAgo.setMonth(twoMonthAgo.getMonth() - 2)
    const startTwoMonthAgo = twoMonthAgo.toISOString().slice(0, 10);

    const [pvNow, pvPrev, uNow, uPrev, byCountry, byDevice, byBrowser, byOS, byReferrer, dailyTraffic] = await Promise.all([
        supabase.rpc('count_page_views', { start_date: startMonthAgo, end_date: end }),
        supabase.rpc('count_page_views', { start_date: startTwoMonthAgo, end_date: endPreviousStr }),
        supabase.rpc('count_unique_visitors', { start_date: startMonthAgo, end_date: end }),
        supabase.rpc('count_unique_visitors', { start_date: startTwoMonthAgo, end_date: endPreviousStr }),
        supabase.rpc('count_traffic_by_country', { start_date: startMonthAgo, end_date: end }),
        supabase.rpc('count_events_by_device_range', { start_date: startMonthAgo, end_date: end }),
        supabase.rpc('count_events_by_browser_range', { start_date: startMonthAgo, end_date: end }),
        supabase.rpc('count_traffic_by_os', { start_date: startMonthAgo, end_date: end }),
        supabase.rpc('count_events_by_referrer_range', { start_date: startMonthAgo, end_date: end }),
        supabase.rpc('count_daily_traffic', { start_date: startMonthAgo, end_date: end }),
    ]);

    const pageViews = Number(pvNow.data ?? 0);
    const pageViewsPrev = Number(pvPrev.data ?? 0);
    const uniqueNow = Number(uNow.data ?? 0);
    const uniquePrev = Number(uPrev.data ?? 0);
    const countries = rowsToCountriesProp(byCountry.data ?? []);
    const devices = (byDevice.data ?? []).map((d: any) => {
        return {
            name: d.device,
            visitors: Number(d.event_count),
        };
    });
    const browsers = (byBrowser.data ?? []).map((d: any) => {
        return {
            name: d.browser,
            visitors: Number(d.event_count),
        };
    }).filter((x: any) => x.name!== 'Unknown');
    const os_types = (byOS.data ?? []).map((d: any) => {
        const pageViews = Number(d.page_views);
        return {
            name: d.os,
            visitors: pageViews,           // percent basis (share of page views)
            pageViews,
            uniqueVisitors: Number(d.unique_visitors),
        };
    }).filter((x: any) => x.name!== 'Unknown');
    const referrers = (byReferrer.data ?? []).map((d: any) => {
        return {
            name: d.referrer,
            visitors: Number(d.event_count),
        };
    }).filter((x: any) => x.name!== 'Unknown');

    const dailyRows: DailyTrafficRow[] = dailyTraffic.data ?? [];
    const series = {
        dates: dailyRows.map((r) =>
            new Date(r.day + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        ),
        visitors: dailyRows.map((r) => Number(r.visitors)),
        pageViews: dailyRows.map((r) => Number(r.page_views)),
    };

    const deltaPV = Math.round(pctChange(pageViews, pageViewsPrev));
    const deltaUnique = Math.round(pctChange(uniqueNow, uniquePrev));
    const deltaUQTone = deltaUnique >= 0 ? "good" : "bad";
    const deltaPVTone = deltaPV >= 0 ? "good" : "bad";

    return (
        <section id="about" className="w-full bg-[#0f1b2a] text-white">
            <div className="container-max py-12 md:py-20 lg:py-36 grid min-w-0 gap-8 md:grid-cols-[5.5fr_4.5fr]">
                {/* 70:30 layout – stacks on mobile */}
                <div className="min-w-0 content-center">
                    <h2 className="mb-6 text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight">
                        About Me:
                    </h2>
                    {/* Left: paragraph */}
                    <div className="max-w-prose text-lg lg:text-xl text-white/90 leading-relaxed [&>p>strong]:text-rose-400 [&>p>b]:text-rose-400 content-center">
                        <p>
                            For me, creating an app is not just solving a problem. It is about
                            the continuity and a <b>meaningful impact</b> that we can bring to others.
                            Technology is constantly evolving, unlocking new possibilities that
                            once seemed out of reach. What was once a barrier has now become an <b>enabler</b>.
                            <br></br><br></br>
                            With the age of <b>AI</b> now unfolding, we can build almost anything we can think of. 
                            Suddenly, the only boundary left is how far our own creativity and imagination can take us.
                            As engineers, we have the opportunity to shape this
                            transformation and I’m determined to be part of the movement
                            driving the next era of <b>digital innovation</b>.
                        </p>
                    </div>
                </div>
                {/* Right: reserved mini-dashboard area */}
                <div className="min-w-0">
                    <DashboardPanel
                        visitors={[
                            {
                                label: "Visitors",
                                value: uniqueNow ?? 1,
                                delta: deltaUnique + "%",
                                deltaTone: deltaUQTone
                            },
                            {
                                label: "Page Views",
                                value: pageViews ?? 1,
                                delta: deltaPV + "%",
                                deltaTone: deltaPVTone
                            }
                        ]}
                        series={series}
                        countries={countries}
                        devices={devices}
                        browsers={browsers}
                        os={os_types}
                        referrers={referrers}
                        credit={
                            <div className="flex items-center gap-2">
                                <p className="text-xs text-white/40">Powered by Supabase</p>
                                <SocialLinks links={[
                                    {
                                        url: "https://supabase.com",
                                        label: "Supabase",
                                        icon: <SiSupabase size={22} />,
                                    },
                                ]}/>
                            </div>
                        }
                    />
                </div>
            </div>
        </section>
    );
}
