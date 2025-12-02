import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 -z-10"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE — Logo */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="src\assets\logo.png"
                alt="Company Logo"
                className="object-contain rounded-xl shadow-lg"
                style={{
                  width: "260px",
                  height: "260px",
                }}
              />
            </div>

            {/* RIGHT SIDE — Title + Text */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Get in{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient">
                  Touch
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Have a project in mind? We'd love to hear from you.
                Send us a message and we'll respond as soon as possible.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Contact Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white/70 backdrop-blur-lg border border-primary/20 shadow-lg transition-all hover:shadow-2xl">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91-1234567890"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project requirements..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent text-white hover:scale-105 transition-transform">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="hover:scale-105 transition-transform shadow-md hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground">admin@mazhiltech.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:scale-105 transition-transform shadow-md hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-sm text-muted-foreground">+91-9488222331</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:scale-105 transition-transform shadow-md hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-sm text-muted-foreground">Ramani's Mayuri, Chinnavedampatti,</p>
                      <p className="text-sm text-muted-foreground">COIMBATORE, TN 641049</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Us / Our History - moved below contact */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 shadow-lg backdrop-blur-md border border-primary/20 hover:shadow-2xl transition-all">
            <CardContent>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary">Our History</h2>
              <p className="text-muted-foreground text-lg ">
                MAZHILTECH SOLUTIONS was founded in 2023 by a small group of software developers with a passion for helping businesses succeed with innovative solutions. We specialize in digitalizing software strategies that are designed to grow your business, increase your online presence, and engage your target audience.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
