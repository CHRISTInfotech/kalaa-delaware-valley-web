
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

// Import images
import onamImg from '@/components/images/onam_image.jpg';
import xmasImg from '@/components/images/xmas.jpeg';

 const upcomingEvents = [
  {
    id: 1,
    title: "Onam Celebration 2025",
    date: "September 15, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Community Hall, 123 Main St, Philadelphia, PA",
    participants: "200+ expected",
    description:
      "Join us for the grand Onam celebration with traditional Sadya, cultural programs, and Thiruvathira dance.",
    image: onamImg,
    registrationRequired: true,
    fee: "$25 per person"
  },
  {
    id: 2,
    title: "X-mas Celebration 2025",
    date: "December 25, 2025",
    time: "12:00 AM - 10:00 AM",
    location: "KALAA Community Center, Delaware Valley",
    participants: "150+ expected",
    description:
      "A symbol for Jesus Christ's birth, join us for a festive evening with music, dance, and a special Christmas feast.",
    image: xmasImg,
    registrationRequired: true,
    fee: "$20 per person"
  }
];


const UpcomingEvents = () => {
  return (
    <div className="min-h-screen py-16 bg-white" style={{ marginTop: '6rem' }}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-kerala-gold text-center mb-16">
          Upcoming Events
        </h1>

        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow bg-white border border-gray-200">
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
                  <CardTitle className="text-xl text-black">{event.title}</CardTitle>
                  <CardDescription className="text-base text-gray-600">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-black">
                      <Calendar className="h-4 w-4 mr-3 text-kerala-gold" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center text-black">
                      <Clock className="h-4 w-4 mr-3 text-kerala-gold" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start text-black">
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
                    <Link
                      to={`/events/${event.id}`}
                      className="w-full inline-block bg-kerala-blue hover:bg-kerala-blue/90 text-black text-center py-2 px-4 rounded-md font-medium"
                    >
                      View Details
                    </Link>

                    {event.registrationRequired && (
                      <Button className="w-full bg-kerala-gold hover:bg-kerala-gold/90 text-blue-600">
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
            <p className="text-xl text-black mb-4">No upcoming events at this time</p>
            <p className="text-gray-600">Check back soon for exciting Malayalam cultural events!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
