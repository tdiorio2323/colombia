import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Calendar as CalendarIcon, Clock, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Calendar() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-gold" />
              <span className="text-2xl font-display font-bold">Eimy Contreras</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
              <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
              <Link to="/community" className="hover:text-gold transition-colors">Community</Link>
              <Link to="/calendar" className="text-gold transition-colors">Calendar</Link>
            </div>
            <Button className="btn-gold">Join VIP</Button>
          </div>
        </div>
      </nav>

      {/* Placeholder Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gold/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <CalendarIcon className="h-12 w-12 text-gold" />
          </div>
          
          <h1 className="text-5xl font-display font-bold mb-6">
            Events & <span className="text-gradient">Calendar</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stay updated with upcoming concerts, meet & greets, virtual events, and exclusive fan experiences. 
            The calendar system is currently being perfected for you!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center">
              <Clock className="h-8 w-8 text-gold mx-auto mb-4" />
              <h3 className="font-display font-semibold text-lg mb-2">Live Events</h3>
              <p className="text-muted-foreground text-sm">Real-time concert and performance schedules</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-8 w-8 text-gold mx-auto mb-4" />
              <h3 className="font-display font-semibold text-lg mb-2">Meet & Greets</h3>
              <p className="text-muted-foreground text-sm">Personal interaction booking system</p>
            </Card>
            <Card className="p-6 text-center">
              <MapPin className="h-8 w-8 text-gold mx-auto mb-4" />
              <h3 className="font-display font-semibold text-lg mb-2">Virtual Events</h3>
              <p className="text-muted-foreground text-sm">Online concerts and exclusive streams</p>
            </Card>
          </div>

          <div className="space-y-4">
            <Button size="lg" className="btn-gold mr-4">
              <CalendarIcon className="mr-2 h-5 w-5" />
              Get Updates
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
