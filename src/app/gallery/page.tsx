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
                className="pointer-events-none absolute right-0 top-[32rem] z-0 hidden h-auto w-[min(40vw,39.5rem)] opacity-60 sm:block"
            />
            <main className="relative mx-auto w-full max-w-[90rem] px-4 pb-12 pt-24 text-black sm:px-6 sm:pb-16 sm:pt-32 lg:px-8 lg:pb-24 xl:px-[5.375rem] xl:pt-40">
                <section className="relative xl:h-[min(48rem,calc(61.39vw-7.25rem))]">
                    <h1 className="main-heading lowercase xl:absolute xl:left-0 xl:top-0 xl:z-10">
                        gallery
                    </h1>
                    <Image
                        src="/photos/gallery_page_collage.png"
                        alt="collage of awesome and eclectic photos"
                        width={1326}
                        height={884}
                        className="mt-3 h-auto w-full sm:mt-4 xl:absolute xl:left-1/2 xl:top-[-7.25rem] xl:mt-0 xl:w-[calc(100%+3.625rem)] xl:max-w-[82.875rem] xl:-translate-x-1/2"
                    />
                </section>
                <section
                    className="relative z-10 mt-10 xl:mt-0"
                    aria-labelledby="collections-heading"
                >
                    <h2
                        id="collections-heading"
                        className="main-heading mb-6 lowercase"
                    >
                        collections
                    </h2>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        <Link
                            href="/images/people"
                            className="group min-w-0"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src="/photos/collections/people-1.png"
                                    alt="Portrait from the People collection"
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />
                                <Image
                                    src="/photos/collections/people-2.png"
                                    alt="Second image from the People collection"
                                    width={229}
                                    height={172}
                                    className="absolute left-[44%] top-[18%] h-auto w-[54%] object-cover"
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
        <div className="pt-3 text-base italic leading-relaxed sm:text-lg">
            <p className="font-semibold">{title}</p>
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
            className="group min-w-0"
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                />
            </div>
            <CollectionCopy title={title} />
        </Link>
    );
}
