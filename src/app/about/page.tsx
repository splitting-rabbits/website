import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutSection, AboutText } from "@/components/AboutSection";
import Image from "next/image";

export default function About() {
    return (
        <div className="relative min-h-screen bg-[#FFF1C7]">
            <Header position="top" color="dark" />
            <main className="relative max-w-none px-6 pb-12 pl-[4.5rem] pt-32 text-black lg:pr-10 lg:pt-[162px]">
                <section className="grid items-start gap-10 lg:min-h-[548px] lg:grid-cols-[minmax(0,1fr)_323px] lg:gap-16">
                    <div>
                        <h1 className="main-heading lowercase sm:text-6xl">
                            about
                        </h1>
                        <h2 className="about-contact mt-1">
                            contact us: splittingrabbits@gmail.com
                        </h2>
                        <Image
                            src="/elements/meet_Jordan_Storm.svg"
                            alt="Meet Jordan Storm"
                            width={720}
                            height={108}
                            className="mt-6 h-auto w-full max-w-[720px]"
                        />
                        <AboutText className="mt-[-1rem] !text-[1.1rem] max-w-2xl space-y-5">
                            <p>
                                Jordan Storm founded Splitting Rabbits in 2024
                                and currently works as a poet, artist, and
                                filmmaker earning her Master of Arts in English
                                at UC Irvine.
                            </p>
                            <p>
                                In 2026, she obtained her Bachelor of Arts
                                <em> summa cum laude</em> in Theatre, Film, and
                                Digital Production from UC Riverside. Her
                                artwork frequently focuses on themes within
                                punk music, interpersonal relationships, and
                                domestic life.
                            </p>
                        </AboutText>
                    </div>
                    <div className="relative aspect-[3/4] min-h-0 w-full overflow-hidden bg-[#e7e7e7] lg:absolute lg:left-[50rem] lg:top-[162px] lg:h-[548px] lg:w-[323px]">
                        <Image
                            src="/photos/about_portrait.jpg"
                            alt="Portrait of Jordan Storm"
                            fill
                            sizes="323px"
                            className="object-cover scale-120"
                        />
                    </div>
                </section>

                <section className="mt-16 sm:mt-20 lg:mt-0">
                    <h2 className="main-heading text-5xl lowercase sm:text-6xl">
                        history
                    </h2>
                    <div className="mt-6 space-y-12 sm:space-y-16">
                        <AboutSection
                            media={
                                <div className="relative aspect-[1.8/1] w-full overflow-hidden bg-[#7d98e5] lg:w-[95%]">
                                    <Image
                                        src="/photos/logo_1.png"
                                        alt="Splitting Rabbits logo one"
                                        fill
                                        sizes="(min-width: 1024px) 55vw, 100vw"
                                        className="object-cover"
                                    />
                                </div>
                            }
                        >
                            <AboutText className="space-y-5 !text-[1.05rem] max-w-1xl lg:mb-auto lg:-translate-x-12">
                                <p>
                                    Splitting Rabbits was founded in December
                                    2024 as a local for independent art
                                    production spanning writing, photography,
                                    style, handicrafts, and filmmaking.
                                </p>
                                <p>
                                    The first logo featured a white porcelain
                                    bunny, later depicted in{" "}
                                    <em>Heart Spark Dollar Sign</em>,
                                    affectionately named Senior (S.R.). Fonts
                                    felt stitched or handmade; it was the most
                                    I could design at the time.
                                </p>
                                <p>
                                    It was kitschy and handmade and warm (see
                                    our signature cornflower blue solidified in 
                                    HEX #7E9BED), most in line with the feeling of domesticity
                                    and nostalgia evident in <em>Return to the Lake</em> .
                                </p>
                            </AboutText>
                        </AboutSection>

                        <AboutSection
                            reverse
                            media={
                                <div className="relative aspect-[1.8/1] w-full overflow-hidden bg-[#7d98e5] lg:w-[95%]">
                                    <Image
                                        src="/photos/logo_2.png"
                                        alt="Splitting Rabbits logo two"
                                        fill
                                        sizes="(min-width: 1024px) 55vw, 100vw"
                                        className="object-cover"
                                    />
                                </div>
                            }
                        >
                            <AboutText className="space-y-5 !text-[1.05rem] max-w-1xl lg:min-h-[24.375rem] lg:w-[36rem] lg:translate-x-0">
                                <p>
                                    With a minor summer hiatus, the quality of
                                    work changed and I did not feel much
                                    connection to the original kitschy look
                                    anymore. What became was something a lot
                                    sleeker, comparable to my graduation from
                                    merely making videos for fun with my
                                    friends.
                                </p>
                                <p>
                                    A sky blue (consistently misnamed as
                                    Pantone 292, but truly HEX #62A8E5) kept
                                    the same warmth, alongside a cream-colored
                                    off-white tone. I have no idea when or where the originally intended Pantone 292 blue became a few shades darker; I apologize to all of those misled by this oversight.
                                </p>
                            </AboutText>
                        </AboutSection>

                        <AboutSection
                            media={
                                <div className="relative aspect-[1.8/1] mt-[-4rem] w-full overflow-hidden bg-[#7d98e5] lg:w-[95%]">
                                    <Image
                                        src="/photos/logo_3.png"
                                        alt="Splitting Rabbits logo three"
                                        fill
                                        sizes="(min-width: 1024px) 55vw, 100vw"
                                        className="object-cover"
                                    />
                                </div>
                            }
                        >
                            <AboutText className="space-y-5 mt-[-4rem] lg:min-h-[24.375rem] lg:w-[32.125rem] !text-[1.05rem] max-w-1xl lg:-translate-x-12">
                                <p>
                                    A love for flat planes of color will never seem to fade. In an effort to solidify fonts, colors, patterns, and logos, the brand&apos;s second summer sprouted a third facade, sporting now Pantone 292 (HEX #69B3E7) courtesy of the Magnetic Fields&apos; “Reno Dakota”.
                                </p>
                                <p>
                                    Everything I learned about design and photoshop matured. There&apos;s something noteworthy about double consonants, and the English teacher part of my brain missed the original play with that concept.
                                </p>
                                <p>
                                    Maybe the original, cutesy warmth has faded. Or, maybe, and simply, this will look better on a t-shirt.
                                </p>
                            </AboutText>
                        </AboutSection>
                    </div>
                </section>

                <section className="mx-auto mt-2 flex max-w-[311px] flex-col items-center gap-3 sm:mt-4">
                    <div className="relative aspect-square min-h-0 w-full overflow-hidden bg-[#e7e7e7]">
                        <Image
                            src="/photos/purses.png"
                            alt="Collection of purses"
                            fill
                            sizes="311px"
                            className="object-cover"
                        />
                    </div>
                    <AboutText className="space-y-5">
                        <p>
                            i&apos;ve become a{" "}
                            <span className="text-[#69B3E7]">stranger</span> in
                            this home. 
                        </p>
                        <p>
                            all the cups I tend to use, all that is{" "}
                            <span className="text-[#69B3E7]">regular</span>,
                            detaches itself from the front of my mind and falls by the
                            wayside. everything became unfamiliar.
                        </p>
                        <p>
                            i remember buying this perfume, but it doesn&apos;t
                            weigh like a piece of me when it&apos;s here in my
                            <span className="text-[#69B3E7]"> hands</span>.
                        </p>
                    </AboutText>
                </section>
            </main>
            <Footer />
        </div>
    );
}