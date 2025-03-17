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
                    <div className="flex flex-col pb-8 pt-8 md:pt-10 lg:pt-14 xl:pt-16 gap-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-PixelifySans">{title}</h1>
                            <p className="font-Tiny5 mb-0 mt-2 lg:mb-2 lg:mt-4 md:text-lg lg:text-xl">
                                <span>{company}</span><span className="mx-2">·</span><span>{date}</span>
                            </p>
                        </div>
                        <div className="md:text-lg">
                            {intro.map(
                                (paragraph, index) => (
                                    <p key={index} className="text-md pb-2 max-w-none">{paragraph}</p> 
                                )
                            )}
                        </div>
                        <hr></hr>
                    </div>
                    {/* Timeline, Team, My role */}
                    <div className="grid sm:grid-cols-3 gap-4 md:gap-8 mb-8">
                        
                        <div>
                            <h3 className="subheading">Timeline</h3>
                            <p className="mb-1">{date}</p>
                        
                        </div>
                        <div>
 
                            {team && team.length > 0 && (
                                <div>
                                    <h3 className="subheading">Team</h3>
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
                                    <h3 className="subheading">My role</h3>
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
            
            <Image src={heroImage} alt={heroImageDesc}/>
            
        </div>
        
    );
}

