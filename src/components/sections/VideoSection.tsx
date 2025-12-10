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
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-prominent">
            <iframe
              src="https://www.youtube.com/embed/sF_omtHyLx8?rel=0&modestbranding=1"
              title="Energentic AI Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              className="absolute inset-0 w-full h-full border-0"
            />
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
