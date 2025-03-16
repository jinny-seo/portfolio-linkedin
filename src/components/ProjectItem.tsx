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
            <div className="relative md:mr-[72px] lg:mr-[350px] xl:mr-[500px] 2xl:mr-[600px] lg:max-w-[1024px]  bg-yellow-500/50">
                
                {/* Project image */}
                <div className="bg-slate-300 px-1 font-PixelifySans rounded-sm">
                    <div className="px-2 py-1">
                        <span className="">{name}</span>
                        <span className="px-2">|</span>
                        <span>{date}</span>
                    </div>
                    <Image src={image} alt={name} className="rounded-sm"/>
                    
                </div>
                

                {/* Project description */}
                
                <div className="md:absolute md:top-1/2 md:-right-[72px] md:w-[380px] lg:-right-[56px] xl:-right-[168px] lg:w-[400px] xl:w-[480px] ">
                    <div className="bg-slate-300 p-1  rounded-sm">
                        <div className="px-2 py-1">
                            <span className="font-PixelifySans">Description</span>
                        </div>
                        
                        <p className="p-4 md:p-6 lg:p-8 bg-white max-w-none mb-0">{description}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}