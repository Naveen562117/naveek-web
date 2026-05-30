import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts, getBlogPost } from "@/content/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} — Naveek Tech Labs`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

function renderContent(blocks: string[]) {
  return blocks.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl font-bold mt-10 mb-4">
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("### ")) {
      return (
        <h3 key={i} className="text-xl font-semibold mt-8 mb-3">
          {block.replace("### ", "")}
        </h3>
      );
    }

    const parts = block.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="text-muted-foreground leading-relaxed mb-4">
        {parts.map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={j} className="text-foreground font-semibold">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return <span key={j}>{part}</span>;
        })}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <div className="py-24 px-6">
      <article className="mx-auto max-w-3xl">
        {/* Back */}
        <Button variant="ghost" size="sm" className="mb-8" asChild>
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-1" />
            All Posts
          </Link>
        </Button>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Badge variant="secondary">{post.category}</Badge>
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(post.publishedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {post.excerpt}
        </p>

        <Separator className="mb-10" />

        {/* Content */}
        <div className="prose-custom">{renderContent(post.content)}</div>

        {/* Tags */}
        <div className="mt-12 flex flex-wrap items-center gap-2">
          <Tag className="w-4 h-4 text-muted-foreground" />
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <Separator className="my-12" />

        {/* CTA */}
        <div className="text-center py-8">
          <h3 className="text-2xl font-bold mb-3">Ready to Build?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Apply to work with us and turn your idea into a real business using the AI DLC methodology.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button asChild>
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Book a Discovery Call</Link>
            </Button>
          </div>
        </div>

        {/* Related */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <Separator className="mb-8" />
            <h3 className="text-xl font-semibold mb-6">Related Posts</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`}>
                  <Card className="bg-card/50 border-border hover:border-primary/30 transition-colors group">
                    <CardContent className="p-5">
                      <Badge variant="secondary" className="text-xs mb-2">
                        {rp.category}
                      </Badge>
                      <h4 className="font-semibold group-hover:text-primary transition-colors line-clamp-2 mb-1">
                        {rp.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {rp.readingTime}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
