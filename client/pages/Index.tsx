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
  TrendingUp,
  Camera,
  Flame,
  Diamond,
  Gift
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Index() {
  const [liveCount, setLiveCount] = useState(2847521);
  const [isPlaying, setIsPlaying] = useState(false);

  // Simulate live follower updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount(prev => prev + Math.floor(Math.random() * 50) + 10);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const exclusiveContent = [
    { type: 'image', thumbnail: 'https://images.pexels.com/photos/27852083/pexels-photo-27852083.jpeg', title: 'Behind the Glamour', premium: true },
    { type: 'video', thumbnail: 'https://images.pexels.com/photos/33308045/pexels-photo-33308045.jpeg', title: 'Exclusive Photoshoot', premium: true },
    { type: 'image', thumbnail: 'https://images.pexels.com/photos/14668263/pexels-photo-14668263.jpeg', title: 'Red Carpet Moments', premium: false },
    { type: 'video', thumbnail: 'https://images.pexels.com/photos/20159588/pexels-photo-20159588.jpeg', title: 'VIP Experience', premium: true },
  ];

  const vipExperiences = [
    { name: 'Private Video Call', price: '$499', duration: '30 min', description: 'One-on-one intimate conversation', icon: Heart, sexy: true },
    { name: 'Exclusive Content Access', price: '$199', duration: 'Monthly', description: 'Uncensored behind-the-scenes content', icon: Camera, sexy: true },
    { name: 'Personal Message', price: '$99', duration: 'Custom', description: 'Personalized audio message just for you', icon: Mail, sexy: false },
    { name: 'Virtual Date Experience', price: '$799', duration: '60 min', description: 'Ultimate premium experience', icon: Diamond, sexy: true },
  ];

  const luxuryMerchandise = [
    { name: 'Signed Lingerie Collection', price: '$299.99', image: 'https://images.pexels.com/photos/14668263/pexels-photo-14668263.jpeg', exclusive: true, limited: 'Only 50 left' },
    { name: 'Colombian Queen Crown', price: '$149.99', image: 'https://images.pexels.com/photos/20159588/pexels-photo-20159588.jpeg', exclusive: false, limited: 'Limited Edition' },
    { name: 'VIP Meet & Greet', price: '$599.99', image: 'https://images.pexels.com/photos/27852083/pexels-photo-27852083.jpeg', exclusive: true, limited: 'Very Limited' },
    { name: 'Personalized Photoshoot', price: '$1299.99', image: 'https://images.pexels.com/photos/33308045/pexels-photo-33308045.jpeg', exclusive: true, limited: 'Exclusive' },
  ];

  const topFans = [
    { rank: 1, name: 'Carlos M.', spent: '$5,247', badge: 'diamond', country: '🇨🇴' },
    { rank: 2, name: 'Sofia R.', spent: '$3,156', badge: 'platinum', country: '🇺🇸' },
    { rank: 3, name: 'Diego L.', spent: '$2,923', badge: 'gold', country: '🇲🇽' },
    { rank: 4, name: 'Isabella D.', spent: '$2,445', badge: 'silver', country: '🇨🇴' },
    { rank: 5, name: 'Miguel K.', spent: '$1,932', badge: 'bronze', country: '🇪🇸' },
  ];

  const pressFeatures = [
    { outlet: 'Vogue Colombia', headline: '"The Most Sensual Model of Our Generation"', date: '2024', featured: true },
    { outlet: 'Elle Magazine', headline: 'Eimy Contreras: Redefining Latin Beauty', date: '2024', featured: true },
    { outlet: 'Harper\'s Bazaar', headline: 'Colombian Goddess Takes the World', date: '2023', featured: false },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Sexy Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-primary/20 sexy-glow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-script font-bold text-gradient-red">Eimy Contreras</span>
                <div className="text-xs text-muted-foreground">Colombian Goddess</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="hover:text-primary transition-colors font-medium">Experiences</Link>
              <Link to="/shop" className="hover:text-primary transition-colors font-medium">Luxury Shop</Link>
              <Link to="/community" className="hover:text-primary transition-colors font-medium">VIP Club</Link>
              <Link to="/calendar" className="hover:text-primary transition-colors font-medium">Calendar</Link>
            </div>
            <Button className="btn-sexy font-semibold">
              <Flame className="mr-2 h-4 w-4" />
              Join VIP
            </Button>
          </div>
        </div>
      </nav>

      {/* Sultry Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 colombia-gradient opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-primary/20 text-primary border-primary/30 animate-pulse-sexy">
                    🇨🇴 Colombian Supermodel
                  </Badge>
                  <Badge className="bg-gold/20 text-gold border-gold/30">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                </div>
                <h1 className="text-6xl lg:text-8xl font-display font-bold leading-tight">
                  <span className="text-gradient font-script">Eimy</span>
                  <br />
                  <span className="text-primary">Contreras</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg font-serif italic">
                  "Experience the passion of Colombia through exclusive content, 
                  intimate moments, and luxury experiences that will ignite your desires."
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-sexy text-lg px-8 py-4">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Exclusive
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Instagram className="mr-2 h-5 w-5" />
                  Follow Me
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Live Now</span>
                </div>
                <div className="text-muted-foreground">2.8M Followers</div>
                <div className="text-muted-foreground">🇨🇴 Medellín</div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden sexy-glow group">
                <img 
                  src="https://images.pexels.com/photos/27852083/pexels-photo-27852083.jpeg" 
                  alt="Eimy Contreras - Colombian Supermodel" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <div className="text-lg font-bold">@soyeimycontreras</div>
                      <div className="text-sm opacity-80">Colombian Goddess</div>
                    </div>
                    <Button size="sm" className="bg-primary/80 hover:bg-primary">
                      Follow
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-primary to-gold text-white p-4 rounded-2xl shadow-xl animate-glow">
                <div className="flex items-center space-x-2">
                  <Flame className="h-5 w-5" />
                  <span className="font-bold">Most Wanted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats Bar */}
      <section className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-12 text-center">
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-6 w-6 text-gold animate-pulse" />
              <div>
                <div className="text-2xl font-bold">{liveCount.toLocaleString()}</div>
                <div className="text-sm opacity-90">Active Fans</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Heart className="h-6 w-6 text-gold animate-pulse" />
              <div>
                <div className="text-2xl font-bold">847K</div>
                <div className="text-sm opacity-90">Loves Today</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Crown className="h-6 w-6 text-gold animate-pulse" />
              <div>
                <div className="text-2xl font-bold">VIP</div>
                <div className="text-sm opacity-90">Members Only</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Experiences */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold mb-6 text-gradient-red">
              Exclusive <span className="font-script">Experiences</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-serif italic">
              Indulge in premium experiences designed to fulfill your deepest desires and fantasies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vipExperiences.map((experience, index) => (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                experience.sexy ? 'sexy-card animate-glow' : 'sexy-card'
              }`}>
                <CardContent className="p-6 text-center relative">
                  {experience.sexy && (
                    <div className="absolute top-2 right-2">
                      <Flame className="h-4 w-4 text-primary animate-pulse" />
                    </div>
                  )}
                  <div className="bg-gradient-to-br from-primary/20 to-gold/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <experience.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2 text-primary">{experience.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 font-serif italic">{experience.description}</p>
                  <div className="text-sm text-gold mb-4">{experience.duration}</div>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-primary">{experience.price}</div>
                    <Button className={experience.sexy ? "w-full btn-sexy" : "w-full btn-primary"}>
                      {experience.sexy ? 'Get Intimate' : 'Book Now'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Content Gallery */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold mb-6">
              <span className="text-gradient-red font-script">Exclusive</span> Content
            </h2>
            <p className="text-xl text-muted-foreground font-serif italic">Behind-the-scenes moments you won't find anywhere else</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exclusiveContent.map((item, index) => (
              <Card key={index} className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 sexy-card">
                <div className="relative aspect-[4/5]">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                  )}
                  {item.premium && (
                    <Badge className="absolute top-3 right-3 bg-gold text-gold-foreground animate-pulse">
                      <Crown className="w-3 h-3 mr-1" />
                      VIP
                    </Badge>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-white font-bold text-lg font-display">{item.title}</h3>
                    {item.premium && (
                      <p className="text-gold text-sm font-serif italic">Premium Content</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Merchandise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold mb-6 text-gradient-red">
              Luxury <span className="font-script">Collection</span>
            </h2>
            <p className="text-xl text-muted-foreground font-serif italic">Exclusive merchandise for my most devoted fans</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {luxuryMerchandise.map((product, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 sexy-card overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.exclusive && (
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground animate-pulse">
                      <Flame className="w-3 h-3 mr-1" />
                      Exclusive
                    </Badge>
                  )}
                  <Badge className="absolute top-3 right-3 bg-gold text-gold-foreground">
                    {product.limited}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-lg mb-2 text-primary">{product.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gold">{product.price}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gold fill-current" />
                      ))}
                    </div>
                  </div>
                  <Button className="w-full btn-sexy">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Fans Leaderboard */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-5xl font-display font-bold mb-8 text-gold font-script">Top Lovers</h2>
              <p className="text-lg opacity-90 mb-8 font-serif italic">My most devoted fans who shower me with love</p>
              <div className="space-y-4">
                {topFans.map((fan) => (
                  <div key={fan.rank} className="flex items-center space-x-6 bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-gold-foreground font-bold text-lg">
                      #{fan.rank}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-lg flex items-center space-x-2">
                        <span>{fan.name}</span>
                        <span>{fan.country}</span>
                      </div>
                      <div className="text-gold font-semibold">Spent: {fan.spent}</div>
                    </div>
                    <Crown className="h-6 w-6 text-gold animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-3xl font-display font-bold mb-6 text-gold font-script">Join My Inner Circle</h3>
              <div className="space-y-6">
                <p className="opacity-90 font-serif italic text-lg">
                  Become part of my exclusive VIP community and enjoy benefits that will make your heart race.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Heart className="h-5 w-5 text-gold" />
                    <span>Private messages and personal attention</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Camera className="h-5 w-5 text-gold" />
                    <span>Exclusive content and behind-the-scenes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Gift className="h-5 w-5 text-gold" />
                    <span>Special gifts and surprises</span>
                  </div>
                </div>
                <Button className="w-full bg-gold text-gold-foreground hover:bg-gold/90 py-4 text-lg font-bold">
                  <Crown className="mr-2 h-5 w-5" />
                  Become VIP Member
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press & Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold mb-6 text-gradient-red">
              In the <span className="font-script">Spotlight</span>
            </h2>
            <p className="text-xl text-muted-foreground font-serif italic">What the world is saying about Colombia's finest</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pressFeatures.map((item, index) => (
              <Card key={index} className={`text-center p-8 hover:shadow-xl transition-shadow sexy-card ${
                item.featured ? 'border-primary/50' : ''
              }`}>
                <div className="space-y-6">
                  <div className="text-primary font-bold text-xl font-display">{item.outlet}</div>
                  <blockquote className="text-2xl font-display italic text-gradient-red leading-relaxed">
                    {item.headline}
                  </blockquote>
                  <div className="text-muted-foreground font-serif">{item.date}</div>
                  {item.featured && (
                    <Badge className="bg-gold/20 text-gold border-gold/30">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sultry Footer */}
      <footer className="bg-gradient-to-b from-background to-black text-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-script font-bold text-gradient-red">Eimy Contreras</span>
                  <div className="text-sm text-muted-foreground">Colombian Goddess</div>
                </div>
              </div>
              <p className="text-muted-foreground font-serif italic">
                Official page of Colombia's most sensual supermodel. Experience passion like never before.
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-primary hover:text-primary/80 cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-primary hover:text-primary/80 cursor-pointer transition-colors" />
                <Facebook className="h-6 w-6 text-primary hover:text-primary/80 cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-primary mb-4 font-display">Experiences</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/services" className="hover:text-primary transition-colors">VIP Calls</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Exclusive Content</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Personal Messages</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Virtual Dates</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-primary mb-4 font-display">Luxury Shop</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/shop" className="hover:text-primary transition-colors">Lingerie Collection</Link></li>
                <li><Link to="/shop" className="hover:text-primary transition-colors">Jewelry</Link></li>
                <li><Link to="/shop" className="hover:text-primary transition-colors">Signed Photos</Link></li>
                <li><Link to="/shop" className="hover:text-primary transition-colors">VIP Experiences</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-primary mb-4 font-display">Contact</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@eimycontreras.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Instagram className="h-4 w-4" />
                  <span>@soyeimycontreras</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Medellín, Colombia 🇨🇴</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/20 mt-12 pt-8 text-center text-muted-foreground">
            <p className="font-serif italic">&copy; 2024 Eimy Contreras Official. All rights reserved. Made with ❤️ in Colombia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
