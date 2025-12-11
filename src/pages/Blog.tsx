import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

const tags = [
  "All",
  "AI & Machine Learning",
  "Clean Energy",
  "Case Studies",
  "Product Updates",
  "Industry Insights",
  "Tutorials",
];

const blogPosts = [
  {
    id: 1,
    title: "How Explainable AI is Revolutionizing Energy Management",
    excerpt:
      "Discover why transparency in AI decision-making is crucial for the energy sector and how Energentic's approach sets a new standard.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    date: "Dec 5, 2024",
    readTime: "8 min read",
    tags: ["AI & Machine Learning", "Clean Energy"],
    featured: true,
  },
  {
    id: 2,
    title: "Optimizing Data Center Energy with AI Agents",
    excerpt:
      "A deep dive into how our AI agents helped a major data center reduce energy costs by 35% while maintaining 99.99% uptime.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    tags: ["Case Studies", "AI & Machine Learning"],
  },
  {
    id: 3,
    title: "Introducing ForecastAgent 2.0: Next-Gen Energy Prediction",
    excerpt:
      "Our latest update brings 40% improved accuracy and real-time adaptive learning to energy forecasting.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    date: "Nov 15, 2024",
    readTime: "4 min read",
    tags: ["Product Updates"],
  },
  {
    id: 4,
    title: "The Future of Microgrids: Intelligence at the Edge",
    excerpt:
      "Exploring how decentralized energy systems are becoming smarter with AI-driven control and optimization.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    date: "Nov 8, 2024",
    readTime: "10 min read",
    tags: ["Industry Insights", "Clean Energy"],
  },
  {
    id: 5,
    title: "Getting Started with Energentic's API",
    excerpt:
      "A step-by-step guide to integrating our AI agents into your existing energy management systems.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    date: "Oct 30, 2024",
    readTime: "12 min read",
    tags: ["Tutorials"],
  },
  {
    id: 6,
    title: "Why Modular AI Design Matters for Energy Systems",
    excerpt:
      "Understanding the benefits of plug-and-play AI components for diverse energy infrastructure applications.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    date: "Oct 22, 2024",
    readTime: "7 min read",
    tags: ["AI & Machine Learning", "Industry Insights"],
  },
];

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts =
    selectedTag === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.tags.includes(selectedTag));

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <span className="section-label mb-4 block">Blog</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Insights & Updates
              </h1>
              <p className="section-description">
                Explore the latest in AI-driven energy management, industry
                insights, product updates, and practical tutorials from the
                Energentic team.
              </p>
            </div>
          </div>
        </section>

        {/* Tags Filter */}
        <section className="py-8 border-b border-border sticky top-16 md:top-20 bg-background/95 backdrop-blur-sm z-40">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <Tag className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                    selectedTag === tag
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {selectedTag === "All" && featuredPost && (
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6">
              <Link
                to={`/blog/${featuredPost.id}`}
                className="group grid lg:grid-cols-2 gap-8 bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all hover:shadow-elevated"
              >
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    Featured
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Posts Grid */}
        <section className="py-12 md:py-16 bg-energy-light">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all hover:shadow-elevated"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 flex-wrap mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  No posts found for "{selectedTag}". Try another tag.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 md:py-24 bg-foreground">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
                Stay Updated
              </h2>
              <p className="text-background/70 mb-8">
                Get the latest insights on AI-driven energy management delivered
                to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
