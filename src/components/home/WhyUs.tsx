// src/components/home/WhyUs.tsx
//
// Quote CTA band, then a comparison table. Server component — no state.
// The table is a real <table>, so it reads correctly to screen readers and
// stays scrollable rather than overflowing on mobile.

import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/15123255121";

interface Row {
    label: string;
    /** Explains what the row means, shown under the label. */
    caption: string;
    onyx: string;
    studio: string;
    freelancer: string;
}

const rows: Row[] = [
    {
        label: "First draft",
        caption: "See your vision early and make confident decisions.",
        onyx: "48 hours",
        studio: "1 to 2 weeks",
        freelancer: "Varies",
    },
    {
        label: "Revisions",
        caption: "Refine until it feels right — no surprise costs.",
        onyx: "Included",
        studio: "Often extra",
        freelancer: "Limited",
    },
    {
        label: "Dedicated project manager",
        caption: "A single point of contact, always available.",
        onyx: "Yes",
        studio: "Yes",
        freelancer: "No",
    },
    {
        label: "Response time",
        caption: "Quick answers, smooth communication.",
        onyx: "Same day",
        studio: "1 to 2 days",
        freelancer: "Unpredictable",
    },
    {
        label: "Large projects",
        caption: "Capacity for full developments, not just single views.",
        onyx: "Yes",
        studio: "Yes",
        freelancer: "Rarely",
    },
    {
        label: "Quality control",
        caption: "Multi-stage review process before delivery.",
        onyx: "Yes",
        studio: "Varies",
        freelancer: "Not guaranteed",
    },
    {
        label: "Confidentiality & data security",
        caption: "Your project stays private with NDA on request.",
        onyx: "Yes",
        studio: "Sometimes",
        freelancer: "Rarely",
    },

];

export default function WhyUs() {
    return (
        <section className="px-6 md:px-16 lg:px-20 3xl:px-32 pt-2 md:pt-4 pb-16 md:pb-24 3xl:pb-40">
            {/* Quote band */}
            <div className="bg-[#bac3c833] rounded-xl 3xl:rounded-3xl p-8 md:p-12 3xl:p-24 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-16">
                <div className="lg:w-1/2">
                    <h2 className="sub-heading flex flex-col gap-1 md:gap-2 tracking-wider">
                        <span>Send your drawings. Get a</span>
                        <span>quote in 24 hours.</span>
                    </h2>
                    <p className="text-small text-[#7D7D7D] mt-4 3xl:mt-8 max-w-md 3xl:max-w-2xl">
                        No commitment. We&apos;ll review your files, suggest the best views
                        and give you a clear price and timeline.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 3xl:gap-8 shrink-0">
                    <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <button className="btn-pill border border-[#114046] text-[#114046] hover:bg-[#114046] hover:text-white transition-colors">
                            Chat on WhatsApp
                        </button>
                    </Link>
                    <Link href="/studio/#scheduleCall">
                        <button className="bg-[#114046] text-white btn-pill btn-theme hover:bg-[#0e3035]">
                            Get a free quote
                        </button>
                    </Link>
                </div>
            </div>

            {/* Comparison */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 3xl:gap-32 mt-16 md:mt-24 3xl:mt-40">
                <h2 className="sub-heading lg:w-1/2 flex flex-col gap-2 md:gap-4">
                    <span>Studio quality without studio</span>
                    <span>delays</span>
                </h2>

                <p className="text-small text-[#7D7D7D] lg:w-1/2 max-w-2xl 3xl:max-w-4xl pt-8">
                    The craft of a top visualization studio, with faster turnaround
                    <br />
                    and a team that answers when you message.{" "}
                    <Link
                        href="/studio"
                        className="text-black underline underline-offset-4 hover:text-[#114046] transition-colors"
                    >
                        About us
                    </Link>
                </p>
            </div>

            {/* overflow-x-auto so the table scrolls on narrow screens rather than
          breaking the page layout. */}
            <div className="mt-10 md:mt-14 3xl:mt-24 overflow-x-auto">
                <table className="w-full min-w-[640px] border border-black/10 rounded-xl 3xl:rounded-3xl border-separate border-spacing-0 overflow-hidden">
                    <thead>
                        <tr>
                            <th className="text-left text-small-bold p-5 3xl:p-10 border-b border-black/10">Feature/ What you get</th>
                            <th className="text-left text-white text-small-bold p-5 3xl:p-10 bg-[#114046] border-b border-black/10">
                                ONYX RENDERS
                            </th>
                            <th className="text-left text-small text-[#7D7D7D] p-5 3xl:p-10 border-b border-black/10">
                                Typical studio
                            </th>
                            <th className="text-left text-small text-[#7D7D7D] p-5 3xl:p-10 border-b border-black/10">
                                Freelancer
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((row, i) => {
                            const last = i === rows.length - 1;
                            const border = last ? "" : "border-b border-black/10";

                            return (
                                <tr key={row.label}>
                                    <th
                                        scope="row"
                                        className={`text-left font-normal p-5 3xl:p-10 align-top ${border}`}
                                    >
                                        <span className="text-small block">{row.label}</span>
                                        <span className="text-x-small text-[#7D7D7D] block mt-1 3xl:mt-2">
                                            {row.caption}
                                        </span>
                                    </th>
                                    <td className={`text-small-bold text-white p-5 3xl:p-10 bg-[#114046]  ${border}`}>
                                        {row.onyx}
                                    </td>
                                    <td className={`text-small text-[#7D7D7D] p-5 3xl:p-10 ${border}`}>
                                        {row.studio}
                                    </td>
                                    <td className={`text-small text-[#7D7D7D] p-5 3xl:p-10 ${border}`}>
                                        {row.freelancer}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
}