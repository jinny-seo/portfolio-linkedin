import React, { FC, ReactNode } from "react";

interface CardContainerProps {
    children: ReactNode;
    fullWidth?: boolean;
}

export const CardContainer: FC<CardContainerProps> = ({ children, fullWidth = false }) => {
    return(
        <div className="bg-white">
        <div className="p-6">
            <div className={`mx-auto flex flex-col gap-6
            ${fullWidth ? "w-full" : "max-w-[810px]"}`}>
                {children}
            </div>
        </div>
        </div>
        
    );
};