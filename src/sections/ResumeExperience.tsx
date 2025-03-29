import React from 'react';

type ResumeExperienceProps = {
  items: string[];
  company: string;
  title?: string;
  startDate: string;
  endDate: string;
};

const ResumeExperience: React.FC<ResumeExperienceProps> = ({ items, company, title, startDate, endDate,}) => {
    return (
        <div>
            {/* Title */}
            <p className="font-Doto leading-[1.8rem] underline ">
                {company}{title ? `, ${title}` : ''} * {startDate} – {endDate}
            </p>
            {/* Bulleted list */}
            <ul className="list-disc ml-6">
                {items.map((item, index) => (
                    <li key={index} className="m-[0rem] p-[0rem] leading-[1.8rem] pl-2 max-w-[600px]">{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ResumeExperience;