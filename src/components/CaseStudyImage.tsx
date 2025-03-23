import React, { FC, ReactNode } from "react";
import Windows95FrameInner from "./Windows95FrameInner";
import Image, { StaticImageData} from "next/image";

interface CaseStudyImageProps {
    src: string | StaticImageData;
    alt: string;
    caption?: string;
    
}

export const CaseStudyImage: FC<CaseStudyImageProps> = ({ src, caption, alt = "" }) => {
    return(
        <div className="flex flex-col gap-2 pt-4">
            <Image 
                className="shadow-sm border-slate-300/60 border"
                src={src}
                alt={alt}
            />
            <p className="caption">{caption}</p>
        </div>
    );
};