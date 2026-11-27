import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const dottedArt = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠖⠒⠲⢤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⣤⣤⠀⠀⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠑⢄⠀⠀⠀⠀⠀⠀⠀⠹⣄⣈⡩⠞⠁⠀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠁⠐⠀⠠⠀⣀⠀⠀⠀⠀⠀⠀⠀⡼⠁⠀⡠⠖⠚⠒⢦⡀⠀⠀⠀⢀⠄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠒⢤⡀⠀⠀⠰⡇⠀⡜⠀⠀⠀⣀⣼⠃⠀⠀⢠⠃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⣙⣦⣄⠀⢷⡄⡇⠀⠀⠺⠿⠃⠀⠀⢠⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢠⡀⠀⠀⣀⠠⠐⠂⠉⠉⠉⠀⠀⠈⠉⠉⠙⠻⢶⣽⣝⣄⠀⠀⠀⠀⠀⠀⢸⡆⠀⠀⣀⣀⣀⡀⠀⠀⠀
⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠊⠉⠀⠉⠉⠛⠳⢦⣀⠀⠀⠀⠸⣧⢠⡞⠁⠀⠀⠉⠳⡄⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠢⢄⡀⠹⣾⣇⠀⠀⢠⣶⠄⢹⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡀⠀⠘⠿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⠿⣿⡄⠀⠈⠛⠲⠋⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⢦⣀⣴⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣦⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣦⡀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣷⡀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⢤⣄⡀⠀⠀⢸⢳⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣏⠀⠀⣿⡟⠀⢠⡟⢸⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠦⠤⠬⠥⠔⠁⠀⡿⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠴⠊⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠖⠋⠉⣉⠉⠙⣿⡆⠀⠀⠀⠀⠀⢀⡠⠔⠊⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡞⠀⠀⢴⣿⣀⣤⡿⠁⠀⠀⢀⣠⠴⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡀⠀⠀⠀⠉⠉⠀⢀⣀⡴⠞⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠒⠒⠲⢲⣾⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣾⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⠶⠛⢩⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠈⠐⠒⠤⠤⠤⠤⠶⠖⠛⠉⠁⠀⢀⣴⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⡟⢹⡄⠀⠀⣴⣟⡻⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⢿⡿⠁⠀⠻⣦⣄⣈⣛⣡⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡟⢸⠇⠀⠀⠀⠀⠈⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡿⠀⢸⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣀⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠇⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⠁⠀⠉⠻⣦⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠈⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣶⠀⠀⠀⣹⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡆⠀⠀⠈⢿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁⠀⣠⠴⠃⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠄⠀⠀⠀⠉⠛⠷⣶⣤⣄⣀⣀⣀⣀⣀⣀⣠⣤⠴⠖⠋⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠢⠀⠀⠀⠀⠀⠀⠈⠙⢿⣍⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣀⠀⠀⠀⣸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠏⠹⠿⠃⠀⣠⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⢷⣤⣤⣴⠾⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

type ClusterLabelProps = {
    href: string;
    label: string;
    src: string;
    width: number;
    height: number;
    sizes: string;
    className: string;
    desktopHeight: string;
};

function ClusterLabel({
    href,
    label,
    src,
    width,
    height,
    sizes,
    className,
    desktopHeight,
}: ClusterLabelProps) {
    return (
        <Link href={href} aria-label={label} className={className}>
            <Image
                src={src}
                alt=""
                aria-hidden="true"
                width={width}
                height={height}
                sizes={sizes}
                className="h-auto w-full lg:hidden"
            />
            <span
                aria-hidden="true"
                className={`hidden whitespace-nowrap font-penman text-[#69B3E7] lg:block lg:text-[clamp(4rem,10.4167vw,9.375rem)] lg:leading-[normal] ${desktopHeight}`}
            >
                {label}
            </span>
        </Link>
    );
}

type MobileHomeTileProps = {
    href: string;
    label: string;
    imageSrc: string;
    artworkSrc: string;
    artworkWidth: number;
    artworkHeight: number;
    artworkWidthPercent: number;
};

