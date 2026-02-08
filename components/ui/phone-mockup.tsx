import React from 'react';
import { cn } from '@/lib/utils';

export const PhoneMockup = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={cn("relative mx-auto w-[300px] h-[620px] md:w-[320px] md:h-[680px]", className)}>
            {/* External Frame (Titanium) */}
            <div className="relative h-full w-full bg-[#1a1a1a] rounded-[55px] shadow-[0_0_2px_2px_rgba(255,255,255,0.1)_inset,0_0_0_5px_#262626,0_20px_50px_-10px_rgba(0,0,0,0.5)] border-[6px] border-[#262626] overflow-hidden box-border z-10 ring-1 ring-white/10">

                {/* Inner Bezel & Screen Container */}
                <div className="relative h-full w-full bg-black rounded-[46px] overflow-hidden border-[6px] border-black">

                    {/* Dynamic Island */}
                    <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[95px] h-[25px] bg-black rounded-[20px] z-50 flex items-center justify-center pointer-events-none transition-all duration-300 ease-in-out">
                        {/* Camera Lens Reflection/Detail */}
                        <div className="absolute right-[18px] w-2 h-2 bg-[#101010] rounded-full flex items-center justify-center overflow-hidden">
                            <div className="w-1 h-1 bg-[#404040] rounded-full opacity-60 blur-[1px]"></div>
                        </div>
                        <div className="absolute left-[18px] w-1.5 h-1.5 bg-[#101010] rounded-full opacity-40"></div>
                    </div>

                    {/* Main Screen Content */}
                    <div className="h-full w-full bg-black overflow-hidden relative">
                        {children}
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-white rounded-full z-50 pointer-events-none opacity-80"></div>
                </div>

            </div>

            {/* Hardware Buttons - Left Side */}
            <div className="absolute top-[100px] -left-[10px] w-[5px] h-[30px] bg-[#262626] rounded-l-md shadow-sm z-0"></div> {/* Action Button */}
            <div className="absolute top-[150px] -left-[10px] w-[5px] h-[60px] bg-[#262626] rounded-l-md shadow-sm z-0"></div> {/* Volume Up */}
            <div className="absolute top-[225px] -left-[10px] w-[5px] h-[60px] bg-[#262626] rounded-l-md shadow-sm z-0"></div> {/* Volume Down */}

            {/* Hardware Buttons - Right Side */}
            <div className="absolute top-[180px] -right-[10px] w-[5px] h-[90px] bg-[#262626] rounded-r-md shadow-sm z-0"></div> {/* Power Button */}

        </div>
    );
};
