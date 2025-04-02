
import type { Metadata } from "next";
import "./globals.css";
import Windows95FrameOuter from "@/components/Windows95FrameOuter";


export const  metadata: Metadata = {
  title: "Jinny Eunji Seo | Portfolio",
  description: "I'm a problem-solving creative who digs beyond the surface to uncover the problem worth solving. From B2B SaaS platforms to design systems built from the ground up, I turn complexity into clarity and ship what matters.",
  openGraph: {
    title: "Jinny Eunji Seo | Portfolio",
    description: "I'm a problem-solving creative who digs beyond the surface to uncover the problem worth solving. From B2B SaaS platforms to design systems built from the ground up, I turn complexity into clarity and ship what matters.",
    url: 'http://localhost:3000/',
    siteName: "Jinny Seo",
    images: [
      {
        url: 'http://localhost:3000/social-preview.png', // <-- 🔥 this is your new thumbnail
        width: 1200,
        height: 630,
        alt: 'Portfolio preview image for Jinny Eunji Seo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jinny Eunji Seo | Portfolio",
    description: "I'm a problem-solving creative who digs beyond the surface to uncover the problem worth solving. From B2B SaaS platforms to design systems built from the ground up, I turn complexity into clarity and ship what matters.",
    images: ['http://localhost:3000/social-preview.png'],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body className={`antialiased bg-purple-200 `}>
          {/* <div className={`bg-red-200 md:bg-yellow-200 lg:bg-green-200 xl:bg-blue-200 2xl:bg-purple-200 `}>
            {children}
          </div> */}
          {children}

      </body>
    </html>
  );
}

