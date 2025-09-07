import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Crown,
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Users,
  Heart,
  Flame,
  Star,
  Phone,
  Video,
  Mail,
  Gift,
  Diamond,
  Camera,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const availableDates = [
    { date: "2024-02-15", day: "Thu", available: true },
    { date: "2024-02-16", day: "Fri", available: true },
    { date: "2024-02-17", day: "Sat", available: false },
    { date: "2024-02-18", day: "Sun", available: true },
    { date: "2024-02-19", day: "Mon", available: true },
    { date: "2024-02-20", day: "Tue", available: false },
    { date: "2024-02-21", day: "Wed", available: true },
  ];

  const timeSlots = [
    { time: "10:00 AM", available: true, premium: false },
    { time: "2:00 PM", available: true, premium: true },
    { time: "6:00 PM", available: false, premium: true },
    { time: "8:00 PM", available: true, premium: true },
    { time: "10:00 PM", available: true, premium: true },
  ];

  const services = [
    {
      id: "video-call",
      name: "Private Video Call",
      price: "$499",
      duration: "30 min",
      description: "Intimate one-on-one conversation",
      icon: Video,
      sexy: true,
    },
    {
      id: "meet-greet",
      name: "VIP Meet & Greet",
      price: "$299",
      duration: "20 min",
      description: "Personal meeting with photos",
      icon: Heart,
      sexy: false,
    },
    {
      id: "phone-call",
      name: "Personal Phone Call",
      price: "$199",
      duration: "15 min",
      description: "Exclusive voice conversation",
      icon: Phone,
      sexy: true,
    },
    {
      id: "virtual-date",
      name: "Virtual Date Experience",
      price: "$799",
      duration: "60 min",
      description: "Ultimate premium experience",
      icon: Diamond,
      sexy: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-primary/20 sexy-glow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-script font-bold text-gradient-red">
                  Eimy Contreras
                </span>
                <div className="text-xs text-muted-foreground">
                  Colombian Goddess
                </div>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/services"
                className="hover:text-primary transition-colors font-medium"
              >
                Experiences
              </Link>
              <Link
                to="/shop"
                className="hover:text-primary transition-colors font-medium"
              >
                Luxury Shop
              </Link>
              <Link
                to="/community"
                className="hover:text-primary transition-colors font-medium"
              >
                VIP Club
              </Link>
              <Link
                to="/calendar"
                className="text-primary transition-colors font-medium"
              >
                Book Me
              </Link>
              <Link
                to="/profile"
                className="hover:text-primary transition-colors font-medium"
              >
                Profile
              </Link>
            </div>
            <Button className="btn-sexy font-semibold">
              <Flame className="mr-2 h-4 w-4" />
              Join VIP
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        {/* Background Image from Homepage */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2Fda4e11f2faca4ebeb913499776df66ee?format=webp&width=800)",
            backgroundPosition: "50% -8%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-background/95" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-primary/20 text-primary border-primary/30 animate-pulse-sexy mb-6">
              🔥 Book Your Exclusive Experience
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 text-white">
              <span className="text-gradient-red font-script">Book</span> Me
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-serif italic">
              Schedule your intimate moment with Colombia's most desired
              supermodel. Choose your experience and let's create unforgettable
              memories together.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 relative">
        {/* Second Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2Fed5382895c1f4487a68dd55afef3b83c%2F11628a736051448e9412cd3585b35f54?format=webp&width=800)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/95" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Booking Form */}
              <div className="space-y-8">
                <Card className="sexy-card p-8">
                  <CardHeader>
                    <CardTitle className="text-3xl font-display text-gradient-red">
                      Book Your <span className="font-script">Experience</span>
                    </CardTitle>
                    <p className="text-muted-foreground font-serif italic">
                      Choose your preferred service, date, and time for our
                      intimate encounter
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {/* Service Selection */}
                    <div>
                      <h3 className="text-xl font-display font-bold text-primary mb-4">
                        Select Experience
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {services.map((service) => (
                          <Card
                            key={service.id}
                            className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                              selectedService === service.id
                                ? "ring-2 ring-primary bg-primary/5"
                                : "hover:ring-1 hover:ring-primary/50"
                            } ${service.sexy ? "sexy-card" : ""}`}
                            onClick={() => setSelectedService(service.id)}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-start space-x-3">
                                <div className="bg-primary/20 p-2 rounded-lg">
                                  <service.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-semibold text-sm">
                                      {service.name}
                                    </h4>
                                    {service.sexy && (
                                      <Flame className="h-3 w-3 text-primary" />
                                    )}
                                  </div>
                                  <p className="text-xs text-muted-foreground mb-2">
                                    {service.description}
                                  </p>
                                  <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold text-primary">
                                      {service.price}
                                    </span>
                                    <span className="text-xs text-gold">
                                      {service.duration}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Date Selection */}
                    <div>
                      <h3 className="text-xl font-display font-bold text-primary mb-4">
                        Choose Date
                      </h3>
                      <div className="grid grid-cols-7 gap-2">
                        {availableDates.map((dateInfo) => (
                          <Card
                            key={dateInfo.date}
                            className={`cursor-pointer transition-all duration-300 ${
                              !dateInfo.available
                                ? "opacity-50 cursor-not-allowed"
                                : selectedDate === dateInfo.date
                                  ? "ring-2 ring-primary bg-primary/10"
                                  : "hover:ring-1 hover:ring-primary/50"
                            }`}
                            onClick={() =>
                              dateInfo.available &&
                              setSelectedDate(dateInfo.date)
                            }
                          >
                            <CardContent className="p-3 text-center">
                              <div className="text-xs font-medium text-muted-foreground">
                                {dateInfo.day}
                              </div>
                              <div className="text-sm font-bold">
                                {new Date(dateInfo.date).getDate()}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Time Selection */}
                    {selectedDate && (
                      <div>
                        <h3 className="text-xl font-display font-bold text-primary mb-4">
                          Select Time
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {timeSlots.map((slot) => (
                            <Card
                              key={slot.time}
                              className={`cursor-pointer transition-all duration-300 ${
                                !slot.available
                                  ? "opacity-50 cursor-not-allowed"
                                  : selectedTime === slot.time
                                    ? "ring-2 ring-primary bg-primary/10"
                                    : "hover:ring-1 hover:ring-primary/50"
                              } ${slot.premium ? "border-gold/50" : ""}`}
                              onClick={() =>
                                slot.available && setSelectedTime(slot.time)
                              }
                            >
                              <CardContent className="p-3 text-center">
                                <div className="text-sm font-bold">
                                  {slot.time}
                                </div>
                                {slot.premium && (
                                  <Badge className="bg-gold/20 text-gold text-xs mt-1">
                                    <Star className="w-2 h-2 mr-1" />
                                    Premium
                                  </Badge>
                                )}
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Personal Details */}
                    <div>
                      <h3 className="text-xl font-display font-bold text-primary mb-4">
                        Your Details
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background/50"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background/50"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Special Requests
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background/50"
                        placeholder="Tell me what you'd like our time together to be like..."
                      />
                    </div>

                    {/* Book Button */}
                    <Button
                      className="w-full btn-sexy text-lg py-4"
                      disabled={
                        !selectedService || !selectedDate || !selectedTime
                      }
                    >
                      <Heart className="mr-2 h-5 w-5" />
                      Book My Experience
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Booking Info & Features */}
              <div className="space-y-8">
                {/* What's Included */}
                <Card className="sexy-card p-8">
                  <CardHeader>
                    <CardTitle className="text-2xl font-display text-gradient-red">
                      What's <span className="font-script">Included</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Camera className="h-5 w-5 text-primary" />
                      <span>High-quality video experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="h-5 w-5 text-primary" />
                      <span>Personal attention & conversation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Gift className="h-5 w-5 text-primary" />
                      <span>Exclusive content & surprises</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>Follow-up message</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Booking Guidelines */}
                <Card className="sexy-card p-8">
                  <CardHeader>
                    <CardTitle className="text-2xl font-display text-gradient-red">
                      Booking <span className="font-script">Guidelines</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-start space-x-3">
                      <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Book at least 24 hours in advance for best availability
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Star className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                      <span>
                        Premium time slots include special extras and longer
                        duration
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>All sessions are private and confidential</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Heart className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Cancellations accepted up to 12 hours before appointment
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* VIP Upgrade */}
                <Card className="sexy-card p-8 border-gold/50 bg-gradient-to-br from-gold/5 to-primary/5">
                  <CardHeader>
                    <CardTitle className="text-2xl font-display text-gradient-red flex items-center">
                      <Crown className="h-6 w-6 text-gold mr-2" />
                      VIP <span className="font-script">Upgrade</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground font-serif italic">
                      Upgrade to VIP for extended time, exclusive content, and
                      special gifts
                    </p>
                    <Button className="w-full bg-gradient-to-r from-gold to-primary text-white hover:from-gold/90 hover:to-primary/90">
                      <Diamond className="mr-2 h-4 w-4" />
                      Upgrade to VIP (+$199)
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
