import { Navbar } from "@/components/Navbar";

type HeaderProps = {
    position?: "top" | "bottom";
    color?: "light" | "dark";
};

export function Header({
    position = "bottom",
    color = "light",
}: HeaderProps) {
    return (
        <header
            className={`absolute inset-x-0 z-30 bg-transparent ${
                position === "top" ? "top-0" : "bottom-0"
            }`}
        >
            <Navbar position={position} color={color} />
        </header>
    );
}
