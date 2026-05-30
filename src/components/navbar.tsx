"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
            <Zap className="w-4 h-4 text-primary" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Naveek<span className="text-primary">Tech</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/contact">Book a Call</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden border-t border-border bg-background"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-2">
                <Button variant="outline" asChild>
                  <Link href="/contact" onClick={() => setOpen(false)}>Book a Call</Link>
                </Button>
                <Button asChild>
                  <Link href="/apply" onClick={() => setOpen(false)}>Apply Now</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
