import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function Filmography() {
    return (
        <div className="relative min-h-screen">
            <Header position="top" color="dark" />
            <main className="relative min-h-screen overflow-hidden bg-[#FFF1C7] px-6 py-32 text-black">
                <Image
                    src="/elements/Bunny_Dots.svg"
                    alt=""
                    aria-hidden="true"
                    width={575}
                    height={334}
                    className="pointer-events-none absolute right-16 top-26 z-0 hidden w-[min(50vw,575px)] max-w-none lg:block"
                />
                <div className="relative z-10">
                    <h2 className="main-heading ml-[3rem]">filmography</h2>
                    <h3 className="sub-heading ml-[3rem]">narrative and experimental shorts</h3>
                    <p className="base-text mt-4 ml-[3rem]">
                        Inspired by romance and contemporary culture (always alongside an alternative soundtrack), the complete filmography of Splitting Rabbits offers a range of aesthetically driven vignettes.
                    </p>
                </div>
                <div className="relative z-10 mt-12 ml-[3rem] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <a className="poster-card" href="https://youtu.be/zWJKj8zuGFE">
                        <Image
                            className="poster-card-media"
                            src="/posters/poster_Nelson.png"
                            alt="3739 Nelson Street (Late at Night) poster"
                            width={375}
                            height={555}
                        />
                        <h3 className="poster-card-title">3739 Nelson Street (Late at Night)</h3>
                        <p className="poster-card-description">How would you like to remember us?</p>
                    </a>
                    <a className="poster-card" href="https://youtu.be/-GMCy7zfFss">
                        <Image
                            className="poster-card-media"
                            src="/posters/poster_Angels.png"
                            alt="Angels poster"
                            width={375}
                            height={555}
                        />
                        <h3 className="poster-card-title">Angels</h3>
                        <p className="poster-card-description">Chalk it up to human nature.</p>
                    </a>
                    <a className="poster-card" href="https://youtu.be/M5F_0zjqrYI">
                        <Image
                            className="poster-card-media"
                            src="/posters/poster_CENY.png"
                            alt="Clark's End, New York poster"
                            width={375}
                            height={555}
                        />
                        <h3 className="poster-card-title">Clark&apos;s End, New York</h3>
                        <p className="poster-card-description">Whole years refuse to stay where
                            we told them to (bad dog).</p>
                    </a>
                    <a className="poster-card" href="https://youtu.be/WhAz4rGPDnU">
                        <Image
                            className="poster-card-media"
                            src="/posters/poster_YCTIWY_alt.png"
                            alt="You Can Take It With You poster"
                            width={375}
                            height={555}
                        />
                        <h3 className="poster-card-title">You Can Take It With You</h3>
                        <p className="poster-card-description">Work. Party. Repeat.</p>
                    </a>
                    <a className="poster-card" href="https://youtu.be/x4ZiwJUbN-k">
                        <Image
                            className="poster-card-media"
                            src="/posters/poster_HSDS.png"
                            alt="Heart Spark Dollar Sign poster"
                            width={375}
                            height={555}
                        />
                        <h3 className="poster-card-title">Heart Spark Dollar Sign</h3>
                        <p className="poster-card-description">You&apos;re possessed with a power bigger than the pain.</p>
                    </a>
                    <a className="poster-card" href="https://youtu.be/qCkk7Tc3pRw">
                        <Image
                            className="poster-card-media"
                            src="/posters/poster_APATDA.png"
                            alt="America's Pastime and The Day After poster"
                            width={375}
                            height={555}
                        />
                        <h3 className="poster-card-title">America&apos;s Pastime and The Day After</h3>
                        <p className="poster-card-description">Are you sure?</p>
                    </a>
                    <a className="poster-card" href="https://youtu.be/2fQlQpzLKr4">
                        <Image
                            className="poster-card-media"
                            src="/posters/poster_MissAmerica.png"
                            alt="Miss America poster"
                            width={375}
                            height={555}
                        />
                        <h3 className="poster-card-title">Miss America</h3>
                        <p className="poster-card-description">Do what you love, and **** the rest.</p>
                    </a>
                    <a className="poster-card" href="https://youtu.be/H1WqIC19OhQ">
                        <Image
                            className="poster-card-media"
                            src="/posters/poster_AprilsOver.png"
                            alt="April's Over poster"
                            width={375}
                            height={555}
                        />
                        <h3 className="poster-card-title">April&apos;s Over</h3>
                        <p className="poster-card-description">Je ne suis pas amoureuse. Je ne
                            suis pas amoureuese.</p>
                    </a>
                    <a className="poster-card" href="https://youtu.be/k3TzUBBcrOY">
                        <Image
                            className="poster-card-media"
                            src="/posters/poster_YCOM.png"
                            alt="Your Coffin or Mine? poster"
                            width={375}
                            height={555}
                        />
                        <h3 className="poster-card-title">Your Coffin or Mine?</h3>
                        <p className="poster-card-description">‘Til death do us part.</p>
                    </a>
                    <a className="poster-card" href="https://youtu.be/9QNC4IcmXY0">
                        <Image
                            className="poster-card-media"
                            src="/posters/poster_OriginalSin.png"
                            alt="Original Sin poster"
                            width={375}
                            height={555}
                        />
                        <h3 className="poster-card-title">Original Sin</h3>
                        <p className="poster-card-description">All can be salvaged. Shake my hand.</p>
                    </a>
                    <a className="poster-card" href="https://youtu.be/tNwB8EBLdMU">
                        <Image
                            className="poster-card-media"
                            src="/posters/poster_Filosofem.png"
                            alt="Filosofem poster"
                            width={375}
                            height={555}
                        />
                        <h3 className="poster-card-title">Filosofem</h3>
                        <p className="poster-card-description">Wake up.</p>
                    </a>
                    <a className="poster-card" href="https://youtu.be/_Yrfgegknq0">
                        <Image
                            className="poster-card-media"
                            src="/posters/poster_RTTL.png"
                            alt="Return to the Lake poster"
                            width={375}
                            height={555}
                        />
                        <h3 className="poster-card-title">Return to the Lake</h3>
                        <p className="poster-card-description">It&apos;s calling me again.</p>
                    </a>
                </div>

                {/* <h2 className="mt-[3rem] main-heading ml-[3rem]">read more</h2>
                <h3 className="sub-heading ml-[3rem]">explore the creative process and alternative posters for select works</h3>
                <p className="base-text mt-6 ml-[3rem]">
                    Into <em>You Can Take It With You</em> ⮞
                </p>
                <p className="base-text mt-[-2rem] ml-[3rem]">
                    Into <em>Heart Spark Dollar Sign</em> ⮞
                </p> */}
            </main>
            <Footer position="bottom" />
        </div>
    );
}
