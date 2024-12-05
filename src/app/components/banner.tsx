'use client';
import { useState, useCallback, useMemo, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

// Import components dynamically with ssr: false to avoid server-side rendering
const ShimmerButton = dynamic(() => import("./ui/shimmer-button"), { ssr: false });
const BorderBeam = dynamic(() => import("./ui/border-beam"), { ssr: false });

export default function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true); 

    const bannerText = useMemo(() => [
        "Chào mừng đến với Vu AI!",
        "Tạo ảnh bằng AI!",
        "Tạo video bằng AI!",
        "Tạo bài hát bằng AI!"
    ], []);

    const bannerImages = useMemo(() => [
        "/banner1 (1).png",
        "/banner1 (2).png",
        "/banner2 (1).png",
        "/banner2 (2).png",
    ], []);

    const nextText = useCallback(() => {
        setFadeIn(false); 
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerText.length);
            setFadeIn(true); 
        }, 200); 
    }, [bannerText.length]);

    const prevText = useCallback(() => {
        setFadeIn(false); 
        setTimeout(() => {
            setCurrentIndex(
                (prevIndex) => (prevIndex - 1 + bannerText.length) % bannerText.length
            );
            setFadeIn(true); 
        }, 200); 
    }, [bannerText.length]);

    useEffect(() => {
        const interval = setInterval(nextText, 2000);
        return () => clearInterval(interval); 
    }, [nextText]);

    return (
        <div className="relative rounded-[50px] bg-gradient-to-r from-blue-400 via-purple-300 to-pink-200 text-white h-[250px] md:h-[400px] lg:h-[400px] overflow-hidden shadow-lg dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <BorderBeam size={250} duration={12} delay={9} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between w-full space-y-6 sm:space-y-0 sm:space-x-6">

                {/* Text section - will be hidden on mobile */}
                <div className="text-left space-y-6 pl-10 max-w-lg z-10 hidden sm:block">
                    <h1 className={`w-full text-3xl sm:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 animate-pulse ${fadeIn ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                        {bannerText[currentIndex]}
                    </h1>
                    <p className="font-medium sm:text-l font-light text-gray-300">
                        Tận hưởng những chương trình khuyến mãi hấp dẫn dành cho bạn!
                    </p>
                    <Link href='/products'>
                        <ShimmerButton
                            onClick={nextText}
                            className="mt-6 px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white rounded-full shadow-lg hover:bg-indigo-800 transition-all duration-300 transform hover:scale-105"
                        >
                            Khám Phá Ngay
                        </ShimmerButton>
                    </Link>
                </div>

                {/* Image section */}
                <div className="flex justify-center w-full sm:w-[50%] z-10 ">
                    <Image
                        src={bannerImages[currentIndex]}
                        alt={`Hình ảnh nhân vật được tạo từ AI ${currentIndex + 1}`}
                        layout="intrinsic"
                        className={`w-[70%] sm:w-[70%] md:w-[50%] transform scale-95 hover:scale-100 transition-all duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
                        width={300}
                        height={300}
                        priority
                    />
                </div>
            </div>

            {/* Previous Button */}
            <button
                onClick={prevText}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 z-20"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Next Button */}
            <button
                onClick={nextText}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 z-20"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}
