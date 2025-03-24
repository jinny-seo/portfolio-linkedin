import React, { FC, ReactNode } from "react";

interface CardContainerProps {
    children: ReactNode;
    fullWidth?: boolean;
    bgNone?: boolean;
    removeSpaceBottom?: boolean;
    removeSpaceTop?: boolean;
}

export const CardContainer: FC<CardContainerProps> = ({ children, fullWidth = false, bgNone = false, removeSpaceBottom = false, removeSpaceTop = false }) => {
    return(
        <div className={`${bgNone ? "bg-transparent" : "bg-white"}`}>
        <div className={`px-6 ${removeSpaceBottom ? "pb-0 pt-6" : "py-6" } ${removeSpaceTop ? "pt-0 pb-6" : "py-6" }`}>
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