"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Code2, Rocket, Users, Bot, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const values = [
  {
    icon: Rocket,
    title: "Ship Over Slide Decks",
    description: "We build real products that serve real users. No 50-page strategy documents that collect dust. Working software, launched and iterated.",
  },
  {
    icon: Bot,
    title: "AI-Accelerated Everything",
    description: "Our AI DLC methodology isn't just for code. We use AI across product strategy, content, operations, and growth to move 5-10x faster.",
  },
  {
    icon: Users,
    title: "Founder-First Always",
    description: "We're builders who happen to consult, not consultants who pretend to build. Every recommendation comes from real startup experience.",
  },
  {
    icon: Code2,
    title: "Technical Excellence",
    description: "Production-grade code from day one. No shortcuts, no tech debt that kills you at scale. Clean architecture that compounds.",
  },
  {
    icon: Globe,
    title: "Build in Public",
    description: "Transparency is our brand. We share the process, the wins, the failures. Our founders join a community of builders, not a black box.",
  },
  {
    icon: Zap,
    title: "Speed as Strategy",
    description: "In startups, speed wins. We compress timelines without cutting quality. The first version of everything should be live in weeks, not months.",
  },
];

const stats = [
  { value: "22,000+", label: "Lines of production code shipped" },
  { value: "5-10x", label: "Faster shipping with AI DLC" },
  { value: "1", label: "Live product in production" },
  { value: "100%", label: "Built by a solo founder with AI" },
];

export default function AboutPage() {
  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider" variants={fadeUp}>
            About Us
          </motion.p>
          <motion.h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6" variants={fadeUp}>
            We Build
            <span className="gradient-text"> What Others Plan</span>
          </motion.h1>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" variants={fadeUp}>
            Naveek Tech Labs is a founder enablement studio. We don&apos;t just advise — we build alongside founders using AI-native development to ship products faster than anyone thought possible.
          </motion.p>
        </motion.div>

        {/* Story */}
        <motion.div
          className="max-w-3xl mx-auto mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div className="space-y-6 text-muted-foreground leading-relaxed" variants={fadeUp}>
            <p>
              Naveek Tech Labs was born from a simple observation: the gap between having an idea and shipping a product is too wide — and most of the tools designed to help actually make it worse.
            </p>
            <p>
              We&apos;re a studio that builds real products and helps other founders do the same. Our first product, <strong className="text-foreground">Aline</strong>, is a dating app with 22,000+ lines of production code — built solo using what we call <strong className="text-foreground">AI DLC</strong> (AI-Driven Development Life Cycle).
            </p>
            <p>
              AI DLC isn&apos;t just a buzzword. It&apos;s a systematic methodology for building products 5-10x faster using Claude, Codex, Cursor, and Copilot together — not as toys, but as a coordinated engineering team. We proved it works by shipping. Now we teach it to founders.
            </p>
            <p>
              We believe the next generation of great companies will be built by small teams — sometimes solo founders — armed with AI tools and the right methodology. We exist to help those founders win.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <Card className="bg-card/50 border-border text-center">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12" variants={fadeUp}>
            What We Stand For
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <motion.div key={value.title} variants={fadeUp}>
                <Card className="h-full bg-card/50 border-border">
                  <CardContent className="p-6">
                    <value.icon className="w-5 h-5 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-4">Want to Build With Us?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            We&apos;re always looking for ambitious founders with real problems to solve. Apply to work with us.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/apply">
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
