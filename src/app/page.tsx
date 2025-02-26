import Image from "next/image";
import { navImage } from "../assets/navImages";
import { NavItem } from "../components/NavItem";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-purple-300">
      <main className="grid gap-8 row-start-2 items-center sm:items-start">

        {/* Navigation */}
        <div className={`
        fixed flex justify-center bottom-0 left-0 right-0 bg-purple-600`}>
          <div className="bg-purple-500">
            <Navigation/>
          </div>
        </div>
        
        {/* Content */}
        <div className="h-[1000px] bg-purple-200">
          <p>Save and see your changes instantly.</p>
          <Image
            className="dark:invert"
            src={navImage.mail}
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
        

        
        



      </main>
    </div>
  );
}
