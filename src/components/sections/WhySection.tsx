import { Brain, Lightbulb, Shield } from "lucide-react";

export const WhySection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="section-label mb-4 block">Why Energentic?</span>
            <h2 className="section-title mb-6">
              Energentic is pioneering intelligent automation for the clean
              energy future.
            </h2>
            <p className="section-description mb-8">
              We deliver an AI-driven Agent-as-a-Service platform tailored for
              the energy sector. Our modular, explainable agents—designed for
              forecasting, optimisation, control, and system insights—empower
              developers and infrastructure operators to run smarter, more
              transparent, and more efficient energy systems.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {[
                {
                  icon: Brain,
                  title: "Intelligent Agents",
                  description:
                    "AI-powered agents that learn and adapt to your energy systems",
                },
                {
                  icon: Shield,
                  title: "Transparent & Explainable",
                  description:
                    "No black boxes—understand every decision and recommendation",
                },
                {
                  icon: Lightbulb,
                  title: "Energy-First Design",
                  description:
                    "Purpose-built for the unique challenges of clean energy",
                },
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-energy-green-light flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-card rounded-3xl p-8 border border-border shadow-elevated">
              {/* Central Element */}
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-border animate-[spin_60s_linear_infinite]" />
                
                {/* Middle Ring */}
                <div className="absolute inset-8 rounded-full border border-border" />
                
                {/* Inner Ring */}
                <div className="absolute inset-16 rounded-full bg-energy-green-light border border-primary/20" />
                
                {/* Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-foreground flex items-center justify-center shadow-prominent">
                    <Brain className="w-12 h-12 text-background" />
                  </div>
                </div>

                {/* Orbiting Elements */}
                {[
                  { label: "Forecast", angle: 0, color: "bg-emerald-500" },
                  { label: "Optimize", angle: 90, color: "bg-amber-500" },
                  { label: "Control", angle: 180, color: "bg-blue-500" },
                  { label: "Explain", angle: 270, color: "bg-violet-500" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="absolute w-20 h-20 rounded-xl bg-card border border-border shadow-soft flex flex-col items-center justify-center"
                    style={{
                      top: `calc(50% + ${Math.sin((item.angle * Math.PI) / 180) * 140}px - 40px)`,
                      left: `calc(50% + ${Math.cos((item.angle * Math.PI) / 180) * 140}px - 40px)`,
                    }}
                  >
                    <div className={`w-3 h-3 rounded-full ${item.color} mb-2`} />
                    <span className="text-xs font-medium text-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-energy-green-light rounded-full blur-3xl opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};
