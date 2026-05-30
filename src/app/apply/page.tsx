"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const helpOptions = [
  "Idea Validation",
  "MVP Planning",
  "AI Strategy",
  "Product Engineering",
  "Technical Co-Founder",
  "Incubation",
];

const stages = [
  "Just an idea",
  "Research phase",
  "MVP in progress",
  "MVP launched",
  "Has users, no revenue",
  "Has revenue",
];

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedHelp, setSelectedHelp] = useState<string[]>([]);
  const [selectedStage, setSelectedStage] = useState("");

  const toggleHelp = (option: string) => {
    setSelectedHelp((prev) =>
      prev.includes(option) ? prev.filter((h) => h !== option) : [...prev, option]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <motion.div
          className="text-center max-w-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Application Received</h1>
          <p className="text-muted-foreground mb-8">
            We review every application personally. Expect to hear from us within 3-5 business days. If there&apos;s a fit, we&apos;ll schedule a discovery call.
          </p>
          <Button asChild>
            <a href="/">Back to Home</a>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider" variants={fadeUp}>
            Founder Application
          </motion.p>
          <motion.h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" variants={fadeUp}>
            Tell Us About Your Idea
          </motion.h1>
          <motion.p className="text-muted-foreground max-w-xl mx-auto" variants={fadeUp}>
            Every great business started with an idea and someone brave enough to pursue it. We&apos;re here to help you build it.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <Card className="bg-card/50 border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">About You</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="you@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input id="linkedin" placeholder="linkedin.com/in/your-profile" />
                    </div>
                  </div>
                </div>

                {/* Idea Info */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Your Idea</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="idea-name">Idea / Project Name *</Label>
                      <Input id="idea-name" placeholder="What do you call it?" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="problem">Problem Statement *</Label>
                      <Textarea
                        id="problem"
                        placeholder="What problem are you solving? Who has this problem?"
                        rows={3}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="audience">Target Audience *</Label>
                      <Input id="audience" placeholder="Who is your ideal customer?" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Current Stage *</Label>
                      <div className="flex flex-wrap gap-2">
                        {stages.map((stage) => (
                          <Badge
                            key={stage}
                            variant={selectedStage === stage ? "default" : "secondary"}
                            className="cursor-pointer text-sm px-3 py-1.5 transition-colors"
                            onClick={() => setSelectedStage(stage)}
                          >
                            {stage}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="built">What have you built so far?</Label>
                      <Textarea
                        id="built"
                        placeholder="Landing page? Prototype? Nothing yet? All answers are valid."
                        rows={2}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="why-you">Why are you the right person to solve this? *</Label>
                      <Textarea
                        id="why-you"
                        placeholder="What unique insight, experience, or obsession makes you the one to build this?"
                        rows={3}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Help Needed */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">What Help Do You Need?</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {helpOptions.map((option) => (
                      <Badge
                        key={option}
                        variant={selectedHelp.includes(option) ? "default" : "secondary"}
                        className="cursor-pointer text-sm px-3 py-1.5 transition-colors"
                        onClick={() => toggleHelp(option)}
                      >
                        {option}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Budget & Timeline */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Budget & Timeline</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Input id="budget" placeholder="e.g., ₹50K - ₹2L" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Desired Timeline</Label>
                      <Input id="timeline" placeholder="e.g., 3 months to MVP" />
                    </div>
                  </div>
                </div>

                {/* Additional */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Anything else you want us to know — links, decks, context."
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Attachments</Label>
                    <div className="border border-dashed border-border rounded-lg p-8 text-center hover:border-primary/30 transition-colors cursor-pointer">
                      <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Drag & drop files here or click to browse
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, PPTX, images — max 10MB
                      </p>
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full text-base h-12">
                  Submit Application
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
