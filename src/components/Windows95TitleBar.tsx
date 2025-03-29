import React, { useEffect, useRef, useState } from "react";
import { icon } from "@/assets/icon";

interface Windos95TitleBarProps {
    children?: React.ReactNode;
    label?: string;
}

export const Windows95TitleBar: React.FC<Windos95TitleBarProps> = ({ children, label }) => {

    return(
        <div className="bg-blue-800 w-full mb-[1px]">
            <div className="font-Doto text-white text-[.94rem] leading-[1.5rem] mx-2 pr-4 truncate w-full">
                {label && <span>{label}</span>}
                {children && <div>{children}</div> }
            </div>
        </div>
    );
}