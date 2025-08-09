import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Star, 
  Calendar, 
  ShoppingCart, 
  Users, 
  Heart, 
  Play,
  Instagram,
  Twitter,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Crown,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Index() {
  const [liveCount, setLiveCount] = useState(12847);
  const [isPlaying, setIsPlaying] = useState(false);

  // Simulate live counter updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const galleryItems = [
    { type: 'image', thumbnail: '/placeholder.svg', title: 'Behind the Scenes' },
    { type: 'video', thumbnail: '/placeholder.svg', title: 'Latest Performance' },
    { type: 'image', thumbnail: '/placeholder.svg', title: 'Studio Session' },
    { type: 'video', thumbnail: '/placeholder.svg', title: 'Fan Moments' },
  ];

  const services = [
    { name: 'Personal Meet & Greet', price: '$199', duration: '30 min', icon: Heart },
    { name: 'Virtual Concert Access', price: '$49', duration: '2 hours', icon: Play },
    { name: 'Exclusive Merchandise', price: '$89', duration: 'Instant', icon: ShoppingCart },
    { name: 'Private Message', price: '$29', duration: '24h response', icon: Mail },
  ];

  const products = [
    { name: 'Signed Album', price: '$79.99', image: '/placeholder.svg', stock: 'Limited' },
    { name: 'Official T-Shirt', price: '$34.99', image: '/placeholder.svg', stock: 'In Stock' },
    { name: 'VIP Concert Pass', price: '$299.99', image: '/placeholder.svg', stock: 'Few Left' },
    { name: 'Photo Bundle', price: '$24.99', image: '/placeholder.svg', stock: 'Digital' },
  ];

  const fanLeaderboard = [
    { rank: 1, name: 'Sarah M.', points: 2847, badge: 'diamond' },
    { rank: 2, name: 'Alex R.', points: 2156, badge: 'platinum' },
    { rank: 3, name: 'Maria L.', points: 1923, badge: 'gold' },
    { rank: 4, name: 'John D.', points: 1745, badge: 'silver' },
    { rank: 5, name: 'Emma K.', points: 1432, badge: 'bronze' },
  ];

  const pressItems = [
    { outlet: 'Rolling Stone', headline: '"A Rising Star with Undeniable Talent"', date: '2024' },
    { outlet: 'Billboard', headline: 'Eimy Contreras: The Voice of a Generation', date: '2024' },
    { outlet: 'Variety', headline: 'Breaking New Ground in Latin Music', date: '2023' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-gold" />
              <span className="text-2xl font-display font-bold">Eimy Contreras</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
              <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
              <Link to="/community" className="hover:text-gold transition-colors">Community</Link>
              <Link to="/calendar" className="hover:text-gold transition-colors">Calendar</Link>
            </div>
            <Button className="btn-gold">
              Join VIP
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-background to-gold/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="bg-gold/20 text-gold border-gold/30">Official Artist Page</Badge>
                <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                  Eimy <span className="text-gradient">Contreras</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Experience music like never before. Join thousands of fans in an exclusive community 
                  where dreams meet reality.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-primary text-lg px-8">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Latest
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-gold text-gold hover:bg-gold hover:text-gold-foreground">
                  <Heart className="mr-2 h-5 w-5" />
                  Follow Journey
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-gold/20 to-primary/20 p-8">
                <img 
                  src="/placeholder.svg" 
                  alt="Eimy Contreras" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gold text-gold-foreground p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5" />
                  <span className="font-semibold">Live Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Counter Bar */}
      <section className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-gold" />
              <span className="font-semibold">{liveCount.toLocaleString()} Active Fans</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-gold" />
              <span>Growing Community</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Exclusive Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get closer than ever with personalized experiences designed just for you
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <service.icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{service.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.duration}</p>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-gold">{service.price}</div>
                    <Button className="w-full btn-gold">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Gallery */}
      <section className="py-20 bg-cream/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Behind the Scenes</h2>
            <p className="text-xl text-muted-foreground">Exclusive content from my world</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <Card key={index} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-3">
                        <Play className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Official Merchandise</h2>
            <p className="text-xl text-muted-foreground">Limited edition items crafted with love</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-gold text-gold-foreground">
                    {product.stock}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gold">{product.price}</span>
                    <Button size="sm" className="btn-primary">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fan Leaderboard */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8 text-gold">Top Fans</h2>
              <div className="space-y-4">
                {fanLeaderboard.map((fan) => (
                  <div key={fan.rank} className="flex items-center space-x-4 bg-white/10 rounded-lg p-4">
                    <div className="flex-shrink-0 w-8 text-center font-bold text-gold">
                      #{fan.rank}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{fan.name}</div>
                      <div className="text-sm opacity-80">{fan.points.toLocaleString()} points</div>
                    </div>
                    <Crown className="h-5 w-5 text-gold" />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold mb-6 text-gold">Join the Community</h3>
              <div className="space-y-4">
                <p className="opacity-90">
                  Connect with fellow fans, share experiences, and climb the leaderboard!
                </p>
                <Button className="w-full bg-gold text-gold-foreground hover:bg-gold/90">
                  <Users className="mr-2 h-5 w-5" />
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">In the Press</h2>
            <p className="text-xl text-muted-foreground">What they're saying about Eimy</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pressItems.map((item, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="text-gold font-bold text-lg">{item.outlet}</div>
                  <blockquote className="text-lg font-display italic">
                    "{item.headline}"
                  </blockquote>
                  <div className="text-muted-foreground">{item.date}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Crown className="h-8 w-8 text-gold" />
                <span className="text-2xl font-display font-bold">Eimy Contreras</span>
              </div>
              <p className="opacity-80">
                Official artist page for exclusive content, merchandise, and fan community.
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-gold hover:text-gold/80 cursor-pointer" />
                <Twitter className="h-6 w-6 text-gold hover:text-gold/80 cursor-pointer" />
                <Facebook className="h-6 w-6 text-gold hover:text-gold/80 cursor-pointer" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gold mb-4">Quick Links</h3>
              <ul className="space-y-2 opacity-80">
                <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
                <li><Link to="/shop" className="hover:text-gold transition-colors">Shop</Link></li>
                <li><Link to="/community" className="hover:text-gold transition-colors">Community</Link></li>
                <li><Link to="/calendar" className="hover:text-gold transition-colors">Calendar</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gold mb-4">Support</h3>
              <ul className="space-y-2 opacity-80">
                <li><Link to="/help" className="hover:text-gold transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-gold transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-gold transition-colors">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gold mb-4">Contact</h3>
              <div className="space-y-2 opacity-80">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@eimycontreras.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Los Angeles, CA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center opacity-60">
            <p>&copy; 2024 Eimy Contreras Official. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
