export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className=" min-h-screen">
        {/* Shared Navbar or Sidebar */}
        <nav className="">
        </nav>
  
        {/* Render the unique page content */}
        <main className="bg-white max-w-[650px] lg:max-w-[850px] xl:max-w-[1200px]  mx-auto rounded-md shadow-lg">
          {children}
        </main>
      </div>
    );
  }
  