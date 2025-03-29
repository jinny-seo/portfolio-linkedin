import React from "react";
import Image from "next/image";
import { icon } from "@/assets/icon";

export const HeroSocialIcons = () => {
    return (
        <ul className="flex gap-4 py-1">
            <li><Image src={icon.medium} alt="Medium" width={26} /></li>
            <li><Image src={icon.linkedin} alt="LinkedIn" width={26} /></li>
            <li><Image src={icon.instagram} alt="Instagram" width={26} /></li>
            <li><Image src={icon.behance} alt="Behance" width={26} /></li>
        </ul>
    );
}
