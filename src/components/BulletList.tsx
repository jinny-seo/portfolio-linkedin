import React, { FC, ReactNode } from "react";

interface BulletListProps {
    children: ReactNode;
}

export const BulletList: FC<BulletListProps> = ({ children }) => {
    return(
        <ul className="list-disc pl-5 mb-0">{children}</ul> 
    );
};