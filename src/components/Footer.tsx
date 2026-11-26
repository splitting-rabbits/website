import Image from "next/image";

type FooterProps = {
    position?: "static" | "bottom";
};

export function Footer({ position = "static" }: FooterProps) {
    return (
        <footer className={`bg-[#FFF1C7] ${
            position === "bottom"
                ? "absolute inset-x-0 bottom-0"
                : "relative"
        }`}>
            <div className="mx-auto grid w-full max-w-7xl grid-cols-[auto_minmax(0,1fr)] items-center gap-x-3 gap-y-4 px-4 py-6 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:gap-6 sm:px-6 lg:px-8">
                <div>
                    <Image
                        src="/logos/Bunny.png"
                        alt="Splitting Rabbits Logo Overlay"
                        width={231}
                        height={130}
                        className="h-16 w-20 object-contain sm:h-20 sm:w-24"
                        priority
                    />
                </div>

                <div className="flex min-w-0 flex-col">
                    <div className="break-all text-base text-black sm:text-lg lg:text-xl">
                        splittingrabbits@gmail.com
                    </div>

                    <div className="text-base text-[#69B3E7] sm:text-lg lg:text-xl">
                        #splittingrabbits
                    </div>
                </div>

                <div className="col-span-2 flex w-full items-center justify-center gap-5 sm:col-span-1 sm:w-auto sm:gap-4">
                    <a
                        href="https://www.youtube.com/@splittingrabbits"
                        aria-label="Splitting Rabbits on YouTube"
                        className="flex min-h-11 min-w-11 items-center justify-center"
                    >
                        <Image
                            src="/logos/YouTube.png"
                            alt=""
                            width={96}
                            height={96}
                            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                            priority
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/company/splittingrabbits/posts/?feedView=all"
                        aria-label="Splitting Rabbits on LinkedIn"
                        className="flex min-h-11 min-w-11 items-center justify-center"
                    >
                        <Image
                            src="/logos/LinkedIn.png"
                            alt=""
                            width={71}
                            height={68}
                            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                            priority
                        />
                    </a>

                    <a
                        href="https://www.instagram.com/splittingrabbits"
                        aria-label="Splitting Rabbits on Instagram"
                        className="flex min-h-11 min-w-11 items-center justify-center"
                    >
                        <Image
                            src="/logos/Instagram.png"
                            alt=""
                            width={100}
                            height={100}
                            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                            priority
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}