import type { ReactNode } from "react";
import Image from "next/image";

type AboutMediaProps = {
    label: string;
    src?: string;
    className?: string;
    tone?: "blue" | "cream" | "gray";
};

export function AboutMedia({
    label,
    src,
    className = "",
    tone = "cream",
}: AboutMediaProps) {
    return (
        <div
            className={`relative flex min-h-56 items-center justify-center overflow-hidden ${className} ${
                tone === "blue"
                    ? "bg-[#7d98e5]"
                    : tone === "gray"
                      ? "bg-[#e7e7e7]"
                      : "bg-[#fff8df]"
            }`}
            aria-label={label}
            role="img"
        >
            {src ? (
                <Image
                    src={src}
                    alt={label}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                />
            ) : (
                <span className="border border-dashed border-black/40 px-4 py-2 font-helonik text-sm uppercase tracking-[0.16em] text-black/60">
                    {label}
                </span>
            )}
        </div>
    );
}

type AboutSectionProps = {
    children: ReactNode;
    media: ReactNode;
    reverse?: boolean;
};

export function AboutSection({
    children,
    media,
    reverse = false,
}: AboutSectionProps) {
    return (
        <section
            className={`grid items-start gap-8 lg:grid-cols-[1.25fr_0.85fr] lg:gap-14 ${
                reverse ? "lg:grid-cols-[0.85fr_1.25fr]" : ""
            }`}
        >
            <div className={reverse ? "lg:order-2" : ""}>{media}</div>
            <div className={reverse ? "lg:order-1" : ""}>{children}</div>
        </section>
    );
}
