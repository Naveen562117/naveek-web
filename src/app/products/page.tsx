"use client";

import { motion } from "framer-motion";
import { Heart, ChevronRight, Smartphone, Globe, Shield, Sparkles } from "lucide-react";
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

const alineFeatures = [
  {
    icon: Heart,
    title: "Anti-Swipe Mechanics",
    description: "No mindless swiping. Every interaction is intentional — designed for depth, not dopamine.",
  },
  {
    icon: Sparkles,
    title: "Daily Thoughts",
    description: "Share what's on your mind each day. Match with people who think like you, not just look like you.",
  },
  {
    icon: Shield,
    title: "Verified Profiles",
    description: "ID and selfie verification ensures real people, real conversations, real connections.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Native mobile experience with React Native. Beautiful, fast, and designed for one-handed use.",
  },
  {
    icon: Globe,
    title: "Web + Mobile",
    description: "Full web app at app.alinelove.in plus native mobile apps. Meet people wherever you are.",
  },
];

const techStack = [
  "Django REST Framework",
  "React Native",
  "Next.js",
  "PostgreSQL",
  "Redis",
  "Celery",
  "Socket.IO",
  "AWS EC2 + S3",
  "Vercel",
  "Razorpay",
];

export default function ProductsPage() {
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
            Our Products
          </motion.p>
          <motion.h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4" variants={fadeUp}>
            Built with AI DLC
          </motion.h1>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
            Real products in production. Every product we build proves the methodology and strengthens the playbook for founders we work with.
          </motion.p>
        </motion.div>

        {/* Aline Product Card */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <Card className="overflow-hidden bg-card/50 border-border glow">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center">
                      <Heart className="w-7 h-7 text-pink-400" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">Aline</h2>
                      <p className="text-muted-foreground">Dating, Redesigned</p>
                    </div>
                    <Badge variant="secondary" className="ml-2 bg-green-500/10 text-green-400 border-green-500/20">
                      Live
                    </Badge>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                    Aline is a dating app built for real connections. No games, no gimmicks. Anti-swipe mechanics, daily thoughts, and intentional matching for people tired of disposable dating. Built solo using AI DLC methodology — 22,000+ lines of production code across mobile, web, and backend.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    <Button asChild>
                      <a href="https://alinelove.in" target="_blank" rel="noopener noreferrer">
                        Visit Aline
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="https://app.alinelove.in" target="_blank" rel="noopener noreferrer">
                        Open Web App
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Aline Features */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.h3 className="text-2xl font-bold mb-8 text-center" variants={fadeUp}>
            Key Features
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alineFeatures.map((feature) => (
              <motion.div key={feature.title} variants={fadeUp}>
                <Card className="h-full bg-card/50 border-border">
                  <CardContent className="p-6">
                    <feature.icon className="w-5 h-5 text-pink-400 mb-3" />
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.h3 className="text-2xl font-bold mb-8" variants={fadeUp}>
            Tech Stack
          </motion.h3>
          <motion.div className="flex flex-wrap justify-center gap-3" variants={fadeUp}>
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm px-4 py-1.5">
                {tech}
              </Badge>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
