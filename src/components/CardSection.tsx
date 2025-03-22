import React, { FC, ReactNode } from "react";

interface CardSectionProps {
    children: ReactNode;
}

export const CardSection: FC<CardSectionProps> = ({ children }) => {
    return(
        <div className="flex flex-col gap-3">
            {children}
        </div>
    );
};