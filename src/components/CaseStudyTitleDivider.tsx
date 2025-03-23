import React, { FC, ReactNode } from "react";
import Windows95FrameInner from "./Windows95FrameInner";

interface CaseStudyTitleDividerProps {
    title: string;
}

export const CaseStudyTitleDivider: FC<CaseStudyTitleDividerProps> = ({ title }) => {
    return(
        <Windows95FrameInner>
            <h2 className="font-Doto title-3 px-6 py-2">{title}</h2>
        </Windows95FrameInner>
    );
};