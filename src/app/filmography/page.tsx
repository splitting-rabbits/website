import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function Filmography() {
    return (
        <div className="relative min-h-screen">
            <Header position="top" color="dark" />
            <main className="min-h-screen bg-[#FFF1C7] px-6 py-32 text-black">
                <h2 className="main-heading ml-[3rem]">filmography</h2>
                <h3 className="sub-heading ml-[3rem]">narrative and experimental shorts</h3>
                <p className="base-text mt-4 ml-[3rem]">
                    Inspired by romance and contemporary culture (always alongside an alternative soundtrack), the complete filmography of Splitting Rabbits offers a range of aesthetically driven vignettes.
                </p>
                <div className="mt-12 ml-[3rem] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <a className="poster-card" href="https://youtu.be/2fQlQpzLKr4">
                        <Image
                            className="poster-card-media"
                            src="/poster_Nelson.png"
                            alt="3739 Nelson Street (Late at Night) poster"
                            width={375}
                            height={555}
                        />
                        <h3 className="poster-card-title">3739 Nelson Street (Late at Night)</h3>
                        <p className="poster-card-description">How would you like to remember us?</p>
                    </a>
                    <a className="poster-card" href="">
                        <Image 
                            className="poster-card-media" 
                            src="" 
                            alt="" 
                            width={375} 
                            height={555} 
                        />
                        <h3 className="poster-card-title">Angels</h3>
                        <p className="poster-card-description">Chalk it up to human nature.</p>
                    </a>
                    <a className="poster-card" href="">
                        <Image 
                            className="poster-card-media" 
                            src="" 
                            alt="" 
                            width={375} 
                            height={555} 
                        />
                        <h3 className="poster-card-title">Clark&apos;s End, New York</h3>
                        <p className="poster-card-description">Whole years refuse to stay where
                            we told them to (bad dog).</p>
                    </a>
                    <a className="poster-card" href="">
                        <Image className="poster-card-media" src="" alt="" width={375} height={555} />
                        <h3 className="poster-card-title">You Can Take It With You</h3>
                        <p className="poster-card-description">Work. Party. Repeat.</p>
                    </a>
                    <a className="poster-card" href="">
                        <Image className="poster-card-media" src="" alt="" width={375} height={555} />
                        <h3 className="poster-card-title">Heart Spark Dollar Sign</h3>
                        <p className="poster-card-description">You&apos;re possessed with a power bigger than the pain.</p>
                    </a>
                    <a className="poster-card" href="">
                        <Image className="poster-card-media" src="" alt="" width={375} height={555} />
                        <h3 className="poster-card-title">America&apos;s Pastime and The Day After</h3>
                        <p className="poster-card-description">Are you sure?</p>
                    </a>
                    <a className="poster-card" href="">
                        <Image className="poster-card-media" src="" alt="" width={375} height={555} />
                        <h3 className="poster-card-title">Miss America</h3>
                        <p className="poster-card-description">Do what you love, and **** the rest.</p>
                    </a>
                    <a className="poster-card" href="">
                        <Image className="poster-card-media" src="" alt="" width={375} height={555} />
                        <h3 className="poster-card-title">April&apos;s Over</h3>
                        <p className="poster-card-description">Je ne suis pas amoureuse. Je ne
                            suis pas amoureuese.</p>
                    </a>
                    <a className="poster-card" href="">
                        <Image className="poster-card-media" src="" alt="" width={375} height={555} />
                        <h3 className="poster-card-title">Your Coffin or Mine?</h3>
                        <p className="poster-card-description">‘Til death do us part.</p>
                    </a>
                    <a className="poster-card" href="">
                        <Image className="poster-card-media" src="" alt="" width={375} height={555} />
                        <h3 className="poster-card-title">Original Sin</h3>
                        <p className="poster-card-description">All can be salvaged. Shake my hand.</p>
                    </a>
                    <a className="poster-card" href="">
                        <Image className="poster-card-media" src="" alt="" width={375} height={555} />
                        <h3 className="poster-card-title">Filosofem</h3>
                        <p className="poster-card-description">Wake up.</p>
                    </a>
                    <a className="poster-card" href="">
                        <Image className="poster-card-media" src="" alt="" width={375} height={555} />
                        <h3 className="poster-card-title">Return to the Lake</h3>
                        <p className="poster-card-description">It&apos;s calling me again.</p>
                    </a>
                </div>

                <h2 className="mt-[3rem] main-heading ml-[3rem]">read more</h2>
                <h3 className="sub-heading ml-[3rem]">explore the creative process and alternative posters for select works</h3>
                <p className="base-text mt-4 ml-[3rem]">
                    Inspired by romance and contemporary culture (always alongside an alternative soundtrack), the complete filmography of Splitting Rabbits offers a range of aesthetically driven vignettes.
                </p>
            </main>
            <Footer position="bottom" />
        </div>
    );
}
