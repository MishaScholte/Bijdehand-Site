import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
    IconMapPinFilled,
    IconLock,
    IconLayoutGrid,
    IconGift,
} from "@tabler/icons-react";

export function FeaturesSection() {
    return (
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
            {item.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                    icon={item.icon}
                />
            ))}
        </BentoGrid>
    );
}

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const item = [
    {
        title: "Smart Locations",
        description: "Je pas verschijnt automatisch op je toegangsscherm als je bij de winkel bent.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-dot-white/[0.2] opacity-50"></div>
                {/* Map visual abstraction */}
                <div className="w-full h-full absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-blue-500/20 animate-pulse absolute"></div>
                    <div className="bg-gradient-to-r from-primary to-primary-purple text-white rounded-full p-4 shadow-lg z-10">
                        <IconMapPinFilled className="h-8 w-8" />
                    </div>
                </div>
            </div>
        ),
        className: "md:col-span-2",
        icon: <IconMapPinFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Privacy First",
        description: "Jouw data verlaat je iPhone niet. Alles staat veilig in je eigen iCloud. Geen trackers.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 items-center justify-center relative overflow-hidden group">
                {/* Lock visual */}
                <div className="relative z-10 bg-black/50 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                    <IconLock className="h-12 w-12 text-white/80" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
            </div>
        ),
        className: "md:col-span-1",
        icon: <IconLock className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Widgets",
        description: "Razendsnel toegang vanaf je homescreen.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 items-center justify-center relative overflow-hidden p-4">
                {/* Widget Grid Visual */}
                <div className="grid grid-cols-2 gap-2 w-full max-w-[200px] opacity-80 rotate-3 transform group-hover:rotate-0 transition duration-300">
                    <div className="h-16 bg-neutral-700 rounded-lg"></div>
                    <div className="h-16 bg-neutral-800 rounded-lg"></div>
                    <div className="h-16 bg-blue-500/20 border border-blue-500/50 rounded-lg col-span-2"></div>
                </div>
            </div>
        ),
        className: "md:col-span-1",
        icon: <IconLayoutGrid className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Cadeaubonnen",
        description: "Vergeet nooit meer een saldo of verloopdatum.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 items-center justify-center relative overflow-hidden p-6">
                {/* Gift Card visual */}
                <div className="w-full aspect-video bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg shadow-2xl transform rotate-6 group-hover:rotate-0 transition duration-300 border border-white/10 flex items-center justify-center">
                    <IconGift className="text-white h-10 w-10 opacity-80" />
                </div>
            </div>
        ),
        className: "md:col-span-2",
        icon: <IconGift className="h-4 w-4 text-neutral-500" />,
    },
];
