interface Windows95FrameInnerProps {
    children: React.ReactNode;
  }

export default function Windows95FrameInner({ children }: Windows95FrameInnerProps) {
    return (
        <div className="h-full border-slate-300 border-t-[3px]">
            <div className="h-full border-slate-100 border-b-2 border-r-2">
            <div className="h-full border-slate-400 border-t-2 border-l-2">
                <div className='h-full border-slate-500 border-t border-l'>
                <div className='h-full border-slate-300 border-b border-r'>
                    {children}
                </div>
                </div>
            </div>       
            </div>
        </div>
    );
  }
  
