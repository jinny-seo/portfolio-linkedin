interface NotebookPaperContainerProps {
    children: React.ReactNode;
    leftMarginWidth?: string;
    notebookPaperBg?: boolean;
  }

export default function NotebookPaperContainer({ children, leftMarginWidth = 'w-[64px] md:w-[88px] lg:w-[96px]', notebookPaperBg = true, }: NotebookPaperContainerProps) {
    const bgClass = notebookPaperBg ? 'bg-notebook' : '';

    return (
        <div className="flex">
            <div className={`border-r border-red-400/50 ${bgClass}`}>
                <div className={leftMarginWidth}/>
            </div>
            <div className={`w-full ${bgClass} pl-2 pr-[2rem]`}>
                {children}
            </div>
        </div>
    );
  }