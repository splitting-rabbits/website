import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutMedia, AboutSection } from "@/components/AboutSection";

export default function About() {
    return (
        <div className="min-h-screen bg-[#FFF1C7]">
            <Header position="top" color="dark" />
            <main className="mx-auto max-w-[1280px] px-4 pb-12 pt-32 text-black sm:px-6 lg:px-10">
                <section className="grid items-start gap-10 lg:grid-cols-[1fr_280px] lg:gap-16">
                    <div>
                        <h1 className="main-heading text-5xl lowercase sm:text-6xl">
                            about
                        </h1>
                        <p className="mt-1 font-helonik text-xl font-bold sm:text-2xl">
                            contact us: splittingrabbits@gmail.com
                        </p>
                        <p className="mt-8 font-penman text-5xl leading-[0.8] text-[#69B3E7] sm:text-7xl">
                            meet jordan storm
                        </p>
                        <div className="base-text mt-5 max-w-2xl !min-h-0 space-y-5">
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
                        </div>
                    </div>
                    <AboutMedia
                        label="portrait"
                        src="/photos/about_portrait.png"
                        className="aspect-[3/4] min-h-0 w-full"
                        tone="gray"
                    />
                </section>

                <section className="mt-16 sm:mt-20">
                    <h2 className="main-heading text-5xl lowercase sm:text-6xl">
                        history
                    </h2>
                    <div className="mt-6 space-y-12 sm:space-y-16">
                        <AboutSection
                            media={
                                <AboutMedia
                                    label="Logo 1"
                                    src="/photos/logo_1.png"
                                    className="aspect-[1.8/1] w-full"
                                    tone="blue"
                                />
                            }
                        >
                            <div className="base-text !min-h-0 space-y-5">
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
                                    our signature cornflower blue visual
                                    language).
                                </p>
                            </div>
                        </AboutSection>

                        <AboutSection
                            reverse
                            media={
                                <AboutMedia
                                    label="Logo 2"
                                    src="/photos/logo_2.png"
                                    className="aspect-[1.8/1] w-full"
                                    tone="cream"
                                />
                            }
                        >
                            <div className="base-text !min-h-0 space-y-5">
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
                                    off-white tone.
                                </p>
                            </div>
                        </AboutSection>

                        <AboutSection
                            media={
                                <AboutMedia
                                    label="Logo 3"
                                    src="/photos/logo_3.png"
                                    className="aspect-[1.8/1] w-full"
                                    tone="gray"
                                />
                            }
                        >
                            <div className="base-text !min-h-0 space-y-5">
                                <p>
                                    A love for flat planes of color will never
                                    seem to fade. In an effort to solidify
                                    fonts, colors, patterns, and logos, the
                                    brand&apos;s second summer sprouted a third
                                    facade, sporting a new identity.
                                </p>
                                <p>
                                    Everything I learned about design and
                                    Photoshop matured. There&apos;s something
                                    noteworthy about double consonants, and the
                                    English teacher part of my brain missed the
                                    original play with that concept.
                                </p>
                                <p>
                                    Maybe the original, cutesy warmth has
                                    faded. Or maybe, and simply, this will look
                                    better on a t-shirt.
                                </p>
                            </div>
                        </AboutSection>
                    </div>
                </section>

                <section className="mx-auto mt-16 grid max-w-[760px] gap-8 sm:mt-24 sm:grid-cols-[165px_1fr] sm:gap-10">
                    <AboutMedia
                        label="Purses"
                        src="/photos/purses.png"
                        className="aspect-square min-h-0 w-full"
                        tone="gray"
                    />
                    <div className="base-text !min-h-0 space-y-5">
                        <p>
                            I&apos;ve become a stranger in this home. All the
                            cups I tend to use, all that is regular, detaches
                            itself from the front of my mind and falls by the
                            wayside. Everything became unfamiliar.
                        </p>
                        <p>
                            I remember buying this perfume, but it doesn&apos;t
                            weigh like a piece of me when it&apos;s here in my
                            hands.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}