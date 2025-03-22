import Image, { StaticImageData} from "next/image";
import { caseStudyCrayon } from "@/assets/caseStudyImages";
import { Windows95TitleBar } from "@/components/Windows95TitleBar";
import { CardContainer } from "@/components/CardContainer";
import { BulletList } from "@/components/BulletList";
import Windows95Button from "@/components/Windows95Button";
import Windows95FrameInner from "@/components/Windows95FrameInner";
import Windows95FrameOuter from "@/components/Windows95FrameOuter";

export default function omProject() {
    return (
      <Windows95FrameOuter label="Title bar">
        <Windows95FrameInner>alskdjf</Windows95FrameInner>
        <Windows95FrameInner>alskdjf</Windows95FrameInner>
      </Windows95FrameOuter>
    );
  }
  