'use client'
import CaseStudyNavigation from "@/components/CaseStudyNavigation";
import { ProjectNav } from "@/components/ProjectNav";
import Windows95FrameOuter from "@/components/Windows95FrameOuter";
import { Windows95TitleBar } from "@/components/Windows95TitleBar";


export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="max-w-[1100px] mx-auto">
        <Windows95FrameOuter>
          {/* <Windows95TitleBar date="{date}" duration="{duration}" label="blah"/> */}

        {/* Shared Navbar or Sidebar */}
        <nav className="">
          {/* <CaseStudyNavigation date="{date}" duration="{duration}" currProjLink="" linkPrev="" linkNext=""/> */}
        </nav>
  
        {/* Render the unique page content */}
        <main className="flex flex-col gap-6">
          {children}
          
          
        </main>
        </Windows95FrameOuter>
      </div>
    );
  }
  