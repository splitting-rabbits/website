"use client";

import { useEffect, useState, type ComponentType } from "react";

type StudioComponent = ComponentType;

export default function StudioGate({ isConfigured }: { isConfigured: boolean }) {
    const [Studio, setStudio] = useState<StudioComponent | null>(null);

    useEffect(() => {
        if (!isConfigured) return;

        let isMounted = true;
        import("./ConfiguredStudio").then(({ default: ConfiguredStudio }) => {
            if (isMounted) setStudio(() => ConfiguredStudio);
        });

        return () => {
            isMounted = false;
        };
    }, [isConfigured]);

    if (!isConfigured) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#FFF1C7] px-4 py-12 text-[#174D79] sm:px-6">
                <section className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-sm sm:p-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em]">
                        Splitting Rabbits
                    </p>
                    <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                        Your literature studio is ready to connect
                    </h1>
                    <p className="mt-4 leading-relaxed text-black">
                        Create a Sanity project, then add its project ID and dataset to this
                        site&apos;s <code>.env.local</code> file. The Studio will then open
                        here at <code>/studio</code>.
                    </p>
                    <ol className="mt-6 list-decimal space-y-3 pl-5 leading-relaxed text-black">
                        <li>
                            <a
                                className="font-semibold text-[#174D79] underline underline-offset-4"
                                href="https://www.sanity.io/manage"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Create a Sanity project
                            </a>{" "}
                            and choose a dataset named <code>production</code>.
                        </li>
                        <li>
                            Copy the project ID and dataset into <code>.env.local</code>:
                            <pre className="mt-2 overflow-x-auto rounded-lg bg-[#F5F5F5] p-4 text-sm">
                                NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id{"\n"}
                                NEXT_PUBLIC_SANITY_DATASET=production
                            </pre>
                        </li>
                        <li>
                            Restart the site and visit <code>/studio</code>. Add the site&apos;s
                            local and live domains to the project&apos;s allowed CORS origins
                            in Sanity&apos;s project settings.
                        </li>
                    </ol>
                    <p className="mt-6 text-sm leading-relaxed text-black">
                        No literature entries have been added yet. The Studio will start
                        empty, with guided templates for poems and articles.
                    </p>
                </section>
            </main>
        );
    }

    if (!Studio) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-white text-[#174D79]">
                <p role="status">Loading the literature studio…</p>
            </main>
        );
    }

    return <Studio />;
}
