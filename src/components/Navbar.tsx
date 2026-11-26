"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavbarProps = {
    position: "top" | "bottom";
    color: "light" | "dark";
};

export function Navbar({ position, color }: NavbarProps) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { label: "home", href: "/" },
        { label: "filmography", href: "/filmography" },
        { label: "literature", href: "/literature" },
        { label: "gallery", href: "/gallery" },
        { label: "about", href: "/about" },
    ];

    return (
        <div
            className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${
                color === "dark" ? "text-black" : "text-[#fff7dc]"
            }`}
        >
            <div className="flex min-h-16 items-center justify-end md:hidden">
                <button
                    type="button"
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded border border-current bg-[#FFF1C7]/90 px-3 text-sm font-semibold text-black"
                    aria-expanded={isOpen}
                    aria-controls="mobile-primary-navigation"
                    onClick={() => setIsOpen((open) => !open)}
                >
                    {isOpen ? "Close menu" : "Menu"}
                </button>
            </div>
            <nav
                aria-label="Primary navigation"
                className="hidden min-h-20 items-center justify-between gap-4 text-center text-sm font-normal md:flex lg:min-h-24 lg:text-lg xl:text-xl"
            >
                {links.map(({ label, href }) => {
                    const isActive = pathname === href;

                    return (
                        <Link
                            key={href}
                            className={`whitespace-nowrap transition-colors hover:text-[#69b7ed] ${
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
            {isOpen && (
                <nav
                    id="mobile-primary-navigation"
                    aria-label="Mobile primary navigation"
                    className={`absolute inset-x-4 z-40 flex flex-col rounded bg-[#FFF1C7] p-2 text-black shadow-lg md:hidden ${
                        position === "top" ? "top-16" : "bottom-16"
                    }`}
                >
                    {links.map(({ label, href }) => {
                        const isActive = pathname === href;

                        return (
                            <Link
                                key={href}
                                className={`flex min-h-11 items-center rounded px-4 text-base capitalize hover:bg-black/5 ${
                                    isActive ? "underline underline-offset-4" : ""
                                }`}
                                href={href}
                                aria-current={isActive ? "page" : undefined}
                                onClick={() => setIsOpen(false)}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </nav>
            )}
        </div>
    );
}
