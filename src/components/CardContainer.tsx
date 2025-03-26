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
        {/* <div className={`
            ${removeSpaceBottom ? "pb-0 pt-6 md:pb-0 md:pt-10" : "py-6 md:py-10" } 
            ${removeSpaceTop ? "pt-0 pb-6 md:pt-0 md:pb-10" : "py-6 md:py-10" }`}
        > */}
            <div className={`mx-auto flex flex-col 
                ${fullWidth ? "w-full p-6 pb-8" : "px-6 pt-8 pb-10 md:p-12 lg:p-16 max-w-[650px]"}
            `}>
                {children}
            </div>
        {/* </div> */}
        </div>
        
    );
};