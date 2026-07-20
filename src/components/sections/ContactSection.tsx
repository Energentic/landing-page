import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Building, Mail, MessageSquare, Sparkles, User } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-20 md:scroll-mt-24 py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label mb-4 block">
              Waiting List
            </span>
            <h2 className="section-title mb-6">
              Join the Energentic Waiting List
            </h2>
            <p className="section-description mx-auto">
              Register your interest in early access to Energentic's AI agents
              for forecasting, optimisation, control, and energy system insight.
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-stretch">
            <div className="bg-foreground text-background rounded-2xl p-8 md:p-10 shadow-prominent">
              <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center mb-8">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                Be first to evaluate agentic energy workflows.
              </h3>
              <p className="text-background/70 leading-relaxed mb-8">
                Share your details and use case. We will follow up when the next
                pilot cohort opens.
              </p>
              <div className="space-y-4">
                {[
                  "Early access updates",
                  "Pilot cohort invitations",
                  "Energy-specific AI workflow briefings",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm text-background/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <form
              action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D8e000000Nd4w"
              method="POST"
              className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-elevated"
            >
              <input type="hidden" name="oid" value="00D8e000000Nd4w" />
              <input type="hidden" name="retURL" value="https://www.energentic.ai" />
              <input type="hidden" id="lead_source" name="lead_source" value="Web" />

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="first_name"
                      name="first_name"
                      maxLength={40}
                      type="text"
                      required
                      autoComplete="given-name"
                      className="pl-11 h-12"
                      placeholder="John"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="last_name" className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="last_name"
                      name="last_name"
                      maxLength={80}
                      type="text"
                      required
                      autoComplete="family-name"
                      className="pl-11 h-12"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    maxLength={80}
                    type="email"
                    required
                    autoComplete="email"
                    className="pl-11 h-12"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="company"
                    name="company"
                    maxLength={40}
                    type="text"
                    required
                    autoComplete="organization"
                    className="pl-11 h-12"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                  What would you like to explore?
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-muted-foreground" />
                  <Textarea
                    id="description"
                    name="description"
                    className="min-h-[130px] resize-none pl-11"
                    placeholder="Tell us about your energy systems, workflows, or pilot interest..."
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
              >
                Join the Waiting List
                <ArrowRight className="w-5 h-5" />
              </Button>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                By submitting this form, your details will be sent to the
                University's Salesforce CRM environment for follow-up about
                Energentic. Add the approved privacy notice link{" "}
                <a href="#" className="font-medium text-primary underline underline-offset-4">
                  here
                </a>{" "}
                before using this publicly.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
