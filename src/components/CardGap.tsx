import React, { FC, ReactNode } from "react";

interface CardGapProps {
    children?: React.ReactNode;
}

export const CardGap: FC<CardGapProps> = ({ children }) => {
    return(
        <div className={`flex flex-col gap-8 md:gap-12 lg:gap-14`}>
            {children}
        </div>
    );
};