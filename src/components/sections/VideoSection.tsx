import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VideoSection = () => {
  return (
    <section id="video" className="py-20 md:py-32 bg-energy-light">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-label mb-4 block">
            Smarter Tools. Cleaner Systems. Faster Deployment.
          </span>
          <h2 className="section-title mb-6">
            How Energentic Brings Intelligence to Clean Energy Systems
          </h2>
          <p className="section-description mx-auto">
            Discover how Energentic's Agent-as-a-Service platform transforms
            energy infrastructure with modular, explainable AI. In just a few
            minutes, see how our forecasting, optimization, and control agents
            integrate seamlessly into your operations—helping you reduce costs,
            improve transparency, and accelerate clean energy deployment.
          </p>
        </div>

        {/* Video Player */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-foreground shadow-prominent">
            {/* Video Thumbnail/Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-foreground to-foreground/80 flex items-center justify-center">
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `linear-gradient(hsl(var(--background) / 0.3) 1px, transparent 1px),
                                      linear-gradient(90deg, hsl(var(--background) / 0.3) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              {/* Central Content */}
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 rounded-full bg-primary/90 flex items-center justify-center mx-auto mb-6 cursor-pointer hover:bg-primary transition-colors hover:scale-110 duration-300 shadow-glow">
                  <Play className="w-10 h-10 text-primary-foreground ml-1" />
                </div>
                <p className="text-background/80 text-lg font-medium">
                  Watch the Demo
                </p>
                <p className="text-background/50 text-sm mt-1">2 minutes</p>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-6 left-6 text-background/30 text-xs font-mono">
                ENERGENTIC.AI
              </div>
              <div className="absolute bottom-6 right-6 text-background/30 text-xs font-mono">
                DEMO 2024
              </div>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
            {[
              { value: "40%", label: "Cost Reduction" },
              { value: "3x", label: "Faster Deploy" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-card px-6 py-3 rounded-xl border border-border shadow-soft text-center"
              >
                <p className="text-xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
