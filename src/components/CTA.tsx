import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ background: 'var(--gradient-primary)' }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Business with Software?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can help you build innovative software solutions that drive growth and efficiency
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="group">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Call
            </Button>
          </div>

          {/* Contact Info */}
          <div className="pt-8 border-t border-border mt-12">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@techenix.com</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-border" />
              <span>Response time: Within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
