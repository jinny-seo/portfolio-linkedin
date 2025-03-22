import React, { FC, ReactNode } from "react";

interface CardContainerProps {
    children: ReactNode;
    fullWidth?: boolean;
}

export const CardContainer: FC<CardContainerProps> = ({ children, fullWidth = false }) => {
    return(
        <div className="bg-white pt-2">
            <div className={`p-6 mx-auto
            ${fullWidth ? "w-full" : "max-w-[810px]"}`}>
                {children}
            </div>
        </div>
        
    );
};