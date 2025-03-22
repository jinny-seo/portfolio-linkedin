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
      hover:bg-slate-400/40  active:bg-slate-400/40 
      ${compact ? "rounded-[2px]" : "rounded-[2px]"}
      ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
    <div className={`group-active:border-slate-100
      ${compact ? "border-slate-800 border-r-[1.5px] border-b-[1.5px] rounded-[1px]" : "border-slate-600 border-r-2 border-b-2 rounded-[1px]"}
      ${disabled ? "border-slate-400" : ""}`}
    >
        <div className={`border-slate-300 border-l border-t rounded-[1px]
          group-active:border-slate-900
          ${disabled ? "border-slate-200" : ""}`}
        >
        <div
        className={`border-white group-hover:border-slate-100
          group-active:border-slate-500/90
          ${compact ? "border-l-[1.25px] border-t-[1.25px] rounded-bl-[2px] rounded-tr-[2px] rounded-tl-[1px]" : "border-l-2 border-t-2"}
          ${disabled ? "border-slate-300" : ""}`}
        >
            <div
            className={`group-hover:border-slate-600/50 group-active:border-slate-200/50
            ${compact ? "border-slate-500 border-r-[1.5px] border-b-[1.5px]" : "border-slate-400 border-r-2 border-b-2 "}
            ${disabled ? "border-slate-300" : ""}`}
            >
            <div className="flex w-full items-center justify-center gap-1">
                {icon && <span className={`flex items-center justify-center ${compact ? "w-[1rem] h-[0.9rem]" : "w-[1.5rem] h-[1.5rem]"} 
                  ${disabled ? "opacity-50" : ""} `}
                >
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
