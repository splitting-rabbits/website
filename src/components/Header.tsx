"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
    const pathname = usePathname();
    const links = [
        { label: "home", href: "/" },
        { label: "filmography", href: "/filmography" },
        { label: "literature", href: "/literature" },
        { label: "gallery", href: "/gallery" },
        { label: "about", href: "/about" },
    ];

    return (
        <header className="absolute inset-x-0 bottom-0 z-10 bg-transparent">
            <nav className="mx-auto flex min-h-28 w-full max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 py-5 text-center text-xl font-normal text-[#fff7dc] sm:grid sm:h-28 sm:flex-nowrap sm:gap-0 sm:px-6 sm:py-0 sm:grid-cols-5 sm:text-3xl">
                {links.map(({ label, href }) => {
                    const isActive = pathname === href;

                    return (
                        <Link
                            key={href}
                            className={`transition-colors hover:text-[#69b7ed] ${
                                isActive ? "underline underline-offset-8" : ""
                            }`}
                            href={href}
                            aria-current={isActive ? "page" : undefined}
                        >
                            {label}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
}