import Image from "next/image";
import DesertImage from "@/public/images/Desert1.jpg";

export const HeroBanner = () => {
    return (
        <div className="relative h-screen w-screen text-amber-100 overflow-hidden">
            <Image
                src={DesertImage}
                alt="Background Desert Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-30">
                <h1 className="text-5xl font-bold leading-tight mb-4">Dylan Rose</h1>
                <div className="text-lg text-gray-100">Game Designer</div>
            </div>
        </div>
    );
};
