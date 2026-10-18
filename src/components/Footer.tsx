import Image from "next/image";



export function Footer() {
    return (
        <footer className="relative overflow-visible bg-[#ffe699]">
            <div className="flex h-[162px] w-full items-start justify-start">
                {/* <Image
                    className="mt-auto"
                    src="/Bunny.png"
                    alt="Logo"
                    width={260}
                    height={146}
                    priority
                /> */}

                {/* <div className="flex flex-col">
                    <p className="mt-[48px] text-2xl font-medium text-black">
                        splittingrabbits.com
                    </p>

                    <p className="text-2xl font-medium text-[#69B3E7]">
                        #splittingrabbits
                    </p>
                    
                </div> */}

                <nav
                    aria-label="Footer navigation"
                    className="ml-auto flex h-full items-center gap-6"
                >
                </nav>

                {/* code below limits the bunny to the footer */}
                {/* <div className="bunny-hop pointer-events-none absolute bottom-0 left-0">
                    <Image
                        src="/Bunny_Runner.png"
                        alt=""
                        width={260}
                        height={146}
                        priority
                        className="scale-x-[-1]"
                    />
                </div> */}

                {/* code below lets the bunny run across the screen regardless of position */}
                <div className="bunny-hop pointer-events-none fixed bottom-0 z-10">
                    <Image
                        src="/Bunny_Runner.png"
                        alt=""
                        width={260}
                        height={146}
                        priority
                        className="scale-x-[-1]"
                    />
                </div>
            </div>
        </footer>
    );
}