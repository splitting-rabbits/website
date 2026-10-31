import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            {/* this section houses the ocean waves image, the bunny overlay, and the header below */}
            <section className="relative box-border h-[calc(100vh+7rem)] w-full max-w-full overflow-hidden max-md:h-[38rem]">
                <Image
                    src="/photos/waves_background.jpg"
                    alt="Ocean Waves on the Beach"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />

                <div className="absolute inset-x-0 top-0 flex h-screen items-center justify-center max-md:left-1/2 max-md:right-auto max-md:w-full max-md:-translate-x-1/2">
                    <Image
                        src="/logos/Black_Bunny_Logo.png"
                        alt="Splitting Rabbits Logo Overlay"
                        width={654}
                        height={654}
                        className="h-auto max-h-[65%] w-[min(70vw,42rem)] object-contain max-md:max-h-none max-md:w-[min(82vw,22rem)]"
                        priority
                    />
                </div>

                <Header />

            </section>

            {/* main content section */}
            <div className="relative box-border min-h-screen w-full max-w-full overflow-hidden bg-[#FFF1C7] px-6 py-8 sm:px-10 md:py-8">
                <div className="relative z-10 md:hidden">
                    <section className="font-helonik mx-auto max-w-xl px-1 text-center text-lg font-[450] leading-tight tracking-normal text-black">
                        Splitting Rabbits is an independent creative studio exploring the aesthetics of everyday life, domesticity, and human connection at the intersection of image, text, style, and sound.
                    </section>

                    <div className="relative mt-10 flex flex-col items-center gap-7">
                        <Image
                            src="/elements/Background_Spiral.svg"
                            alt=""
                            width={468}
                            height={1138}
                            aria-hidden="true"
                            className="pointer-events-none absolute left-1/2 top-[-1rem] z-0 h-auto w-[calc(100vw-2rem)] max-w-[468px] -translate-x-1/2"
                        />

                        <Link href="/literature" className="group relative z-10 w-[72%]">
                            <Image
                                src="/photos/Purple_Sky.jpg"
                                alt="Purple Sky Photo"
                                width={310}
                                height={620}
                                className="aspect-[1/1.6] h-auto w-full object-cover transition-transform group-hover:scale-[1.02]"
                            />
                            <span className="font-penman pointer-events-none absolute bottom-2 right-2 z-20 block whitespace-nowrap text-right text-[clamp(2rem,12vw,3rem)] font-bold leading-none text-[#69B3E7] [-webkit-text-stroke:1.25px_currentColor]">literature</span>
                        </Link>
                        <Link href="/filmography" className="group relative z-10 w-[72%]">
                            <Image
                                src="/photos/Couches.jpg"
                                alt="Photo of three green couches"
                                width={889}
                                height={334}
                                className="aspect-[1.6/1] h-auto w-full object-cover transition-transform group-hover:scale-[1.02]"
                            />
                            <span className="font-penman pointer-events-none absolute bottom-2 right-2 z-20 block whitespace-nowrap text-right text-[clamp(1.5rem,8vw,2.5rem)] font-bold leading-none text-[#69B3E7] [-webkit-text-stroke:1.25px_currentColor]">filmography</span>
                        </Link>
                        <Link href="/gallery" className="group relative z-10 w-[72%]">
                            <Image
                                src="/photos/Ocean.jpg"
                                alt="Photo of two people near the ocean"
                                width={555}
                                height={416}
                                className="aspect-[4/3] h-auto w-full object-cover transition-transform group-hover:scale-[1.02]"
                            />
                            <span className="font-penman pointer-events-none absolute bottom-2 right-2 z-20 block whitespace-nowrap text-right text-[clamp(2.25rem,15vw,3.75rem)] font-bold leading-none text-[#69B3E7] [-webkit-text-stroke:1.25px_currentColor]">gallery</span>
                        </Link>
                        <Link href="/about" className="group relative z-10 w-[72%]">
                            <Image
                                src="/photos/Cross_Necklace.jpg"
                                alt="Photo of a person with red hair wearing a cross necklace"
                                width={378}
                                height={284}
                                className="aspect-[4/3] h-auto w-full object-cover transition-transform group-hover:scale-[1.02]"
                            />
                            <span className="font-penman pointer-events-none absolute bottom-2 right-2 z-20 block whitespace-nowrap text-right text-[clamp(2.5rem,18vw,4.5rem)] font-bold leading-none text-[#69B3E7] [-webkit-text-stroke:1.25px_currentColor]">about</span>
                        </Link>
                    </div>

                    <section className="mt-14 border-t-2 border-black pt-8 font-helonik text-black" id="filmography">
                        <h2 className="main-heading">featured</h2>
                        <h3 className="sub-heading">studio trailer</h3>
                        <p className="base-text mt-4">
                            What is Splitting Rabbits, visually speaking? How do domesticity and romance manifest into tangible images? What sound synthesizes it all? In combination with Alkaline Trio&apos;s <em>Weak Week</em>, the following video encapsulates the frequent sights explored by the studio.
                        </p>
                        <iframe
                            className="mt-8 aspect-video w-full"
                            src="https://youtu.be/-GMCy7zfFss"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </section>
                </div>

                <div className="hidden md:block">
                    <section className="relative z-10 font-helonik mx-auto max-w-5xl px-5 text-center text-lg font-[450] tracking-normal text-black sm:px-8 sm:text-2xl md:text-3xl">
                        Splitting Rabbits is an independent creative studio exploring the aesthetics of everyday life, domesticity, and human connection at the intersection of image, text, style, and sound.
                    </section>


                    <div className="absolute ml-[0rem] mt-[-1rem] z-0">
                        <Image
                            src="/elements/Background_Spiral.svg"
                            alt=""
                            width={468}
                            height={1138}
                            aria-hidden="true"
                            className="absolute left-0 top-0 z-0 h-auto w-[468px] max-w-none"
                        />
                    </div>

                    <Link href="/literature" className="absolute ml-[4rem] mt-[7rem] z-10">
                        <Image
                            src="/photos/Purple_Sky.jpg"
                            alt="Purple Sky Photo"
                            width={310}
                            height={620}
                            className="h-auto w-[clamp(220px,28vw,310px)] max-w-none object-contain"
                            priority
                        />
                    </Link>

                    <Link href="/filmography" className="absolute ml-[15rem] mt-[4rem] z-20">
                        <Image
                            src="/photos/Couches.jpg"
                            alt="Photo of three green coaches"
                            width={889}
                            height={334}
                            className="h-auto w-[clamp(320px,58vw,889px)] max-w-none object-contain"
                            priority
                        />
                    </Link>

                    <Link href="/gallery" className="absolute ml-[38rem] mt-[23rem] z-40">
                        <Image
                            src="/photos/Ocean.jpg"
                            alt="Photo of two people near the ocean"
                            width={555}
                            height={416}
                            className="h-auto w-[clamp(555px,58vw,416px)] max-w-none object-contain"
                            priority
                        />
                    </Link>

                    <Link href="/about" className="absolute left-[29rem] mt-[35rem] z-30">
                        <Image
                            src="/photos/Cross_Necklace.jpg"
                            alt="Photo of a person with red hair, a jacket with some pins, and a cross necklace atop a black turtleneck sweater"
                            width={378}
                            height={284}
                            className="h-auto w-[clamp(378px,58vw,284px)] max-w-none object-contain"
                            priority
                        />
                    </Link>

                    <Link href="/filmography" className="absolute left-[30rem] mt-[2rem] z-100">
                        <Image
                            src="/elements/Filmography.png"
                            alt="Filmography"
                            width={521}
                            height={108}
                            className="h-auto w-[clamp(521px,58vw,108px)] max-w-none object-contain"
                            priority
                        />
                    </Link>

                    <Link href="/gallery" className="absolute left-[32rem] mt-[24rem] z-100">
                        <Image
                            src="/elements/Gallery.png"
                            alt="Gallery"
                            width={352}
                            height={108}
                            className="h-auto w-[clamp(352px,58vw,108px)] max-w-none object-contain"
                            priority
                        />
                    </Link>

                    <Link href="/literature" className="absolute left-[8rem] mt-[31rem] z-100">
                        <Image
                            src="/elements/Literature.png"
                            alt="Literature"
                            width={425}
                            height={99}
                            className="h-auto w-[clamp(425px,58vw,99px)] max-w-none object-contain"
                            priority
                        />
                    </Link>

                    <Link href="/about" className="absolute left-[35rem] mt-[46.5rem] z-100">
                        <Image
                            src="/elements/About.png"
                            alt="About"
                            width={314}
                            height={122}
                            className="h-auto w-[clamp(314px,58vw,122px)] max-w-none object-contain"
                            priority
                        />
                    </Link>


                    <div className="relative mt-[57rem] grid gap-10 px-8 md:grid-cols-2 md:gap-16">
                        <div>
                            <h2 className="main-heading text-left tracking-normal text-black">
                                featured
                            </h2>

                            <h3 className="sub-heading text-left tracking-normal text-black">
                                studio trailer
                            </h3>

                            <p className="base-text mt-[1rem]">
                                What is Splitting Rabbits, visually speaking? How do domesticity and romance manifest into tangible images? What sound synthesizes it all? In combination with Alkaline Trio’s <em>Weak Week</em>, the following video encapsulates the frequent sights explored by the studio. Watch closely and you will catch a friendly face, a familiar film title, or even a glimpse into a future piece of set decoration.

                                <br />
                                <br />
                                View the Studio Trailer to absorb the patterns, colors, textures, and cinematography encapsulating Splitting Rabbits.
                            </p>
                        </div>

                        <iframe
                            className="relative aspect-video w-full self-center"
                            src={"https://youtu.be/-GMCy7zfFss"}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>

            </div>

            <Footer />
        </>
    );
}
