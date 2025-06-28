
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Users } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: "Onam Celebration",
    date: "September 15, 2024",
    time: "6:00 PM - 10:00 PM",
    location: "Community Hall, 123 Main St, Philadelphia, PA",
    participants: "200+ expected",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=200&fit=crop"
  }
];

export const UpcomingEventsSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-serif font-bold text-kerala-gold mb-8">Upcoming Events</h2>
      {upcomingEvents.length > 0 ? (
        <div className="space-y-6">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow bg-white">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-kerala-gold text-white px-2 py-1 rounded text-sm">
                  {event.participants}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-black">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-black">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-kerala-gold" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="ml-6">{event.time}</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 text-kerala-gold mt-0.5" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-kerala-red hover:bg-kerala-red/90 text-white">
                  Learn More & Register
                </Button>
              </CardContent>
            </Card>
          ))}
          <Link to="/events/upcoming">
            <Button className="w-full bg-kerala-gold hover:bg-kerala-gold/90 text-white">
              View All Upcoming Events
            </Button>
          </Link>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-black mb-4">No upcoming events at this time</p>
          <Link to="/events/upcoming">
            <Button variant="outline" className="text-kerala-blue border-kerala-blue hover:bg-kerala-blue hover:text-white">Check Events Page</Button>
          </Link>
        </div>
      )}
    </div>
  );
};
