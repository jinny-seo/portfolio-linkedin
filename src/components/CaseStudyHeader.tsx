import React, { FC } from "react";
import Image, { StaticImageData} from "next/image";
import { toSentenceCase } from "@/utils/format";
import { CardContainer } from "./CardContainer";
import { BulletList } from "./BulletList";

interface CaseStudyHeaderProps {
    title: string;
    desc: string[];
    date?: string;
    duration?: string;
    team?: string[];
    role?: string[];
    heroImage: string | StaticImageData; 
    heroImageDesc: string;
}



export const CaseStudyHeader: FC<CaseStudyHeaderProps> = ({ title, desc, date, duration, team, role, heroImage, heroImageDesc }) => {
    return(
        <div>
        
            <CardContainer fullWidth={true}>
                <div className="">
                    
                    {/* Title & desc */}
                    <div className="flex flex-col pb-8 pt-8 md:pt-10 lg:pt-14 xl:pt-16 gap-8">
                        <h1 className="font-PixelifySans">{title}</h1>
                        <div className="md:text-lg">
                            {desc.map(
                                (paragraph, index) => (
                                    <p key={index} className="text-md pb-2 max-w-none">{paragraph}</p> 
                                )
                            )}
                        </div>
                        <hr></hr>
                    </div>

                    

                    {/* Timeline, Team, My role */}
                    <div className="grid xl:grid-cols-3 gap-8 mb-8">
                        
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

