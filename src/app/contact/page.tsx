"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const contactMethods = [
  {
    icon: Calendar,
    title: "Book a Discovery Session",
    description: "60 minutes, structured, actionable. Walk away with a roadmap.",
    action: "Book Now",
    href: "#book",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "For partnerships, press, or general inquiries.",
    action: "hello@naveektechlabs.com",
    href: "mailto:hello@naveektechlabs.com",
  },
  {
    icon: MessageSquare,
    title: "Quick Question?",
    description: "Fill out the contact form and we'll respond within 24 hours.",
    action: "Send Message",
    href: "#contact-form",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider" variants={fadeUp}>
            Contact
          </motion.p>
          <motion.h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4" variants={fadeUp}>
            Let&apos;s Talk
          </motion.h1>
          <motion.p className="text-lg text-muted-foreground max-w-xl mx-auto" variants={fadeUp}>
            Whether you have a question, want to explore a partnership, or are ready to build — we&apos;re here.
          </motion.p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {contactMethods.map((method) => (
            <motion.div key={method.title} variants={fadeUp}>
              <Card className="h-full bg-card/50 border-border hover:border-primary/30 transition-colors group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                  <a
                    href={method.href}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {method.action}
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto" id="contact-form">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            {submitted ? (
              <Card className="bg-card/50 border-border">
                <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3">Message Sent</h2>
                  <p className="text-muted-foreground">
                    We&apos;ll get back to you within 24 hours. Looking forward to the conversation.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-card/50 border-border">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="you@example.com" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="What's this about?" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us what you're thinking..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
