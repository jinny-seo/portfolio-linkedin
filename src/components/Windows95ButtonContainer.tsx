import { ReactNode } from "react";

interface Windows95ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  compact?: boolean;
  disabled?: boolean;
}

export default function Windows95Button({
  onClick,
  children,
  disabled,
  compact,
}: Windows95ButtonProps) {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`h-full mt-[1px] group bg-slate-300 border-slate-500 border-t-[0.5px] border-l-[0.5px] rounded-[2px]
        
        ${compact ? "rounded-[2px]" : "rounded-[2px]"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-slate-400/40 active:bg-slate-400/40"}`}
    >
      <div
        className={`h-full  
          ${compact ? "border-slate-800 border-r-[1.5px] border-b-[1.5px] rounded-[1px]" : "border-slate-600 border-r-2 border-b-2 rounded-[1px]"}
          ${disabled ? "border-slate-400" : "group-active:border-slate-100"}`}
      >
        <div
          className={`h-full border-slate-300 border-l border-t rounded-[1px]
            
            ${disabled ? "border-slate-200" : "group-active:border-slate-900"}`}
        >
          <div
            className={`h-full border-white group-hover:border-slate-100
              
              ${compact ? "border-l-[1.25px] border-t-[1.25px] rounded-bl-[2px] rounded-tr-[2px] rounded-tl-[1px]" : "border-l-2 border-t-2"}
              ${disabled ? "border-slate-300" : "group-active:border-slate-500/90"}`}
          >
            <div
              className={`h-full 
                ${compact ? "border-slate-500 border-r-[1.5px] border-b-[1.5px]" : "border-slate-400 border-r-2 border-b-2 "}
                ${disabled ? "border-slate-300" : "group-hover:border-slate-600/50 group-active:border-slate-200/50"}`}
            >
              <div className="flex w-full h-full items-center justify-center gap-1">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
