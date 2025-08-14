
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Clock, ArrowLeft } from 'lucide-react';

// img imports
import onamImage from '@/components/images/onam image.jpg';
import xmasImage from '@/components/images/xmas.jpeg';


const eventDetails = {
  1: {
    title: "Onam Celebration 2024",
    date: "September 15, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Community Hall, 123 Main St, Philadelphia, PA",
    participants: "200+ expected",
    description: "Join us for the grand Onam celebration with traditional Sadya, cultural programs, and Thiruvathira dance.",
    image: "{onamImage}",
    registrationRequired: true,
    fee: "$25 per person",
    fullDescription: "Experience the joy and tradition of Onam with our community! This grand celebration will feature authentic Kerala cuisine with a traditional Sadya (feast) served on banana leaves, cultural performances including Thiruvathira dance, Kaikottikali, and classical music. We'll also have a Pookalam (flower carpet) competition and traditional games for all ages.",
    schedule: [
      "6:00 PM - Registration and Welcome",
      "6:30 PM - Pookalam Competition",
      "7:00 PM - Cultural Performances",
      "8:00 PM - Traditional Sadya",
      "9:00 PM - Community Activities",
      "10:00 PM - Closing Ceremony"
    ]
  },
  2: {
    title: "Malayalam New Year - Medam 1st",
    date: "April 14, 2025",
    time: "5:00 PM - 9:00 PM",
    location: "KALAA Community Center, Delaware Valley",
    participants: "150+ expected",
    description: "Celebrate the Malayalam New Year with traditional rituals, cultural performances, and community feast.",
    image: "{xmasImage}",
    registrationRequired: true,
    fee: "$20 per person",
    fullDescription: "Welcome the Malayalam New Year (Vishu) with us! Join our community for traditional Vishukkani arrangements, cultural performances, and a delicious feast featuring traditional Kerala dishes.",
    schedule: [
      "5:00 PM - Registration and Welcome",
      "5:30 PM - Vishukkani Viewing",
      "6:00 PM - Cultural Performances",
      "7:00 PM - Traditional Feast",
      "8:00 PM - Community Games",
      "9:00 PM - Closing"
    ]
  }
};

const EventDetail = () => {
  const { id } = useParams();
  const eventId = Number(id);
  const event = eventDetails[eventId as keyof typeof eventDetails];

  if (!event) {
    return (
      <div className="min-h-screen py-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-600 mb-4">Event Not Found</h1>
          <Link to="/events/upcoming">
            <Button>Back to Events</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 bg-white" style={{ marginTop: '6rem' }}>
      <div className="container mx-auto px-4">
        <Link to="/events/upcoming" className="inline-flex items-center text-kerala-blue hover:text-kerala-gold mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Events
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-3xl text-kerala-blue">{event.title}</CardTitle>
                <CardDescription className="text-lg">{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">{event.fullDescription}</p>
                
                <h3 className="text-xl font-semibold text-kerala-blue mb-4">Event Schedule</h3>
                <ul className="space-y-2">
                  {event.schedule.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-kerala-gold mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-kerala-blue">Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-3 text-kerala-gold" />
                  <div>
                    <div className="font-medium">{event.date}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-3 text-kerala-gold" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <MapPin className="h-5 w-5 mr-3 text-kerala-gold mt-0.5" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-3 text-kerala-gold" />
                  <span>{event.participants}</span>
                </div>
                
                {event.fee && (
                  <div className="pt-4 border-t">
                    <div className="text-kerala-red font-semibold text-lg">
                      Registration Fee: {event.fee}
                    </div>
                  </div>
                )}

                {event.registrationRequired && (
                  <div className="pt-4">
                    <Button className="w-full bg-kerala-gold hover:bg-kerala-gold/90 text-white">
                      Register Now
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
