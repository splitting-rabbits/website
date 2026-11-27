import type { ReactNode } from "react";

type AboutSectionProps = {
    children: ReactNode;
    media: ReactNode;
    reverse?: boolean;
};

type AboutTextProps = {
    children: ReactNode;
    className?: string;
};

export function AboutText({ children, className = "" }: AboutTextProps) {
    return <div className={`about-body-text ${className}`}>{children}</div>;
}

export function AboutSection({
    children,
    media,
    reverse = false,
}: AboutSectionProps) {
    return (
        <section
            className={`grid min-w-0 items-stretch gap-6 xl:min-h-[clamp(22.5rem,27.78vw,25rem)] xl:gap-11 ${
                reverse
                    ? "xl:grid-cols-[minmax(0,1fr)_minmax(0,1.39fr)]"
                    : "xl:grid-cols-[minmax(0,1.39fr)_minmax(0,1fr)]"
            }`}
        >
            <div className={`min-w-0 xl:h-full ${reverse ? "xl:order-2" : ""}`}>{media}</div>
            <div
                className={`flex min-w-0 flex-col justify-start xl:h-full ${
                    reverse ? "xl:order-1" : ""
                }`}
            >
                {children}
            </div>
        </section>
    );
}
