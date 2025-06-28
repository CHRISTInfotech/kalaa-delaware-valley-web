
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: "Onam Celebration 2025",
    date: "September 15, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Community Hall, 123 Main St, Philadelphia, PA",
    participants: "200+ expected",
    description: "Join us for the grand Onam celebration with traditional Sadya, cultural programs, and Thiruvathira dance.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=200&fit=crop",
    registrationRequired: true,
    fee: "$25 per person"
  },
  {
    id: 2,
    title: "Malayalam New Year - Medam 1st",
    date: "April 14, 2025",
    time: "5:00 PM - 9:00 PM",
    location: "KALAA Community Center, Delaware Valley",
    participants: "150+ expected",
    description: "Celebrate the Malayalam New Year with traditional rituals, cultural performances, and community feast.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=200&fit=crop",
    registrationRequired: true,
    fee: "$20 per person"
  }
];

const UpcomingEvents = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-kerala-blue text-center mb-16">
          Upcoming Events
        </h1>
        
        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <div className="relative h-48 rounded-t-lg overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-kerala-gold text-white px-2 py-1 rounded text-sm">
                    <Users className="inline h-3 w-3 mr-1" />
                    {event.participants}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-kerala-blue">{event.title}</CardTitle>
                  <CardDescription className="text-base">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-3 text-kerala-gold" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-3 text-kerala-gold" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start text-gray-600">
                      <MapPin className="h-4 w-4 mr-3 text-kerala-gold mt-0.5" />
                      <span>{event.location}</span>
                    </div>
                    {event.fee && (
                      <div className="flex items-center text-kerala-red font-medium">
                        <span className="mr-2">Fee:</span>
                        <span>{event.fee}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Link to={`/events/${event.id}`}>
                      <Button className="w-full bg-kerala-blue hover:bg-kerala-blue/90">
                        View Details
                      </Button>
                    </Link>
                    {event.registrationRequired && (
                      <Button className="w-full bg-kerala-gold hover:bg-kerala-gold/90">
                        Register Now
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500 mb-4">No upcoming events at this time</p>
            <p className="text-gray-400">Check back soon for exciting Malayalam cultural events!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
