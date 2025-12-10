import { Eye, Puzzle, Rocket, Target } from "lucide-react";

const features = [
  {
    number: "01",
    icon: Eye,
    title: "Explainable AI",
    description:
      "We don't believe in black boxes. Energentic's models are transparent and interpretable—giving engineers and managers the insights they need to trust and act on AI-driven recommendations.",
  },
  {
    number: "02",
    icon: Puzzle,
    title: "Modular Design",
    description:
      "Deploy what you need, when you need it. Our plug-and-play agents adapt to diverse applications—from microgrids and data centers to campus utilities and commercial buildings.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy Faster",
    description:
      "Skip long development cycles. Our platform shortens time-to-deployment, enabling rapid prototyping, iteration, and rollout.",
  },
  {
    number: "04",
    icon: Target,
    title: "Maximise Impact",
    description:
      "Our agents integrate seamlessly into your existing systems to deliver accurate energy forecasts, automate control strategies, and optimize performance across the board.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-energy-light">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label mb-4 block">How Energentic Works</span>
          <h2 className="section-title mb-6">Your Intelligent Energy Partner</h2>
          <p className="section-description mx-auto">
            <span className="text-primary font-medium">Energentic</span> is an
            AI-driven Agent-as-a-Service platform designed specifically for the
            clean energy sector. Whether you're building the next generation of
            energy infrastructure, managing sustainability across complex
            facilities, or developing advanced renewable tech, Energentic
            empowers you with intelligent, modular tools to drive operational
            excellence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elevated"
            >
              <div className="flex items-start gap-6">
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="text-5xl font-bold text-muted/50 group-hover:text-primary/30 transition-colors">
                    {feature.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-xl bg-energy-green-light flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
