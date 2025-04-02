"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image, { StaticImageData} from "next/image";
import Windows95Button from "./Windows95Button";
import Windows95FrameOuter from "./Windows95FrameOuter";
import ProjectPreviewNav from "./ProjectPreviewNav";
import Windows95FrameInner from "./Windows95FrameInner";
import { TransitionLink } from "@/utils/TransitionLink";
import { Windows95TitleBar } from "./Windows95TitleBar";

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
        <div className="md:relative md:mr-[5rem] lg:mr-[16rem] xl:mr-[18rem] lg:max-w-[1024px]">
            
            <Windows95FrameOuter label={name}>
                <TransitionLink href={link}>
                    <Windows95TitleBar label={name}></Windows95TitleBar>
                    <Windows95FrameInner>
                        <Image src={image} alt="Case study hero" className="transition duration-300 hover:brightness-75"/>
                    </Windows95FrameInner>
                    </TransitionLink>
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
                        <Windows95TitleBar>
                            <p>
                                <span>{company}</span>
                                <span className="mx-1">·</span>
                                <span>{date}</span>
                            </p>
                        </Windows95TitleBar>
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