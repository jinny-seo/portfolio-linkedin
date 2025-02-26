import Image from "next/image";
import { navImage } from "../assets/navImages";
import { NavItem } from "../components/NavItem";

export const navItemAsset = [
  {
      label: "home",
      image: navImage.computer,
      imageHover: navImage.computerHover,
  },
  {
      label: "work",
      image: navImage.art,
      imageHover: navImage.artHover,
  },
  {
      label: "resume",
      image: navImage.note,
      imageHover: navImage.noteHover,
  },
  {
      label: "contact",
      image: navImage.mail,
      imageHover: navImage.mailHover,
  },
]
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src={navImage.mail}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        
        <p>Save and see your changes instantly.</p>

        <nav>
          <ul className="list-none pl-0 grid grid-cols-4 gap-2">
            {navItemAsset.map(
              (item) => (
                <li key={item.label}>
                  <NavItem image={item.image} imageHover={item.imageHover} label={item.label} link={`#${item.label}`} size="sm"/>
                </li>
              )
            )}
          </ul>
        </nav>
        

      </main>
    </div>
  );
}
