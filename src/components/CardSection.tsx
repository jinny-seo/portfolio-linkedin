import React, { FC, ReactNode } from "react";

interface CardSectionProps {
    children: ReactNode;
    sectionTitle: string;
}

export const CardSection: FC<CardSectionProps> = ({ children, sectionTitle }) => {
    return(
        <div className="flex flex-col gap-3">
            <h3 className="title-2">{sectionTitle}</h3>
            {children}
        </div>
    );
};