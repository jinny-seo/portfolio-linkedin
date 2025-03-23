import React, { FC } from "react";
import Image, { StaticImageData} from "next/image";
import { CardContainer } from "./CardContainer";
import { BulletList } from "./BulletList";
import Windows95FrameInner from "./Windows95FrameInner";
import { CardSection } from "./CardSection";

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
            <Windows95FrameInner>
                <CardContainer bgNone>
                    <CardSection>
                        <h1 className="title-1 mb-3">{title}</h1>
                        <div className="flex flex-col text-[1.08rem] gap-3">
                            {children}
                        </div>
                    </CardSection>
                </CardContainer>
            </Windows95FrameInner>
            
            <Windows95FrameInner>
                <Image src={heroImage} alt={heroImageDesc} />
            </Windows95FrameInner>

            {/* <div className="grid grid-cols-2 gap-[3px]">
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
            </div> */}

        </div>
        
    );
}

