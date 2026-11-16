import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const photos = [
    ["1-6.png", "1 6", "left-[7.1%] top-[293px] h-[407px] w-[18.8%]"],
    ["2-1.png", "2 1", "left-[25.2%] top-[610px] h-[380px] w-[21.6%]"],
    ["8-8.png", "8 8", "left-[59.8%] top-[618px] h-[321px] w-[29.7%]"],
    ["7-2.png", "7 2", "left-[31.4%] top-[1228px] h-[233px] w-[21.6%]"],
    ["6-9.png", "6 9", "left-[72.6%] top-[939px] h-[183px] w-[17%]"],
    ["5-1.png", "5 1", "left-[47.5%] top-[837px] h-[310px] w-[16.2%]"],
    ["4-1.png", "4 1", "left-[22.6%] top-[990px] h-[238px] w-[22.1%]"],
    ["3-740.png", "3 740", "left-[7.1%] top-[1024px] h-[318px] w-[16.5%]"],
    ["18-1.png", "18 1", "left-[26.9%] top-[293px] h-[317px] w-[33%]"],
    ["9-1.png", "9 1", "left-[59.2%] top-[293px] h-[250px] w-[13%]"],
    ["10-1.png", "10 1", "left-[72.9%] top-[398px] h-[221px] w-[20.4%]"],
    ["11-1.png", "11 1", "left-[8.5%] top-[751px] h-[187px] w-[17.4%]"],
    ["12-1.png", "12 1", "left-[7.1%] top-[1356px] h-[287px] w-[24.3%]"],
    ["13-2.png", "13 2", "left-[76.1%] top-[2111px] h-[332px] w-[17.3%]"],
    ["14-1.png", "14 1", "left-[53%] top-[1147px] h-[246px] w-[22.8%]"],
    ["15-2.png", "15 2", "left-[75.8%] top-[1122px] h-[339px] w-[17.6%]"],
    ["16-1.png", "16 1", "left-[56.1%] top-[1889px] h-[222px] w-[23.1%]"],
    ["17-1.png", "17 1", "left-[53%] top-[2221px] h-[222px] w-[23.1%]"],
    ["19-1.png", "19 1", "left-[47.5%] top-[1461px] h-[440px] w-[45.9%]"],
    ["20-1.png", "20 1", "left-[7.1%] top-[2002px] h-[441px] w-[45.9%]"],
    ["surfers-1.png", "surfers 1", "left-[10.1%] top-[1641px] h-[359px] w-[37.4%]"],
] as const;

export default function People() {
    return (
        <div className="relative min-h-screen bg-[#FFF1C7]">
            <Header position="top" color="dark" />
            <main className="relative mx-auto min-h-[2580px] w-full max-w-[1440px] -translate-y-24 overflow-hidden">
                {photos.map(([src, alt, position]) => (
                    <div key={src} className={`absolute ${position}`}>
                        <Image
                            src={`/photos/people/${src}`}
                            alt={`People collection image ${alt}`}
                            fill
                            sizes="(max-width: 768px) 50vw, 45vw"
                            className="object-cover"
                        />
                    </div>
                ))}
            </main>
            <Footer />
        </div>
    );
}
