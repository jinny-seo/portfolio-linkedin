import { ProjectNav } from "@/components/ProjectNav";


export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className=" min-h-screen">
        {/* Shared Navbar or Sidebar */}
        <nav className="">
        </nav>
  
        {/* Render the unique page content */}
        <main className="flex flex-col gap-8 max-w-[1200px] mx-auto">
          
          <ProjectNav/>
          {children}
          
        </main>
      </div>
    );
  }
  