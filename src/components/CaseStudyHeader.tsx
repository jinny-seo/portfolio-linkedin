import React, { FC } from "react";
import Image, { StaticImageData} from "next/image";
import { toSentenceCase } from "@/utils/format";
import { CardContainer } from "./CardContainer";
import { BulletList } from "./BulletList";

interface CaseStudyHeaderProps {
    title: string;
    company: string;
    intro: string[];
    date?: string;
    duration?: string;
    team?: string[];
    role?: string[];
    heroImage: string | StaticImageData; 
    heroImageDesc: string;
}



export const CaseStudyHeader: FC<CaseStudyHeaderProps> = ({ title, company, intro, date, duration, team, role, heroImage, heroImageDesc }) => {
    return(
        <div>
        
            <CardContainer fullWidth={true}>
                <div className="">
                    
                    {/* Title & desc */}
                    <div className="flex flex-col">
                        <span className="font-Doto">{company}</span>
                        <h1 className="title-1">{title}</h1>
                        <p className="font-Doto">
                            <span>{date}</span>
                            <span className="ml-2">({duration})</span>
                        </p>
                        <div className="md:text-lg">
                            {intro.map((paragraph, index) => (<p key={index} className="text-md pb-2 max-w-none">{paragraph}</p>))}
                        </div>
                        <hr></hr>
                    </div>
                    {/* Timeline, Team, My role */}
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-8 mb-8">
                        <div>
 
                            {team && team.length > 0 && (
                                <div>
                                    <p className="title-3">Team</p>
                                    <BulletList>
                                        {
                                            team.map(
                                                (member, index) => (
                                                    <li key={index}>{member}</li>
                                                )
                                            )
                                        }
                                    </BulletList>
                                </div>
                            )}
                        </div>

                        <div>
                            {role && role.length > 0 && (
                                <div>
                                    <p className="title-3">My role</p>
                                    <BulletList>
                                    {
                                        role.map(
                                            (item, index) => (
                                                <li key={index}>{item}</li>
                                            )
                                        )
                                    }
                                    </BulletList>
                                </div>
                            )}
                        </div>
                        
                    </div>
                </div>
            </CardContainer>
            
            <Image src={heroImage} alt={heroImageDesc} className="mb-12"/>
            
        </div>
        
    );
}

