"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image, { StaticImageData} from "next/image";
import Windows95Button from "./Windows95Button";
import Windows95FrameOuter from "./Windows95FrameOuter";
import ProjectPreviewNav from "./ProjectPreviewNav";
import Windows95FrameInner from "./Windows95FrameInner";

interface ProjectItemProps {
    name: string;
    company: string;
    description: string;
    date: string;
    link: string;
    image: string | StaticImageData;
    prevProjLink: string | null;
    nextProjLink: string | null;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({name, company, description, date, link, image, prevProjLink, nextProjLink}) => {
    return(
        <div className="md:relative md:mr-[72px] lg:mr-[350px] xl:mr-[400px] lg:max-w-[1200px]">
            <Windows95FrameOuter label={name}>
                <a href={link}>
                    <Windows95FrameInner>
                        <Image src={image} alt="test" className=""/>
                    </Windows95FrameInner>
                </a>
                {/* Show description and nav buttons when screen size is small: START */}
                <div className='flex flex-col gap-1 mx-1 mb-4 mt-1 md:hidden'>
                    <p className=" px-[0.85rem] py-[0.6rem] max-w-none mb-0">{description}</p>
                    <ProjectPreviewNav currProjLink={link} prevProjLink={prevProjLink} nextProjLink={nextProjLink} />
                </div>
                {/* Show description and nav buttons when screen size is small: END */}
            </Windows95FrameOuter>
            <div className="hidden md:block">
                <div className="absolute top-1/2 -right-[72px] lg:-right-[56px] xl:-right-[132px] w-[400px] xl:w-[480px]">
                    <Windows95FrameOuter label={company} date={date}>
                        <div className="flex flex-col gap-1 pb-4">
                            <p className=" px-[0.85rem] py-[0.6rem] max-w-none mb-0">{description}</p>
                            <ProjectPreviewNav currProjLink={link} prevProjLink={prevProjLink} nextProjLink={nextProjLink} />
                        </div>
                    </Windows95FrameOuter>
                </div>
            </div>
        </div>
        
    )
}