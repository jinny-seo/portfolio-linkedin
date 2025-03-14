import React, { FC } from "react";
import Image, { StaticImageData} from "next/image";
import { toSentenceCase } from "@/utils/format";
import { CardContainer } from "./CardContainer";

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
        <h1 className="font-PixelifySans mb-6">{data.title}</h1>
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
                <ul className="list-disc pl-5 pb-3">
                    {
                        data.team.map(
                            (item, index) => (
                                <li key={index}>{item}</li>
                            )
                        )
                    }
                </ul>
            </div>
        )}
        {/* My role */}
        {data.role && data.role.length > 0 && (
            <div>
                <h3 className="subheading">My role</h3>
                <ul className="list-disc pl-5 pb-3">
                    {
                        data.role.map(
                            (item, index) => (
                                <li key={index}>{item}</li>
                            )
                        )
                    }
                </ul>
            </div>
        )}
    </CardContainer>        
    );
}

