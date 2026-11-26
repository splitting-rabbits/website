"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderProps = {
    position?: "top" | "bottom";
    color?: "light" | "dark";
};

export function Header({
    position = "bottom",
    color = "light",
}: HeaderProps) {
    const pathname = usePathname();
    const links = [
        { label: "home", href: "/" },
        { label: "filmography", href: "/filmography" },
        { label: "literature", href: "/literature" },
        { label: "gallery", href: "/gallery" },
        { label: "about", href: "/about" },
    ];

    return (
        <header className={`absolute inset-x-0 z-10 bg-transparent ${
            position === "top" ? "top-0" : "bottom-0"
        }`}>
            <nav className={`mx-auto grid h-20 w-full max-w-6xl grid-cols-5 items-center gap-0 px-2 text-center text-[0.78rem] font-normal sm:h-28 sm:px-6 sm:text-3xl ${
                color === "dark" ? "text-black" : "text-[#fff7dc]"
            }`}>
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