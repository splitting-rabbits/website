import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <header className="absolute inset-x-0 bottom-0 z-10 bg-transparent">
            <div className="mx-auto flex h-28 w-full items-center justify-start px-6">
                <Image
                    src="/Black_Bunny_Logo.png"
                    alt="Logo"
                    width={252}
                    height={141}
                    className="h-auto w-40"
                    priority
                />
            </div>
        </header>
    );
}