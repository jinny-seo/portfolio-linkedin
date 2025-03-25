import React, { useEffect, useRef, useState } from "react";

interface SectionTitleProps {
    title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {

    return(
        <div className="flex flex-col gap-[1rem] pb-[1rem] md:pb-[1.25rem] lg:pb-[2rem] mx-1">
            <h2 className="font-Doto text-[1.8rem] md:text-[2rem] lg:text-[2.2rem]">{title}</h2>
            <p className="font-Doto text-[1.15rem] md:text-[1.2rem] lg:text-[1.3rem]">. . .</p>
        </div>
    );
}