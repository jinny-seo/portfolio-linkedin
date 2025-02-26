"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image, { StaticImageData} from "next/image";
import { navImage } from "../assets/navImages";

interface navItemProps {
    link: string;
    label: string;
    image: string | StaticImageData;
    // imageHover: string | StaticImageData;
    size?: "lg" | "md" | "sm";
}

export const NavItem: React.FC<navItemProps> = ({ label, image, link, size = "md" }) => {

    const sizeMap = {
        sm: 32,
        md: 40,
        lg: 48,
    };

    return(
        <a href={link}>
            <Image src={image} alt={label} width={sizeMap[size]} height={sizeMap[size]} className={``} />
        </a>
    );
}