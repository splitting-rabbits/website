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
            <div className="mx-auto flex min-h-36 w-full max-w-[90rem] items-center justify-between gap-0 px-[clamp(0.375rem,4vw,1.5rem)] py-5 md:gap-6 md:px-6 lg:px-8 xl:min-h-36 xl:gap-0 xl:py-0 xl:pl-[2.3125rem] xl:pr-[4.25rem]">
                <div className="ml-[20px] relative h-[clamp(3.25rem,13.6vw,4.5rem)] w-[clamp(4.3125rem,18vw,7rem)] shrink-0 md:aspect-[231/130] md:h-auto md:w-40 xl:w-[14.4375rem]">
                    <Image
                        src="/logos/Bunny.png"
                        alt="Splitting Rabbits Logo Overlay"
                        width={231}
                        height={130}
                        className="absolute left-1/2 top-1/2 h-[120%] w-[145%] max-w-none -translate-x-1/2 -translate-y-1/2 object-fill md:inset-0 md:h-full md:w-full md:translate-x-0 md:translate-y-0 md:object-contain"
                        priority
                    />
                </div>

                <div className="hidden min-w-0 flex-col md:flex xl:ml-6 xl:w-[29.625rem] xl:shrink-0">
                    <div className="break-all text-[20px] leading-6 text-black md:text-lg lg:text-xl xl:whitespace-nowrap xl:text-4xl xl:leading-11">
                        splittingrabbits@gmail.com
                    </div>

                    <div className="text-[20px] leading-6 text-[#69B3E7] md:text-lg lg:text-xl xl:text-4xl xl:leading-11">
                        #splittingrabbits
                    </div>
                </div>

                <div className="flex shrink-0 items-center gap-[clamp(2rem,4.5vw,2.5rem)] md:gap-7 xl:ml-auto xl:gap-[5.25rem]">
                    <a
                        href="https://www.youtube.com/@splittingrabbits"
                        aria-label="Splitting Rabbits on YouTube"
                        className="flex min-h-11 min-w-11 items-center justify-center md:min-h-20 md:min-w-20"
                    >
                        <Image
                            src="/logos/YouTube.png"
                            alt=""
                            width={96}
                            height={96}
                            className="h-[45px] w-[45px] object-contain md:h-20 md:w-20 xl:h-24 xl:w-24"
                            priority
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/company/splittingrabbits/posts/?feedView=all"
                        aria-label="Splitting Rabbits on LinkedIn"
                        className="flex min-h-11 min-w-11 items-center justify-center md:min-h-20 md:min-w-20"
                    >
                        <Image
                            src="/logos/LinkedIn.png"
                            alt=""
                            width={71}
                            height={68}
                            className="h-[45px] w-[45px] object-contain md:h-[4.25rem] md:w-[4.4375rem] xl:h-[4.25rem] xl:w-[4.4375rem]"
                            priority
                        />
                    </a>

                    <a
                        href="https://www.instagram.com/splittingrabbits"
                        aria-label="Splitting Rabbits on Instagram"
                        className="flex min-h-11 min-w-11 items-center justify-center md:min-h-20 md:min-w-20"
                    >
                        <Image
                            src="/logos/Instagram.png"
                            alt=""
                            width={100}
                            height={100}
                            className="h-[45px] w-[45px] object-contain md:h-[4.8125rem] md:w-[4.8125rem] xl:h-[4.8125rem] xl:w-[4.8125rem]"
                            unoptimized
                            priority
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
