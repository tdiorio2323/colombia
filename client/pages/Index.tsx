import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AuthCard } from "@/components/ui/auth-card";
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
      thumbnail:
        "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F34a6528c4b6242999f4f5c4895aaa226?format=webp&width=800",
      title: "Behind the Glamour",
      premium: true,
      duration: "12:34",
    },
    {
      type: "image",
      thumbnail:
        "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2Fda4e11f2faca4ebeb913499776df66ee?format=webp&width=800",
      title: "Exclusive Photoshoot",
      premium: true,
      duration: "Photo Set",
    },
    {
      type: "video",
      thumbnail:
        "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F11628a736051448e9412cd3585b35f54?format=webp&width=800",
      title: "Red Carpet Moments",
      premium: false,
      duration: "8:45",
    },
    {
      type: "image",
      thumbnail:
        "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F58b58f5da4764a0d9ca005c06790cc73?format=webp&width=800",
      title: "VIP Experience",
      premium: true,
      duration: "Premium",
    },
  ];

  const subscriptionTiers = [
    {
      name: "Free Follower",
      price: "$0",
      duration: "forever",
      description: "Basic access to public Colombian content",
      icon: Users,
      features: ["Public photos", "Community posts", "Basic chat"],
      color: "from-gray-500 to-gray-600",
      popular: false,
    },
    {
      name: "Premium Fan",
      price: "$14.99",
      duration: "/month",
      description: "Exclusive access to premium Colombian content",
      icon: Heart,
      features: ["Exclusive photos & videos", "Direct messaging", "Weekly live streams", "Behind the scenes"],
      color: "from-primary to-primary/80",
      popular: true,
    },
    {
      name: "VIP Supporter",
      price: "$39.99",
      duration: "/month",
      description: "Ultimate access with personalized Colombian experiences",
      icon: Crown,
      features: ["Everything in Premium", "Custom content requests", "Priority messaging", "Video calls", "Personalized messages"],
      color: "from-gold to-gold/80",
      popular: false,
    },
    {
      name: "Elite Colombian",
      price: "$99.99",
      duration: "/month",
      description: "Exclusive elite tier with real-world Colombian experiences",
      icon: Diamond,
      features: ["Everything in VIP", "Monthly exclusive content", "Meet & greet opportunities", "Colombian cultural tours", "Personal WhatsApp access"],
      color: "from-blue to-blue/80",
      popular: false,
    },
  ];

  const creatorMerchandise = [
    {
      name: "TD Studios Merch Bundle",
      price: "$99.99",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F19a2975b0cb34bb1b0c56692a2114d23?format=webp&width=800",
      limited: "Limited Edition",
    },
    {
      name: "Colombian Creator Kit",
      price: "$149.99",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2Fe8e0f03934b8449f839fd5070dc38019?format=webp&width=800",
      limited: "Creator Exclusive",
    },
    {
      name: "Content Creator Course",
      price: "$299.99",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2Ffe295b2b0d4446bb976e830c062e028a?format=webp&width=800",
      limited: "Digital Access",
    },
    {
      name: "VIP Creator Mentorship",
      price: "$999.99",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2Fbaa8774a50ef483d90afeee8f1859fbf?format=webp&width=800",
      limited: "Premium Access",
    },
  ];

  const topSupporters = [
    {
      rank: 1,
      name: "Carlos M.",
      spent: "$15,247",
      badge: "diamond",
      country: "🇨🇴",
      title: "VIP Subscriber",
    },
    {
      rank: 2,
      name: "Sofia R.",
      spent: "$11,156",
      badge: "platinum",
      country: "🇺🇸",
      title: "Premium Fan",
    },
    {
      rank: 3,
      name: "Diego L.",
      spent: "$8,923",
      badge: "gold",
      country: "🇲🇽",
      title: "Loyal Supporter",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Clean Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gold via-primary to-blue rounded-xl flex items-center justify-center">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-luxury-display font-bold text-gold">
                  TD Studios
                </h1>
                <p className="text-sm text-gold/80 font-luxury-script">
                  Colombian Content Creator
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/content"
                className="text-white/90 hover:text-gold transition-colors"
              >
                Content
              </Link>
              <Link
                to="/messages"
                className="text-white/90 hover:text-gold transition-colors"
              >
                Messages
              </Link>
              <Link
                to="/tipjar"
                className="text-white/90 hover:text-gold transition-colors"
              >
                Tip Jar
              </Link>
              <Link
                to="/subscribe"
                className="text-white/90 hover:text-gold transition-colors"
              >
                Subscribe
              </Link>
              <AuthCard onAuthenticate={(credentials) => console.log('Authenticated:', credentials)} />
            </div>
          </div>
        </div>
      </nav>

      {/* Colombian Flag Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Colombian Flag Background */}
        <div className="absolute inset-0 colombia-gradient opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/80"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12 py-12">
            {/* Photo First */}
            <div className="relative max-w-md mx-auto">
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
                        <div className="font-luxury-display font-bold">
                          @soyeimycontreras
                        </div>
                        <div className="text-sm opacity-90">
                          Colombian Goddess
                        </div>
                      </div>
                      <Button size="sm" className="btn-gold">
                        Follow
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Title and Content Below */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="glass-card px-4 py-2 bg-gold/20 text-gold border-gold/30 inline-flex">
                  <Sparkles className="w-4 h-4 mr-2" />
                  🇨🇴 Colombian Content Creator
                </Badge>

                <h1 className="text-5xl lg:text-7xl font-luxury-display font-bold leading-tight">
                  <span className="text-gradient-luxury">TD</span>
                  <br />
                  <span className="text-gold">Studios</span>
                </h1>

                <p className="text-xl text-white/90 max-w-2xl mx-auto font-luxury-script leading-relaxed">
                  Exclusive Colombian content, personalized messages, and direct
                  fan interaction. Join my premium community today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AuthCard 
                  className="px-8 py-4 text-lg"
                  onAuthenticate={(credentials) => {
                    console.log('Premium Access Granted:', credentials);
                    // Here you could redirect to premium content, set auth state, etc.
                  }} 
                />
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-card text-gold border-gold/30 px-8 py-4"
                >
                  <Gift className="mr-3 h-5 w-5" />
                  Send Tip
                </Button>
              </div>

              {/* Clean stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 max-w-lg mx-auto">
                <div className="text-center glass-card p-4">
                  <div className="text-2xl font-luxury-display font-bold text-gold">
                    {(liveCount / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-sm text-white/80">Subscribers</div>
                </div>
                <div className="text-center glass-card p-4">
                  <div className="text-2xl font-luxury-display font-bold text-primary">
                    2.3K
                  </div>
                  <div className="text-sm text-white/80">Premium Fans</div>
                </div>
                <div className="text-center glass-card p-4">
                  <div className="text-2xl font-luxury-display font-bold text-blue">
                    $47K
                  </div>
                  <div className="text-sm text-white/80">Monthly Tips</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Tiers Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-luxury-display font-bold mb-6 text-gradient-luxury">
              Subscription Plans
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-luxury-script">
              Choose your level of exclusive Colombian content access and
              personalized experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subscriptionTiers.map((tier, index) => (
              <Card
                key={index}
                className={`glass-card group hover:shadow-luxury transition-all duration-300 relative ${
                  tier.popular ? 'ring-2 ring-primary/50' : ''
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 text-xs">
                    <Crown className="w-3 h-3 mr-1" />
                    MOST POPULAR
                  </Badge>
                )}
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tier.color}/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <tier.icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="font-luxury-display font-bold text-xl mb-3 text-gold">
                    {tier.name}
                  </h3>
                  <p className="text-white/80 mb-4 text-sm leading-relaxed">
                    {tier.description}
                  </p>
                  <div className="text-sm text-gold/80 mb-4">
                    {tier.duration}
                  </div>
                  <div className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-white/70"
                      >
                        <CheckCircle className="h-4 w-4 text-gold mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-3xl font-luxury-display font-bold text-gold mb-2">
                    {tier.price}
                    <span className="text-lg text-white/60">{tier.duration}</span>
                  </div>
                  <Button 
                    className={`w-full ${tier.popular ? 'btn-luxury' : tier.price === '$0' ? 'btn-gold' : 'btn-primary'}`} 
                    size="sm"
                  >
                    {tier.price === '$0' ? 'Follow Free' : 'Subscribe Now'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Gallery */}
      <section className="py-20 relative">

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
              <Card
                key={index}
                className="glass-card group cursor-pointer overflow-hidden hover:shadow-luxury transition-all duration-300"
              >
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
                    <h3 className="text-white font-medium mb-1">
                      {item.title}
                    </h3>
                    <div className="text-gold/80 text-sm">{item.duration}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Shop */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-luxury-display font-bold mb-6 text-gradient-luxury">
              Creator Shop
            </h2>
            <p className="text-xl text-white/80 font-luxury-script">
              Exclusive merchandise and digital content from TD Studios
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {creatorMerchandise.map((product, index) => (
              <Card
                key={index}
                className="glass-card group hover:shadow-luxury transition-all duration-300"
              >
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
                        <Star
                          key={i}
                          className="h-4 w-4 text-gold fill-current"
                        />
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

      {/* Top Supporters */}
      <section className="py-20 relative">

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-luxury-display font-bold mb-8 text-gold">
                Top Supporters
              </h2>
              <p className="text-xl text-white/90 mb-8 font-luxury-script">
                Join my premium community and support exclusive Colombian content
              </p>
              <div className="space-y-4">
                {topSupporters.map((member) => (
                  <div
                    key={member.rank}
                    className="glass-card p-6 hover:shadow-luxury transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold to-primary rounded-lg flex items-center justify-center text-white font-bold">
                        #{member.rank}
                      </div>
                      <div className="flex-1">
                        <div className="font-luxury-display font-bold text-lg flex items-center space-x-2 text-gold">
                          <span>{member.name}</span>
                          <span>{member.country}</span>
                        </div>
                        <div className="text-primary">
                          Investment: {member.spent}
                        </div>
                        <div className="text-gold/80 text-sm">
                          {member.title}
                        </div>
                      </div>
                      <Diamond className="h-6 w-6 text-gold" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-3xl font-luxury-display font-bold mb-6 text-gold">
                Join Premium
              </h3>
              <p className="text-white/90 mb-8 leading-relaxed">
                Get exclusive access to premium Colombian content, personalized
                messages, and direct creator interaction.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Camera className="h-5 w-5 text-gold" />
                  <span className="text-white/90">
                    Exclusive photos and videos daily
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gold" />
                  <span className="text-white/90">
                    Direct messaging with creator
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gift className="h-5 w-5 text-gold" />
                  <span className="text-white/90">
                    Priority tip jar access
                  </span>
                </div>
              </div>
              <AuthCard 
                className="w-full py-4 text-lg"
                onAuthenticate={(credentials) => {
                  console.log('Premium Access Granted:', credentials);
                  // Handle premium membership authentication
                }}
              />
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
                    TD Studios
                  </span>
                  <div className="text-sm text-gold/90">Colombian Content Creator</div>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                Premium Colombian content and exclusive fan experiences.
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-gold hover:text-gold/80 cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gold hover:text-gold/80 cursor-pointer transition-colors" />
                <Facebook className="h-6 w-6 text-gold hover:text-gold/80 cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h3 className="font-luxury-display font-bold text-gold mb-4">
                Content
              </h3>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link
                    to="/premium"
                    className="hover:text-gold transition-colors"
                  >
                    Premium Content
                  </Link>
                </li>
                <li>
                  <Link
                    to="/messages"
                    className="hover:text-gold transition-colors"
                  >
                    Direct Messages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/live"
                    className="hover:text-gold transition-colors"
                  >
                    Live Streams
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-luxury-display font-bold text-gold mb-4">
                Support
              </h3>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link
                    to="/tipjar"
                    className="hover:text-gold transition-colors"
                  >
                    Tip Jar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/subscriptions"
                    className="hover:text-gold transition-colors"
                  >
                    Subscriptions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/merchandise"
                    className="hover:text-gold transition-colors"
                  >
                    Merchandise
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-luxury-display font-bold text-gold mb-4">
                Contact
              </h3>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contact@tdstudios.co</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Instagram className="h-4 w-4" />
                  <span>@tdstudios_co</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Medellín, Colombia 🇨🇴</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gold/20 mt-12 pt-8 text-center text-white/60">
            <p>
              &copy; 2024 TD Studios. Colombian Content Creator. Made with 💎 in
              Colombia
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
