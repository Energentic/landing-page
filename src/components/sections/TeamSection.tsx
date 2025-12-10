import { Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamZekun from "@/assets/team-zekun.png";
import teamJulius from "@/assets/team-julius.png";
import teamSnehal from "@/assets/team-snehal.png";

const teamMembers = [
  {
    name: "Dr Zekun Guo",
    role: "Founder and CEO",
    image: teamZekun,
    linkedin: "https://www.linkedin.com/in/dr-zekun-guo/",
  },
  {
    name: "Dr Julius Mboli",
    role: "CSO - Responsible AI Expert",
    image: teamJulius,
    linkedin: "https://www.linkedin.com/in/engr-julius-sechang-mboli/",
  },
  {
    name: "Snehal Kadam",
    role: "Technology Transfer Officer at UoH",
    image: teamSnehal,
    linkedin: "https://www.linkedin.com/in/snehal-kadam-uk/",
  },
];

export const TeamSection = () => {
  return (
    <section id="team" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet the <span className="text-primary">Experts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate team dedicated to revolutionizing energy management through AI innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 text-center"
            >
              {/* Avatar */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                />
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {member.role}
              </p>

              {/* LinkedIn */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>

        {/* Research Team Link */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Explore our full research team and academic contributions
          </p>
          <Button variant="outline" asChild>
            <a
              href="https://energentic.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Visit Research Team Page
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
