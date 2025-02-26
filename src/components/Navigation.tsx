"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image, { StaticImageData} from "next/image";
import { navImage } from "../assets/navImages";

interface navItemProps {
    // href: string;
    label: string;
    image: string | StaticImageData;
    // imageHover: string | StaticImageData;
}

export const NavItem: React.FC<navItemProps> = ({ label, image }) => {
    return(
        <div>
            <Image src={image} alt={label} width={40} height={40} className={``} />
        </div>
    );
}