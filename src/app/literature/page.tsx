import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function Literature() {
    return (
        <div className="relative min-h-screen">
            <Header position="top" color="dark" />
            <main className="min-h-screen bg-[#FFF1C7] px-4 py-24 text-center text-black sm:px-6 sm:py-32 lg:px-8">
                <Image
                    src="/logos/Under_Construction.png"
                    alt="Page under construction"
                    width={500}
                    height={500}
                    className="mx-auto mt-8 h-auto w-full max-w-lg object-contain sm:mt-12"
                />
            </main>
            <Footer position="bottom" />
        </div>
    );
}
