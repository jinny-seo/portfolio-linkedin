import React from 'react';
import Windows95Button from './Windows95Button';
import Image, { StaticImageData} from "next/image";
import { icon } from "@/assets/icon";
import { TransitionLink } from '@/utils/TransitionLink';

interface ProjectPreviewNavProps {
    currProjLink: string;
    prevProjLink: string | null;
    nextProjLink: string | null;
    label?: string;
    locked?: boolean;
}

const ProjectPreviewNav: React.FC<ProjectPreviewNavProps> = ({ currProjLink, prevProjLink, nextProjLink, label="View", locked }) => {
    return (
        <div className='flex flex-row gap-2'>
        <div className='w-full' >
            {locked ? 
                (
                    <div className="relative group">
                    <Windows95Button label={label} disabled />
                    <div className="absolute left-1/2 -translate-x-1/2 -top-9 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-black">
                      Contact me for access
                    </div>
                  </div>
                )
                : 
                (<TransitionLink href={currProjLink}><Windows95Button label={label} /></TransitionLink>)}
            
        </div>
        <div className="flex flex-row gap-[0.1rem]">
            {prevProjLink ? (
                <a href={prevProjLink}>
                    <Windows95Button icon={icon.triangleUp} />
                </a>
            ) : (
                <Windows95Button icon={icon.triangleUpDisabled} disabled/>
            )}
            {nextProjLink ? (
                <a href={nextProjLink}>
                    <Windows95Button icon={icon.triangleDown} />
                </a>
            ) : (
                <Windows95Button icon={icon.triangleDownDisabled} disabled/>
            )}
        </div>
    </div>
    );
}

export default ProjectPreviewNav;