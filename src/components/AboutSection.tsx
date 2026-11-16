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
            className={`grid items-start gap-8 lg:gap-14 ${
                reverse
                    ? "lg:grid-cols-[0.85fr_1.25fr]"
                    : "lg:grid-cols-[1.25fr_0.85fr]"
            }`}
        >
            <div className={reverse ? "lg:order-2" : ""}>{media}</div>
            <div
                className={`flex h-full flex-col justify-start ${
                    reverse ? "lg:order-1" : ""
                }`}
            >
                {children}
            </div>
        </section>
    );
}
