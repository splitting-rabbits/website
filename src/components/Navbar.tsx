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
    const [isHomeHeroVisible, setIsHomeHeroVisible] = useState(
        pathname === "/",
    );
    const links = [
        { label: "home", href: "/" },
        { label: "filmography", href: "/filmography" },
        { label: "literature", href: "/literature" },
        { label: "gallery", href: "/gallery" },
        { label: "about", href: "/about" },
    ];

    useEffect(() => {
        if (pathname !== "/") {
            return;
        }

        const homeHero = document.querySelector("[data-home-hero]");
        if (!homeHero) {
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            setIsHomeHeroVisible(Boolean(entry?.isIntersecting));
        });
        observer.observe(homeHero);

        return () => observer.disconnect();
    }, [pathname]);

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
            <div className="mobile-menu-control md:hidden">
                <button
                    type="button"
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-primary-navigation"
                    onClick={() => setIsOpen((open) => !open)}
                >
                    <span aria-hidden="true" className="grid grid-cols-3 gap-[7px]">
                        {Array.from({ length: 9 }, (_, index) => (
                            <span
                                key={index}
                                className={`h-[5px] w-[5px] rounded-full ${
                                    pathname === "/" &&
                                    isHomeHeroVisible &&
                                    !isOpen
                                        ? "bg-white"
                                        : "bg-black"
                                }`}
                            />
                        ))}
                    </span>
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
                className={`fixed inset-0 z-40 flex min-h-dvh flex-col items-center justify-center bg-[#69B3E7] text-black transition-transform duration-500 ease-in-out md:hidden ${
                    isOpen
                        ? "translate-y-0"
                        : "pointer-events-none -translate-y-full"
                }`}
            >
                <Image
                    src="/logos/Bunny.png"
                    alt=""
                    aria-hidden="true"
                    width={2560}
                    height={1440}
                    className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-auto w-[min(55vw,16rem)] -translate-x-1/2"
                />
                <div className="relative z-10 flex flex-col items-center gap-10 px-4 sm:gap-12">
                    {links.map(({ label, href }) => {
                        const isActive = pathname === href;

                        return (
                            <Link
                                key={href}
                                className="flex min-h-11 items-center px-4 font-helonik text-3xl font-bold lowercase transition-opacity hover:opacity-70 sm:text-4xl"
                                href={href}
                                aria-current={isActive ? "page" : undefined}
                                onClick={() => setIsOpen(false)}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
