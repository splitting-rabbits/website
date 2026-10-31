import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer"; 
import Image from "next/image";

export default function Home() {
  return (
    <>
        <Header />

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
