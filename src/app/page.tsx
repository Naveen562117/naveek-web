"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  Users,
  Rocket,
  Bot,
  Building2,
  Code2,
  ChevronRight,
  Zap,
  Target,
  Layers,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    description: "Stress-test your concept with real market data, competitor mapping, and demand signals before writing a single line of code.",
  },
  {
    icon: Users,
    title: "Founder Guidance",
    description: "1-on-1 sessions with experienced builders who've shipped products, raised capital, and navigated early-stage chaos.",
  },
  {
    icon: Target,
    title: "Product Strategy",
    description: "Define your MVP scope, user personas, business model, and go-to-market plan with ruthless clarity.",
  },
  {
    icon: Bot,
    title: "AI Business Systems",
    description: "Leverage AI to build faster — from code generation to automated operations. Our AI DLC methodology ships products 5-10x faster.",
  },
  {
    icon: Building2,
    title: "Startup Incubation",
    description: "End-to-end support from concept to launch. Milestones, accountability, resources, and access to our network.",
  },
  {
    icon: Code2,
    title: "Technical Co-Founder",
    description: "Need a builder? We partner with select founders — bringing the technical firepower to match your vision.",
  },
];

const steps = [
  { step: "01", title: "Submit Your Idea", description: "Fill out our founder application with your concept, market, and where you need help." },
  { step: "02", title: "Founder Assessment", description: "We review your application and evaluate fit, potential, and how we can add the most value." },
  { step: "03", title: "Discovery Session", description: "A deep-dive call to understand your vision, constraints, and define the path forward." },
  { step: "04", title: "Execution Roadmap", description: "We build a detailed plan — milestones, tech stack, business model, and launch timeline." },
  { step: "05", title: "Build & Launch", description: "We execute together. You focus on the business. We handle the technology and strategy." },
];

const faqs = [
  {
    question: "Who is this for?",
    answer: "Aspiring founders, solo builders, creators pivoting to products, and early-stage teams who need strategic and technical firepower to ship. If you have an idea and the drive to execute — we want to talk to you.",
  },
  {
    question: "How is this different from traditional consulting?",
    answer: "We don't write reports you'll never read. We build alongside you using AI-accelerated development. Our AI DLC methodology means we ship products 5-10x faster than traditional development shops. You get a co-builder, not a consultant.",
  },
  {
    question: "What does a Discovery Session include?",
    answer: "A 60-minute deep-dive into your idea, market, competitive landscape, and execution plan. You'll walk away with a clear roadmap, honest feedback, and a recommended path forward — whether that involves working with us or not.",
  },
  {
    question: "Do you take equity?",
    answer: "For our incubation program and co-founder partnerships, yes — we take a small equity stake in exchange for significant hands-on involvement. For consulting and discovery sessions, it's a flat fee with no equity.",
  },
  {
    question: "What industries do you work with?",
    answer: "We're industry-agnostic but tech-native. We've worked on dating apps, edtech, logistics, creator tools, and SaaS platforms. If your product has a software component, we can help.",
  },
  {
    question: "How quickly can we start?",
    answer: "Discovery sessions can be booked within a week. For incubation and co-founder partnerships, there's a review process that typically takes 5-7 business days after your application.",
  },
];

const products = [
  {
    name: "Aline",
    tagline: "Dating, Redesigned",
    description: "A dating app built for real connections — no games, no gimmicks. Anti-swipe mechanics, daily thoughts, and intentional matching for people tired of disposable dating.",
    status: "Live",
    url: "https://alinelove.in",
    icon: Heart,
    gradient: "from-pink-500/20 to-rose-500/20",
  },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

        <motion.div
          className="relative z-10 mx-auto max-w-5xl px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm">
              <Zap className="w-3 h-3 mr-1.5" />
              Now accepting founder applications
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
            variants={fadeUp}
          >
            Build Your
            <br />
            <span className="gradient-text">Empire.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            variants={fadeUp}
          >
            We help ambitious founders turn ideas into businesses through
            technology, AI, product strategy, and founder guidance.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" variants={fadeUp}>
            <Button size="lg" className="text-base px-8 h-12" asChild>
              <Link href="/apply">
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12" asChild>
              <Link href="/contact">Book Discovery Session</Link>
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground"
            variants={fadeUp}
          >
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary" />
              AI-Powered Development
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Rocket className="w-4 h-4 text-primary" />
              5-10x Faster Shipping
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              Founder-First Approach
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-24 px-6" id="services">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider" variants={fadeUp}>
              What We Do
            </motion.p>
            <motion.h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" variants={fadeUp}>
              Everything You Need to Ship
            </motion.h2>
            <motion.p className="text-muted-foreground max-w-xl mx-auto" variants={fadeUp}>
              From first spark to first revenue — structured guidance, real engineering, and AI-accelerated execution.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 border-t border-border">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider" variants={fadeUp}>
              The Process
            </motion.p>
            <motion.h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" variants={fadeUp}>
              From Idea to Launch
            </motion.h2>
            <motion.p className="text-muted-foreground max-w-xl mx-auto" variants={fadeUp}>
              A structured path that takes the guesswork out of building a business.
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                className="flex items-start gap-6 group"
                variants={fadeUp}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-lg font-bold text-primary group-hover:bg-primary/20 transition-colors">
                  {step.step}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  {i < steps.length - 1 && (
                    <div className="ml-[-2.75rem] mt-4 h-8 w-px bg-border" />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-6 border-t border-border" id="products">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider" variants={fadeUp}>
              Our Products
            </motion.p>
            <motion.h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" variants={fadeUp}>
              Built with AI DLC
            </motion.h2>
            <motion.p className="text-muted-foreground max-w-xl mx-auto" variants={fadeUp}>
              Real products, shipping in production. Proof that our methodology works.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {products.map((product) => (
              <motion.div key={product.name} variants={fadeUp}>
                <Card className="overflow-hidden bg-card/50 border-border hover:border-primary/30 transition-all group glow">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                          <product.icon className="w-6 h-6 text-pink-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{product.name}</h3>
                          <p className="text-sm text-muted-foreground">{product.tagline}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                        {product.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={product.url} target="_blank" rel="noopener noreferrer">
                        Visit Product
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-t border-border" id="faq">
        <div className="mx-auto max-w-3xl">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider" variants={fadeUp}>
              FAQ
            </motion.p>
            <motion.h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" variants={fadeUp}>
              Common Questions
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <Accordion className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-border">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6" variants={fadeUp}>
              Ready to Build
              <span className="gradient-text"> Something Real?</span>
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10" variants={fadeUp}>
              Stop planning. Start shipping. Apply to work with us and turn your idea into a business that generates real revenue.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" variants={fadeUp}>
              <Button size="lg" className="text-base px-8 h-12" asChild>
                <Link href="/apply">
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 h-12" asChild>
                <Link href="/contact">Book a Discovery Call</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
