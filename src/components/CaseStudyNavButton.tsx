"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image, { StaticImageData} from "next/image";
import { toTitleCase, toSentenceCase } from "@/utils/format";
import Windows95ButtonContainer from "./Windows95ButtonContainer";


interface CaseStudyNavButtonProps {
    link: string;
    label: string;
    image: string | StaticImageData;
    imageHover: string | StaticImageData;
}

export const CaseStudyNavButton: React.FC<CaseStudyNavButtonProps> = ({ label, image, imageHover, link}) => {

    return(
        <a href={link} className="">
            <Windows95ButtonContainer>
                <div className="flex flex-col justify-center gap-[0.3rem] ml-[0.04rem] items-center ">
            
                    {/* Default image - Hide on hover */}
                    <Image src={image} alt="" width={28} className={`object-cover group-hover:hidden`}/>

                    {/* Hover image - Show on hover */}
                    <Image src={imageHover} alt="" width={28} className={`object-cover group-hover:block hidden`}/>
                    <span className="font-Tiny5 w-[64px] text-sm text-center leading-none">{label}</span>
                
                </div>
            </Windows95ButtonContainer>
        </a>
    );
}