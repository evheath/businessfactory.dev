import type React from "react"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface SocialMediaButtonProps {
  children: React.ReactNode
  href: string
  label: string
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ children, href, label }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
          >
            <div className="w-6 h-6">{children}</div>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default SocialMediaButton

