import React, { FC, ReactNode } from "react";

interface CardContainerProps {
    children: ReactNode;
    fullWidth?: boolean;
}

export const CardContainer: FC<CardContainerProps> = ({ children, fullWidth = false }) => {
    return(
        
        <div className={`px-8 md:px-12 lg:px-16 xl:px-20 mx-auto pt-8
        ${fullWidth ? "w-full" : "max-w-[810px]"}`}>
            {children}
        </div>
        
    );
};