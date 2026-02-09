import React from "react";
import { cn } from "@/lib/utils";
import { ShieldUser, MapPin, Wallet, Check } from "lucide-react";

const TechnicalSchematic = () => {
    return (
        <div
            className="absolute inset-0 pointer-events-none select-none"
            style={{
                maskImage: "linear-gradient(to top right, transparent 5%, black 80%)",
                WebkitMaskImage: "linear-gradient(to top right, transparent 5%, black 80%)",
            }}
        >
            <svg
                className="absolute inset-0 w-full h-full opacity-[0.4]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                {/* Top Right - Detailed Data Grid */}
                <path d="M 70 5 H 95 M 70 10 H 95 M 70 15 H 95 M 70 20 H 95 M 70 25 H 95" stroke="#60a5fa" strokeWidth="0.2" strokeOpacity="0.4" />
                <path d="M 75 5 V 25 M 80 5 V 25 M 85 5 V 25 M 90 5 V 25" stroke="#60a5fa" strokeWidth="0.2" strokeOpacity="0.4" />

                {/* Top Right - Angled Hatch Lines (Technical feel) */}
                <path d="M 95 0 L 100 5 M 90 0 L 100 10 M 85 0 L 100 15" stroke="#60a5fa" strokeWidth="0.2" strokeOpacity="0.3" />

                {/* Main Arc - Thinner and more subtle */}
                <path
                    d="M 15 90 A 75 75 0 0 1 90 15"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="0.3"
                    strokeOpacity="0.3"
                />

                {/* Secondary Dashed Arc - Subtle */}
                <path
                    d="M 20 85 A 65 65 0 0 1 85 20"
                    fill="none"
                    stroke="#93c5fd" // Lighter blue
                    strokeWidth="0.2"
                    strokeOpacity="0.2"
                    strokeDasharray="2 3"
                />

                {/* Right Edge - Scale Markings */}
                <path d="M 98 30 H 100 M 98 35 H 100 M 98 40 H 100 M 95 45 H 100 M 98 50 H 100" stroke="#60a5fa" strokeWidth="0.2" strokeOpacity="0.3" />

                {/* Bottom Left - Minimal corner detail */}
                <path d="M 0 95 H 5 M 0 90 H 3" stroke="#60a5fa" strokeWidth="0.3" strokeOpacity="0.3" />
            </svg>
        </div>
    );
};

interface KnockoutCardProps {
    title: string;
    description?: string | React.ReactNode;
    icon: React.ElementType;
    iconBgClass?: string;
    iconColor?: string;
    className?: string;
    background?: React.ReactNode;
}

const KnockoutCard = ({
    title,
    description,
    icon: Icon,
    iconBgClass,
    iconColor,
    className,
    background,
}: KnockoutCardProps) => {
    return (
        <div
            className={cn(
                "group relative flex flex-col items-start justify-start p-4 md:p-6 h-full overflow-hidden",
                "bg-white/[0.03] rounded-[32px] md:rounded-[40px]",
                "border border-white/10", // Subtle glassy border
                "transition-all duration-200 hover:border-white/20 hover:bg-white/[0.02]",
                className
            )}
        >
            {background}

            {/* Icon */}
            <div className={cn("relative z-10 mb-4 p-4 rounded-2xl border", iconBgClass)}>
                <Icon className={cn("w-6 h-6 md:w-10 md:h-10", iconColor || "text-neutral-200")} />
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-xl md:text-2xl font-bold text-white text-left mb-2">
                {title}
            </h3>

            {/* Description */}
            <div className="relative z-10 text-neutral-400 text-sm md:text-base text-left font-normal">
                {description}
            </div>
        </div>
    );
};

export function USPSection() {
    const features = [
        {
            title: "Private by design",
            description: (
                <div className="flex flex-wrap gap-3 md:flex-col md:gap-2">
                    {["Geen accounts", "Geen cookies", "Geen reclame"].map((item, i) => (
                        <div key={i} className="flex items-center space-x-1">
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-neutral-400 text-sm md:text-base">{item}</span>
                        </div>
                    ))}
                </div>
            ),
            icon: ShieldUser,
            iconBgClass: "bg-gradient-to-br from-blue-400 to-blue-600 border-white/20",
            iconColor: "text-white",
            background: <TechnicalSchematic />,
        },
        {
            title: "Slimme locaties",
            description: "De juiste pas, precies wanneer je hem nodig hebt. Slim ontworpen. Batterij- en privacyvriendelijk. Precies zoals het hoort.",
            icon: MapPin,
            iconBgClass: "bg-gradient-to-br from-purple-400 to-purple-600 border-white/20",
            iconColor: "text-white",
        },
        {
            title: "Widgets & Wallet",
            description: "Voeg je favoriete kaarten toe aan je startscherm of aan je Wallet. Zo heb je altijd de snelste kaarten direct bij de hand.",
            icon: Wallet,
            iconBgClass: "bg-gradient-to-br from-orange-400 to-orange-600 border-white/20",
            iconColor: "text-white",
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
                            description={feature.description}
                            icon={feature.icon}
                            iconBgClass={feature.iconBgClass}
                            iconColor={feature.iconColor}
                            background={feature.background}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
