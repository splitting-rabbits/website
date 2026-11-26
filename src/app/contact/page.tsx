import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Contact() {
    return (
        <div className="relative min-h-screen">
            <Header position="top" color="dark" />
            <main className="min-h-screen bg-[#FFF1C7] px-4 py-24 text-black sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto w-full max-w-6xl">
                    <h1 className="main-heading">contact</h1>
                    <p className="base-text mt-4">
                    Get in touch at splittingrabbits@gmail.com.
                    </p>
                </div>
            </main>
            <Footer position="bottom" />
        </div>
    );
}