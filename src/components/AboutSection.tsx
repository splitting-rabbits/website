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
            className={`grid min-w-0 items-start gap-6 md:grid-cols-2 md:gap-8 xl:gap-14 ${
                reverse
                    ? "md:grid-cols-[0.85fr_1.25fr]"
                    : "md:grid-cols-[1.25fr_0.85fr]"
            }`}
        >
            <div className={`min-w-0 ${reverse ? "md:order-2" : ""}`}>{media}</div>
            <div
                className={`flex min-w-0 flex-col justify-start ${
                    reverse ? "md:order-1" : ""
                }`}
            >
                {children}
            </div>
        </section>
    );
}
