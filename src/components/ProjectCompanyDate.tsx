import React from "react";

interface ProjectCompanyDateProps {
    company: string;
    date: string;
}

export const ProjectCompanyDate: React.FC<ProjectCompanyDateProps> = ({company, date}) => {
    return(
        <div className="text-[.94rem]">
            <span>{company}</span>
            <span className="mx-1">·</span>
            <span>{date}</span>
        </div>
    );
}


