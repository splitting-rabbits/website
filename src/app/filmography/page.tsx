import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function Filmography() {
    return (
        <div className="relative min-h-screen">
            <Header position="top" color="dark" />
            <main className="relative min-h-screen bg-[#FFF1C7] px-4 pt-24 pb-48 text-black sm:px-6 sm:pt-32 sm:pb-48 lg:px-8">
                <Image
                    src="/elements/Bunny_Dots.svg"
                    alt=""
                    aria-hidden="true"
                    width={575}
                    height={334}
                    className="pointer-events-none absolute right-0 top-24 z-0 hidden h-auto w-[min(42vw,36rem)] opacity-80 lg:block"
                />
                <div className="relative z-10 mx-auto max-w-6xl">
                    <h1 className="main-heading">filmography</h1>
                    <h2 className="sub-heading">narrative and experimental shorts</h2>
                    <p className="base-text mt-4">
                        Inspired by romance and contemporary culture (always alongside an alternative soundtrack), the complete filmography of Splitting Rabbits offers a range of aesthetically driven vignettes.
                    </p>
                </div>
                <div className="relative z-10 mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:mt-12 lg:grid-cols-3 xl:grid-cols-4">
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

            </main>
            <Footer position="bottom" />
        </div>
    );
}
