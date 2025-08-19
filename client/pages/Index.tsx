import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Gift,
  Anchor,
  Ship,
  Zap,
  Eye,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const [liveCount, setLiveCount] = useState(2847521);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for navigation styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simulate live follower updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount((prev) => prev + Math.floor(Math.random() * 30) + 10);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const exclusiveContent = [
    {
      type: "video",
      thumbnail: "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F34a6528c4b6242999f4f5c4895aaa226?format=webp&width=800",
      title: "Behind the Glamour",
      premium: true,
      duration: "12:34",
    },
    {
      type: "image",
      thumbnail: "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2Fda4e11f2faca4ebeb913499776df66ee?format=webp&width=800",
      title: "Exclusive Photoshoot",
      premium: true,
      duration: "Photo Set",
    },
    {
      type: "video",
      thumbnail: "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F11628a736051448e9412cd3585b35f54?format=webp&width=800",
      title: "Red Carpet Moments",
      premium: false,
      duration: "8:45",
    },
    {
      type: "image",
      thumbnail: "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F58b58f5da4764a0d9ca005c06790cc73?format=webp&width=800",
      title: "VIP Experience",
      premium: true,
      duration: "Premium",
    },
  ];

  const vipExperiences = [
    {
      name: "Private Yacht Experience",
      price: "$2,999",
      duration: "4 hours",
      description: "Exclusive yacht experience in Colombian waters with personal crew",
      icon: Ship,
      features: ["Private crew", "Gourmet dining", "Professional photos"],
    },
    {
      name: "Diamond Penthouse",
      price: "$1,999",
      duration: "2 hours",
      description: "Luxury penthouse with breathtaking skyline views",
      icon: Diamond,
      features: ["Sky terrace", "Premium suite", "Champagne service"],
    },
    {
      name: "Elite Marina Session",
      price: "$1,299",
      duration: "90 min",
      description: "Professional shoot at exclusive Colombian marina",
      icon: Camera,
      features: ["Pro photography", "Multiple outfits", "HD gallery"],
    },
    {
      name: "Colombian Goddess Ultimate",
      price: "$4,999",
      duration: "Full day",
      description: "The ultimate luxury Colombian adventure experience",
      icon: Crown,
      features: ["Everything included", "VIP treatment", "Unlimited access"],
    },
  ];

  const luxuryMerchandise = [
    {
      name: "Diamond Collection",
      price: "$2,999.99",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F19a2975b0cb34bb1b0c56692a2114d23?format=webp&width=800",
      limited: "Only 10 left",
    },
    {
      name: "Colombian Emerald Crown",
      price: "$1,499.99",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2Fe8e0f03934b8449f839fd5070dc38019?format=webp&width=800",
      limited: "Limited Edition",
    },
    {
      name: "Yacht Club Membership",
      price: "$9,999.99",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2Ffe295b2b0d4446bb976e830c062e028a?format=webp&width=800",
      limited: "Very Exclusive",
    },
    {
      name: "Private Island Access",
      price: "$19,999.99",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2Fbaa8774a50ef483d90afeee8f1859fbf?format=webp&width=800",
      limited: "Ultimate Luxury",
    },
  ];

  const eliteMembers = [
    {
      rank: 1,
      name: "Carlos M.",
      spent: "$45,247",
      badge: "diamond",
      country: "🇨🇴",
      title: "Yacht Club Member",
    },
    {
      rank: 2,
      name: "Sofia R.",
      spent: "$31,156",
      badge: "platinum",
      country: "🇺🇸",
      title: "VIP Elite",
    },
    {
      rank: 3,
      name: "Diego L.",
      spent: "$22,923",
      badge: "gold",
      country: "🇲🇽",
      title: "Premium Lover",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Clean Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gold via-primary to-blue rounded-xl flex items-center justify-center">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-luxury-display font-bold text-gold">
                  Eimy Contreras
                </h1>
                <p className="text-sm text-gold/80 font-luxury-script">Colombian Luxury</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="text-white/90 hover:text-gold transition-colors">
                Experiences
              </Link>
              <Link to="/shop" className="text-white/90 hover:text-gold transition-colors">
                Shop
              </Link>
              <Link to="/community" className="text-white/90 hover:text-gold transition-colors">
                Community
              </Link>
              <Link to="/calendar" className="text-white/90 hover:text-gold transition-colors">
                Book
              </Link>
            </div>

            <Button className="btn-luxury px-6 py-2">
              <Zap className="mr-2 h-4 w-4" />
              Join Elite
            </Button>
          </div>
        </div>
      </nav>

      {/* Clean Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Simple background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background"></div>
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/42092/pexels-photo-42092.jpeg)",
          }}
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="glass-card px-4 py-2 bg-gold/20 text-gold border-gold/30">
                  <Sparkles className="w-4 h-4 mr-2" />
                  🇨🇴 Colombian Luxury Experience
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-luxury-display font-bold leading-tight">
                  <span className="text-gradient-luxury">Eimy</span><br/>
                  <span className="text-gold">Contreras</span>
                </h1>
                
                <p className="text-xl text-white/90 max-w-lg font-luxury-script leading-relaxed">
                  Experience the pinnacle of Colombian luxury through exclusive encounters, 
                  private adventures, and unforgettable moments.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-luxury px-8 py-4">
                  <Ship className="mr-3 h-5 w-5" />
                  Exclusive Access
                </Button>
                <Button size="lg" variant="outline" className="glass-card text-gold border-gold/30">
                  <Instagram className="mr-3 h-5 w-5" />
                  Follow Journey
                </Button>
              </div>
              
              {/* Clean stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-luxury-display font-bold text-gold">
                    {(liveCount / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-sm text-white/80">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-luxury-display font-bold text-primary">127K</div>
                  <div className="text-sm text-white/80">VIP Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-luxury-display font-bold text-blue">87</div>
                  <div className="text-sm text-white/80">Countries</div>
                </div>
              </div>
            </div>

            {/* Clean portrait */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden glass-card group">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F88cadbc94e5b4c93a8abd3e9003eeabe?format=webp&width=800"
                  alt="Eimy Contreras"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card p-4">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <div className="font-luxury-display font-bold">@soyeimycontreras</div>
                        <div className="text-sm opacity-90">Colombian Goddess</div>
                      </div>
                      <Button size="sm" className="btn-gold">Follow</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Experiences Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-luxury-display font-bold mb-6 text-gradient-luxury">
              Exclusive Experiences
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-luxury-script">
              Indulge in luxury experiences crafted for those who demand perfection
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vipExperiences.map((experience, index) => (
              <Card key={index} className="glass-card group hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-primary/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <experience.icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="font-luxury-display font-bold text-xl mb-3 text-gold">
                    {experience.name}
                  </h3>
                  <p className="text-white/80 mb-4 text-sm leading-relaxed">
                    {experience.description}
                  </p>
                  <div className="text-sm text-gold/80 mb-4">{experience.duration}</div>
                  <div className="space-y-3 mb-6">
                    {experience.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-gold mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-2xl font-luxury-display font-bold text-gold mb-4">
                    {experience.price}
                  </div>
                  <Button className="w-full btn-luxury" size="sm">
                    Reserve Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Gallery */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/8085365/pexels-photo-8085365.jpeg)",
          }}
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-luxury-display font-bold mb-6">
              <span className="text-gradient-luxury">Exclusive</span> Content
            </h2>
            <p className="text-xl text-white/80 font-luxury-script">
              Behind-the-scenes luxury moments from exclusive locations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exclusiveContent.map((item, index) => (
              <Card key={index} className="glass-card group cursor-pointer overflow-hidden hover:shadow-luxury transition-all duration-300">
                <div className="relative aspect-[4/5]">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="glass-card rounded-full p-3">
                        <Play className="h-6 w-6 text-gold" />
                      </div>
                    </div>
                  )}
                  {item.premium && (
                    <Badge className="absolute top-3 right-3 glass-card px-2 py-1 bg-gold/20 text-gold text-xs">
                      <Crown className="w-3 h-3 mr-1" />
                      VIP
                    </Badge>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-medium mb-1">{item.title}</h3>
                    <div className="text-gold/80 text-sm">{item.duration}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Collection */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-luxury-display font-bold mb-6 text-gradient-luxury">
              Luxury Collection
            </h2>
            <p className="text-xl text-white/80 font-luxury-script">
              Exclusive treasures for distinguished collectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {luxuryMerchandise.map((product, index) => (
              <Card key={index} className="glass-card group hover:shadow-luxury transition-all duration-300">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 right-3 glass-card bg-primary/20 text-primary px-2 py-1 text-xs">
                    {product.limited}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-luxury-display font-bold text-lg mb-3 text-gold">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-luxury-display font-bold text-gold">
                      {product.price}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gold fill-current" />
                      ))}
                    </div>
                  </div>
                  <Button className="w-full btn-luxury">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Purchase
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Elite Members */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/8572163/pexels-photo-8572163.jpeg)",
          }}
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-luxury-display font-bold mb-8 text-gold">
                Elite Members
              </h2>
              <p className="text-xl text-white/90 mb-8 font-luxury-script">
                Join the world's most distinguished luxury community
              </p>
              <div className="space-y-4">
                {eliteMembers.map((member) => (
                  <div key={member.rank} className="glass-card p-6 hover:shadow-luxury transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold to-primary rounded-lg flex items-center justify-center text-white font-bold">
                        #{member.rank}
                      </div>
                      <div className="flex-1">
                        <div className="font-luxury-display font-bold text-lg flex items-center space-x-2 text-gold">
                          <span>{member.name}</span>
                          <span>{member.country}</span>
                        </div>
                        <div className="text-primary">Investment: {member.spent}</div>
                        <div className="text-gold/80 text-sm">{member.title}</div>
                      </div>
                      <Diamond className="h-6 w-6 text-gold" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-3xl font-luxury-display font-bold mb-6 text-gold">
                Join the Elite
              </h3>
              <p className="text-white/90 mb-8 leading-relaxed">
                Become part of the world's most exclusive luxury community and experience 
                privileges that transcend imagination.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Ship className="h-5 w-5 text-gold" />
                  <span className="text-white/90">Private yacht access worldwide</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Diamond className="h-5 w-5 text-gold" />
                  <span className="text-white/90">Exclusive content and experiences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Crown className="h-5 w-5 text-gold" />
                  <span className="text-white/90">VIP privileges and treatment</span>
                </div>
              </div>
              <Button className="w-full btn-luxury py-4 text-lg">
                <Crown className="mr-3 h-5 w-5" />
                Join Elite Circle
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Footer */}
      <footer className="py-16 relative">
        <div className="absolute inset-0 glass-nav"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gold via-primary to-blue rounded-lg flex items-center justify-center">
                  <Crown className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="text-xl font-luxury-display font-bold text-gradient-luxury">
                    Eimy Contreras
                  </span>
                  <div className="text-sm text-gold/90">Colombian Luxury</div>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                The world's most exclusive Colombian luxury experience.
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-gold hover:text-gold/80 cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gold hover:text-gold/80 cursor-pointer transition-colors" />
                <Facebook className="h-6 w-6 text-gold hover:text-gold/80 cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h3 className="font-luxury-display font-bold text-gold mb-4">Experiences</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/services" className="hover:text-gold transition-colors">Yacht Adventures</Link></li>
                <li><Link to="/services" className="hover:text-gold transition-colors">Penthouse Encounters</Link></li>
                <li><Link to="/services" className="hover:text-gold transition-colors">Marina Sessions</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-luxury-display font-bold text-gold mb-4">Collection</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/shop" className="hover:text-gold transition-colors">Diamond Collection</Link></li>
                <li><Link to="/shop" className="hover:text-gold transition-colors">Emerald Jewelry</Link></li>
                <li><Link to="/shop" className="hover:text-gold transition-colors">Memberships</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-luxury-display font-bold text-gold mb-4">Contact</h3>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>elite@eimycontreras.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Instagram className="h-4 w-4" />
                  <span>@soyeimycontreras</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Cartagena, Colombia 🇨🇴</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gold/20 mt-12 pt-8 text-center text-white/60">
            <p>&copy; 2024 Eimy Contreras. Luxury Experience. Made with 💎 in Colombia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
