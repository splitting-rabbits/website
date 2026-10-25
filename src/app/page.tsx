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
        <div className="relative min-h-screen bg-[#FFF1C7] px-6 py-8 sm:px-10 md:py-8">
            <section className="relative z-10 font-helonik mx-auto max-w-5xl px-5 text-center text-lg font-[450] tracking-normal text-black sm:px-8 sm:text-2xl md:text-3xl">
                Splitting Rabbits is an independent creative studio exploring the aesthetics of everyday life, domesticity, and human connection at the intersection of image, text, style, and sound.
            </section>

            {/* <pre
                aria-label="Illustration"
                className="relative z-0 -mt-14 font-penman text-penman- text-[#69B3E7] ml-[-1em] max-w-[494px] text-left tracking-wide leading-5.5"
            >{String.raw`
                  ⠀⠀⠀⠀⠀⠀⠀⠀ ⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⡞⠉⠀⠉⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⢷⣀⢀⣆⢀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                  ⠀⠀⠀⠀⠀ ⠀⠀⠀⠉⠉⣠⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   ⣤⡀⠀⠀⠀⠀⠀
                  ⠀⠀⠀⠀ ⠀⠀⠀⢀⢣⡞⣡⡴⠖⠒⢶⣄⠀⠀⠀⠀⠀⠀⠙⢿⡆⠀⠀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⡉⣿⠀⡏⠀⠀⠀⠀    ⠙⣇⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠁⢻⡄⣷⠀⠀⠀⢀⡀ ⡿⠆⠀⠀⠀⠀⠀⣸⠋⠀⠀⠀⠀
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
                  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⢰⡿⢡⡍⠀⠀⠀⠀⠀⠀⠀⠀⠀
                  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⢠⣶⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
            `.replace(/^[ \t]+/gm, "")}</pre> */}

            <div className="absolute ml-[0rem] mt-[-1rem] z-0">  
                <Image
                    src="/Background_Spiral.svg"
                    alt=""
                    width={468}
                    height={1138}
                    aria-hidden="true"
                    className="absolute left-0 top-0 z-0 h-auto w-[468px] max-w-none"
                />
            </div>

            <div className="absolute ml-[4rem] mt-[7rem] z-10">
                <Image
                    src="/Purple_Sky.jpg"
                    alt="Purple Sky Photo"
                    width={310}
                    height={620}
                    className="h-auto w-[clamp(220px,28vw,310px)] max-w-none object-contain"
                    priority
                />
            </div>

            <div className="absolute ml-[15rem] mt-[4rem] z-20">
                <Image
                    src="/Couches.jpg"
                    alt="Photo of three green coaches"
                    width={889}
                    height={334}
                    className="h-auto w-[clamp(320px,58vw,889px)] max-w-none object-contain"
                    priority
                />
            </div>

            <div className="absolute ml-[38rem] mt-[23rem] z-40">
                <Image
                    src="/Ocean.jpg"
                    alt="Photo of two people near the ocean"
                    width={555}
                    height={416}
                    className="h-auto w-[clamp(555px,58vw,416px)] max-w-none object-contain"
                    priority
                />
            </div>

            <div className="absolute left-[29rem] mt-[33rem] z-30">
                <Image
                    src="/Cross_Necklace.jpg"
                    alt="Photo of a person with red hair, a jacket with some pins, and a cross necklace atop a black turtleneck sweater"
                    width={378}
                    height={284}
                    className="h-auto w-[clamp(378px,58vw,284px)] max-w-none object-contain"
                    priority
                />
            </div>

            <section className="relative top-[60rem] z-10 font-helonik mx-auto max-w-5xl px-5 text-center text-lg font-[450] tracking-normal text-black sm:px-8 sm:text-2xl md:text-3xl">
                Splitting Rabbits is an independent creative studio exploring the aesthetics of everyday life, domesticity, and human connection at the intersection of image, text, style, and sound.
            </section>

            <section className="relative z-10 mt-[60rem] font-helonik mx-auto max-w-5xl px-5 text-center text-lg font-[450] tracking-normal text-black sm:px-8 sm:text-2xl md:text-3xl">
                Splitting Rabbits is an independent creative studio exploring the aesthetics of everyday life, domesticity, and human connection at the intersection of image, text, style, and sound.
            </section>
        </div>

        {/* <Footer /> */}
    </>
  );
}
