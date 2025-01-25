import Link from "next/link";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode[] | React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg py-1 px-2 text-sm text-gray-400 hover:bg-indigo-500 hover:text-white"
    >
      {children}
    </Link>
  );
}
