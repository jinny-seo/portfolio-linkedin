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
        <div className="md:relative md:mr-[5rem] lg:mr-[22rem] xl:mr-[24rem] lg:max-w-[1024px]">
            <Windows95FrameOuter label={name}>
                <a href={link}>
                    <Windows95FrameInner>
                        <Image src={image} alt="test" className=""/>
                    </Windows95FrameInner>
                </a>
                {/* Show description and nav buttons when screen size is small: START */}
                <div className='md:hidden flex flex-col gap-4 mx-3 mt-4 mb-3'>
                    <p className="">{description}</p>
                    <ProjectPreviewNav currProjLink={link} prevProjLink={prevProjLink} nextProjLink={nextProjLink} />
                </div>
                {/* Show description and nav buttons when screen size is small: END */}
            </Windows95FrameOuter>
            <div className="hidden md:block">
                <div className="absolute bottom-[12%] 
                -right-[5rem] lg:-right-[3.5rem] xl:-right-[5rem] 
                w-[26rem] xl:w-[28rem]">
                    <Windows95FrameOuter label={company} date={date}>
                        <div className="flex flex-col gap-4 mx-3 mt-4 mb-3">
                            <p className="">{description}</p>
                            <ProjectPreviewNav currProjLink={link} prevProjLink={prevProjLink} nextProjLink={nextProjLink} />
                        </div>
                    </Windows95FrameOuter>
                </div>
            </div>
        </div>
        
    )
}