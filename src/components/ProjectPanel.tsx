import React from 'react';
import { ProjectCompanyDate } from './ProjectCompanyDate';
import Windows95Button from './Windows95Button';
import Image, { StaticImageData} from "next/image";
import { icon } from "@/assets/icon";
import ProjectPreviewNav from './ProjectPreviewNav';
import { ProjectTitleBar } from './ProjectTitleBar';

interface ProjectPanelProps {
    children: React.ReactNode;
    company: string;
    date: string;
    currProjLink: string;
    prevProjLink: string | null;
    nextProjLink: string | null;
    className?: string; //Optional className for customization
}

const ProjectPanel: React.FC<ProjectPanelProps> = ({children, company, date, currProjLink, prevProjLink, nextProjLink, className = ""}) => {
    return (
        <div className="bg-slate-300 border-slate-900 border-b-[0.5px] border-r-[0.5px] rounded-[5px] shadow-lg">
        <div className="border-slate-400 border-t-[0.5px] border-l-[0.5px] rounded-[4px]">
        <div className="border-slate-600 border-b-2 border-r-2 rounded-[4px]">
        <div className="border-slate-300 border-t-[1px] border-l-[1px] rounded-[3px]">
            <div className="border-slate-400 border-b-2 border-r-2 rounded-[2px]">
            <div className="border-slate-100 border-t-2 border-l-2 rounded-[2px]">
                <div className="border-slate-300 border-2 rounded-[2px]">
                    <ProjectTitleBar label={company} date={date}></ProjectTitleBar>
                </div>
                <div className="border-slate-300 border-4 bg-red-300/0">
                    <div className='flex flex-col gap-2 mb-3'>
                        {children}
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

export default ProjectPanel;