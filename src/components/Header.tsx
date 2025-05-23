import { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";

import { Button } from "@/components/Button";
import { NavLink } from "@/components/NavLink";
import { Logo } from "./Logo";
import Brand from "./Brand";

/**
 * The popover menu (for mobile)
 */
function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode[] | React.ReactNode;
}) {
  return (
    <>
      <Popover.Button as={Link} href={href} className="block w-full p-2">
        {children}
      </Popover.Button>
    </>
  );
}

/**
 * The hamburger menu.
 */
function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

/**
 * The entire topnav bar when <md breakpoint
 */
function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="/about">About</MobileNavLink>
            <MobileNavLink href="/portfolio">Portfolio</MobileNavLink>
            <MobileNavLink href="/blog">Blog</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export function Header() {
  return (
    <header className="py-1">
      <nav className="relative z-50 flex justify-between">
        <div className="flex items-center lg:gap-x-12">
          <Link
            className="group flex flex-col lg:flex-row items-center h-24"
            href="/"
            aria-label="Home"
          >
            <Logo className="lg:h-full" />
            <Brand className="mt-1 lg:h-12 lg:ml-2" />
          </Link>
          <div className="hidden lg:flex lg:gap-x-6 hover:scale-125">
            <NavLink href="/about">About</NavLink>
          </div>
          <div className="hidden lg:flex lg:gap-x-6 hover:scale-125">
            <NavLink href="/portfolio">Portfolio</NavLink>
          </div>
          <div className="hidden lg:flex lg:gap-x-6 hover:scale-125">
            <NavLink href="/blog">Blog</NavLink>
          </div>
        </div>
        <div className="flex items-center gap-x-5 lg:gap-x-8">
          <Button href="/contact">Contact me</Button>
          <div className="-mr-1 lg:hidden">
            <MobileNavigation />
          </div>
        </div>
      </nav>
    </header>
  );
}
