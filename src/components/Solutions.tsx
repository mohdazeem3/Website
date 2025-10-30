import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, ShoppingCart, Heart, GraduationCap } from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Scalable software for large organizations with complex workflows and integrations",
    features: ["ERP Systems", "CRM Platforms", "Workflow Automation"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    description: "Custom online stores with seamless payment processing and inventory management",
    features: ["Multi-vendor Support", "Payment Gateway", "Analytics Dashboard"],
  },
  {
    icon: Heart,
    title: "Healthcare Systems",
    description: "HIPAA-compliant solutions for healthcare providers and medical institutions",
    features: ["Patient Management", "Telemedicine", "EMR Integration"],
  },
  {
    icon: GraduationCap,
    title: "Education Technology",
    description: "Learning management systems and educational platforms for modern learning",
    features: ["LMS Solutions", "Virtual Classrooms", "Assessment Tools"],
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Industry <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Domain-specific software solutions designed for your industry's unique challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 overflow-hidden"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <Button variant="ghost" size="icon" className="group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground mb-4">{solution.description}</p>
                  </div>

                  <div className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
