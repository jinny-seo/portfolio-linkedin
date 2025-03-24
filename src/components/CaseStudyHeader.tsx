import React, { FC } from "react";
import Image, { StaticImageData} from "next/image";
import Windows95FrameInner from "./Windows95FrameInner";
import Windows95ButtonContainer from "./Windows95ButtonContainer";
import { CardContainer } from "./CardContainer";
import { CardSection } from "./CardSection";


import { navImage } from "../assets/navImages";
import CaseStudyNavigation from "./CaseStudyNavigation";

interface CaseStudyHeaderProps {
    children: React.ReactNode;
    title: string;
    company: string;
    date?: string;
    duration?: string;
    
}

export const CaseStudyHeader: FC<CaseStudyHeaderProps> = ({ children, title, company, date, duration }) => {
    return(
        <div className={`grid gap-6`}>
            <CaseStudyNavigation date={date} duration={duration} />
            <CardContainer fullWidth bgNone removeSpaceTop>
                <CardSection>                
                    <h1 className="title-1 mb-3">{title}</h1>
                    <div className="flex flex-col text-[1.08rem] gap-3">
                        {children}
                    </div>
                </CardSection>
            </CardContainer>
            
        </div>
        
    );
}

