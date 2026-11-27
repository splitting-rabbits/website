import Image from "next/image";

type FooterProps = {
    position?: "static" | "bottom";
};

export function Footer({ position = "static" }: FooterProps) {
    return (
        <footer
            className={`bg-[#FFF1C7] ${
                position === "bottom"
                    ? "absolute inset-x-0 bottom-0"
                    : "relative"
            }`}
        >
            <div className="mx-auto grid min-h-36 w-full max-w-[90rem] grid-cols-[auto_minmax(0,1fr)] items-center gap-x-3 gap-y-4 px-4 py-5 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:gap-6 sm:px-6 lg:px-8 xl:flex xl:min-h-36 xl:items-center xl:gap-0 xl:py-0 xl:pl-[2.3125rem] xl:pr-[4.25rem]">
                <div>
                    <Image
                        src="/logos/Bunny.png"
                        alt="Splitting Rabbits Logo Overlay"
                        width={231}
                        height={130}
                        className="h-auto w-28 object-contain sm:w-36 md:w-40 xl:w-[14.4375rem]"
                        priority
                    />
                </div>

                <div className="flex min-w-0 flex-col xl:ml-6 xl:w-[29.625rem] xl:shrink-0">
                    <div className="break-all text-base leading-6 text-black sm:text-lg lg:text-xl xl:whitespace-nowrap xl:text-4xl xl:leading-11">
                        splittingrabbits@gmail.com
                    </div>

                    <div className="text-base leading-6 text-[#69B3E7] sm:text-lg lg:text-xl xl:text-4xl xl:leading-11">
                        #splittingrabbits
                    </div>
                </div>

                <div className="col-span-2 flex w-full items-center justify-center gap-5 sm:col-span-1 sm:w-auto sm:gap-4 xl:ml-auto xl:gap-[5.25rem]">
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
                            className="h-10 w-10 object-contain sm:h-12 sm:w-12 xl:h-24 xl:w-24"
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
                            className="h-10 w-10 object-contain sm:h-12 sm:w-12 xl:h-[4.25rem] xl:w-[4.4375rem]"
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
                            className="h-10 w-10 object-contain sm:h-12 sm:w-12 xl:h-[4.8125rem] xl:w-[4.8125rem]"
                            priority
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
