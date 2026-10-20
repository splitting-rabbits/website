import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer"; 
import Image from "next/image";

export default function Home() {
  return (
    <>
        {/* this section houses the ocean waves image, the bunny overlay, and the header below */}
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
        <main className="min-h-screen bg-[#FFF1C7] px-6 py-8 sm:px-10 md:py-8">
            <section className="mx-auto max-w-5xl px-5 text-center text-lg font-[450] tracking-normal text-black sm:px-8 sm:text-2xl md:text-3xl">
                Splitting Rabbits is an independent creative studio exploring the aesthetics of everyday life, domesticity, and human connection at the intersection of image, text, style, and sound.
            </section>

            <pre
                aria-label="Illustration"
                className=" w-full ml-[-1em] max-w-[494px] text-left font-mono text-[24px] tracking-wide leading-6 text-black"
            >{String.raw`
                  ⠀⠀⠀⠀⠀⠀⠀⠀ ⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⡞⠉⠀⠉⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⢷⣀⢀⣆⢀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⣠⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⡀⠀⠀⠀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⢀⢣⡞⣡⡴⠖⠒⢶⣄⠀⠀⠀⠀⠀⠀⠙⢿⡆⠀⠀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⡉⣿⠀⡏⠀⠀⠀⠀⠙⣇⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠁⢻⡄⣷⠀⠀⠀⢀⡀⡿⠆⠀⠀⠀⠀⠀⣸⠋⠀⠀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠰⠮⠻⣜⢧⡀⠀⠿⠟⠁⠀⠀⠀⠀⣠⣾⢵⣇⣤⠀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠼⢯⡳⣄⠀⠀⠀⠀⠀⢀⡾⠉⠀⠀⠈⢳⠛⠂⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⠻⣷⣄⠀⠀⠀⣼⠁⠀⢠⠄⠀⢈⣟⡁⠀
                  ⠀⠀⠀⠀⠀⠀⠀⢀⡴⣒⣩⣭⣝⣒⠮⣝⣧⣄⠀⣯⠀⠀⠹⠧⢴⡿⠄⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⣎⣼⡋⠉⠈⠉⠙⠛⠶⣽⡻⣷⣿⡀⠀⠀⠀⢈⣁⣀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⡗⣂⠀⠀⣀⡆⠀⠀⠀⠀⠈⠉⠙⠿⣆⠀⢠⡏⢁⢈⡆⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠘⠳⠭⠯⠿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⡈⢧⡈⠉⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣆⠁⠀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠞⠛⠶⣄⠀⠀⢿⣆⣤⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⢠⠀⠀⡿⠀⠀⡸⣿⠰⠆⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣧⠀⠉⠉⠁⠀⡰⠃⣿⠀⠓⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⡀⠀⠀⠀⠀⠈⠙⠒⠒⠒⠋⠀⢰⢻⢀⣏⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠀⡴⠟⠁⠈⢙⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠋⣾⢰⡍⠀
                  ⠀⠀⠀⠀⠀⠀⠀⣸⠁⠀⠀⠀⠻⠟⠀⠀⠀⠀⠀⠀⠀⠀⠐⠁⣼⢇⠷⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⢿⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣟⡘⠁⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠘⢧⡀⠀⠀⠀⠙⠿⢷⣶⣤⣤⡴⠶⣫⣿⠟⡬⠁⠀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢦⣀⠀⠀⠀⠀⠀⠀⣀⣤⣾⡿⣇⠛⠂⠀⠀⠀⠀
                  ⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠒⠒⠛⢋⣽⡿⡫⠶⠉⠀⠀⠀⠀⠀⠀
                  ⠀⠃⠤⢀⡀⣀⡀⣠⡄⠠⣶⡆⣀⡤⠖⣫⣾⣿⠻⠌⠋⠀⠀⠀⠀⠀⠀⠀⠀
                  ⠀⠀⠀⠈⠀⠉⠁⠙⠁⣠⡴⠚⣁⣴⣿⠟⣥⠝⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⢀⡴⠞⠁⣠⣾⠿⣫⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                  ⠀⠀⠀⠀⢀⡴⠋⠀⣠⣾⠟⢡⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                  ⠀⠀⠀⣰⠟⠀⣠⡾⠋⠀⠀⡿⡆⠀⢀⡶⠛⠛⢶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
                  ⠀⠀⣼⠃⠀⣴⠟⠀⠀⠀⢰⡇⡇⠀⠘⣇⣀⡔⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀
                  ⠀⣸⠃⠀⣼⠃⠀⠀⠀⠀⢸⡇⠘⢦⣀⠀⠀⣀⡴⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
                  ⢀⡏⠀⢰⠃⠀⠀⡰⠀⠀⠸⣷⡀⠀⠈⠉⠉⠉⠀⠀⠀⠀⣤⠚⠉⠙⢦⡀⠀
                  ⢸⠇⠀⢸⠀⢀⠆⡇⠀⠀⠀⢣⠳⡀⠀⠀⠀⠀⠀⠀⠀⠀⢷⣷⠄⠀⠀⠹⡄
                  ⢸⡆⠀⢸⠀⣼⠁⣷⠀⠀⠀⠈⢧⠈⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇
                  ⠀⡇⠀⠀⠀⠶⠆⠹⣷⣄⠀⠀⠈⠻⣖⢤⣀⡀⠀⠀⢀⣠⣴⡿⠀⠿⠆⣰⠇
                  ⠀⠸⠀⠀⠀⢶⡆⠀⠀⠉⣁⠀⠀⠀⠈⠳⣄⡉⢙⢛⢛⡏⣥⠘⢗⣠⠞⠁⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠀⢀⠎⠀⠀⢀⣀⡀⠈⢦⠉⠓⠶⠶⠶⠒⠚⠉⠀⠀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⡞⠉⠉⠙⣦⠈⢷⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⠀⠱⠴⠞⢀⡿⠂⢸⡇⠅⠀⠀⠀⠀⠀⠀⠀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠲⠤⠤⠴⠞⠁⠀⣼⡇⣛⠀⠀⠀⠀⠀⠀⠀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡿⢡⡍⠀⠀⠀⠀⠀⠀⠀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣶⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
            `.replace(/^[ \t]+/gm, "")}</pre>
        </main>

        {/* <Footer /> */}
    </>
  );
}
