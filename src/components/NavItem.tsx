"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image, { StaticImageData} from "next/image";

import { toTitleCase, toSentenceCase } from "@/utils/format";


interface NavItemProps {
    link: string;
    label: string;
    image: string | StaticImageData;
    imageHover: string | StaticImageData;
    size?: "lg" | "md" | "sm";
    isActive?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ label, image, imageHover, link, size = "sm", isActive }) => {

    const iconSize = {
        sm: 32,
        md: 40,
        lg: 48,
    };


    return(
        <a href={link} className="">
        <div className={`flex flex-col justify-center gap-1 items-center
            ${isActive ? "bg-purple-600/20" : "bg-transparent"}
            pt-1 w-[72px] h-[72px] rounded-[3px] hover:bg-purple-600/20 group`}>
            
                {/* Default image - Hide on hover */}
                <Image src={image} alt={label} width={iconSize[size]} height={iconSize[size]}
                    className={`object-cover group-hover:hidden`} />
                {/* Hover image - Show on hover */}
                <Image src={imageHover} alt={label} width={iconSize[size]} height={iconSize[size]} 
                    className={`object-cover group-hover:block hidden`} />
                <span className="font-Tiny5 text-[0.82rem]">{toSentenceCase(label)}</span>
            
        </div>
        </a>
    );
}