function MobileHomeTile({
    href,
    label,
    imageSrc,
    artworkSrc,
    artworkWidth,
    artworkHeight,
    artworkWidthPercent,
}: MobileHomeTileProps) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="group relative block aspect-[4/3] w-full overflow-hidden"
        >
            <Image
                src={imageSrc}
                alt=""
                aria-hidden="true"
                fill
                sizes="calc(100vw - 1.5rem)"
                className="object-cover transition-transform group-hover:scale-[1.02]"
            />
            <Image
                src={artworkSrc}
                alt=""
                aria-hidden="true"
                width={artworkWidth}
                height={artworkHeight}
                className="absolute bottom-2 left-1/2 h-auto -translate-x-1/2"
                style={{ width: `${artworkWidthPercent}%` }}
            />
        </Link>
    );
}

export default function Home() {
    return (
        <>
            <section
                data-home-hero
                className="relative h-[min(100svh,60rem)] min-h-[32rem] w-full"
            >
                <div
                    className="absolute inset-x-0"
                    style={{
                        top: "calc(0px - env(safe-area-inset-top, 0px))",
                        height: "calc(100% + env(safe-area-inset-top, 0px))",
                    }}
                >
                    <Image
                        src="/photos/waves_background.jpg"
                        alt="Ocean Waves on the Beach"
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority
                    />
                </div>
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

            <main className="w-full bg-[#FFF1C7] pt-12 pb-12 text-black sm:pt-16 sm:pb-16 lg:pt-6 lg:pb-24">
                <section className="mx-auto flex min-h-0 w-full max-w-[67.3125rem] items-center justify-center px-4 text-center font-helonik text-[20px] font-[450] leading-relaxed md:text-2xl lg:min-h-[10.875rem] lg:px-0 lg:text-4xl lg:font-bold lg:leading-[44px]">
                    Splitting Rabbits is an independent creative studio
                    exploring the aesthetics of everyday life, domesticity, and
                    human connection at the intersection of image, text, style,
                    and sound.
                </section>

                <section
                    aria-label="Explore the site"
                    className="mx-auto mt-10 flex w-screen max-w-5xl flex-col gap-3 px-3 lg:hidden"
                >
                    <MobileHomeTile
                        href="/filmography"
                        label="Filmography"
                        imageSrc="/photos/Couches.jpg"
                        artworkSrc="/elements/Filmography.png"
                        artworkWidth={250}
                        artworkHeight={78}
                        artworkWidthPercent={70}
                    />
                    <MobileHomeTile
                        href="/gallery"
                        label="Gallery"
                        imageSrc="/photos/Ocean.jpg"
                        artworkSrc="/elements/Gallery.png"
                        artworkWidth={165}
                        artworkHeight={76}
                        artworkWidthPercent={55}
                    />
                    <MobileHomeTile
                        href="/about"
                        label="About"
                        imageSrc="/photos/Cross_Necklace.jpg"
                        artworkSrc="/elements/About.png"
                        artworkWidth={137}
                        artworkHeight={47}
                        artworkWidthPercent={42}
                    />
                    <MobileHomeTile
                        href="/literature"
                        label="Literature"
                        imageSrc="/photos/Purple_Sky.jpg"
                        artworkSrc="/elements/Literature.png"
                        artworkWidth={185}
                        artworkHeight={59}
                        artworkWidthPercent={55}
                    />
                </section>

                <div className="@container relative mx-auto mt-10 hidden aspect-[4/3] w-[calc(100%-2rem)] max-w-5xl overflow-x-clip sm:mt-14 sm:aspect-[16/10] sm:w-[calc(100%-3rem)] md:aspect-[1440/1038] lg:-mt-[1.375rem] lg:block lg:aspect-[1440/1038] lg:w-full lg:max-w-[90rem]">
                    <pre
                        aria-hidden="true"
                        className="pointer-events-none absolute left-[-7.5%] top-0 z-0 max-w-none whitespace-pre font-penman text-[clamp(0.25rem,1.6667cqw,1.5rem)] leading-[1.125] text-[#69B3E7]"
                    >
                        {dottedArt}
                    </pre>
                    <Link
                        href="/literature"
                        aria-label="Literature"
                        className="group absolute left-[6%] top-[24%] z-10 w-[22%] lg:left-[7.08%] lg:top-[13.49%] lg:w-[21.53%]"
                    >
                        <Image
                            src="/photos/Purple_Sky.jpg"
                            alt="Purple Sky Photo"
                            width={310}
                            height={619}
                            sizes="(min-width: 90rem) 19.375rem, 21.53vw"
                            className="h-auto w-full object-cover transition-transform group-hover:scale-[1.02]"
                        />
                    </Link>
                    <Link
                        href="/filmography"
                        aria-label="Filmography"
                        className="group absolute left-[25%] top-[10%] z-20 w-[62%] lg:left-[22.29%] lg:top-[7.61%] lg:w-[61.74%]"
                    >
                        <Image
                            src="/photos/Couches.jpg"
                            alt="Photo of three green couches"
                            width={889}
                            height={334}
                            sizes="(min-width: 90rem) 55.5625rem, 61.74vw"
                            className="h-auto w-full object-cover transition-transform group-hover:scale-[1.02]"
                        />
                    </Link>
                    <Link
                        href="/gallery"
                        aria-label="Gallery"
                        className="group absolute left-[62%] top-[43%] z-40 w-[31%] lg:left-[54.03%] lg:top-[44.12%] lg:w-[38.54%]"
                    >
                        <Image
                            src="/photos/Ocean.jpg"
                            alt="Photo of two people near the ocean"
                            width={555}
                            height={416}
                            sizes="(min-width: 90rem) 34.6875rem, 38.54vw"
                            className="h-auto w-full object-cover transition-transform group-hover:scale-[1.02]"
                        />
                    </Link>
                    <Link
                        href="/about"
                        aria-label="About"
                        className="group absolute left-[35%] top-[52%] z-30 w-[29%] lg:left-[38.06%] lg:top-[67.05%] lg:w-[26.25%]"
                    >
                        <Image
                            src="/photos/Cross_Necklace.jpg"
                            alt="Photo of a person with red hair wearing a cross necklace"
                            width={378}
                            height={284}
                            sizes="(min-width: 90rem) 23.625rem, 26.25vw"
                            className="h-auto w-full object-cover transition-transform group-hover:scale-[1.02]"
                        />
                    </Link>
                    <ClusterLabel
                        href="/filmography"
                        label="Filmography"
                        src="/elements/Filmography.png"
                        width={250}
                        height={78}
                        sizes="(min-width: 64rem) 36.2vw, 36vw"
                        className="absolute left-[35%] top-[4%] z-50 w-[36%] lg:left-[40.28%] lg:top-[2.02%] lg:w-[36.18%]"
                        desktopHeight="lg:h-[7.5vw] 2xl:h-[6.75rem]"
                    />
                    <ClusterLabel
                        href="/gallery"
                        label="Gallery"
                        src="/elements/Gallery.png"
                        width={165}
                        height={76}
                        sizes="(min-width: 64rem) 24.5vw, 27vw"
                        className="absolute left-[58%] top-[42%] z-50 w-[27%] lg:left-[42.71%] lg:top-[44.6%] lg:w-[24.44%]"
                        desktopHeight="lg:h-[7.5vw] 2xl:h-[6.75rem]"
                    />
                    <ClusterLabel
                        href="/literature"
                        label="Literature"
                        src="/elements/Literature.png"
                        width={185}
                        height={59}
                        sizes="(min-width: 64rem) 29.5vw, 30vw"
                        className="absolute left-[8%] top-[47%] z-50 w-[30%] lg:left-[8.54%] lg:top-[58.57%] lg:w-[29.51%]"
                        desktopHeight="lg:h-[6.875vw] 2xl:h-[6.1875rem]"
                    />
                    <ClusterLabel
                        href="/about"
                        label="About"
                        src="/elements/About.png"
                        width={137}
                        height={47}
                        sizes="(min-width: 64rem) 21.8vw, 24vw"
                        className="absolute left-[33%] top-[73%] z-50 w-[24%] lg:left-[47.78%] lg:top-[88.25%] lg:w-[21.8%]"
                        desktopHeight="lg:h-[8.4722vw] 2xl:h-[7.625rem]"
                    />
                </div>

                <section
                    className="mx-auto mt-12 grid max-w-6xl gap-8 px-4 pt-8 sm:px-6 md:mt-16 md:grid-cols-2 md:items-stretch md:gap-12 lg:mt-20 lg:gap-16 lg:px-8"
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
                        className="aspect-video w-full md:aspect-auto md:h-full"
                        src="https://www.youtube.com/embed/I_Rp7cg8NRg"
                        title="Splitting Rabbits studio trailer"
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
