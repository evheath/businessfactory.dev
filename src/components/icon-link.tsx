import type React from "react"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface IconLinkProps {
  url: string
  icon?: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg"
  ariaLabel?: string
}

export function IconLink({ url, icon, className, size = "md", ariaLabel = "External link" }: IconLinkProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(
        "flex items-center justify-center rounded-full bg-gray-600 text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        sizeClasses[size],
        className,
      )}
    >
      {icon || <ExternalLink className="h-5 w-5" />}
    </Link>
  )
}

