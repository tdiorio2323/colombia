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
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const [liveCount, setLiveCount] = useState(2847521);
  const [isPlaying, setIsPlaying] = useState(false);

  // Simulate live follower updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount((prev) => prev + Math.floor(Math.random() * 50) + 10);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const exclusiveContent = [
    {
      type: "image",
      thumbnail:
        "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F34a6528c4b6242999f4f5c4895aaa226?format=webp&width=800",
      title: "Behind the Glamour",
      premium: true,
    },
    {
      type: "video",
      thumbnail:
        "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2Fda4e11f2faca4ebeb913499776df66ee?format=webp&width=800",
      title: "Exclusive Photoshoot",
      premium: true,
    },
    {
      type: "image",
      thumbnail:
        "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F11628a736051448e9412cd3585b35f54?format=webp&width=800",
      title: "Red Carpet Moments",
      premium: false,
    },
    {
      type: "video",
      thumbnail:
        "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F58b58f5da4764a0d9ca005c06790cc73?format=webp&width=800",
      title: "VIP Experience",
      premium: true,
    },
  ];

  const vipExperiences = [
    {
      name: "Private Yacht Experience",
      price: "$2,999",
      duration: "4 hours",
      description: "Exclusive yacht experience in Colombian waters",
      icon: Ship,
      sexy: true,
    },
    {
      name: "Penthouse Encounter",
      price: "$1,999",
      duration: "2 hours",
      description: "Luxury penthouse with skyline views",
      icon: Diamond,
      sexy: true,
    },
    {
      name: "Marina Photoshoot",
      price: "$1,299",
      duration: "90 min",
      description: "Professional shoot at luxury marina",
      icon: Camera,
      sexy: false,
    },
    {
      name: "Colombian Goddess Experience",
      price: "$4,999",
      duration: "Full day",
      description: "Ultimate luxury Colombian adventure",
      icon: Crown,
      sexy: true,
    },
  ];

  const luxuryMerchandise = [
    {
      name: "Diamond Collection",
      price: "$2,999.99",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F19a2975b0cb34bb1b0c56692a2114d23?format=webp&width=800",
      exclusive: true,
      limited: "Only 10 left",
    },
    {
      name: "Colombian Emerald Crown",
      price: "$1,499.99",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2Fe8e0f03934b8449f839fd5070dc38019?format=webp&width=800",
      exclusive: false,
      limited: "Limited Edition",
    },
    {
      name: "Yacht Club Membership",
      price: "$9,999.99",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2Ffe295b2b0d4446bb976e830c062e028a?format=webp&width=800",
      exclusive: true,
      limited: "Very Exclusive",
    },
    {
      name: "Private Island Getaway",
      price: "$19,999.99",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2Fbaa8774a50ef483d90afeee8f1859fbf?format=webp&width=800",
      exclusive: true,
      limited: "Ultimate",
    },
  ];

  const topFans = [
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
    {
      rank: 4,
      name: "Isabella D.",
      spent: "$18,445",
      badge: "silver",
      country: "🇨🇴",
      title: "Colombian Elite",
    },
    {
      rank: 5,
      name: "Miguel K.",
      spent: "$15,932",
      badge: "bronze",
      country: "🇪🇸",
      title: "Luxury Fan",
    },
  ];

  const pressFeatures = [
    {
      outlet: "Forbes Colombia",
      headline: '"The Most Luxurious Supermodel Experience in Latin America"',
      date: "2024",
      featured: true,
    },
    {
      outlet: "Robb Report",
      headline: "Eimy Contreras: Redefining Ultra-Luxury Lifestyle",
      date: "2024",
      featured: true,
    },
    {
      outlet: "Vanity Fair",
      headline: "Colombian Goddess: The Ultimate Luxury Brand",
      date: "2023",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Luxury Marina Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/42092/pexels-photo-42092.jpeg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95" />
      </div>

      {/* Luxury Navigation */}
      <nav className="sticky top-0 z-50 glass-nav">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-gold via-primary to-blue rounded-2xl flex items-center justify-center shadow-luxury animate-luxury-pulse">
                <Crown className="h-8 w-8 text-white drop-shadow-lg" />
              </div>
              <div>
                <span className="text-4xl font-luxury-display font-bold text-luxury-gold drop-shadow-lg">
                  Eimy Contreras
                </span>
                <div className="text-sm text-gold/90 font-luxury-script flex items-center space-x-2">
                  <Anchor className="h-4 w-4" />
                  <span>Colombian Luxury Goddess</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <Link
                to="/services"
                className="text-white/90 hover:text-gold transition-all duration-300 font-luxury-sans text-lg tracking-wide hover:scale-105"
              >
                Experiences
              </Link>
              <Link
                to="/shop"
                className="text-white/90 hover:text-gold transition-all duration-300 font-luxury-sans text-lg tracking-wide hover:scale-105"
              >
                Luxury Shop
              </Link>
              <Link
                to="/community"
                className="text-white/90 hover:text-gold transition-all duration-300 font-luxury-sans text-lg tracking-wide hover:scale-105"
              >
                Elite Club
              </Link>
              <Link
                to="/calendar"
                className="text-white/90 hover:text-gold transition-all duration-300 font-luxury-sans text-lg tracking-wide hover:scale-105"
              >
                Book Me
              </Link>
            </div>
            <Button className="btn-luxury px-8 py-4 text-lg font-luxury-sans tracking-wider">
              <Zap className="mr-3 h-5 w-5" />
              Join Elite
            </Button>
          </div>
        </div>
      </nav>

      {/* Ultra-Luxury Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Luxury Resort Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/8085365/pexels-photo-8085365.jpeg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background/90" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 animate-fade-in">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <Badge className="glass-card-luxury px-6 py-3 text-lg animate-luxury-pulse">
                    <Sparkles className="w-5 h-5 mr-2" />
                    🇨🇴 Ultra-Luxury Experience
                  </Badge>
                  <Badge className="glass-card px-4 py-2 bg-gold/20 text-gold border-gold/30">
                    <Crown className="w-4 h-4 mr-2" />
                    Verified Elite
                  </Badge>
                </div>
                <h1 className="text-7xl lg:text-9xl font-luxury-display font-bold leading-none text-luxury-shadow">
                  <span className="text-gradient-luxury font-luxury-script text-8xl lg:text-10xl">
                    Eimy
                  </span>
                  <br />
                  <span className="text-gold">Contreras</span>
                </h1>
                <p className="text-2xl text-white/90 max-w-2xl font-luxury-script leading-relaxed">
                  "Experience the pinnacle of Colombian luxury through exclusive waterfront encounters, 
                  private yacht adventures, and unforgettable moments that money can't buy... until now."
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="btn-luxury text-xl px-12 py-6 animate-luxury-float">
                  <Ship className="mr-3 h-6 w-6" />
                  Exclusive Access
                </Button>
                <Button
                  size="lg"
                  className="glass-card-luxury text-xl px-12 py-6 text-gold hover:bg-gold/10 border-gold/30"
                >
                  <Instagram className="mr-3 h-6 w-6" />
                  Follow Journey
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gold rounded-full animate-luxury-pulse"></div>
                  <span className="text-white/80 font-luxury-sans">Live from Colombia</span>
                </div>
                <div className="text-white/80 font-luxury-sans">2.8M Elite Followers</div>
                <div className="text-white/80 font-luxury-sans flex items-center space-x-2">
                  <Anchor className="h-4 w-4" />
                  <span>Cartagena Marina</span>
                </div>
              </div>
            </div>
            <div className="relative animate-luxury-float">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden glass-card-luxury group">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F88cadbc94e5b4c93a8abd3e9003eeabe?format=webp&width=800"
                  alt="Eimy Contreras - Colombian Luxury Goddess"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="glass-card-luxury p-6">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <div className="text-2xl font-luxury-display font-bold">@soyeimycontreras</div>
                        <div className="text-lg opacity-90 font-luxury-script">Colombian Luxury Goddess</div>
                      </div>
                      <Button size="sm" className="btn-gold px-6 py-3">
                        Follow
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 glass-card-luxury p-6 animate-luxury-glow">
                <div className="flex items-center space-x-3">
                  <Diamond className="h-6 w-6 text-gold animate-luxury-pulse" />
                  <span className="font-luxury-display font-bold text-xl text-gold">Ultra Exclusive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Live Stats Bar */}
      <section className="relative py-8 overflow-hidden">
        {/* Penthouse Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/8572163/pexels-photo-8572163.jpeg)",
          }}
        />
        <div className="absolute inset-0 glass-nav" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center space-x-16 text-center">
            <div className="flex items-center space-x-4">
              <TrendingUp className="h-8 w-8 text-gold animate-luxury-pulse" />
              <div>
                <div className="text-3xl font-luxury-display font-bold text-gold">
                  {liveCount.toLocaleString()}
                </div>
                <div className="text-lg text-white/90 font-luxury-sans">Elite Members</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Heart className="h-8 w-8 text-primary animate-luxury-pulse" />
              <div>
                <div className="text-3xl font-luxury-display font-bold text-primary">2.8M</div>
                <div className="text-lg text-white/90 font-luxury-sans">Luxury Loves</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Ship className="h-8 w-8 text-blue animate-luxury-pulse" />
              <div>
                <div className="text-3xl font-luxury-display font-bold text-blue">VIP</div>
                <div className="text-lg text-white/90 font-luxury-sans">Yacht Club</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Luxury VIP Experiences */}
      <section className="relative py-24 overflow-hidden">
        {/* Colombian Flag Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/14559379/pexels-photo-14559379.jpeg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/70" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl lg:text-7xl font-luxury-display font-bold mb-8 text-gradient-luxury">
              Ultra-Exclusive <span className="font-luxury-script text-7xl lg:text-8xl">Experiences</span>
            </h2>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto font-luxury-script leading-relaxed">
              Indulge in the world's most exclusive Colombian luxury experiences, 
              crafted for those who demand perfection beyond imagination
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {vipExperiences.map((experience, index) => (
              <Card
                key={index}
                className={`glass-card-luxury group hover:shadow-luxury-gold transition-all duration-700 hover:-translate-y-4 overflow-hidden ${
                  experience.sexy ? "animate-luxury-glow" : ""
                }`}
              >
                <CardContent className="p-8 text-center relative">
                  {experience.sexy && (
                    <div className="absolute top-4 right-4">
                      <Flame className="h-6 w-6 text-primary animate-luxury-pulse" />
                    </div>
                  )}
                  <div className="glass-card bg-gradient-to-br from-gold/20 to-primary/20 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                    <experience.icon className="h-12 w-12 text-gold" />
                  </div>
                  <h3 className="font-luxury-display font-bold text-2xl mb-4 text-gold">
                    {experience.name}
                  </h3>
                  <p className="text-white/80 text-lg mb-6 font-luxury-script leading-relaxed">
                    {experience.description}
                  </p>
                  <div className="text-lg text-gold/80 mb-6 font-luxury-sans">{experience.duration}</div>
                  <div className="space-y-6">
                    <div className="text-4xl font-luxury-display font-bold text-gold">
                      {experience.price}
                    </div>
                    <Button
                      className={experience.sexy ? "w-full btn-luxury" : "w-full btn-gold"}
                      size="lg"
                    >
                      {experience.sexy ? "Reserve Ultra Experience" : "Book Luxury"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Content Gallery */}
      <section className="relative py-24 overflow-hidden">
        {/* Marina Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/42092/pexels-photo-42092.jpeg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/90" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl lg:text-7xl font-luxury-display font-bold mb-8">
              <span className="text-gradient-luxury font-luxury-script text-7xl lg:text-8xl">Exclusive</span>{" "}
              <span className="text-gold">Content</span>
            </h2>
            <p className="text-2xl text-white/80 font-luxury-script leading-relaxed">
              Behind-the-scenes luxury moments from the world's most exclusive locations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exclusiveContent.map((item, index) => (
              <Card
                key={index}
                className="glass-card-luxury group cursor-pointer overflow-hidden hover:shadow-luxury-gold transition-all duration-700 hover:scale-105"
              >
                <div className="relative aspect-[4/5]">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="glass-card-luxury rounded-full p-6 group-hover:scale-110 transition-transform">
                        <Play className="h-10 w-10 text-gold" />
                      </div>
                    </div>
                  )}
                  {item.premium && (
                    <Badge className="absolute top-4 right-4 glass-card-luxury px-4 py-2 bg-gold/20 text-gold animate-luxury-pulse">
                      <Crown className="w-4 h-4 mr-2" />
                      Ultra VIP
                    </Badge>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                    <h3 className="text-white font-luxury-display font-bold text-2xl mb-2">
                      {item.title}
                    </h3>
                    {item.premium && (
                      <p className="text-gold text-lg font-luxury-script">Ultra-Premium Content</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ultra-Luxury Merchandise */}
      <section className="relative py-24 overflow-hidden">
        {/* Resort Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/8085365/pexels-photo-8085365.jpeg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 to-background/90" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl lg:text-7xl font-luxury-display font-bold mb-8 text-gradient-luxury">
              Ultra-Luxury <span className="font-luxury-script text-7xl lg:text-8xl">Collection</span>
            </h2>
            <p className="text-2xl text-white/80 font-luxury-script leading-relaxed">
              Exclusive treasures for the world's most distinguished collectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {luxuryMerchandise.map((product, index) => (
              <Card
                key={index}
                className="glass-card-luxury group hover:shadow-luxury-gold transition-all duration-700 hover:-translate-y-2 overflow-hidden"
              >
                <div className="aspect-square relative overflow-hidden rounded-t-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {product.exclusive && (
                    <Badge className="absolute top-4 left-4 glass-card-luxury px-4 py-2 bg-primary/20 text-primary animate-luxury-pulse">
                      <Diamond className="w-4 h-4 mr-2" />
                      Ultra Exclusive
                    </Badge>
                  )}
                  <Badge className="absolute top-4 right-4 glass-card bg-gold/20 text-gold border-gold/30 px-4 py-2">
                    {product.limited}
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <h3 className="font-luxury-display font-bold text-2xl mb-4 text-gold">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-luxury-display font-bold text-gold">
                      {product.price}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-gold fill-current" />
                      ))}
                    </div>
                  </div>
                  <Button className="w-full btn-luxury text-lg">
                    <ShoppingCart className="h-5 w-5 mr-3" />
                    Acquire Luxury
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ultra-Elite Fans Leaderboard */}
      <section className="relative py-24 overflow-hidden">
        {/* Penthouse Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/8572163/pexels-photo-8572163.jpeg)",
          }}
        />
        <div className="absolute inset-0 glass-nav" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-6xl font-luxury-display font-bold mb-10 text-gold font-luxury-script">
                Elite Yacht Club
              </h2>
              <p className="text-2xl text-white/90 mb-12 font-luxury-script leading-relaxed">
                The world's most distinguished collectors and luxury enthusiasts
              </p>
              <div className="space-y-6">
                {topFans.map((fan) => (
                  <div
                    key={fan.rank}
                    className="glass-card-luxury p-8 hover:shadow-luxury-gold transition-all duration-500"
                  >
                    <div className="flex items-center space-x-8">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gold to-primary rounded-2xl flex items-center justify-center text-white font-luxury-display font-bold text-xl shadow-luxury">
                        #{fan.rank}
                      </div>
                      <div className="flex-1">
                        <div className="font-luxury-display font-bold text-2xl flex items-center space-x-3 text-gold mb-2">
                          <span>{fan.name}</span>
                          <span>{fan.country}</span>
                        </div>
                        <div className="text-lg text-primary font-luxury-sans mb-1">
                          Investment: {fan.spent}
                        </div>
                        <div className="text-gold/80 font-luxury-script">{fan.title}</div>
                      </div>
                      <Diamond className="h-8 w-8 text-gold animate-luxury-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card-luxury p-12">
              <h3 className="text-4xl font-luxury-display font-bold mb-8 text-gold font-luxury-script">
                Join the Elite
              </h3>
              <div className="space-y-8">
                <p className="text-white/90 font-luxury-script text-xl leading-relaxed">
                  Become part of the world's most exclusive luxury community and experience 
                  privileges that transcend imagination.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Yacht className="h-6 w-6 text-gold" />
                    <span className="text-lg text-white/90 font-luxury-sans">
                      Private yacht access worldwide
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Diamond className="h-6 w-6 text-gold" />
                    <span className="text-lg text-white/90 font-luxury-sans">
                      Ultra-exclusive content and experiences
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Crown className="h-6 w-6 text-gold" />
                    <span className="text-lg text-white/90 font-luxury-sans">
                      Royal treatment and VIP privileges
                    </span>
                  </div>
                </div>
                <Button className="w-full btn-luxury py-6 text-xl font-luxury-display tracking-wider">
                  <Crown className="mr-3 h-6 w-6" />
                  Join Elite Circle
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Luxury Press & Features */}
      <section className="relative py-24 overflow-hidden">
        {/* Luxury Marina Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/42092/pexels-photo-42092.jpeg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 to-background/90" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl lg:text-7xl font-luxury-display font-bold mb-8 text-gradient-luxury">
              In the <span className="font-luxury-script text-7xl lg:text-8xl">Spotlight</span>
            </h2>
            <p className="text-2xl text-white/80 font-luxury-script leading-relaxed">
              What the world's most prestigious publications say about Colombia's luxury icon
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {pressFeatures.map((item, index) => (
              <Card
                key={index}
                className={`glass-card-luxury text-center p-12 hover:shadow-luxury-gold transition-all duration-500 hover:-translate-y-2 ${
                  item.featured ? "border-gold/30" : ""
                }`}
              >
                <div className="space-y-8">
                  <div className="text-gold font-luxury-display font-bold text-2xl">
                    {item.outlet}
                  </div>
                  <blockquote className="text-3xl font-luxury-display font-bold text-gradient-luxury leading-relaxed">
                    {item.headline}
                  </blockquote>
                  <div className="text-white/70 font-luxury-script text-lg">{item.date}</div>
                  {item.featured && (
                    <Badge className="glass-card bg-gold/20 text-gold border-gold/30 px-6 py-3">
                      <Star className="w-4 h-4 mr-2" />
                      Featured Excellence
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ultra-Luxury Footer */}
      <footer className="relative py-20 overflow-hidden">
        {/* Resort Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/8085365/pexels-photo-8085365.jpeg)",
          }}
        />
        <div className="absolute inset-0 glass-nav" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gold via-primary to-blue rounded-3xl flex items-center justify-center shadow-luxury">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <div>
                  <span className="text-3xl font-luxury-display font-bold text-gradient-luxury">
                    Eimy Contreras
                  </span>
                  <div className="text-lg text-gold/90 font-luxury-script">Colombian Luxury Goddess</div>
                </div>
              </div>
              <p className="text-white/80 font-luxury-script text-lg leading-relaxed">
                The world's most exclusive Colombian supermodel experience. 
                Where luxury meets passion in perfect harmony.
              </p>
              <div className="flex space-x-6">
                <Instagram className="h-8 w-8 text-gold hover:text-gold/80 cursor-pointer transition-colors" />
                <Twitter className="h-8 w-8 text-gold hover:text-gold/80 cursor-pointer transition-colors" />
                <Facebook className="h-8 w-8 text-gold hover:text-gold/80 cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h3 className="font-luxury-display font-bold text-gold mb-6 text-xl">
                Ultra Experiences
              </h3>
              <ul className="space-y-4 text-white/80 font-luxury-sans">
                <li>
                  <Link to="/services" className="hover:text-gold transition-colors text-lg">
                    Private Yacht Adventures
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-gold transition-colors text-lg">
                    Penthouse Encounters
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-gold transition-colors text-lg">
                    Elite Marina Sessions
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-gold transition-colors text-lg">
                    Colombian Goddess Experience
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-luxury-display font-bold text-gold mb-6 text-xl">
                Luxury Collection
              </h3>
              <ul className="space-y-4 text-white/80 font-luxury-sans">
                <li>
                  <Link to="/shop" className="hover:text-gold transition-colors text-lg">
                    Diamond Collection
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-gold transition-colors text-lg">
                    Colombian Emeralds
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-gold transition-colors text-lg">
                    Yacht Club Membership
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-gold transition-colors text-lg">
                    Private Island Access
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-luxury-display font-bold text-gold mb-6 text-xl">Elite Contact</h3>
              <div className="space-y-4 text-white/80 font-luxury-sans">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <span className="text-lg">elite@eimycontreras.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Instagram className="h-5 w-5" />
                  <span className="text-lg">@soyeimycontreras</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Anchor className="h-5 w-5" />
                  <span className="text-lg">Cartagena Marina, Colombia 🇨🇴</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gold/20 mt-16 pt-12 text-center text-white/60">
            <p className="font-luxury-script text-lg">
              &copy; 2024 Eimy Contreras Official. Ultra-Luxury Experience. Made with 💎 in Colombia
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
