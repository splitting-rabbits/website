import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const photos = [
    ["dsc06842-1.png", "DSC06842"],
    ["dsf1709-1.png", "DSF1709"],
    ["dsf1569-1.png", "DSF1569"],
    ["dsf1912-1.png", "DSF1912"],
    ["dsf1806-1.png", "DSF1806"],
    ["8-7.png", "8 7"],
    ["dsc03247-1.png", "DSC03247"],
    ["dsc03239-1.png", "DSC03239"],
    ["dsc03248-1.png", "DSC03248"],
    ["13-1.png", "13"],
    ["dsc05539-1.png", "DSC05539"],
    ["15-1.png", "15"],
    ["dsc06665-1.png", "DSC06665"],
    ["dsc07100-1.png", "DSC07100"],
    ["dsc06452-1.png", "DSC06452"],
    ["pomm-1.png", "pomm"],
    ["windows-1.png", "windows"],
    ["img3696-1.png", "IMG 3696"],
    ["dsc07122-1.png", "DSC07122"],
] as const;

const featuredPhotos = [
    ["apartment-2.png", "Things collection interior"],
    ["apartment-1.png", "Things collection bedroom"],
] as const;

export default function Things() {
    return (
        <div className="relative min-h-screen bg-[#FFF1C7]">
            <Header position="top" color="dark" />
            <main className="mx-auto w-full max-w-7xl px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8 lg:pb-24">
                <h1 className="sr-only">Things collection</h1>
                <div className="mb-4 grid grid-cols-1 gap-4 sm:mb-6 sm:grid-cols-2 sm:gap-6 lg:gap-8">
                    {featuredPhotos.map(([src, alt]) => (
                        <div
                            key={src}
                            className="relative aspect-[4/3] min-w-0 overflow-hidden"
                        >
                            <Image
                                src={`/photos/things/${src}`}
                                alt={alt}
                                fill
                                sizes="(max-width: 640px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:gap-8">
                    {photos.map(([src, alt]) => (
                        <div
                            key={src}
                            className="relative aspect-[4/3] min-w-0 overflow-hidden"
                        >
                            <Image
                                src={`/photos/things/${src}`}
                                alt={`Things collection image ${alt}`}
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
