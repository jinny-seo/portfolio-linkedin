import React, { FC, ReactNode } from "react";

interface CardSectionProps {
    children?: ReactNode;
    sectionTitle?: string;
    smaller?: boolean;
}

export const CardSection: FC<CardSectionProps> = ({ children, sectionTitle, smaller = false }) => {
    return(
        <div className={`flex flex-col gap-4`}>
            {sectionTitle && 
                (smaller ? (
                    <h4 className="title-4 mt-4">{sectionTitle}</h4>
                    ) : (
                    <h3 className="title-2 ">{sectionTitle}</h3>
                ))}
            {children}
        </div>
    );
};