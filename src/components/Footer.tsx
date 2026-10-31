import Image from "next/image";

export function Footer() {
    return (
        <footer className="relative overflow-visible bg-[#FFF1C7]">
            <div className="flex h-[144px] w-full items-center justify-start">
                <div className="ml-[2rem]">
                    <Image
                        src="/Bunny.png"
                        alt="Splitting Rabbits Logo Overlay"
                        width={231}
                        height={130}
                        className="object-contain"
                        priority
                    />
                </div>

                <div className="flex flex-col">
                    <div className="text-black text-3xl">
                        splittingrabbits@gmail.com
                    </div>

                    <div className="text-[#69B3E7] text-3xl">
                        #splittingrabbits
                    </div>
                </div>

                <div className="ml-auto mr-[2rem] flex items-center gap-12">
                    <a
                        href="https://www.youtube.com/@splittingrabbits"
                        aria-label="Splitting Rabbits on YouTube"
                    >
                        <Image
                            src="/YouTube.png"
                            alt=""
                            width={96}
                            height={96}
                            className="object-contain"
                            priority
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/company/splittingrabbits/posts/?feedView=all"
                        aria-label="Splitting Rabbits on LinkedIn"
                    >
                        <Image
                            src="/LinkedIn.png"
                            alt=""
                            width={71}
                            height={68}
                            className="object-contain"
                            priority
                        />
                    </a>

                    <a
                        href="https://www.instagram.com/splittingrabbits"
                        aria-label="Splitting Rabbits on Instagram"
                    >
                        <Image
                            src="/Instagram.png"
                            alt=""
                            width={100}
                            height={100}
                            className="object-contain"
                            priority
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}