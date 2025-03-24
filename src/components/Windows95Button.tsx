import { ReactNode } from "react";
import Image, { StaticImageData} from "next/image";
import Windows95ButtonContainer from "./Windows95ButtonContainer";

interface Windows95ButtonProps {
  onClick?: () => void;
  icon?: string | StaticImageData;
  disabledIcon?: string | StaticImageData;
  label?: string;
  disabled?: boolean;
  compact?: boolean;
}

export default function Windows95Button({ onClick, icon, label, disabled, compact=false }: Windows95ButtonProps) {
  return (
    <Windows95ButtonContainer disabled={disabled} compact={compact}>
      {icon && <span className={`flex items-center justify-center 
      ${compact ? "w-[1rem] h-[0.9rem]" : "w-[1.5rem] h-[1.5rem]"} 
      ${disabled ? "opacity-50" : ""} `}>
          <Image src={icon} alt="" width={`${compact ? 12 : 14}`} height={`${compact ? 12 : 14}`} />
      </span>}

      {label && <span className="h-full text-center font-Doto text-[0.94rem] leading-[1.5rem] px-3">
        {label}
      </span>}
    </Windows95ButtonContainer>
  );
}
