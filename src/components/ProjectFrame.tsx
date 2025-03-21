import React from 'react';
import Windows95Button from './Windows95Button';
import { icon } from "@/assets/icon";
import ProjectPreviewNav from './ProjectPreviewNav';
import { ProjectTitleBar } from './ProjectTitleBar';

interface ProjectFrameProps {
    children: React.ReactNode;
    label?: string;
    description?: string;
    currProjLink: string;
    prevProjLink: string | null;
    nextProjLink: string | null;
    className?: string; //Optional className for customization
}

const ProjectFrame: React.FC<ProjectFrameProps> = ({children, label= "some label", description, currProjLink, prevProjLink, nextProjLink, className = ""}) => {
    return (
        <div className="bg-slate-300 border-slate-900 border-b-[0.5px] border-r-[0.5px] rounded-[5px] shadow-lg">
        <div className="border-slate-400 border-t-[0.5px] border-l-[0.5px] rounded-[4px]">
        <div className="border-slate-600 border-b-2 border-r-2 rounded-[4px]">
        <div className="border-slate-300 border-t-[1px] border-l-[1px] rounded-[3px]">
            <div className="border-slate-400 border-b-2 border-r-2 rounded-[2px]">
            <div className="border-slate-100 border-t-2 border-l-2 rounded-[2px]">
                <div className="border-slate-300 border-2 rounded-[2px]">
                    <ProjectTitleBar label={label} button></ProjectTitleBar>
                </div>
                <div className="border-slate-300 border-2">
                    <div className="border-slate-100 border-b-2 border-r-2">
                    <div className="border-slate-400 border-t-2 border-l-2">
                        <div className='border-slate-500 border-t-[1px] border-l-[1px]'>
                        <div className='border-slate-300 border-b-[1px] border-r-[1px]'>
                            {children}
                        </div>
                        </div>
                    </div>       
                    </div>
                    <div className='flex flex-col mx-1 mb-4 mt-1 md:hidden'>
                        <span className='p-4 pb-5'>{description}</span>
                        <ProjectPreviewNav currProjLink={currProjLink} prevProjLink={prevProjLink} nextProjLink={nextProjLink} />
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
    
}

export default ProjectFrame;