export type BlogSection = {
  heading: string;
  body: string[];
};

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  sections: BlogSection[];
  highlights?: { label: string; value: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "explainable-ai-energy",
    title: "Explainable AI Is Rebuilding Energy Dispatch",
    excerpt:
      "Why black-box models are risky in energy operations and how we turn transparency into a moat for stability and compliance.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=80",
    date: "Dec 5, 2024",
    readTime: "8 min read",
    tags: ["AI & Machine Learning", "Clean Energy"],
    featured: true,
    sections: [
      {
        heading: "Why we open up the model",
        body: [
          "Every dispatch action links to safety, cost, and compliance. Black-box models can make opaque calls under extreme weather, data gaps, or abnormal loads, forcing teams to either blindly trust or shut them down.",
          "We embed explainability in each recommendation: feature contributions, confidence intervals, and references to regulatory clauses. Operators can understand and audit decisions instead of guessing."
        ]
      },
      {
        heading: "What explainability delivers",
        body: [
          "Reliability: on data drift or sensor anomalies, the model gracefully falls back to safe strategies and explains why, preventing risky dispatches.",
          "Compliance: outputs are mapped to energy regulations with audit-friendly records so recommendations are reviewable and defensible.",
          "Business alignment: cost, carbon intensity, and comfort are decomposed into traceable scores, making tradeoffs transparent."
        ]
      },
      {
        heading: "How we implement it",
        body: [
          "Data layer: score sensor quality and rebuild gaps to keep inputs traceable and interpretable.",
          "Model layer: pair graph neural networks with interpretable tree models—capturing spatiotemporal patterns while exposing key features.",
          "Product layer: package explanations as signal cards that operators can view or export directly from the control console."
        ]
      }
    ],
    highlights: [
      { label: "Dispatch stability lift", value: "18%" },
      { label: "Anomaly response time", value: "-42%" },
      { label: "Audit pass rate", value: "100%" }
    ]
  },
  {
    id: 2,
    slug: "ai-agents-data-center",
    title: "How AI Agents Cut Data Center Costs by 35%",
    excerpt:
      "A real cooling-and-load co-optimization project: from baseline to day 90 in production, PUE kept dropping.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    tags: ["Case Studies", "AI & Machine Learning"],
    sections: [
      {
        heading: "Baseline and goals",
        body: [
          "A hyperscale data center wanted to lower energy use without risking SLA. Baseline PUE was 1.45; cooling consumed 38% of total power.",
          "On the ground: uneven sensor coverage, highly varied rooms, and manual strategies that were slow and non-repeatable."
        ]
      },
      {
        heading: "How the agents work together",
        body: [
          "Forecast agent: rolling 15-minute predictions for IT load and weather, proposing chilled-water supply/return temperature ranges.",
          "Control agent: live micro-adjustments to valves and fan speeds within safety constraints, with automatic safe fallback on anomalies.",
          "Guardian agent: watches for sensor drift and threshold breaches, auto-raising alerts with root-cause notes."
        ]
      },
      {
        heading: "Results after 90 days",
        body: [
          "PUE dropped from 1.45 to 1.29, energy cost fell 35%, while SLA held at 99.99% uptime.",
          "Tuning rhythm shifted from weekly manual changes to minute-level agent adjustments that stayed stable in extreme weather."
        ]
      }
    ],
    highlights: [
      { label: "PUE", value: "1.29 (-0.16)" },
      { label: "能耗成本", value: "-35%" },
      { label: "SLA", value: "99.99%" }
    ]
  },
  {
    id: 3,
    slug: "forecast-agent-2",
    title: "ForecastAgent 2.0: Real-Time Adaptive Energy Forecasting",
    excerpt:
      "The new release cuts short-term forecast error by 40% and auto-retrains lightweight models when volatility spikes.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    date: "Nov 15, 2024",
    readTime: "4 min read",
    tags: ["Product Updates"],
    sections: [
      {
        heading: "Key upgrades",
        body: [
          "Multi-model blend: temporal CNN plus variational autoencoder for short-term patterns; weather- and price-driven regression for longer horizons, with dynamic best-of selection.",
          "Adaptive retrain: when error breaches thresholds, a lightweight distilled model retrains and ships in minutes."
        ]
      },
      {
        heading: "What it means for operators",
        body: [
          "Procurement and dispatch lead time extends from 30 minutes to 2 hours, opening more room for trading and storage optimization.",
          "During holidays, extreme temperatures, or maintenance windows, the model adapts quickly instead of collapsing under “holiday effects.”"
        ]
      }
    ],
    highlights: [
      { label: "Short-term error", value: "-40%" },
      { label: "Retrain time", value: "5 minutes" },
      { label: "Use cases", value: "Industrial parks / Data centers / Microgrids" }
    ]
  },
  {
    id: 4,
    slug: "edge-intelligence-microgrid",
    title: "Edge Intelligence for Microgrids: From Islands to Coordination",
    excerpt:
      "With more distributed generation, storage, and chargers, microgrids need edge-native control that can decide in milliseconds.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=80",
    date: "Nov 8, 2024",
    readTime: "10 min read",
    tags: ["Industry Insights", "Clean Energy"],
    sections: [
      {
        heading: "Why decisions need to live at the edge",
        body: [
          "Microgrid nodes are dispersed and network latency is unpredictable; centralized dispatch can fail under sudden events.",
          "Edge intelligence lets each node adjust power and power factor in milliseconds while still respecting global constraints."
        ]
      },
      {
        heading: "The architecture we ship",
        body: [
          "Lightweight control agents run on industrial gateways, taking local sensor and market signals; the cloud handles policy learning and global optimization.",
          "Event-driven: if communication drops or volatility spikes, edge agents switch to islanding policies to keep frequency and voltage stable."
        ]
      },
      {
        heading: "What we are building next",
        body: [
          "Coordinate storage dispatch with EV charging to avoid peaks; bring more carbon signals into the loop so economics and carbon efficiency move together.",
          "Use simulators and digital twins to validate strategies against extreme scenarios before going live."
        ]
      }
    ],
    highlights: [
      { label: "Response latency", value: "<200ms" },
      { label: "Islanding switch", value: "<1s" },
      { label: "Carbon efficiency gain", value: "9%" }
    ]
  }
];
