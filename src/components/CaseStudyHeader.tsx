import React, { FC } from "react";
import Image, { StaticImageData} from "next/image";
import { toSentenceCase } from "@/utils/format";
import { CardContainer } from "./CardContainer";
import { BulletList } from "./BulletList";

interface CaseStudyData {
    title: string;
    description: string[];
    timeline: string;
    team?: string[];
    role?: string[];
}

interface CaseStudyHeaderProps {
    data: CaseStudyData;
}


export const CaseStudyHeader: FC<CaseStudyHeaderProps> = ({ data }) => {
    return(
    <CardContainer>
        {/* Title & description */}
        <h1 className="font-PixelifySans pt-8 md:pt-10 lg:pt-12 xl:pt-16 mb-6">{data.title}</h1>
        <div className="">
            {data.description.map(
                (desc, index) => (
                    <p key={index} className="text-md pb-2">{desc}</p> 
                )
            )}
        </div>
        
        {/* ---- Divider ---- */}
        <hr></hr> 
        
        {/* Timeline */}
        <div className="mt-4">
            <h3 className="subheading">Timeline</h3>
            <p className="pb-2">{data.timeline}</p>
        </div>
        {/* Team */}
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
        {/* My role */}
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
    </CardContainer>        
    );
}

