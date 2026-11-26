import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <section className="relative h-[min(100svh,56rem)] min-h-[32rem] w-full">
                <Image
                    src="/photos/waves_background.jpg"
                    alt="Ocean Waves on the Beach"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        src="/logos/Black_Bunny_Logo.png"
                        alt="Splitting Rabbits Logo Overlay"
                        width={654}
                        height={654}
                        className="h-auto max-h-[65%] w-[min(82vw,42rem)] object-contain"
                        priority
                    />
                </div>
                <Header />
            </section>

            <main className="w-full bg-[#FFF1C7] px-4 py-12 text-black sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                <section className="mx-auto max-w-5xl text-center font-helonik text-lg font-[450] leading-relaxed sm:text-2xl lg:text-3xl">
                    Splitting Rabbits is an independent creative studio
                    exploring the aesthetics of everyday life, domesticity, and
                    human connection at the intersection of image, text, style,
                    and sound.
                </section>

                <div className="relative mx-auto mt-10 aspect-[4/3] w-full max-w-5xl sm:mt-14 sm:aspect-[16/10] lg:mt-16 lg:aspect-[16/8]">
                    <Image
                        src="/elements/Background_Spiral.svg"
                        alt=""
                        width={468}
                        height={1138}
                        aria-hidden="true"
                        className="pointer-events-none absolute left-[7%] top-[8%] z-0 h-[82%] w-auto"
                    />
                    <Link
                        href="/literature"
                        aria-label="Literature"
                        className="group absolute left-[6%] top-[24%] z-10 w-[22%]"
                    >
                        <Image
                            src="/photos/Purple_Sky.jpg"
                            alt="Purple Sky Photo"
                            width={310}
                            height={620}
                            className="h-auto w-full object-cover transition-transform group-hover:scale-[1.02]"
                        />
                    </Link>
                    <Link
                        href="/filmography"
                        aria-label="Filmography"
                        className="group absolute left-[25%] top-[10%] z-20 w-[62%]"
                    >
                        <Image
                            src="/photos/Couches.jpg"
                            alt="Photo of three green couches"
                            width={889}
                            height={334}
                            className="h-auto w-full object-cover transition-transform group-hover:scale-[1.02]"
                        />
                    </Link>
                    <Link
                        href="/gallery"
                        aria-label="Gallery"
                        className="group absolute left-[62%] top-[43%] z-40 w-[31%]"
                    >
                        <Image
                            src="/photos/Ocean.jpg"
                            alt="Photo of two people near the ocean"
                            width={555}
                            height={416}
                            className="h-auto w-full object-cover transition-transform group-hover:scale-[1.02]"
                        />
                    </Link>
                    <Link
                        href="/about"
                        aria-label="About"
                        className="group absolute left-[35%] top-[52%] z-30 w-[29%]"
                    >
                        <Image
                            src="/photos/Cross_Necklace.jpg"
                            alt="Photo of a person with red hair wearing a cross necklace"
                            width={378}
                            height={284}
                            className="h-auto w-full object-cover transition-transform group-hover:scale-[1.02]"
                        />
                    </Link>
                    <Link href="/filmography" aria-label="Filmography" className="absolute left-[35%] top-[4%] z-50 w-[36%]">
                        <Image src="/elements/Filmography.png" alt="Filmography" width={521} height={108} className="h-auto w-full" />
                    </Link>
                    <Link href="/gallery" aria-label="Gallery" className="absolute left-[58%] top-[42%] z-50 w-[27%]">
                        <Image src="/elements/Gallery.png" alt="Gallery" width={352} height={108} className="h-auto w-full" />
                    </Link>
                    <Link href="/literature" aria-label="Literature" className="absolute left-[8%] top-[47%] z-50 w-[30%]">
                        <Image src="/elements/Literature.png" alt="Literature" width={425} height={99} className="h-auto w-full" />
                    </Link>
                    <Link href="/about" aria-label="About" className="absolute left-[33%] top-[73%] z-50 w-[24%]">
                        <Image src="/elements/About.png" alt="About" width={314} height={122} className="h-auto w-full" />
                    </Link>
                </div>

                <section
                    className="mx-auto mt-12 grid max-w-6xl gap-8 border-t-2 border-black pt-8 md:mt-16 md:grid-cols-2 md:items-center md:gap-12 lg:mt-20 lg:gap-16"
                    id="filmography"
                >
                    <div>
                        <h2 className="main-heading">featured</h2>
                        <h3 className="sub-heading">studio trailer</h3>
                        <p className="base-text mt-4">
                            What is Splitting Rabbits, visually speaking? How do
                            domesticity and romance manifest into tangible
                            images? What sound synthesizes it all? In
                            combination with Alkaline Trio&apos;s <em>Weak Week</em>,
                            the following video encapsulates the frequent
                            sights explored by the studio. Watch closely and
                            you will catch a friendly face, a familiar film
                            title, or even a glimpse into a future piece of set
                            decoration.
                        </p>
                        <p className="base-text mt-4">
                            View the Studio Trailer to absorb the patterns,
                            colors, textures, and cinematography encapsulating
                            Splitting Rabbits.
                        </p>
                    </div>
                    <iframe
                        className="aspect-video w-full"
                        src="https://youtu.be/-GMCy7zfFss"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}
