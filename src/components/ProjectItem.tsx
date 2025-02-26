"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image, { StaticImageData} from "next/image";

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
            <div className="relative lg:mr-[350px] xl:mr-[500px] 2xl:mr-[600px] lg:max-w-[1024px]  bg-yellow-500/50">
                
                {/* Project image */}
                <div>
                    <p className="bg-slate-300">{name}</p>
                    <Image src={image} alt={name}/>
                </div>

                {/* Project description */}
                
                <div className="lg:absolute lg:top-1/2 lg:-right-[56px] xl:-right-[168px] lg:w-[400px] xl:w-[480px] ">
                    <p className="bg-slate-300">{date}</p>
                    <p className="p-8 bg-white">{description}</p>
                </div>
            </div>
        </a>
    )
}