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
            <div className="flex min-h-[144px] w-full items-center justify-start max-md:flex-col max-md:gap-4 max-md:px-6 max-md:py-8">
                <div className="ml-[2rem] max-md:ml-0">
                    <Image
                        src="/logos/Bunny.png"
                        alt="Splitting Rabbits Logo Overlay"
                        width={231}
                        height={130}
                        className="object-contain"
                        priority
                    />
                </div>

                <div className="flex flex-col max-md:items-center">
                    <div className="break-all text-black text-3xl max-md:text-xl">
                        splittingrabbits@gmail.com
                    </div>

                    <div className="text-[#69B3E7] text-3xl max-md:text-xl">
                        #splittingrabbits
                    </div>
                </div>

                <div className="ml-auto mr-[2rem] flex items-center gap-12 max-md:m-0 max-md:gap-5">
                    <a
                        href="https://www.youtube.com/@splittingrabbits"
                        aria-label="Splitting Rabbits on YouTube"
                    >
                        <Image
                            src="/logos/YouTube.png"
                            alt=""
                            width={96}
                            height={96}
                            className="object-contain max-md:h-16 max-md:w-16"
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
                            className="object-contain max-md:h-14 max-md:w-14"
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
                            className="object-contain max-md:h-16 max-md:w-16"
                            priority
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}