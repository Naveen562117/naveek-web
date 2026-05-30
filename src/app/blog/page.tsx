"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts, categories } from "@/content/blog";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? blogPosts.filter((p) => p.category === activeCategory)
    : blogPosts;

  const featured = blogPosts.filter((p) => p.featured);

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
            Blog
          </motion.p>
          <motion.h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4" variants={fadeUp}>
            Insights for Builders
          </motion.h1>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
            Practical strategies on AI-native development, startup execution, and building products that people actually want.
          </motion.p>
        </motion.div>

        {/* Featured */}
        {!activeCategory && featured.length > 0 && (
          <motion.div
            className="mb-16"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h2 className="text-xl font-semibold mb-6" variants={fadeUp}>Featured</motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((post) => (
                <motion.div key={post.slug} variants={fadeUp}>
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="h-full bg-card/50 border-border hover:border-primary/30 transition-colors group glow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                          <Badge className="text-xs bg-primary/20 text-primary border-primary/30">Featured</Badge>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readingTime}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <Badge
            variant={activeCategory === null ? "default" : "secondary"}
            className="cursor-pointer text-sm px-3 py-1.5"
            onClick={() => setActiveCategory(null)}
          >
            All Posts
          </Badge>
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant={activeCategory === cat ? "default" : "secondary"}
              className="cursor-pointer text-sm px-3 py-1.5"
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Badge>
          ))}
        </motion.div>

        {/* All Posts */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {filtered.map((post) => (
            <motion.div key={post.slug} variants={fadeUp}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full bg-card/50 border-border hover:border-primary/30 transition-colors group">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="text-xs mb-3">{post.category}</Badge>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readingTime}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No posts in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
