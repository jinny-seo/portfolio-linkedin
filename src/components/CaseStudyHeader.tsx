import React, { FC } from "react";
import Image, { StaticImageData} from "next/image";
import { CardContainer } from "./CardContainer";
import { BulletList } from "./BulletList";
import Windows95FrameInner from "./Windows95FrameInner";

interface CaseStudyHeaderProps {
    children: React.ReactNode;
    title: string;
    company: string;
    date?: string;
    duration?: string;
    team?: string[];
    role?: string[];
    heroImage: string | StaticImageData; 
    heroImageDesc: string;
}



export const CaseStudyHeader: FC<CaseStudyHeaderProps> = ({ children, title, company, date, duration, team, role, heroImage, heroImageDesc }) => {
    return(
        <div>
            {/* Title & intro: START */}
            <div className="p-8 border-transparent">
                <h1 className="title-1 mb-8">{title}</h1>
                {children}
            </div>
            {/* Title & intro: END */}
            {/* Hero image: START */}
            <Windows95FrameInner>
                <Image src={heroImage} alt={heroImageDesc} />
            </Windows95FrameInner>
            {/* Hero image: END */}

            
            {/* Project metadata: START */}
            <div className="grid grid-cols-2 gap-[3px]">
                
                <Windows95FrameInner>
                    {team && team.length > 0 && (
                    <div className="p-4">
                        <p className="title-3">Team</p>
                        <BulletList>
                            {team.map(
                                (member, index) => (<li key={index}>{member}</li>)
                            )}
                        </BulletList>
                    </div>
                    )}
                </Windows95FrameInner>
    
                <Windows95FrameInner>
                    {role && role.length > 0 && (
                    <div className="p-4">
                        <p className="title-3">My role</p>
                        <BulletList>
                            {role.map(
                                (item, index) => (<li key={index}>{item}</li>)
                            )}
                        </BulletList>
                    </div>
                    )}
                </Windows95FrameInner>
                </div>
                {/* Project metadata: END */}


        </div>
        
    );
}

