import React, { FC, ReactNode } from "react";

interface CardContainerProps {
    children: ReactNode;
    bgNone?: boolean;
}

export const CardContainer: FC<CardContainerProps> = ({ children, bgNone = false }) => {
    return(
        <div className={`${bgNone ? "bg-transparent" : "bg-white"}`}>
        <div className="px-6 py-8">
            <div className={`mx-auto flex flex-col gap-10 max-w-[810px] 
            `}>
                {children}
            </div>
        </div>
        </div>
        
    );
};