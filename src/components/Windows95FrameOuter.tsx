import { Windows95TitleBar } from "./Windows95TitleBar";

interface Windows95FrameOuterProps {
    children: React.ReactNode;
    label?: string;
    date?: string;
    duration?: string;
  }

export default function Windows95FrameOuter({ children,label="", date, duration }: Windows95FrameOuterProps) {
    return (
      <div className="bg-slate-300 border-slate-900 border-b-[0.5px] border-r-[0.5px] rounded-[5px] shadow-lg max-w-full overflow-hidden">
      <div className="border-slate-400 border-t-[0.5px] border-l-[0.5px] rounded-[4px]">
      <div className="border-slate-600 border-b-2 border-r-2 rounded-[4px]">
      <div className="border-slate-300 border-t-[1px] border-l-[1px] rounded-[3px]">
          <div className="border-slate-400 border-b-2 border-r-2 rounded-[2px]">
          <div className="border-slate-100 border-t-2 border-l-2 rounded-[2px]">
              <div className="border-slate-300 border-2 rounded-[2px] mt-[1px] ml-[1.5px] mr-[2.5px]">
                  
                  {children}
              </div>
          </div>
          </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
  