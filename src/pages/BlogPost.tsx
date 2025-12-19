import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams();

  const post = blogPosts.find(
    (entry) => entry.slug === id || entry.id.toString() === id
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20 md:pt-24">
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 text-center">
              <p className="text-muted-foreground mb-6">
                We could not find that article. Try another link?
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to blog
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border mb-10">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="prose prose-lg prose-slate max-w-none">
              {post.sections.map((section) => (
                <section key={section.heading} className="mb-10">
                  <h2 className="text-2xl font-semibold text-foreground mb-3">
                    {section.heading}
                  </h2>
                  {section.body.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>
            {post.highlights && (
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mt-10">
                {post.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-xl border border-border bg-card text-center"
                  >
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                      {item.label}
                    </div>
                    <div className="text-xl font-semibold text-foreground">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
