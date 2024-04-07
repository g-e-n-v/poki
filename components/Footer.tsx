import Link from "next/link";

import Logo from "@/assets/images/logo.svg";
import { cn } from "@/utils/cn.util";

const LINKS = [
  { href: "#", label: "About" },
  { href: "#", label: "For Developers" },
  { href: "#", label: "Jobs" },
  { href: "#", label: "Privacy Statement" },
  { href: "#", label: "Cookie Statement" },
  { href: "#", label: "Terms of Use" },
  { href: "#", label: "FAQ" },
  { href: "#", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="footer-wave mt-28 bg-white px-8">
      <div className={cn("flex flex-col items-center gap-10 py-6", "xl:flex-row")}>
        <div className="flex gap-4">
          <Logo className="h-6" />
          <span className="font-bold text-blue-denim">Let the world play</span>
        </div>

        <div className="flex grow justify-end">
          <ul className="flex flex-wrap justify-center gap-5">
            {LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>EN</div>
      </div>
    </footer>
  );
}
