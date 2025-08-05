import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Mail, Coffee, Star } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderOnline = () => {
    // In a real app, this would redirect to an ordering system
    alert('🚀 Redirecting to online ordering system...');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    alert(`Thank you ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSocialClick = (platform: string) => {
    alert(`Opening ${platform}...`);
  };
  const menuItems = [
    {
      name: "Artisan Espresso",
      price: "$4.50",
      description: "Rich, bold espresso made from single-origin Ethiopian beans",
      badge: "Popular",
      image: "https://images.pexels.com/photos/33280307/pexels-photo-33280307.jpeg"
    },
    {
      name: "Lavender Honey Latte",
      price: "$5.75",
      description: "Creamy latte infused with organic lavender and local honey",
      badge: "Signature",
      image: "https://images.pexels.com/photos/5151354/pexels-photo-5151354.jpeg"
    },
    {
      name: "Avocado Toast Supreme",
      price: "$12.00",
      description: "Fresh avocado, heirloom tomatoes, feta, on sourdough",
      badge: "Fresh",
      image: "https://images.pexels.com/photos/6327126/pexels-photo-6327126.jpeg"
    },
    {
      name: "Chocolate Croissant",
      price: "$3.50",
      description: "Buttery, flaky pastry filled with rich Belgian chocolate",
      image: "https://images.pexels.com/photos/3892468/pexels-photo-3892468.jpeg"
    },
    {
      name: "Cold Brew Float",
      price: "$6.25",
      description: "House cold brew topped with vanilla bean ice cream",
      badge: "Seasonal",
      image: "https://images.pexels.com/photos/2813280/pexels-photo-2813280.jpeg"
    },
    {
      name: "Quinoa Power Bowl",
      price: "$14.00",
      description: "Quinoa, roasted vegetables, chickpeas, tahini dressing",
      image: "https://images.pexels.com/photos/17559226/pexels-photo-17559226.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Coffee className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-foreground">Brew & Bloom</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('menu')} className="text-foreground hover:text-primary transition-colors">Menu</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
            </div>
            <Button onClick={handleOrderOnline} className="hidden md:inline-flex">Order Online</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Welcome to
            <span className="block text-primary">Brew & Bloom</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Where exceptional coffee meets artisanal cuisine. Experience the perfect blend of 
            locally sourced ingredients and passionate craftsmanship in every cup and bite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => scrollToSection('menu')} size="lg" className="text-lg px-8 py-3">
              Explore Menu
            </Button>
            <Button onClick={() => scrollToSection('contact')} size="lg" variant="outline" className="text-lg px-8 py-3">
              Visit Us Today
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="h-4 w-4 text-primary" />
              <span>Fresh Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Open 6AM - 8PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2019 by coffee enthusiasts Maria and James, Brew & Bloom began as a 
                dream to create a space where community and exceptional coffee intersect. We 
                source our beans directly from sustainable farms and roast them in-house to 
                ensure every cup tells a story of quality and care.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our kitchen celebrates seasonal, local ingredients, creating dishes that 
                complement our coffee offerings while supporting local farmers and artisans. 
                Every visit is an invitation to slow down, savor, and connect.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Coffee Varieties</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">15k+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/20 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <Coffee className="h-24 w-24 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium text-foreground">Crafted with Passion</p>
                  <p className="text-muted-foreground">Every cup, every day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Menu
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated selection of signature drinks and artisanal dishes, 
              made fresh daily with the finest ingredients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg text-foreground">{item.name}</h3>
                    <span className="font-bold text-primary text-lg">{item.price}</span>
                  </div>
                  {item.badge && (
                    <Badge variant="secondary" className="mb-3">
                      {item.badge}
                    </Badge>
                  )}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button onClick={() => alert('🍽️ Full menu coming soon! Call us at (555) 123-BREW for complete offerings.')} size="lg" variant="outline">
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visit Us Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're located in the heart of downtown, ready to serve you the perfect cup 
              and create memorable moments together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    123 Coffee Street<br />
                    Downtown District<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                    <p>Saturday: 7:00 AM - 9:00 PM</p>
                    <p>Sunday: 7:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Contact</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>(555) 123-BREW</p>
                    <p>hello@brewandbloom.cafe</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8">
              <h3 className="font-semibold text-xl text-foreground mb-6">Get In Touch</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl">Brew & Bloom</span>
              </div>
              <p className="text-background/80 mb-4 max-w-md">
                Crafting exceptional coffee experiences and bringing community together, 
                one cup at a time.
              </p>
              <div className="flex gap-4">
                <Button onClick={() => handleSocialClick('Instagram')} size="sm" variant="outline" className="border-background/20 text-background hover:bg-background hover:text-foreground">
                  Instagram
                </Button>
                <Button onClick={() => handleSocialClick('Facebook')} size="sm" variant="outline" className="border-background/20 text-background hover:bg-background hover:text-foreground">
                  Facebook
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-background/80">
                <p><button onClick={() => scrollToSection('menu')} className="hover:text-primary transition-colors">Menu</button></p>
                <p><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About Us</button></p>
                <p><button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button></p>
                <p><button onClick={() => alert('📞 Call us at (555) 123-BREW for catering inquiries!')} className="hover:text-primary transition-colors">Catering</button></p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Info</h4>
              <div className="space-y-2 text-background/80">
                <p>123 Coffee Street</p>
                <p>New York, NY 10001</p>
                <p>(555) 123-BREW</p>
                <p>hello@brewandbloom.cafe</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 Brew & Bloom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
