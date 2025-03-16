"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image, { StaticImageData} from "next/image";
import ProjectFrame from "./ProjectFrame";

interface ProjectItemProps {
    name: string;
    description: string;
    date: string;
    link: string;
    image: string | StaticImageData;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({name, description, date, link, image}) => {
    return(
        <a href={link}>
            <div className="relative md:mr-[72px] lg:mr-[350px] xl:mr-[500px] 2xl:mr-[600px] lg:max-w-[1024px]  bg-yellow-500/50">
                
                
                {/* Project image */}
                <ProjectFrame label={date}>
                    <Image src={image} alt={name} className=""/>
                    
                    </ProjectFrame>
                

                {/* Project description */}
                
                <div className="md:absolute md:top-1/2 md:-right-[72px] md:w-[380px] lg:-right-[56px] xl:-right-[168px] lg:w-[400px] xl:w-[480px] ">
                    <ProjectFrame label={name}>
                        <p className=" p-2 md:p-4 lg:p-4 bg-white max-w-none mb-0">{description}</p>
                    </ProjectFrame>
                </div>
            </div>
        </a>
    )
}