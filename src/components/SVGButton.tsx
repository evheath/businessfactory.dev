import type React from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SocialMediaButtonProps {
  children: React.ReactNode;
  href: string;
  label?: string;
}

export const SVGButton: React.FC<SocialMediaButtonProps> = ({
  children,
  href,
  label,
}) => {
  if (label) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-200"
            >
              <div className="w-6 h-6">{children}</div>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-500"
    >
      <div className="w-6 h-6">{children}</div>
    </Link>
  );
};
