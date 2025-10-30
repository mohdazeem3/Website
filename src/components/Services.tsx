import { Code2, Cloud, Smartphone, Database, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored solutions built to meet your unique business requirements with scalable architecture",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Seamless cloud migration and management services for enhanced performance and reliability",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Robust data pipelines and analytics solutions to unlock insights from your data",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance",
  },
  {
    icon: Zap,
    title: "API Integration",
    description: "Seamless integration of third-party services and custom API development",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive software development services to accelerate your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
