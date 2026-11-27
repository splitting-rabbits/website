import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const photos = [
    ["1.png", "1"],
    ["6.png", "6"],
    ["2.png", "2"],
    ["9.png", "9"],
    ["20.png", "20"],
    ["8.png", "8"],
    ["11.png", "11"],
    ["7.png", "7"],
    ["17.png", "17"],
    ["14.png", "14"],
    ["4.png", "4"],
    ["3.png", "3"],
    ["5.png", "5"],
    ["19.png", "19"],
    ["15.png", "15"],
    ["18.png", "18"],
    ["13.png", "13"],
    ["10.png", "10"],
    ["12.png", "12"],
    ["16.png", "16"],
] as const;

export default function Places() {
    return (
        <div className="relative min-h-screen bg-[#FFF1C7]">
            <Header position="top" color="dark" />
            <main className="mx-auto w-full max-w-7xl px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8 lg:pb-24">
                <h1 className="sr-only">Places collection</h1>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:gap-8">
                    {photos.map(([src, alt]) => (
                        <div
                            key={src}
                            className="relative aspect-[4/3] min-w-0 overflow-hidden"
                        >
                            <Image
                                src={`/photos/places/${src}`}
                                alt={`Places collection image ${alt}`}
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
