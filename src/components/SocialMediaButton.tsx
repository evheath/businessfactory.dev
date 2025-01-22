import Link from "next/link";
import React from "react";
export const SocialMediaButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-300 hover:bg-gray-700 transition-colors duration-300"
    >
      <div className="w-8 h-8">{children}</div>
    </Link>
  );
};
