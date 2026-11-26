import Image from "next/image";

type FooterProps = {
    position?: "static" | "bottom";
};

export function Footer({ position = "static" }: FooterProps) {
    return (
        <footer className={`overflow-x-hidden bg-[#FFF1C7] ${
            position === "bottom"
                ? "absolute inset-x-0 bottom-0"
                : "relative"
        }`}>
            <div className="flex min-h-[144px] w-full items-center justify-start max-md:grid max-md:grid-cols-[auto_1fr] max-md:gap-x-3 max-md:gap-y-2 max-md:px-4 max-md:py-5">
                <div className="ml-[2rem] max-md:row-span-1 max-md:ml-0">
                    <Image
                        src="/logos/Bunny.png"
                        alt="Splitting Rabbits Logo Overlay"
                        width={231}
                        height={130}
                        className="h-20 w-24 object-contain max-md:h-16 max-md:w-20"
                        priority
                    />
                </div>

                <div className="flex flex-col max-md:min-w-0">
                    <div className="break-all text-black text-3xl max-md:text-[0.95rem]">
                        splittingrabbits@gmail.com
                    </div>

                    <div className="text-[#69B3E7] text-3xl max-md:text-[0.95rem]">
                        #splittingrabbits
                    </div>
                </div>

                <div className="col-span-2 flex w-full items-center justify-center gap-8 max-md:mr-0 max-md:gap-8">
                    <a
                        href="https://www.youtube.com/@splittingrabbits"
                        aria-label="Splitting Rabbits on YouTube"
                    >
                        <Image
                            src="/logos/YouTube.png"
                            alt=""
                            width={96}
                            height={96}
                            className="h-12 w-12 object-contain max-md:h-10 max-md:w-10"
                            priority
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/company/splittingrabbits/posts/?feedView=all"
                        aria-label="Splitting Rabbits on LinkedIn"
                    >
                        <Image
                            src="/logos/LinkedIn.png"
                            alt=""
                            width={71}
                            height={68}
                            className="h-12 w-12 object-contain max-md:h-10 max-md:w-10"
                            priority
                        />
                    </a>

                    <a
                        href="https://www.instagram.com/splittingrabbits"
                        aria-label="Splitting Rabbits on Instagram"
                    >
                        <Image
                            src="/logos/Instagram.png"
                            alt=""
                            width={100}
                            height={100}
                            className="h-12 w-12 object-contain max-md:h-10 max-md:w-10"
                            priority
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}