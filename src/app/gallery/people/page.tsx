import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const photos = [
    ["1-6.png", "1 6"],
    ["2-1.png", "2 1"],
    ["8-8.png", "8 8"],
    ["7-2.png", "7 2"],
    ["6-9.png", "6 9"],
    ["5-1.png", "5 1"],
    ["4-1.png", "4 1"],
    ["3-740.png", "3 740"],
    ["18-1.png", "18 1"],
    ["9-1.png", "9 1"],
    ["10-1.png", "10 1"],
    ["11-1.png", "11 1"],
    ["12-1.png", "12 1"],
    ["13-2.png", "13 2"],
    ["14-1.png", "14 1"],
    ["15-2.png", "15 2"],
    ["16-1.png", "16 1"],
    ["17-1.png", "17 1"],
    ["19-1.png", "19 1"],
    ["20-1.png", "20 1"],
    ["surfers-1.png", "surfers 1"],
] as const;

export default function People() {
    return (
        <div className="relative min-h-screen bg-[#FFF1C7]">
            <Header position="top" color="dark" />
            <main className="mx-auto w-full max-w-7xl px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8 lg:pb-24">
                <h1 className="sr-only">People collection</h1>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:gap-8">
                    {photos.map(([src, alt]) => (
                        <div
                            key={src}
                            className="relative aspect-[4/3] min-w-0 overflow-hidden"
                        >
                            <Image
                                src={`/photos/people/${src}`}
                                alt={`People collection image ${alt}`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
