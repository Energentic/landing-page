import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import { scrollToElement } from "@/lib/utils";
import logo from "@/assets/logo.png";

const footerLinks = [
  { name: "About", href: "/#about", section: "about" },
  { name: "Features", href: "/#features", section: "features" },
  { name: "Team", href: "/#team", section: "team" },
  { name: "Blog", href: "/blog", section: null },
  { name: "Contact", href: "/#contact", section: "contact" },
];

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent, link: typeof footerLinks[0]) => {
    if (link.section) {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToElement(link.section!), 150);
      } else {
        scrollToElement(link.section);
      }
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Energentic AI" className="w-9 h-9 invert" />
              <span className="text-lg font-bold tracking-tight">
                ENERGENTIC AI
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Pioneering intelligent automation for the clean energy future with
              explainable AI agents.
            </p>
            <a
              href="mailto:z.guo2@hull.ac.uk"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleClick(e, link)}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Energentic AI. All rights reserved.
          </p>
          <p className="text-sm text-background/60">
            Powering the future of clean energy with AI
          </p>
        </div>
      </div>
    </footer>
  );
};
