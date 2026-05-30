"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  Users,
  Target,
  Bot,
  Building2,
  Code2,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    icon: Lightbulb,
    title: "Idea Validation",
    description: "Before you write code, know if the idea has legs.",
    features: [
      "Market size analysis",
      "Competitor landscape mapping",
      "Demand signal validation",
      "User persona development",
      "Go/no-go recommendation",
    ],
    price: "Free with Discovery Session",
  },
  {
    icon: Users,
    title: "Founder Guidance",
    description: "1-on-1 sessions with builders who've been in the trenches.",
    features: [
      "Weekly or bi-weekly calls",
      "Decision frameworks for founders",
      "Accountability & milestone tracking",
      "Network introductions",
      "Fundraising guidance",
    ],
    price: "From ₹15,000/month",
  },
  {
    icon: Target,
    title: "Product Strategy",
    description: "Define what to build, who to build it for, and how to win.",
    features: [
      "MVP scope definition",
      "Feature prioritization matrix",
      "Business model design",
      "Pricing strategy",
      "Go-to-market planning",
    ],
    price: "From ₹25,000",
  },
  {
    icon: Bot,
    title: "AI Business Systems",
    description: "Our AI DLC methodology — ship 5-10x faster.",
    features: [
      "AI-assisted code generation",
      "Automated testing & deployment",
      "AI-powered content systems",
      "Operations automation",
      "Cost optimization with AI tooling",
    ],
    price: "Custom",
  },
  {
    icon: Building2,
    title: "Startup Incubation",
    description: "Full-stack support from idea to funded company.",
    features: [
      "12-week structured program",
      "Product development support",
      "Business model refinement",
      "Investor preparation",
      "Demo day & launch support",
    ],
    price: "Equity partnership",
  },
  {
    icon: Code2,
    title: "Technical Co-Founder",
    description: "We become your technical arm — fully invested in your success.",
    features: [
      "Full-stack product engineering",
      "Architecture & tech stack decisions",
      "Hiring & team building guidance",
      "Shared equity alignment",
      "Long-term technical partnership",
    ],
    price: "Equity + retainer",
  },
];

const pricing = [
  {
    name: "Discovery Session",
    price: "₹5,000",
    description: "60-minute deep-dive into your idea with actionable takeaways.",
    features: [
      "Idea validation assessment",
      "Competitive analysis",
      "Execution roadmap",
      "Honest feedback",
      "Recording & notes",
    ],
    cta: "Book Session",
    href: "/contact",
    popular: false,
  },
  {
    name: "Founder Review",
    price: "₹15,000",
    description: "Comprehensive review of your business with a written strategy document.",
    features: [
      "Everything in Discovery",
      "Written strategy brief",
      "Tech stack recommendation",
      "Business model analysis",
      "30-day action plan",
      "1 follow-up call",
    ],
    cta: "Get Started",
    href: "/apply",
    popular: true,
  },
  {
    name: "Incubation Program",
    price: "Custom",
    description: "Full partnership — we build with you, not just for you.",
    features: [
      "Everything in Founder Review",
      "12-week structured program",
      "Weekly sessions",
      "Product development",
      "Launch support",
      "Investor connections",
    ],
    cta: "Apply Now",
    href: "/apply",
    popular: false,
  },
];

export default function ServicesPage() {
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
            Services
          </motion.p>
          <motion.h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4" variants={fadeUp}>
            How We Help Founders Win
          </motion.h1>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
            Choose the level of support that matches where you are. Every engagement starts with understanding your vision.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeUp}>
              <Card className="h-full bg-card/50 border-border hover:border-primary/30 transition-colors group">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-medium text-primary">{service.price}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider" variants={fadeUp}>
            Pricing
          </motion.p>
          <motion.h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" variants={fadeUp}>
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p className="text-muted-foreground max-w-xl mx-auto" variants={fadeUp}>
            Start with a discovery session. Scale up when you&apos;re ready.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {pricing.map((plan) => (
            <motion.div key={plan.name} variants={fadeUp}>
              <Card className={`h-full bg-card/50 border-border relative ${plan.popular ? "border-primary/50 glow" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-2">{plan.price}</div>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                    <Link href={plan.href}>
                      {plan.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
