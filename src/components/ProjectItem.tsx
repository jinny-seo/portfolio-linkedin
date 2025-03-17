"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image, { StaticImageData} from "next/image";
import ProjectFrame from "./ProjectFrame";
import ProjectPanel from "./ProjectPanel";
import Windows95Button from "./Windows95Button";

interface ProjectItemProps {
    name: string;
    company: string;
    description: string;
    date: string;
    link: string;
    image: string | StaticImageData;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({name, company, description, date, link, image}) => {
    const companyDate = company + " | " + date;


    return(
        <a href={link}>
        <div className="relative md:mr-[72px] lg:mr-[350px] xl:mr-[500px] 2xl:mr-[600px] lg:max-w-[1024px]  bg-yellow-500/50">
            
            {/* Project image */}
            <ProjectFrame label={name}>
                <Image src={image} alt={name} className=""/>
            </ProjectFrame>
            
            
            {/* Project description */}
            <div className="md:absolute md:top-1/2 md:-right-[72px] md:w-[380px] lg:-right-[56px] xl:-right-[168px] lg:w-[400px] xl:w-[480px] ">
                <ProjectPanel company={company} date={date}>
                    <div className="grid">
                        <p className=" px-[0.85rem] py-[0.6rem] max-w-none mb-0">{description}</p>
                    </div>
                </ProjectPanel>
            </div>
        </div>
        </a>
    )
}