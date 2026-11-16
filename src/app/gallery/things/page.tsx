import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const photos = [
    ["dsc06842-1.png", "DSC06842", "left-[calc(8.33%+103px)] top-[780px]", "h-[133.33%] top-[-15.03%] w-full"],
    ["dsf1709-1.png", "DSF1709", "left-[calc(58.33%+71px)] top-[780px]", "h-full left-[-28%] w-[149.98%]"],
    ["dsf1569-1.png", "DSF1569", "left-[calc(8.33%+103px)] top-[1468px]", "h-full left-[-40.48%] top-[-0.3%] w-[149.98%]"],
    ["dsf1912-1.png", "DSF1912", "left-[calc(33.33%+87px)] top-[1812px]", "h-[149.98%] top-[-32.08%] w-full"],
    ["dsf1806-1.png", "DSF1806", "left-[calc(33.33%+87px)] top-[1124px]", "h-full left-[-50.07%] w-[149.98%]"],
    ["8-7.png", "8 7", "left-[calc(58.33%+71px)] top-[2500px]", "h-full left-[-14.59%] top-[-0.18%] w-[133.33%]"],
    ["dsc03247-1.png", "DSC03247", "left-[calc(58.33%+71px)] top-[2156px]", "h-full left-[-13.22%] w-[133.33%]"],
    ["dsc03239-1.png", "DSC03239", "left-[calc(8.33%+103px)] top-[1799px]", "h-full left-[-27.51%] top-[-0.18%] w-[133.33%]"],
    ["dsc03248-1.png", "DSC03248", "left-[calc(8.33%+103px)] top-[2156px]", "h-full left-[-22.97%] w-[133.33%]"],
    ["13-1.png", "13", "left-[calc(50%+2.5px)] top-[780px]", "h-[133.33%] top-[-31.49%] w-full"],
    ["dsc05539-1.png", "DSC05539", "left-[calc(8.33%+103px)] top-[1124px]", "h-full left-[-21.26%] top-[0.27%] w-[133.33%]"],
    ["15-1.png", "15", "left-[calc(58.33%+71px)] top-[1468px]", "h-[133.32%] left-[-0.16%] top-[-6.69%] w-full"],
    ["dsc06665-1.png", "DSC06665", "left-[calc(33.33%+87px)] top-[2156px]", "h-[133.37%] top-[-16.48%] w-full"],
    ["dsc07100-1.png", "DSC07100", "left-[calc(58.33%+71px)] top-[1812px]", "h-full left-[-0.15%] top-[-0.27%] w-[133.36%]"],
    ["dsc06452-1.png", "DSC06452", "left-[calc(58.33%+71px)] top-[1124px]", "h-full left-[-27.89%] top-[-0.22%] w-[133.33%]"],
    ["pomm-1.png", "pomm", "left-[calc(33.33%+87px)] top-[2500px]", "h-full left-[-9.47%] top-[0.01%] w-[133.35%]"],
    ["windows-1.png", "windows", "left-[calc(8.33%+103px)] top-[2844px]", "h-[104.65%] left-[-33.86%] w-[156.95%]"],
    ["img3696-1.png", "IMG 3696", "left-[calc(8.33%+100px)] top-[2500px]", "h-full left-[-33.22%] top-[-0.07%] w-[133.33%]"],
    ["dsc07122-1.png", "DSC07122", "left-[calc(33.33%+87px)] top-[1468px]", "h-full left-[-5.39%] w-[133.33%]"],
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
        <div className={`absolute h-[311px] w-[311px] overflow-hidden ${position}`}>
            <Image
                src={`/photos/things/${src}`}
                alt={`Things collection image ${alt}`}
                fill
                sizes="311px"
                className={`max-w-none object-cover ${crop}`}
            />
        </div>
    );
}

export default function Things() {
    return (
        <div className="relative min-h-screen bg-[#FFF1C7]">
            <Header position="top" color="dark" />
            <main className="relative mx-auto min-h-[3200px] w-full max-w-[1440px] overflow-hidden">
                <div className="absolute left-[21px] top-[112px] h-[513px] w-[684px]">
                    <Image
                        src="/photos/things/apartment-2.png"
                        alt="Things collection interior"
                        fill
                        sizes="684px"
                        className="object-cover"
                    />
                </div>
                <div className="absolute left-[calc(50%+12px)] top-[112px] h-[513px] w-[684px]">
                    <Image
                        src="/photos/things/apartment-1.png"
                        alt="Things collection bedroom"
                        fill
                        sizes="684px"
                        className="object-cover"
                    />
                </div>
                {photos.map(([src, alt, position, crop]) => (
                    <Tile key={src} src={src} alt={alt} position={position} crop={crop} />
                ))}
            </main>
            <Footer />
        </div>
    );
}
