import React from "react";
import { cn } from "@/lib/utils";
import { ShieldUser, MapPin, Wallet } from "lucide-react";

interface KnockoutCardProps {
    title: string;
    icon: React.ElementType;
    iconBgClass?: string;
    iconColor?: string;
    className?: string;
}

const KnockoutCard = ({
    title,
    icon: Icon,
    iconBgClass,
    iconColor,
    className,
}: KnockoutCardProps) => {
    return (
        <div
            className={cn(
                "group relative flex flex-col items-start justify-center p-6 md:p-8",
                "bg-black rounded-2xl",
                "border border-white/10", // Subtle glassy border
                "transition-all duration-200 hover:border-white/20 hover:bg-white/[0.02]",
                className
            )}
        >
            {/* Icon */}
            <div className={cn("mb-4 p-3 md:p-4 rounded-full border", iconBgClass)}>
                <Icon className={cn("w-8 h-8 md:w-16 md:h-16", iconColor || "text-neutral-200")} />
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-white text-left">
                {title}
            </h3>
        </div>
    );
};

export function USPSection() {
    const features = [
        {
            title: "Private by design",
            icon: ShieldUser,
            iconBgClass: "bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/20",
            iconColor: "text-blue-100",
        },
        {
            title: "Slimme locaties",
            icon: MapPin,
            iconBgClass: "bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/20",
            iconColor: "text-purple-100",
        },
        {
            title: "Widgets & Wallet",
            icon: Wallet,
            iconBgClass: "bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-yellow-500/20",
            iconColor: "text-yellow-100",
        },
    ];

    return (
        <section className="py-10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {features.map((feature, index) => (
                        <KnockoutCard
                            key={index}
                            title={feature.title}
                            icon={feature.icon}
                            iconBgClass={feature.iconBgClass}
                            iconColor={feature.iconColor}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
