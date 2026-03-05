import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

        {/* Coming Soon */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-lg mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Coming Soon
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We're working on insightful content about AI-driven energy
                management. Check back soon for articles, case studies, and
                updates.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
