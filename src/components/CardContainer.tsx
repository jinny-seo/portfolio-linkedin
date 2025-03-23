import React, { FC, ReactNode } from "react";

interface CardContainerProps {
    children: ReactNode;
    fullWidth?: boolean;
    bgNone?: boolean;
    removeSpaceBottom?: boolean;
}

export const CardContainer: FC<CardContainerProps> = ({ children, fullWidth = false, bgNone = false, removeSpaceBottom = false }) => {
    return(
        <div className={`${bgNone ? "bg-transparent" : "bg-white"}`}>
        <div className={`px-6 ${removeSpaceBottom ? "px-8 pt-8 pb-0" : "py-8" } `}>
            <div className={
                `mx-auto flex flex-col gap-10 
                ${fullWidth ? "w-full" : "max-w-[650px]"}
            `}>
                {children}
            </div>
        </div>
        </div>
        
    );
};