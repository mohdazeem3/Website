import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Code, Users, Zap, CheckCircle, Sparkles, Award, Target, TrendingUp, Shield, Clock } from "lucide-react";
import heroTechBg from "@/assets/hero-tech.jpeg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `url(${heroTechBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gradient-hero))] opacity-60"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        
        
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Custom Software Experts</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Custom Software Solutions for{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Your Business
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in">
            At Mazhil Tech Solutions, we create tailored software that perfectly matches your unique requirements
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <Link to="/contact">
              <Button size="lg" className="group">
                Get Started
                <Sparkles className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline">View Products</Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in">
            {[
              { value: "100+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "10+", label: "Years Experience" },
              { value: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mazhil Tech</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We bring expertise, dedication, and innovation to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Custom Development",
                description: "We build software tailored specifically to your business needs and workflows"
              },
              {
                icon: Users,
                title: "Client-Focused",
                description: "Your requirements drive our development process from start to finish"
              },
              {
                icon: Zap,
                title: "Fast Delivery",
                description: "Efficient development process ensuring timely delivery without compromising quality"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Approach</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven process that delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Target, step: "01", title: "Understand", description: "We analyze your needs and requirements" },
              { icon: Code, step: "02", title: "Design", description: "Create tailored solutions architecture" },
              { icon: Zap, step: "03", title: "Develop", description: "Build with best practices and quality" },
              { icon: Award, step: "04", title: "Deliver", description: "Deploy and provide ongoing support" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative">
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Benefits of Working{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  With Us
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Partner with a team that understands technology and your business goals
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, text: "Personalized solutions designed for your specific needs" },
                  { icon: Shield, text: "Secure and reliable software architecture" },
                  { icon: TrendingUp, text: "Scalable solutions that grow with your business" },
                  { icon: Clock, text: "Timely delivery and ongoing support" },
                  { icon: Award, text: "Quality assurance and testing" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-lg pt-2">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <Card className="relative border-2 border-primary/20">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl">
                      <Code className="w-8 h-8 text-primary" />
                      <div>
                        <div className="font-semibold">Modern Technology</div>
                        <div className="text-sm text-muted-foreground">Latest frameworks and tools</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl">
                      <Users className="w-8 h-8 text-primary" />
                      <div>
                        <div className="font-semibold">Expert Team</div>
                        <div className="text-sm text-muted-foreground">Skilled developers and designers</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl">
                      <Zap className="w-8 h-8 text-primary" />
                      <div>
                        <div className="font-semibold">Agile Process</div>
                        <div className="text-sm text-muted-foreground">Flexible and responsive development</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Business?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Let's discuss your project and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="group">
                  Start Your Project
                  <Sparkles className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline">Explore Our Products</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
