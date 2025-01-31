import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="container mx-auto flex max-w-3xl items-center justify-center gap-10">
        <Link href="/" className="font-serif text-4xl font-bold">
          AS
        </Link>

        <ul className="flex items-center gap-6 text-xl font-light text-muted-foreground sm:gap-10">
          <li className="transition-colors hover:text-foreground">
            <Link href="/education">Education</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/experience">Experience</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/publications">Publications</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
}
