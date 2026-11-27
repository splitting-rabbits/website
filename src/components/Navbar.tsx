"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavbarProps = {
    color: "light" | "dark";
};

export function Navbar({ color }: NavbarProps) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { label: "home", href: "/", mobileImage: null },
        {
            label: "filmography",
            href: "/filmography",
            mobileImage: { src: "/elements/Filmography.png", width: 521, height: 108 },
        },
        {
            label: "literature",
            href: "/literature",
            mobileImage: { src: "/elements/Literature.png", width: 425, height: 99 },
        },
        {
            label: "gallery",
            href: "/gallery",
            mobileImage: { src: "/elements/Gallery.png", width: 352, height: 108 },
        },
        {
            label: "about",
            href: "/about",
            mobileImage: { src: "/elements/About.png", width: 314, height: 122 },
        },
    ];

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <>
            <div className="fixed inset-x-0 top-4 z-[60] flex justify-center md:hidden">
                <button
                    type="button"
                    className="relative inline-flex min-h-11 min-w-11 items-center justify-center rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#69B3E7]"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-primary-navigation"
                    onClick={() => setIsOpen((open) => !open)}
                >
                    <span
                        className={`absolute h-0.5 w-7 rounded transition duration-300 ${
                            isOpen
                                ? "rotate-45 bg-[#69B3E7]"
                                : "-translate-y-2 bg-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.65)]"
                        }`}
                    />
                    <span
                        className={`absolute h-0.5 w-7 rounded transition duration-300 ${
                            isOpen
                                ? "-rotate-45 bg-[#69B3E7]"
                                : "translate-y-2 bg-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.65)]"
                        }`}
                    />
                    <span
                        className={`absolute h-0.5 w-7 rounded bg-white transition duration-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.65)] ${
                            isOpen ? "scale-x-0 opacity-0" : ""
                        }`}
                    />
                </button>
            </div>
            <div
                className={`mx-auto hidden w-full max-w-6xl px-4 sm:px-6 ${
                    color === "dark" ? "text-black" : "text-[#fff7dc]"
                } md:block`}
            >
                <nav
                    aria-label="Primary navigation"
                    className="hidden min-h-20 items-center justify-between gap-4 text-center text-sm font-normal md:flex md:text-base lg:min-h-24 lg:text-xl xl:min-h-28 xl:text-4xl"
                >
                    {links.map(({ label, href }) => {
                        const isActive = pathname === href;

                        return (
                            <Link
                                key={href}
                                className={`whitespace-nowrap transition-colors hover:text-[#69b7ed] ${
                                    isActive ? "underline underline-offset-4" : ""
                                }`}
                                href={href}
                                aria-current={isActive ? "page" : undefined}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
            <nav
                id="mobile-primary-navigation"
                aria-label="Mobile primary navigation"
                aria-hidden={!isOpen}
                inert={!isOpen}
                className={`fixed inset-0 z-40 flex min-h-dvh flex-col items-center justify-center bg-white text-[#69B3E7] transition-transform duration-500 ease-in-out md:hidden ${
                    isOpen
                        ? "translate-y-0"
                        : "pointer-events-none -translate-y-full"
                }`}
            >
                <div className="flex flex-col items-center gap-5 px-4 sm:gap-7">
                    {links.map(({ label, href, mobileImage }) => {
                        const isActive = pathname === href;

                        return (
                            <Link
                                key={href}
                                className={`flex min-h-11 items-center px-4 text-2xl capitalize transition-colors hover:text-[#4c9bd1] sm:text-3xl ${
                                    isActive ? "underline underline-offset-8" : ""
                                }`}
                                href={href}
                                aria-current={isActive ? "page" : undefined}
                                onClick={() => setIsOpen(false)}
                            >
                                {mobileImage ? (
                                    <Image
                                        src={mobileImage.src}
                                        alt={label}
                                        width={mobileImage.width}
                                        height={mobileImage.height}
                                        className="h-10 w-auto max-w-[min(70vw,16rem)] object-contain"
                                    />
                                ) : (
                                    label
                                )}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
