import React, { FC, ReactNode } from "react";
import Windows95FrameInner from "./Windows95FrameInner";
import { CardContainer } from "./CardContainer";
import { CardSection } from "./CardSection";

interface CaseStudyTitleDividerProps {
    title: string;
}

export const CaseStudyTitleDivider: FC<CaseStudyTitleDividerProps> = ({ title }) => {
    return(
        <Windows95FrameInner>
            <div className="flex flex-col">
                <h2 className="font-Doto title-3 py-[0.22rem] mx-auto">{title}</h2>
            </div>
        </Windows95FrameInner>
    );
};