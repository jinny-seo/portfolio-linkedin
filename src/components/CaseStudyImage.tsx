import React, { FC, ReactNode } from "react";
import Windows95FrameInner from "./Windows95FrameInner";
import Image, { StaticImageData} from "next/image";

interface CaseStudyImageProps {
    src: string | StaticImageData;
    alt: string;
    caption?: string;
    spaceBottom?: boolean;
    className?: string;
    
}

export const CaseStudyImage: FC<CaseStudyImageProps> = ({ src, caption, alt = "", spaceBottom = false, className = "border"}) => {
    return(
        <div className="flex flex-col gap-0">
            <Image 
                className={`shadow-sm border-slate-200 ${className}`}
                src={src}
                alt={alt}
            />
            {caption && (
                <p className={`pt-4 caption ${ spaceBottom ? "pb-4" : "pb-0"}`}>{caption}</p>
            )}
        </div>
    );
};