import React from 'react';
import Windows95Button from './Windows95Button';
import Image, { StaticImageData} from "next/image";
import { icon } from "@/assets/icon";
import { TransitionLink } from '@/utils/TransitionLink';

interface ProjectPreviewNavProps {
    currProjLink: string;
    prevProjLink: string | null;
    nextProjLink: string | null;
}

const ProjectPreviewNav: React.FC<ProjectPreviewNavProps> = ({ currProjLink, prevProjLink, nextProjLink }) => {
    return (
        <div className='flex flex-row gap-2'>
        <div className='w-full' >
            <TransitionLink href={currProjLink}>
                <Windows95Button label="View" />
            </TransitionLink>
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