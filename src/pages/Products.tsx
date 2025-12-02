import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { ShoppingCart, BarChart3, Users2, FileText, Calendar, MessageSquare } from "lucide-react";
import crmImg from "@/assets/crm.jpg";
import civilImg from "@/assets/civil.avif";
import labImg from "@/assets/microbiology.avif";
import jewelryImg from "@/assets/jewelry.avif";
import hmsImg from "@/assets/hospital.avif";
import pgImg from "@/assets/pg.avif";

const Products = () => {
  const products = [
    {
      icon: Users2,
      title: "Overseas Education CRM",
      description: "Automates consultancy workflows, student counseling, documentation, interview scheduling, and VISA tracking.",
      features: [
        "Lead generation & student tracking",
        "Eligibility checks for universities",
        "Automated documentation",
        "VISA & medical record management"
      ],
      image: crmImg
    },
    {
      icon: FileText,
      title: "Automated Civil Testing Tool",
      description: "Customized application for concrete & soil testing labs, reducing report submission time from 10 days to 2 days.",
      features: [
        "Field data collection & reporting",
        "Department-specific workflows",
        "Automated test calculations",
        "Government compliance reporting"
      ],
      image: civilImg
    },
    {
      icon: BarChart3,
      title: "Microbiology Lab Software",
      description: "Laboratory testing software with panel test automation and predictive AI for disease analysis.",
      features: [
        "Multi-panel test creation",
        "Auto-calculation & reporting",
        "Predictive health analysis",
        "Doctor-friendly results display"
      ],
      image: labImg
    },
    {
      icon: ShoppingCart,
      title: "Jewelry Savings Application",
      description: "Unique app for managing jewelry savings schemes and bonus programs for clients.",
      features: [
        "Customizable schemes",
        "Bonus & reward tracking",
        "Client account management",
        "User-friendly interface"
      ],
      image: jewelryImg
    },
    {
      icon: Calendar,
      title: "Hospital Management System",
      description: "Plug and play Software for multi-specialty hospitals, pharmacy, HR, and all management.",
      features: [
        "OPD & patient tracking",
        "Appointment & queue management",
        "Operation theatre bookings",
        "Staff & doctor management"
      ],
      image: hmsImg
    },
    {
      icon: MessageSquare,
      title: "Paying Guest (PG) Software",
      description: "Simple software for PG owners to manage room availability, rent collection, and reservations.",
      features: [
        "Room booking & availability",
        "Rent tracking",
        "Reservation management",
        "Revenue & client management"
      ],
      image: pgImg
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
            Explore our software solutions crafted to simplify workflows and boost efficiency
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
                <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <AspectRatio ratio={16 / 9}>
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
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
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-black">
            Don't see what you're looking for? We build custom softwares tailored to your exact requirements.
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
