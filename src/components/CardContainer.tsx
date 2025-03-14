import React, { FC, ReactNode } from "react";

interface CardContainerProps {
    children: ReactNode;
}

export const CardContainer: FC<CardContainerProps> = ({ children }) => {
    return(
        <div className="grid p-8 md:p-12 lg:p-16 xl:p-20">{children}</div> 
    );
};