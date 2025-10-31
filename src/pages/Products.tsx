import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, BarChart3, Users2, FileText, Calendar, MessageSquare } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: ShoppingCart,
      title: "E-Commerce Platform",
      description: "Complete online store solution with inventory management, payment processing, and order tracking",
      features: ["Product catalog", "Shopping cart", "Payment gateway", "Order management"]
    },
    {
      icon: BarChart3,
      title: "Business Analytics Dashboard",
      description: "Data visualization and reporting tools to track your business metrics in real-time",
      features: ["Real-time analytics", "Custom reports", "Data visualization", "Export capabilities"]
    },
    {
      icon: Users2,
      title: "CRM System",
      description: "Customer relationship management software to streamline sales and customer interactions",
      features: ["Contact management", "Sales pipeline", "Email integration", "Task automation"]
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Organize, store, and retrieve documents with powerful search and collaboration features",
      features: ["Cloud storage", "Version control", "Access permissions", "Search & filter"]
    },
    {
      icon: Calendar,
      title: "Booking & Scheduling",
      description: "Online appointment scheduling system with calendar sync and automated reminders",
      features: ["Calendar integration", "Email reminders", "Payment collection", "Client portal"]
    },
    {
      icon: MessageSquare,
      title: "Team Collaboration Tool",
      description: "Enhance team productivity with chat, file sharing, and project management features",
      features: ["Team messaging", "File sharing", "Task tracking", "Video calls"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our range of software solutions designed to solve real business challenges
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button className="w-full" variant="outline">Request Demo</Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Don't see what you're looking for? We specialize in building custom software tailored to your exact requirements
          </p>
          <Link to="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
