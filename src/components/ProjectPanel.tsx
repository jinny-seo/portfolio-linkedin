import React from 'react';
import { ProjectCompanyDate } from './ProjectCompanyDate';
import Windows95Button from './Windows95Button';
import Image, { StaticImageData} from "next/image";
import { icon } from "@/assets/icon";

interface ProjectPanelProps {
    children: React.ReactNode;
    company: string;
    date: string;
    className?: string; //Optional className for customization
}

const ProjectPanel: React.FC<ProjectPanelProps> = ({children, company, date, className = ""}) => {
    return (
        <div className="bg-slate-300 border-slate-900 border-b-[0.5px] border-r-[0.5px] rounded-[5px] shadow-lg">
        <div className="border-slate-400 border-t-[0.5px] border-l-[0.5px] rounded-[4px]">
        <div className="border-slate-600 border-b-2 border-r-2 rounded-[4px]">
        <div className="border-slate-300 border-t-[1px] border-l-[1px] rounded-[3px]">
            <div className="border-slate-400 border-b-2 border-r-2 rounded-[2px]">
            <div className="border-slate-100 border-t-2 border-l-2 rounded-[2px]">
                <div className="border-slate-300 border-2 rounded-[2px]">
                    <div className="bg-blue-800 px-2 pb-[0.1rem] mx-[1px] mt-[.5px] font-PixelifySans text-white">
                        <ProjectCompanyDate company={company} date={date}></ProjectCompanyDate>
                    </div>
                </div>
                <div className="border-slate-300 border-4 bg-red-300/0">
                    <div className='flex flex-col gap-2'>
                        {children}
                        <div className='flex mx-3 mb-3 flex-row gap-2'>
                            <div className='w-full'><Windows95Button label="View"></Windows95Button></div>
                            <div className='flex flex-row gap-[0.1rem]'>
                                <div><Windows95Button icon={<Image src={icon.triangleDown} alt="" width={14} height={14}/>}></Windows95Button></div>
                                <div><Windows95Button icon={<Image src={icon.triangleUp} alt="" width={14} height={14}/>}></Windows95Button></div>
                            </div>
                            
                        
                        
                        </div>
                        
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