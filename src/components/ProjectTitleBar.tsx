import React from "react";
import { icon } from "@/assets/icon";

interface ProjectTitleBarProps {
    label: string;
    date?: string;
    button?: boolean;
}

export const ProjectTitleBar: React.FC<ProjectTitleBarProps> = ({ label = "", date = "", button = false }) => {
    return(
        <div className="flex items-center justify-center bg-blue-800 px-2 mx-[1px] w-full pr-1">
            <div className="font-Doto text-white text-[.94rem] leading-[1.5rem] w-full truncate">
                <span>{label}</span>
                {date && <span className="mx-1">·</span>}
                {date && <span>{date}</span>}
            </div>
            
            
        </div>
    );
}