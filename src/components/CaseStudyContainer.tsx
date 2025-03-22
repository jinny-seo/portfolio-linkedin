import React, { FC, ReactNode } from "react";

interface CaseStudyProps {
    children: React.ReactNode;
}

export const CaseStudyContainer: FC<CaseStudyProps> = ({ children }) => {
    return(
        // <div className="bg-white max-w-[650px] lg:max-w-[850px] xl:max-w-[1200px] mx-auto rounded-md shadow-lg">{children}</div> 
        <div className="bg-white rounded-md shadow-lg lg:max-w-[1200px] mx-auto">{children}</div> 
    );
};