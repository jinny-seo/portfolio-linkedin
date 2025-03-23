import React, { FC } from "react";
import Image, { StaticImageData} from "next/image";
import { CardContainer } from "./CardContainer";
import Windows95FrameInner from "./Windows95FrameInner";
import { CardSection } from "./CardSection";

interface CaseStudyHeaderProps {
    children: React.ReactNode;
    title: string;
    company: string;
    date?: string;
    duration?: string;
}

export const CaseStudyHeader: FC<CaseStudyHeaderProps> = ({ children, title, company, date, duration }) => {
    return(
        <div>
            {/* <Windows95FrameInner> */}
                <CardContainer fullWidth bgNone>
                    <CardSection>
                        
                        <h1 className="title-1 mb-3">{title}</h1>
                        <div className="flex flex-col text-[1.08rem] gap-3">
                            {children}
                        </div>
                    </CardSection>
                </CardContainer>
            {/* </Windows95FrameInner> */}
        </div>
        
    );
}

