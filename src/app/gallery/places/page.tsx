import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const photos = [
    ["1.png", "1", "left-[70px] top-[420px] w-[261px]", "object-cover"],
    ["6.png", "6", "left-[69px] top-[673px] w-[305px]", "object-cover"],
    ["2.png", "2", "left-[calc(16.67%+91px)] top-[420px] w-[305px]", "object-cover"],
    ["9.png", "9", "left-[calc(58.33%+31px)] top-[673px] w-[305px]", "object-cover"],
    ["20.png", "20", "left-[calc(66.67%+64px)] top-[1179px] w-[305px]", "object-cover"],
    ["8.png", "8", "left-[calc(33.33%+102px)] top-[673px] w-[289px] scale-x-[1.0535]", "object-cover"],
    ["11.png", "11", "left-[70px] top-[926px] w-[271px]", "object-cover"],
    ["7.png", "7", "left-[calc(16.67%+134px)] top-[673px] w-[208px] scale-x-[1.3013] object-[17%_center]", "object-cover"],
    ["17.png", "17", "left-[calc(25%+88px)] top-[1179px] w-[271px]", "object-cover"],
    ["14.png", "14", "left-[calc(41.67%+35px)] top-[926px] w-[270px]", "object-cover"],
    ["4.png", "4", "left-[calc(58.33%+67px)] top-[420px] w-[152px]", "object-cover"],
    ["3.png", "3", "left-[calc(41.67%+36px)] top-[420px] w-[271px]", "object-cover"],
    ["5.png", "5", "left-[calc(75%-21px)] top-[420px] w-[270px]", "object-cover"],
    ["19.png", "19", "left-[calc(58.33%+32px)] top-[1179px] w-[152px]", "object-cover"],
    ["15.png", "15", "left-[calc(58.33%+67px)] top-[926px] w-[152px]", "object-cover"],
    ["18.png", "18", "left-[calc(50%-1px)] top-[1179px] w-[152px]", "object-cover"],
    ["13.png", "13", "left-[calc(33.33%+13px)] top-[926px] w-[152px]", "object-cover"],
    ["10.png", "10", "left-[calc(83.33%-24px)] top-[673px] w-[152px]", "object-cover"],
    ["12.png", "12", "left-[calc(16.67%+101px)] top-[926px] w-[152px]", "object-cover"],
    ["16.png", "16", "left-[calc(75%-23px)] top-[926px] w-[271px]", "object-cover"],
] as const;

function Tile({
    src,
    alt,
    position,
    crop,
}: {
    src: string;
    alt: string;
    position: string;
    crop: string;
}) {
    return (
        <div className={`absolute h-[203px] overflow-hidden ${position}`}>
            <Image
                src={`/photos/places/${src}`}
                alt={`Places collection image ${alt}`}
                fill
                sizes="311px"
                className={crop}
            />
        </div>
    );
}

export default function Places() {
    return (
        <div className="relative min-h-screen bg-[#FFF1C7]">
            <Header position="top" color="dark" />
            <main className="relative mx-auto min-h-[3200px] w-full max-w-[1440px] -translate-y-12 overflow-hidden">
                {photos.map(([src, alt, position, crop]) => (
                    <Tile key={src} src={src} alt={alt} position={position} crop={crop} />
                ))}
            </main>
            <Footer />
        </div>
    );
}
