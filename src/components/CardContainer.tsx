import React, { FC, ReactNode } from "react";

interface CardContainerProps {
    children: ReactNode;
}

export const CardContainer: FC<CardContainerProps> = ({ children }) => {
    return(
        <div className="grid px-8 md:px-12 lg:px-16 xl:mx-auto">{children}</div> 
    );
};