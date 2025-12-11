import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { WaitlistDialog } from "@/components/WaitlistDialog";

const navLinks = [
  { name: "Home", href: "/", section: null },
  { name: "About", href: "/#about", section: "about" },
  { name: "Features", href: "/#features", section: "features" },
  { name: "Team", href: "/#team", section: "team" },
  { name: "Blog", href: "/blog", section: null },
  { name: "Contact", href: "/#contact", section: "contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    if (link.section) {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(link.section!)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(link.section)?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (link.href === "/blog" && location.pathname === "/blog") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="Energentic AI" className="w-9 h-9 transition-transform group-hover:scale-105" />
            <span className="text-lg font-bold text-foreground tracking-tight">
              ENERGENTIC AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={cn(
                  "text-sm font-medium transition-colors link-underline",
                  location.pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <WaitlistDialog>
              <Button variant="hero" size="lg">
                Join Waitlist
              </Button>
            </WaitlistDialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "text-base font-medium py-2 transition-colors",
                    location.pathname === link.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <WaitlistDialog>
                <Button variant="hero" size="lg" className="mt-2">
                  Join Waitlist
                </Button>
              </WaitlistDialog>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
