import Image from "next/image";
import Link from "next/link";

export function Header() {
    // return (
    //     <header className="bg-white">
    //         <div className="mx-auto flex w-full h-[140px] flex items-start justify-start">
    //             <Image
    //                 src="/Black_Bunny_Logo.png"
    //                 alt="Logo"
    //                 width={252}
    //                 height={141}
    //                 priority
    //             />
                
    //         </div>
    //     </header>
    // );

    return (
            <header className="bg-white">
            <div className="flex md:min-h-[162px] w-full flex-col items-start gap-6 md:flex-row md:items-center md:pr-6 lg:pr-8">
                    <Image
                        className="mt-[8px]"
                        src="/Black_Bunny_Logo.png"
                        alt="Logo"
                        width={260}
                        height={146}
                        priority
                    />
    
                <nav
                    aria-label="Footer navigation"
                    className="ml-auto flex flex-wrap items-center justify-end gap-3"
                >
    
                        <Image
                            src="/Filmography.png"
                            alt="Logo"
                            width={140}
                            height={140}
                            priority
                        />
    
                        <Image
                            src="/Gallery.png"
                            alt="Gallery"
                            width={140}
                            height={140}
                            priority
                        />
    
                        <Image
                            src="/Writing Directory.png"
                            alt="Writing Directory"
                            width={140}
                            height={140}
                            priority
                        />
    
                        <Image
                            src="/Shop.png"
                            alt="Shop"
                            width={100}
                            height={100}
                            priority
                        />
    
                        <Image
                            src="/About.png"
                            alt="About"
                            width={100}
                            height={100}
                            priority
                        />
                    </nav>
                </div>
            </header>
        );
}