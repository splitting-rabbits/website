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
            <nav className="mx-auto grid h-28 w-full max-w-6xl grid-cols-5 items-center px-6 text-center text-2xl font-normal text-[#fff7dc] sm:text-3xl">
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