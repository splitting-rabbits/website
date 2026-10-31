import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function Gallery() {
    return (
        <div className="relative min-h-screen">
            <Header position="top" color="dark" />
            <main className="min-h-screen bg-[#FFF1C7] px-6 py-32 text-center text-black">
                <Image
                    src="/Under_Construction.png"
                    alt="Page under construction"
                    width={500}
                    height={500}
                    className="mx-auto mt-12 h-auto w-full max-w-[500px] object-contain"
                />
            </main>
            <Footer position="bottom" />
        </div>
    );
}
