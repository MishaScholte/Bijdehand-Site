"use client";

import React from "react";

import { Apple } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <div className="min-h-0 md:min-h-[90vh] w-full rounded-md flex flex-col md:flex-row items-start md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden pb-12 md:pb-0">

            {/* Header: App Icon - Absolute Positioned */}
            <div className="absolute top-0 left-0 w-full z-50">
                <div className="max-w-6xl mx-auto px-4 pt-4 md:pt-8 w-full flex justify-start pl-1">
                    <div className="w-[56px] h-[56px] md:w-[80px] md:h-[80px] bg-black border border-white/10 rounded-[14px] md:rounded-[20px] flex items-center justify-center shadow-2xl transition-all duration-300">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/AppIconTransparent.png`}
                            alt="Bijdehand App Icon"
                            width={50}
                            height={50}
                            className="object-contain w-[36px] h-[36px] md:w-[50px] md:h-[50px]"
                        />
                    </div>
                </div>
            </div>

            {/* Left Column: Text & CTA */}
            {/* ... (truncated for brevity, logic applies to Hero image too) */}

            <div className="flex justify-center md:justify-end relative w-full h-auto md:h-full mt-[-40px] md:mt-0">
                <div className="relative w-full md:w-auto h-auto md:h-[874px] transition-all duration-500 flex items-start md:items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Hero.png`}
                            alt="Bijdehand App Hero"
                            width={2721}
                            height={2622}
                            className="object-contain w-full h-auto md:w-auto md:h-full max-h-[600px] md:max-h-[874px]"
                            priority
                            sizes="(max-width: 768px) 100vw, 907px"
                        />
                    </div>
                </div>
            </div>
        </div>
        </div >
    );
}
