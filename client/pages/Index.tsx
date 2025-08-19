import { useState, useEffect, useRef } from "react";
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
  ChevronDown,
  ArrowUp,
  Eye,
  Lock,
  Globe,
  Award,
  Gem,
  Shield,
  Star as StarOutline,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const [liveCount, setLiveCount] = useState(2847521);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Advanced scroll and mouse tracking for premium interactions
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 100);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Simulate live follower updates with more realistic growth
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount((prev) => prev + Math.floor(Math.random() * 20) + 5);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const exclusiveContent = [
    {
      type: "video",
      thumbnail: "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F34a6528c4b6242999f4f5c4895aaa226?format=webp&width=800",
      title: "Colombian Goddess Behind Scenes",
      premium: true,
      views: "2.8M",
      duration: "12:34",
    },
    {
      type: "image",
      thumbnail: "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2Fda4e11f2faca4ebeb913499776df66ee?format=webp&width=800",
      title: "Ultra-Luxury Yacht Photoshoot",
      premium: true,
      views: "1.9M",
      duration: "45:12",
    },
    {
      type: "video",
      thumbnail: "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F11628a736051448e9412cd3585b35f54?format=webp&width=800",
      title: "Private Marina Red Carpet",
      premium: false,
      views: "3.2M",
      duration: "8:45",
    },
    {
      type: "image",
      thumbnail: "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F58b58f5da4764a0d9ca005c06790cc73?format=webp&width=800",
      title: "Diamond Collection Reveal",
      premium: true,
      views: "4.1M",
      duration: "25:30",
    },
    {
      type: "video",
      thumbnail: "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F88cadbc94e5b4c93a8abd3e9003eeabe?format=webp&width=800",
      title: "Penthouse Luxury Experience",
      premium: true,
      views: "1.5M",
      duration: "35:20",
    },
    {
      type: "image",
      thumbnail: "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F19a2975b0cb34bb1b0c56692a2114d23?format=webp&width=800",
      title: "Colombian Elite Gala",
      premium: false,
      views: "2.7M",
      duration: "18:42",
    },
  ];

  const vipExperiences = [
    {
      name: "Ultra-Luxury Yacht Goddess",
      price: "$12,999",
      originalPrice: "$16,999",
      duration: "Full Day Experience",
      description: "Private yacht with personal crew in Colombian Caribbean waters",
      icon: Ship,
      premium: true,
      features: ["Private crew of 8", "Gourmet dining", "Professional photography", "Ultra-premium suite"],
      availability: "3 dates left",
    },
    {
      name: "Diamond Penthouse Encounter",
      price: "$8,999",
      originalPrice: "$11,999",
      duration: "6 Premium Hours",
      description: "Ultra-exclusive penthouse with 360° Colombian cityscape",
      icon: Diamond,
      premium: true,
      features: ["Sky terrace access", "Personal sommelier", "Diamond jewelry session", "Luxury transportation"],
      availability: "5 dates left",
    },
    {
      name: "Colombian Princess Marina",
      price: "$4,999",
      originalPrice: "$6,999",
      duration: "4 Luxury Hours",
      description: "Elite marina photoshoot with professional team",
      icon: Camera,
      premium: false,
      features: ["Professional crew", "Multiple outfits", "HD gallery", "Champagne service"],
      availability: "8 dates left",
    },
    {
      name: "Goddess Ultimate Experience",
      price: "$24,999",
      originalPrice: "$34,999",
      duration: "3-Day Luxury Retreat",
      description: "The ultimate Colombian luxury adventure beyond imagination",
      icon: Crown,
      premium: true,
      features: ["Private island access", "Helicopter transfers", "24/7 concierge", "Unlimited everything"],
      availability: "Only 1 left",
    },
  ];

  const luxuryCollection = [
    {
      name: "Colombian Emerald Crown",
      price: "$89,999",
      originalPrice: "$129,999",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F19a2975b0cb34bb1b0c56692a2114d23?format=webp&width=800",
      exclusive: true,
      limited: "1 of 3 remaining",
      description: "Hand-crafted with rare Colombian emeralds",
      rarity: "Ultra Rare",
    },
    {
      name: "Diamond Goddess Necklace",
      price: "$67,999",
      originalPrice: "$89,999",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2Fe8e0f03934b8449f839fd5070dc38019?format=webp&width=800",
      exclusive: true,
      limited: "2 of 5 remaining",
      description: "24k gold with rare pink diamonds",
      rarity: "Legendary",
    },
    {
      name: "Elite Yacht Club Membership",
      price: "$199,999",
      originalPrice: "$249,999",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2Ffe295b2b0d4446bb976e830c062e028a?format=webp&width=800",
      exclusive: true,
      limited: "Lifetime Access",
      description: "Global yacht access + VIP privileges",
      rarity: "Mythical",
    },
    {
      name: "Private Caribbean Island",
      price: "$2,999,999",
      originalPrice: "$3,999,999",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2Fbaa8774a50ef483d90afeee8f1859fbf?format=webp&width=800",
      exclusive: true,
      limited: "Once in a lifetime",
      description: "Own piece of Colombian paradise",
      rarity: "Cosmic",
    },
  ];

  const eliteMembers = [
    {
      rank: 1,
      name: "Carlos Mendoza",
      invested: "$847,259",
      country: "🇨🇴",
      title: "Diamond Yacht Master",
      avatar: "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F34a6528c4b6242999f4f5c4895aaa226?format=webp&width=200",
      tier: "Cosmic",
    },
    {
      rank: 2,
      name: "Isabella Rodriguez",
      invested: "$623,741",
      country: "🇺🇸",
      title: "Emerald Elite Goddess",
      avatar: "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2Fda4e11f2faca4ebeb913499776df66ee?format=webp&width=200",
      tier: "Mythical",
    },
    {
      rank: 3,
      name: "Diego Alejandro",
      invested: "$456,890",
      country: "🇲🇽",
      title: "Platinum Marina Prince",
      avatar: "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F11628a736051448e9412cd3585b35f54?format=webp&width=200",
      tier: "Legendary",
    },
  ];

  const testimonials = [
    {
      text: "Eimy transformed my understanding of luxury. Every moment with her is pure magic.",
      author: "Alexander K.",
      title: "Diamond Elite Member",
      country: "🇺🇸",
      rating: 5,
    },
    {
      text: "The yacht experience was beyond my wildest dreams. Colombian luxury at its absolute peak.",
      author: "Sofia M.",
      title: "Platinum VIP",
      country: "🇨🇴",
      rating: 5,
    },
    {
      text: "She's not just a model, she's a lifestyle brand that defines ultra-luxury.",
      author: "Marcus D.",
      title: "Elite Collector",
      country: "🇬🇧",
      rating: 5,
    },
  ];

  const achievements = [
    { label: "Elite Members", value: liveCount.toLocaleString(), icon: Users, color: "text-gold" },
    { label: "Luxury Experiences", value: "2,847", icon: Ship, color: "text-primary" },
    { label: "Countries Reached", value: "87", icon: Globe, color: "text-blue" },
    { label: "Ultra-VIP Clients", value: "156", icon: Crown, color: "text-gold" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Dynamic background with parallax */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/42092/pexels-photo-42092.jpeg)",
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 0.15,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
        
        {/* Animated luxury particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gold/20 rounded-full animate-luxury-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Ultra-premium navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'glass-nav py-4' : 'py-8'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-gold via-primary to-blue rounded-3xl flex items-center justify-center shadow-luxury animate-luxury-pulse">
                  <Crown className="h-9 w-9 text-white drop-shadow-lg" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-black">💎</span>
                </div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-luxury-display font-bold text-luxury-gold drop-shadow-lg">
                  Eimy Contreras
                </div>
                <div className="text-gold/90 font-luxury-script flex items-center space-x-3 text-lg">
                  <Anchor className="h-5 w-5" />
                  <span>Colombian Luxury Goddess</span>
                  <Badge className="glass-card bg-primary/20 text-primary border-primary/30 px-3 py-1 text-xs">
                    Live
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-12">
              {[
                { to: "/services", label: "Ultra Experiences" },
                { to: "/shop", label: "Luxury Collection" },
                { to: "/community", label: "Elite Circle" },
                { to: "/calendar", label: "Private Booking" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group relative text-white/90 hover:text-gold transition-all duration-500 font-luxury-sans text-lg tracking-wide"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 glass-card opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl -m-2" />
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button className="btn-luxury px-8 py-4 text-lg font-luxury-sans tracking-wider relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-gold via-primary to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Zap className="mr-3 h-5 w-5 relative z-10" />
                <span className="relative z-10">Join Elite</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Revolutionary Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Dynamic luxury background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/8085365/pexels-photo-8085365.jpeg)",
            transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})`,
            opacity: 0.4,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-primary/20 to-background/80" />
        
        {/* Interactive mouse-following luxury effect */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-gold/20 via-primary/10 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12 animate-fade-in">
              <div className="space-y-8">
                <div className="flex flex-wrap items-center gap-4">
                  <Badge className="glass-card-luxury px-6 py-4 text-xl animate-luxury-pulse group cursor-pointer">
                    <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-180 transition-transform duration-500" />
                    🇨🇴 Ultra-Luxury Experience
                  </Badge>
                  <Badge className="glass-card px-5 py-3 bg-gold/20 text-gold border-gold/30 hover:bg-gold/30 transition-colors cursor-pointer">
                    <Crown className="w-5 h-5 mr-2" />
                    Verified Elite Goddess
                  </Badge>
                </div>
                
                <div className="relative">
                  <h1 className="text-8xl lg:text-[12rem] font-luxury-display font-bold leading-none text-luxury-shadow">
                    <span className="block text-gradient-luxury font-luxury-script text-[6rem] lg:text-[8rem] animate-luxury-shimmer">
                      Eimy
                    </span>
                    <span className="block text-gold animate-luxury-float">Contreras</span>
                  </h1>
                  <div className="absolute -top-8 right-0 lg:right-20">
                    <div className="glass-card-luxury p-4 animate-luxury-glow">
                      <Crown className="h-12 w-12 text-gold animate-luxury-pulse" />
                    </div>
                  </div>
                </div>
                
                <div className="glass-card-luxury p-8 space-y-6">
                  <blockquote className="text-3xl lg:text-4xl text-white/95 font-luxury-script leading-relaxed italic">
                    "Where Colombian passion meets unparalleled luxury. Experience the goddess within through 
                    exclusive yacht adventures, diamond-studded encounters, and moments that transcend reality."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-primary rounded-full flex items-center justify-center">
                      <Diamond className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xl font-luxury-display text-gold">- Eimy Contreras, Colombian Luxury Icon</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="btn-luxury text-2xl px-16 py-8 animate-luxury-float group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold via-primary to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <Ship className="mr-4 h-8 w-8 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
                  <span className="relative z-10">Exclusive Access</span>
                </Button>
                <Button
                  size="lg"
                  className="glass-card-luxury text-2xl px-16 py-8 text-gold hover:bg-gold/10 border-2 border-gold/30 hover:border-gold/50 transition-all duration-500 group"
                >
                  <Instagram className="mr-4 h-8 w-8 group-hover:scale-110 transition-transform duration-500" />
                  Follow Journey
                </Button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="glass-card-luxury p-6 mb-4 group-hover:shadow-luxury-gold transition-all duration-500">
                      <achievement.icon className={`h-8 w-8 mx-auto mb-3 ${achievement.color} group-hover:scale-110 transition-transform duration-500`} />
                      <div className={`text-3xl font-luxury-display font-bold ${achievement.color} mb-2`}>
                        {achievement.value}
                      </div>
                      <div className="text-white/80 font-luxury-sans text-sm">{achievement.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative group">
                {/* Main luxury portrait */}
                <div className="aspect-[3/4] rounded-[3rem] overflow-hidden glass-card-luxury group-hover:shadow-luxury-gold transition-all duration-1000 relative">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F88cadbc94e5b4c93a8abd3e9003eeabe?format=webp&width=800"
                    alt="Eimy Contreras - Colombian Luxury Goddess"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Interactive overlay */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="glass-card-luxury p-8 space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-3xl font-luxury-display font-bold text-white">@soyeimycontreras</div>
                          <div className="text-xl text-gold/90 font-luxury-script">Colombian Luxury Goddess</div>
                          <div className="flex items-center space-x-2 mt-2">
                            <Eye className="h-5 w-5 text-gold" />
                            <span className="text-white/90 font-luxury-sans">2.8M viewing now</span>
                          </div>
                        </div>
                        <Button size="lg" className="btn-gold px-8 py-4 text-lg group">
                          <Heart className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                          Follow
                        </Button>
                      </div>
                      
                      {/* Live stats */}
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-luxury-display font-bold text-gold">2.8M</div>
                          <div className="text-white/80 text-sm">Followers</div>
                        </div>
                        <div>
                          <div className="text-2xl font-luxury-display font-bold text-primary">127K</div>
                          <div className="text-white/80 text-sm">Elite VIPs</div>
                        </div>
                        <div>
                          <div className="text-2xl font-luxury-display font-bold text-blue">87</div>
                          <div className="text-white/80 text-sm">Countries</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating luxury badges */}
                <div className="absolute -top-6 -left-6 glass-card-luxury p-4 animate-luxury-glow">
                  <div className="flex items-center space-x-3">
                    <Diamond className="h-8 w-8 text-gold animate-luxury-pulse" />
                    <div className="text-xl font-luxury-display font-bold text-gold">Ultra Elite</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 glass-card-luxury p-4 animate-luxury-float">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-8 w-8 text-primary" />
                    <div className="text-xl font-luxury-display font-bold text-primary">Verified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="glass-card-luxury p-4 cursor-pointer group" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            <ChevronDown className="h-8 w-8 text-gold group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </section>

      {/* Revolutionary Live Stats Showcase */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 glass-nav" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="glass-card-luxury p-8 hover:shadow-luxury-gold transition-all duration-700 group-hover:-translate-y-2">
                  <stat.icon className={`h-12 w-12 mx-auto mb-6 ${stat.color} group-hover:scale-125 transition-transform duration-500`} />
                  <div className={`text-4xl lg:text-5xl font-luxury-display font-bold ${stat.color} mb-3`}>
                    {stat.value}
                  </div>
                  <div className="text-white/90 font-luxury-sans text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultimate VIP Experiences */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/14559379/pexels-photo-14559379.jpeg)",
            opacity: 0.2,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/80" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-7xl lg:text-9xl font-luxury-display font-bold mb-12 text-gradient-luxury">
              Ultra-Exclusive <span className="font-luxury-script text-8xl lg:text-10xl block mt-4">Experiences</span>
            </h2>
            <p className="text-3xl text-white/90 max-w-5xl mx-auto font-luxury-script leading-relaxed">
              Step into a world where Colombian passion meets unparalleled luxury. Each experience is crafted 
              for those who demand nothing less than absolute perfection.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {vipExperiences.map((experience, index) => (
              <Card
                key={index}
                className="glass-card-luxury group hover:shadow-luxury-gold transition-all duration-1000 hover:-translate-y-4 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-primary/5 to-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <CardContent className="p-12 relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center space-x-6">
                      <div className="glass-card bg-gradient-to-br from-gold/20 to-primary/20 w-20 h-20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <experience.icon className="h-10 w-10 text-gold" />
                      </div>
                      {experience.premium && (
                        <Badge className="glass-card bg-primary/20 text-primary border-primary/30 px-4 py-2 animate-luxury-pulse">
                          <Flame className="w-4 h-4 mr-2" />
                          Ultra Premium
                        </Badge>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gold/80 font-luxury-sans line-through mb-1">
                        {experience.originalPrice}
                      </div>
                      <div className="text-4xl font-luxury-display font-bold text-gold">
                        {experience.price}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-luxury-display font-bold text-3xl mb-4 text-gold group-hover:text-gradient-luxury transition-all duration-500">
                    {experience.name}
                  </h3>
                  
                  <p className="text-white/90 text-xl mb-6 font-luxury-script leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div className="text-lg text-gold/90 mb-8 font-luxury-sans flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>{experience.duration}</span>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="text-lg font-luxury-display text-gold mb-3">What's Included:</div>
                    {experience.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Gem className="h-5 w-5 text-gold flex-shrink-0" />
                        <span className="text-white/90 font-luxury-sans">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-8">
                    <Badge className="glass-card bg-gold/20 text-gold border-gold/30 px-4 py-2">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {experience.availability}
                    </Badge>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-gold fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <Button
                    className={`w-full text-xl py-6 ${experience.premium ? "btn-luxury" : "btn-gold"} group relative overflow-hidden`}
                    size="lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gold via-primary to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <Ship className="h-6 w-6 mr-4 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
                    <span className="relative z-10">Reserve Ultra Experience</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Content Gallery */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/42092/pexels-photo-42092.jpeg)",
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 to-background/90" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-7xl lg:text-9xl font-luxury-display font-bold mb-12">
              <span className="text-gradient-luxury font-luxury-script text-8xl lg:text-10xl">Exclusive</span>{" "}
              <span className="text-gold">Content</span>
            </h2>
            <p className="text-3xl text-white/90 font-luxury-script leading-relaxed max-w-4xl mx-auto">
              Behind-the-scenes luxury moments from the world's most exclusive locations and intimate encounters
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exclusiveContent.map((item, index) => (
              <Card
                key={index}
                className="glass-card-luxury group cursor-pointer overflow-hidden hover:shadow-luxury-gold transition-all duration-1000 hover:scale-105 relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                  />
                  
                  {/* Premium overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
                  
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="glass-card-luxury rounded-full p-8 group-hover:scale-110 transition-transform duration-500">
                        <Play className="h-12 w-12 text-gold" />
                      </div>
                    </div>
                  )}
                  
                  {item.premium && (
                    <Badge className="absolute top-6 right-6 glass-card-luxury px-4 py-3 bg-gold/20 text-gold animate-luxury-pulse">
                      <Lock className="w-5 h-5 mr-2" />
                      Ultra VIP
                    </Badge>
                  )}
                  
                  {/* View count and duration */}
                  <div className="absolute top-6 left-6 flex space-x-2">
                    <Badge className="glass-card bg-black/50 text-white border-white/20 px-3 py-2">
                      <Eye className="w-4 h-4 mr-2" />
                      {item.views}
                    </Badge>
                    <Badge className="glass-card bg-black/50 text-white border-white/20 px-3 py-2">
                      {item.duration}
                    </Badge>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-white font-luxury-display font-bold text-2xl mb-3 group-hover:text-gold transition-colors duration-500">
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
          
          <div className="text-center mt-16">
            <Button className="btn-luxury px-12 py-6 text-xl group">
              <Eye className="h-6 w-6 mr-4 group-hover:scale-110 transition-transform duration-300" />
              View All Premium Content
            </Button>
          </div>
        </div>
      </section>

      {/* Ultra-Luxury Collection */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/8085365/pexels-photo-8085365.jpeg)",
            opacity: 0.2,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 to-background/90" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-7xl lg:text-9xl font-luxury-display font-bold mb-12 text-gradient-luxury">
              Ultra-Luxury <span className="font-luxury-script text-8xl lg:text-10xl block mt-4">Collection</span>
            </h2>
            <p className="text-3xl text-white/90 font-luxury-script leading-relaxed max-w-5xl mx-auto">
              Exclusive treasures and once-in-a-lifetime acquisitions for the world's most distinguished collectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {luxuryCollection.map((product, index) => (
              <Card
                key={index}
                className="glass-card-luxury group hover:shadow-luxury-gold transition-all duration-1000 hover:-translate-y-4 overflow-hidden relative"
              >
                <div className="aspect-square relative overflow-hidden rounded-t-3xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {product.exclusive && (
                    <Badge className="absolute top-6 left-6 glass-card-luxury px-4 py-3 bg-primary/20 text-primary animate-luxury-pulse">
                      <Diamond className="w-5 h-5 mr-2" />
                      Ultra Exclusive
                    </Badge>
                  )}
                  
                  <Badge className={`absolute top-6 right-6 glass-card px-4 py-3 ${
                    product.rarity === 'Cosmic' ? 'bg-gold/20 text-gold border-gold/30' :
                    product.rarity === 'Mythical' ? 'bg-primary/20 text-primary border-primary/30' :
                    product.rarity === 'Legendary' ? 'bg-blue/20 text-blue border-blue/30' :
                    'bg-white/20 text-white border-white/30'
                  }`}>
                    {product.rarity}
                  </Badge>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge className="glass-card bg-black/50 text-gold border-gold/30 px-4 py-2 w-full text-center">
                      {product.limited}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-8 space-y-6">
                  <h3 className="font-luxury-display font-bold text-2xl text-gold group-hover:text-gradient-luxury transition-all duration-500">
                    {product.name}
                  </h3>
                  
                  <p className="text-white/80 font-luxury-script text-lg leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gold/60 font-luxury-sans line-through mb-1">
                        {product.originalPrice}
                      </div>
                      <div className="text-3xl font-luxury-display font-bold text-gold">
                        {product.price}
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-gold fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full btn-luxury text-lg py-4 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gold via-primary to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <ShoppingCart className="h-5 w-5 mr-3 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
                    <span className="relative z-10">Acquire Luxury</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Elite Members Showcase */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/8572163/pexels-photo-8572163.jpeg)",
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 glass-nav" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <div>
                <h2 className="text-7xl font-luxury-display font-bold mb-8 text-gold font-luxury-script">
                  Elite Yacht Club
                </h2>
                <p className="text-3xl text-white/95 font-luxury-script leading-relaxed">
                  The world's most distinguished collectors and luxury enthusiasts who understand true value
                </p>
              </div>
              
              <div className="space-y-8">
                {eliteMembers.map((member, index) => (
                  <div
                    key={member.rank}
                    className="glass-card-luxury p-8 hover:shadow-luxury-gold transition-all duration-700 group cursor-pointer"
                  >
                    <div className="flex items-center space-x-8">
                      <div className="flex-shrink-0 relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-gold to-primary rounded-3xl flex items-center justify-center text-white font-luxury-display font-bold text-2xl shadow-luxury group-hover:scale-110 transition-transform duration-500">
                          #{member.rank}
                        </div>
                        <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          member.tier === 'Cosmic' ? 'bg-gold text-black' :
                          member.tier === 'Mythical' ? 'bg-primary text-white' :
                          'bg-blue text-white'
                        }`}>
                          💎
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <div className="font-luxury-display font-bold text-3xl flex items-center space-x-4 text-gold group-hover:text-gradient-luxury transition-all duration-500">
                          <span>{member.name}</span>
                          <span className="text-2xl">{member.country}</span>
                          <Badge className={`px-3 py-1 text-xs ${
                            member.tier === 'Cosmic' ? 'bg-gold/20 text-gold border-gold/30' :
                            member.tier === 'Mythical' ? 'bg-primary/20 text-primary border-primary/30' :
                            'bg-blue/20 text-blue border-blue/30'
                          }`}>
                            {member.tier}
                          </Badge>
                        </div>
                        <div className="text-xl text-primary font-luxury-sans">
                          Total Investment: {member.invested}
                        </div>
                        <div className="text-gold/90 font-luxury-script text-lg">{member.title}</div>
                      </div>
                      
                      <Diamond className="h-10 w-10 text-gold animate-luxury-pulse group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card-luxury p-12 space-y-10 sticky top-32">
              <h3 className="text-5xl font-luxury-display font-bold text-gold font-luxury-script">
                Join the Elite
              </h3>
              
              <div className="space-y-8">
                <p className="text-white/95 font-luxury-script text-2xl leading-relaxed">
                  Become part of the world's most exclusive luxury community and experience 
                  privileges that transcend imagination.
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: Ship, text: "Private yacht access worldwide" },
                    { icon: Diamond, text: "Ultra-exclusive content and experiences" },
                    { icon: Crown, text: "Royal treatment and VIP privileges" },
                    { icon: Globe, text: "Global luxury network access" },
                    { icon: Award, text: "Personal luxury concierge" },
                    { icon: Gem, text: "Rare collectibles priority access" },
                  ].map((privilege, idx) => (
                    <div key={idx} className="flex items-center space-x-4 group">
                      <privilege.icon className="h-7 w-7 text-gold group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xl text-white/90 font-luxury-sans">
                        {privilege.text}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full btn-luxury py-8 text-2xl font-luxury-display tracking-wider group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold via-primary to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <Crown className="mr-4 h-8 w-8 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
                  <span className="relative z-10">Join Elite Circle</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/42092/pexels-photo-42092.jpeg)",
            opacity: 0.2,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/95" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-7xl lg:text-9xl font-luxury-display font-bold mb-12 text-gradient-luxury">
              What Elite <span className="font-luxury-script text-8xl lg:text-10xl block mt-4">Members Say</span>
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="glass-card-luxury p-16 text-center space-y-10">
              <blockquote className="text-4xl lg:text-5xl font-luxury-display font-bold text-gradient-luxury leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-6">
                <div className="flex">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 text-gold fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="text-2xl font-luxury-display font-bold text-gold">
                  {testimonials[currentTestimonial].author} {testimonials[currentTestimonial].country}
                </div>
                <div className="text-xl text-white/80 font-luxury-script">
                  {testimonials[currentTestimonial].title}
                </div>
              </div>
              
              <div className="flex justify-center space-x-4 mt-12">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-500 ${
                      index === currentTestimonial ? 'bg-gold scale-125' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Luxury Footer */}
      <footer className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/8085365/pexels-photo-8085365.jpeg)",
            opacity: 0.2,
          }}
        />
        <div className="absolute inset-0 glass-nav" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-16">
            <div className="space-y-10">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gold via-primary to-blue rounded-3xl flex items-center justify-center shadow-luxury">
                  <Crown className="h-10 w-10 text-white" />
                </div>
                <div>
                  <span className="text-4xl font-luxury-display font-bold text-gradient-luxury">
                    Eimy Contreras
                  </span>
                  <div className="text-xl text-gold/90 font-luxury-script">Colombian Luxury Goddess</div>
                </div>
              </div>
              <p className="text-white/90 font-luxury-script text-xl leading-relaxed">
                The world's most exclusive Colombian supermodel experience. 
                Where luxury meets passion in perfect harmony.
              </p>
              <div className="flex space-x-8">
                {[Instagram, Twitter, Facebook].map((Icon, index) => (
                  <div key={index} className="glass-card-luxury p-4 cursor-pointer hover:shadow-luxury-gold transition-all duration-500 group">
                    <Icon className="h-8 w-8 text-gold group-hover:scale-110 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </div>
            
            {[
              {
                title: "Ultra Experiences",
                links: ["Private Yacht Adventures", "Penthouse Encounters", "Elite Marina Sessions", "Colombian Goddess Experience"]
              },
              {
                title: "Luxury Collection",
                links: ["Diamond Collection", "Colombian Emeralds", "Yacht Club Membership", "Private Island Access"]
              },
              {
                title: "Elite Contact",
                links: ["elite@eimycontreras.com", "@soyeimycontreras", "Cartagena Marina, Colombia 🇨🇴", "VIP Concierge: +57 (300) 123-4567"]
              }
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-luxury-display font-bold text-gold mb-8 text-2xl">
                  {section.title}
                </h3>
                <ul className="space-y-5 text-white/90 font-luxury-sans">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to="#" className="hover:text-gold transition-colors text-lg flex items-center space-x-3 group">
                        <Diamond className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                        <span>{link}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gold/20 mt-20 pt-12 text-center">
            <p className="font-luxury-script text-xl text-white/70">
              &copy; 2024 Eimy Contreras Official. Ultra-Luxury Experience. Made with 💎 in Colombia 🇨🇴
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-50 glass-card-luxury p-4 transition-all duration-500 hover:shadow-luxury-gold group ${
          scrollY > 500 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp className="h-6 w-6 text-gold group-hover:scale-110 transition-transform duration-300" />
      </button>
    </div>
  );
}
