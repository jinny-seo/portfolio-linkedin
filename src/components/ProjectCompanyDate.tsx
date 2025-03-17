import React from "react";

interface ProjectCompanyDateProps {
    company: string;
    date: string;
}

export const ProjectCompanyDate: React.FC<ProjectCompanyDateProps> = ({company, date}) => {
    return(
        <div>
            <span>{company}</span>
            <span className="mx-2">•</span>
            <span>{date}</span>
        </div>
    );
}