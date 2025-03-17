import { ReactNode } from "react";

interface Windows95ButtonProps {
  onClick?: () => void;
  icon?: ReactNode;
  label?: string;
}

export default function Windows95Button({ onClick, icon, label }: Windows95ButtonProps) {
  return (
    <div 
      onClick={onClick} 
      className="group border-slate-500 border-t-[0.5px] border-l-[0.5px] rounded-tl-[2px] rounded-tr-[2px] rounded-bl-[2px] hover:bg-slate-400/70 cursor-pointer"
    >
      <div className="border-slate-600 border-r-2 border-b-2 rounded-[2px] group-hover:border-slate-900">
        <div className="border-slate-300 border-l border-t rounded-tl-[1px] rounded-tr-[1px] rounded-b-[1px] group-hover:border-slate-400/50">
          <div className="border-white border-l-2 border-t-2 rounded-tl-[1px] group-hover:border-slate-200/80">
            <div className="border-slate-400 border-r-2 border-b-2 group-hover:border-slate-600/70">
              <div className="flex h-[1.5rem] w-full items-center justify-center gap-1">
                {icon && <span className="w-[1.6rem] h-full flex items-center justify-center">{icon}</span>}
                {label && <span className="h-full text-center font-PixelifySans">{label}</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
