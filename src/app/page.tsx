import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer"; 
import Image from "next/image";

export default function Home() {
  return (
    <>
        <section className="relative h-[calc(100vh+7rem)] w-full overflow-hidden">
            <Image
                src="/waves_background.jpg"
                alt="Ocean Waves on the Beach"
                fill
                sizes="100vw"
                className="object-cover"
                priority
            />

            <div className="absolute inset-x-0 top-0 flex h-screen items-center justify-center">
                <Image
                    src="/Black_Bunny_Logo.png"
                    alt="Splitting Rabbits Logo Overlay"
                    width={654}
                    height={654}
                    className="h-auto max-h-[65%] w-[min(70vw,42rem)] object-contain"
                    priority
                />
            </div>

            <Header />

        </section>

        {/* main content section */}
        <main className="min-h-screen bg-[#ffe699]">
            <section className="flex h-screen items-center justify-center">
                <Image
                    src="/Under_Construction.png"
                    alt="Under Construction"
                    width={654}
                    height={654}
                    priority
                />
            </section>
        </main>

        <Footer />
    </>
  );
}
