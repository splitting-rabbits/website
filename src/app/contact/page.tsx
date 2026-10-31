import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Contact() {
    return (
        <div className="relative min-h-screen">
            <Header position="top" color="dark" />
            <main className="min-h-screen bg-[#FFF1C7] px-6 py-32 text-black">
                <h1 className="main-heading ml-[3rem]">contact</h1>
                <p className="base-text mt-4 ml-[3rem]">
                    Get in touch at splittingrabbits@gmail.com.
                </p>
            </main>
            <Footer position="bottom" />
        </div>
    );
}