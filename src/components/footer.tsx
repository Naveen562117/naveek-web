import Link from "next/link";
import { Zap } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ],
  Resources: [
    { href: "/apply", label: "Apply as Founder" },
    { href: "/contact", label: "Book Discovery Call" },
    { href: "/blog", label: "Blog" },
    { href: "#faq", label: "FAQ" },
  ],
  Products: [
    { href: "https://alinelove.in", label: "Aline — Dating App" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Naveek<span className="text-primary">Tech</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Turning ambitious ideas into real businesses through technology, AI, and founder guidance.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Naveek Tech Labs. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with AI DLC methodology.
          </p>
        </div>
      </div>
    </footer>
  );
}
