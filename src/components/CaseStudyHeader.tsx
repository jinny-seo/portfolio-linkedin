import React, { FC } from "react";
import Image, { StaticImageData} from "next/image";
import Windows95FrameInner from "./Windows95FrameInner";
import Windows95ButtonContainer from "./Windows95ButtonContainer";
import { CardContainer } from "./CardContainer";
import { CardSection } from "./CardSection";


import { navImage } from "../assets/navImages";
import CaseStudyNavigation from "./CaseStudyNavigation";
import { Windows95TitleBar } from "./Windows95TitleBar";

interface CaseStudyHeaderProps {
    children: React.ReactNode;
    title: string;
    company: string;
    date?: string;
    duration?: string;
    projectNumber: string;
    currProjLink: string;
    linkPrev: string;
    linkNext: string;
}

export const CaseStudyHeader: FC<CaseStudyHeaderProps> = ({ children, title, company, date, duration, projectNumber, currProjLink, linkPrev, linkNext }) => {
    return(
        <div className={`grid `}>
            <Windows95TitleBar label={company} date={`Project ${projectNumber}`} />
            <CaseStudyNavigation date={date} duration={duration} currProjLink={currProjLink} linkPrev={linkPrev} linkNext={linkNext}/>
            
            <CardContainer fullWidth bgNone>
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

