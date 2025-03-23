import React from "react";
import { icon } from "@/assets/icon";

interface Windos95TitleBarProps {
    label: string;
    date?: string;
    duration?: string;
}

export const Windows95TitleBar: React.FC<Windos95TitleBarProps> = ({ label = "", date = "", duration = "" }) => {
    return(
        <div className="bg-blue-800 w-full">
            <div className="font-Doto text-white text-[.94rem] leading-[1.5rem] mx-2 pr-4 truncate w-full">
                <span>{label}</span>
                {date && <span className="mx-1">·</span>}
                {date && <span>{date}</span>}
                {duration && <span className="ml-1">({duration})</span>}
            </div>
        </div>
    );
}