import React from "react";
import Image from "next/image";
import { icon } from "@/assets/icon";
import { HeroSocialIcons } from "./HeroSocialIcons";
import CopyButton from "@/components/CopyButton";

export const InTheWildSection = () => {
    return (
        <div className="flex flex-col gap-1">
            <p className="font-Doto p-hero">In the wild</p>
            <HeroSocialIcons/>
        </div>
    );
}
