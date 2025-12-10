import { Building2, Factory, Leaf, Code } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Energy Infrastructure Developers",
    description:
      "Accelerate project delivery with AI-enhanced design, control, and operational insights.",
  },
  {
    icon: Factory,
    title: "Facility Energy & Sustainability Managers",
    description:
      "Manage energy across distributed assets with actionable intelligence and scalable automation.",
  },
  {
    icon: Leaf,
    title: "Renewable Energy Startups",
    description:
      "Focus on innovation while we handle the forecasting and control backbone.",
  },
  {
    icon: Code,
    title: "Tech-Savvy Engineers",
    description:
      "Build, adapt, and scale intelligent energy tools with explainable, API-ready agents that speak your language.",
  },
];

export const AudienceSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-6">
            Made for Every Clean Energy Stakeholder
          </h2>
          <span className="section-label block mb-4">
            Forecasting, Optimization & Control
          </span>
          <p className="section-description mx-auto">
            Our agents integrate seamlessly into your existing systems to
            deliver accurate energy forecasts, automate control strategies, and
            optimize performance across the board. Energentic is built for those
            shaping the future of energy—giving you the intelligence, control,
            and transparency you need to lead the charge toward net-zero.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elevated text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-energy-green-light flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <audience.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {audience.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
