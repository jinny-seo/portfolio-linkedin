import React, { FC } from "react";
import Image, { StaticImageData} from "next/image";
import { toSentenceCase } from "@/utils/format";
import { CardContainer } from "./CardContainer";
import { BulletList } from "./BulletList";

interface CaseStudyData {
    title: string;
    description: string[];
    timeline: string;
    duration: string;
    team?: string[];
    role?: string[];
    heroImage: string | StaticImageData; 
    heroImageAlt: string; 
}

interface CaseStudyHeaderProps {
    data: CaseStudyData;
}


export const CaseStudyHeader: FC<CaseStudyHeaderProps> = ({ data }) => {
    return(
        <div>
        
            <CardContainer fullWidth={true}>
                <div className="">
                    
                    {/* Title & desc */}
                    <div className="flex flex-col pb-8 pt-8 md:pt-10 lg:pt-14 xl:pt-16 gap-8">
                        <h1 className="font-PixelifySans">{data.title}</h1>
                        <div className="md:text-lg">
                            {data.description.map(
                                (desc, index) => (
                                    <p key={index} className="text-md pb-2 max-w-none">{desc}</p> 
                                )
                            )}
                        </div>
                        <hr></hr>
                    </div>

                    

                    {/* Timeline, Team, My role */}
                    <div className="grid xl:grid-cols-3 gap-8 mb-8">
                        
                        <div>
                            <h3 className="subheading">Timeline</h3>
                            <p className="mb-1">{data.timeline}</p>
                        
                        </div>
                        <div>
 
                            {data.team && data.team.length > 0 && (
                                <div>
                                    <h3 className="subheading">Team</h3>
                                    <BulletList>
                                        {
                                            data.team.map(
                                                (item, index) => (
                                                    <li key={index}>{item}</li>
                                                )
                                            )
                                        }
                                    </BulletList>
                                </div>
                            )}
                        </div>

                        <div>
                            {data.role && data.role.length > 0 && (
                                <div>
                                    <h3 className="subheading">My role</h3>
                                    <BulletList>
                                    {
                                        data.role.map(
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
            
            <Image src={data.heroImage} alt={data.heroImageAlt}/>
            
        </div>
        
    );
}

