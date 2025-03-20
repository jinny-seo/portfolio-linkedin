import { ReactNode } from "react";
import Image, { StaticImageData} from "next/image";

interface Windows95ButtonProps {
  onClick?: () => void;
  icon?: string | StaticImageData;
  disabledIcon?: string | StaticImageData;
  label?: string;
  disabled?: boolean;
  compact?: boolean;
}

export default function Windows95Button({ onClick, icon, label, disabled, compact=false }: Windows95ButtonProps) {
  return (
    <div onClick={disabled ? undefined : onClick} // Prevent clicks if disabled
    className={`group bg-slate-300 border-slate-500 border-t-[0.5px] border-l-[0.5px] rounded-[2px]
    ${compact ? "rounded-[2px]" : "rounded-[2px]"}
    ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-400 cursor-pointer"}`}
    >
    <div className={`
    ${compact ? "border-slate-800 border-r-[1.5px] border-b-[1.5px] rounded-[1px]" : "border-slate-600 border-r-2 border-b-2 rounded-[1px]"}
    ${disabled ? "border-slate-400" : "group-hover:border-slate-900"}`}
    >
        <div className={`border-slate-300 border-l border-t rounded-[1px]
        ${disabled ? "border-slate-200" : "group-hover:border-slate-400/50"}`}
        >
        <div
        className={`border-white 
        ${compact ? "border-l-[1.25px] border-t-[1.25px] rounded-bl-[2px] rounded-tr-[2px] rounded-tl-[1px]" : "border-l-2 border-t-2"}
        ${disabled ? "border-slate-300" : "group-hover:border-slate-200/80"}`}
        >
            <div
            className={`
            ${compact ? "border-slate-500 border-r-[1.5px] border-b-[1.5px]" : "border-slate-400 border-r-2 border-b-2 "}
            ${disabled ? "border-slate-300" : "group-hover:border-slate-600/70"}`}
            >
            <div className="flex w-full items-center justify-center gap-1">
                {icon && <span className={`flex items-center justify-center ${disabled ? "opacity-50" : ""} ${compact ? "w-[1rem] h-[0.9rem]" : "w-[1.5rem] h-[1.5rem]"}`}>
                    <Image src={icon} alt="" width={`${compact ? 12 : 14}`} height={`${compact ? 12 : 14}`} />
                </span>}
                {label && <span className="h-full text-center font-Doto text-[0.94rem] leading-[1.5rem]">{label}</span>}
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  );
}
