export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="p-10 bg-gray-100 min-h-screen">
        {/* Shared Navbar or Sidebar */}
        <nav className="mb-6 bg-purple-500 text-white p-4 text-center">
          <h1 className="text-2xl font-bold">Projects</h1>
        </nav>
  
        {/* Render the unique page content */}
        <main className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          {children}
        </main>
      </div>
    );
  }
  