// components/AboutSection.tsx
import MiniDashboard from "./MiniDashboard";
import { createServerComponentClient } from "../utils/supabase/server";
import { SiSupabase } from "react-icons/si";
import SocialLinks from "./SocialLink";

function pctChange(curr?: number | null, prev?: number | null) {
    const c = curr ?? 0;
    const p = prev ?? 0;
    if (p === 0) return c > 0 ? 100 : 0;
    return ((c - p) / p) * 100;
}


export default async function AboutSection() {
    const supabase = createServerComponentClient()
    // make a YYYY-MM-DD string for 7 days ago
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const today = new Date();
    const startPrevious = new Date();
    startPrevious.setDate(startPrevious.getDate() - 15);
    const startPreviousStr = startPrevious.toISOString().slice(0,10);
    const start = sevenDaysAgo.toISOString().slice(0, 10);
    const endPrevious = new Date();
    endPrevious.setDate(endPrevious.getDate() - 8);
    const endPreviousStr = endPrevious.toISOString().slice(0,10);
    const end = today.toISOString().slice(0, 10);

    const [pvNow, pvPrev, uNow, uPrev] = await Promise.all([
        supabase.from('traffic_events').select('id', { count: 'exact', head: true }).gte('date_key', start).lte('date_key', end),
        supabase.from('traffic_events').select('id', { count: 'exact', head: true }).gte('date_key', startPreviousStr).lte('date_key', endPreviousStr),
        supabase.rpc('count_unique_visitors', { start_date: start, end_date: end }),
        supabase.rpc('count_unique_visitors', { start_date: startPreviousStr, end_date: endPreviousStr }),
    ]);

    const pageViews = Number(pvNow.count ?? 0);
    const pageViewsPrev = Number(pvPrev.count ?? 0);
    const uniqueNow = Number(uNow.data ?? 0);
    const uniquePrev = Number(uPrev.data ?? 0);

    const deltaPV = Math.round(pctChange(pageViews, pageViewsPrev));
    const deltaUnique = Math.round(pctChange(uniqueNow, uniquePrev));

    return (
        <section id="about" className="w-full bg-[#0f1b2a] text-white">
            <div className="container-max py-12 md:py-16 lg:py-20">
                <h2 className="mb-6 text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight">
                    About Me:
                </h2>

                {/* 70:30 layout – stacks on mobile */}
                <div className="grid gap-8 md:grid-cols-[7fr_3fr]">
                    {/* Left: paragraph */}
                    <div className="max-w-prose text-lg lg:text-xl text-white/90 leading-relaxed [&>p>strong]:text-rose-400 [&>p>b]:text-rose-400 content-center">
                        <p>
                            For me, creating an app is not just solving a problem. It is about
                            the continuity and a <b>meaningful impact</b> that we can bring to others.
                            Technology is constantly evolving, unlocking new possibilities that
                            once seemed out of reach. What was once a barrier has now become an <b>enabler</b>.
                            As engineers, we have the capabilities to shape this
                            transformation and I’m determined to be part of the movement
                            driving the next era of <b>digital innovation</b>.
                        </p>
                    </div>

                    {/* Right: reserved mini-dashboard area */}
                    <div>
                        <MiniDashboard cards={[
                            {
                                label:"Visitors",
                                value: uniqueNow ?? 1,
                                delta: deltaUnique+"%",
                                deltaTone:"good"
                            },
                            {
                                label:"Page Views",
                                value: pageViews ?? 1,
                                delta: deltaPV+"%",
                                deltaTone:"good"
                            }
                        ]}/>
                        <div className="flex pt-4 gap-2 pl-2">
                            <p className="text-sm leading-relaxed text-gray-400">Powered by Supabase </p>
                            <SocialLinks links={[
                                {
                                    url: "https://supabase.com",
                                    label: "Supabase",
                                    icon: <SiSupabase size={22} />,
                                },
                            ]}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
