import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Gallery() {
    return (
        <div className="relative min-h-screen bg-[#FFF1C7]">
            <Header position="top" color="dark" />
            <Image
                src="/elements/Gallery_Dot_Art.svg"
                alt=""
                width={632}
                height={1030}
                aria-hidden="true"
                className="pointer-events-none absolute right-[2rem] top-[48rem] z-0 hidden h-[960px] w-auto opacity-90 sm:block"
            />
            <main className="relative max-w-none px-4 pb-12 pt-24 text-black sm:px-6 sm:pl-[4.5rem] sm:pt-32 lg:pr-10 lg:pt-[162px]">
                <h1 className="main-heading lowercase sm:text-6xl">
                    gallery
                </h1>
                <Image
                    src="/photos/gallery_page_collage.png"
                    alt="collage of awesome and eclectic photos"
                    width={1326}
                    height={884}
                    className="mt-0 h-auto w-full max-w-[1326px] sm:mt-[-10rem]"
                />
                <section className="mt-6 max-w-[773px]" aria-labelledby="collections-heading">
                    <h2
                        id="collections-heading"
                        className="mb-3 font-helonik text-5xl font-bold tracking-[-0.04em] sm:text-6xl"
                    >
                        collections
                    </h2>

                    <div className="flex flex-col gap-8 sm:gap-3">
                        <Link
                            href="/images/people"
                            className="grid min-h-[180px] grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-start gap-3 sm:h-[265px] sm:gap-5"
                        >
                            <div className="relative h-full overflow-hidden">
                                <Image
                                    src="/photos/collections/people-1.png"
                                    alt="Portrait from the People collection"
                                    fill
                                    sizes="(max-width: 768px) 50vw, 354px"
                                    className="object-cover"
                                />
                                <Image
                                    src="/photos/collections/people-2.png"
                                    alt="Second image from the People collection"
                                    width={229}
                                    height={172}
                                    sizes="229px"
                                    className="absolute left-[45%] top-[49px] object-cover"
                                />
                            </div>
                            <CollectionCopy title="People" />
                        </Link>

                        <CollectionItem
                            image="/photos/collections/places.png"
                            alt="Interior from the Places collection"
                            title="Places"
                        />
                        <CollectionItem
                            image="/photos/collections/things.png"
                            alt="Breakfast from the Things collection"
                            title="Things"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

function CollectionCopy({ title }: { title: string }) {
    return (
        <div className="pt-1 text-[0.7rem] italic leading-6 sm:text-sm">
            <p>{title}</p>
            <p className="font-normal not-italic text-[#69B3E7]">
                &lsquo;Til death do us part.
            </p>
        </div>
    );
}

function CollectionItem({
    image,
    alt,
    title,
}: {
    image: string;
    alt: string;
    title: string;
}) {
    return (
        <Link
            href={`/images/${title.toLowerCase()}`}
            className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-start gap-3 sm:gap-5"
        >
            <div className="relative aspect-[354/266] min-w-0 overflow-hidden">
                <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 354px"
                    className="object-cover"
                />
            </div>
            <CollectionCopy title={title} />
        </Link>
    );
}
