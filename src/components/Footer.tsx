import Image from "next/image";



export function Footer() {
    return (
        <footer className="bg-white">
            <div className="flex h-[162px] w-full items-start justify-start">
                <Image
                    className="mt-[8px]"
                    src="/Bunny.png"
                    alt="Logo"
                    width={260}
                    height={146}
                    priority
                />

                <div className="flex flex-col">
                    <p className="mt-[48px] text-2xl font-medium text-black">
                        splittingrabbits.com
                    </p>

                    <p className="text-2xl font-medium text-[#69B3E7]">
                        #splittingrabbits
                    </p>
                    
                </div>

                <nav
                    aria-label="Footer navigation"
                    className="ml-auto flex h-full items-center gap-6"
                >
                </nav>
            </div>
        </footer>
    );
}