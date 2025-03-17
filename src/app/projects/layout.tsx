import { ProjectNav } from "@/components/ProjectNav";


export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="max-w-[1100px] mx-auto">
        {/* Shared Navbar or Sidebar */}
        <nav className="">
        </nav>
  
        {/* Render the unique page content */}
        <main className="flex flex-col gap-6">
          
          <ProjectNav/>
          {children}
          
        </main>
      </div>
    );
  }
  