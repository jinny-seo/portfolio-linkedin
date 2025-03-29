"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image, { StaticImageData} from "next/image";
import Windows95ButtonContainer from "./Windows95ButtonContainer";
import { TransitionLink } from "@/utils/TransitionLink";



interface CaseStudyNavButtonProps {
    link: string;
    label: string;
    image: string | StaticImageData;
    imageHover: string | StaticImageData;
}

export const CaseStudyNavButton: React.FC<CaseStudyNavButtonProps> = ({ label, image, imageHover, link}) => {

    return(
        <TransitionLink href={link}>
            <Windows95ButtonContainer>
                <div className="flex flex-col justify-center gap-[0.26rem] ml-[0.04rem] mt-[0.1rem] min-w-[3.5rem] md:min-w-[4rem] items-center ">
                    {/* Default image - Hide on hover */}
                    <Image src={image} alt="" width={24} className={`object-cover group-hover:hidden`}/>
                    {/* Hover image - Show on hover */}
                    <Image src={imageHover} alt="" width={24} className={`object-cover group-hover:block hidden`}/>
                    <span className="font-Tiny5 text-sm text-center leading-none">{label}</span>
                </div>
            </Windows95ButtonContainer>
        </TransitionLink>
    );
}