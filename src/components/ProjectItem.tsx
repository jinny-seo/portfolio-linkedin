"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image, { StaticImageData} from "next/image";

interface ProjectItemProps {
    name: string;
    description: string;
    image: string | StaticImageData;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({name, description, image}) => {
    return(
        <div className="relative lg:mr-[350px] xl:mr-[500px] 2xl:mr-[600px] lg:max-w-[1024px]  bg-yellow-500/50">
        <div className="bg-red-500/50">
            <Image src={image} alt={name}/>
        </div>
        <div className="lg:absolute lg:top-1/2 lg:-right-[56px] xl:-right-[168px] lg:w-[400px] xl:w-[480px] bg-blue-800/50">
            <p className="p-8">{description}</p>
        </div>
        </div>
    )
}