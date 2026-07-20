import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Building, User } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Enquiry from ${formData.firstName.trim()} ${formData.lastName.trim()} - ${formData.organization.trim()}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.firstName.trim()} ${formData.lastName.trim()}\nEmail: ${formData.email.trim()}\nOrganisation: ${formData.organization.trim()}\n\n${formData.message.trim()}`
    );
    window.location.href = `mailto:z.guo2@hull.ac.uk?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="section-label mb-4 block">
              Get in Touch
            </span>
            <h2 className="section-title mb-6">
              Let's Power Smarter Energy Together
            </h2>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-elevated"
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  First Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="pl-11 h-12"
                    placeholder="John"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Last Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="pl-11 h-12"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="pl-11 h-12"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            {/* Organization */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">
                Organisation *
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                  className="pl-11 h-12"
                  placeholder="Your Company"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-foreground mb-2">
                Message *
              </label>
              <Textarea
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="min-h-[120px] resize-none"
                placeholder="Tell us about your energy management needs..."
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="hero"
              size="xl"
              className="w-full"
            >
              <Send className="w-5 h-5" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
