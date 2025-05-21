"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface RegistrationButtonProps {
  href: string;
  label?: string;
}

export function RegistrationButton({
  href,
  label = "Click To Register",
}: RegistrationButtonProps) {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const buttonTopPosition = pathname === "/" ? "top-[155px]" : "top-[320px]";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed right-0 ${buttonTopPosition} mt-[-115px] md:mt-0 md:top-[390px] z-40 btn_hotline`}
    >
      <div className="px-5 py-3 bg-blackshed border border-gray-400 hover:bg-primary/80 text-white uppercase font-semibold rounded-l-3xl">
        {label}
      </div>
    </Link>
  );
}
