
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Users, Clock, ArrowLeft, Mail, Phone } from 'lucide-react';

// This would typically come from an API or database
const eventDetails = {
  1: {
    title: "Onam Celebration 2025",
    date: "September 15, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Community Hall, 123 Main St, Philadelphia, PA",
    participants: "200+ expected",
    description: "Join us for the grand Onam celebration with traditional Sadya, cultural programs, and Thiruvathira dance.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop",
    registrationRequired: true,
    fee: "$25 per person",
    program: [
      "6:00 PM - Registration and Welcome",
      "6:30 PM - Traditional Onam Sadya",
      "8:00 PM - Cultural Programs Begin",
      "8:30 PM - Thiruvathira Dance",
      "9:15 PM - Folk Songs and Stories",
      "10:00 PM - Closing Ceremony"
    ],
    contact: {
      email: "events@kalaa.org",
      phone: "(555) 123-4567"
    }
  }
};

const EventDetail = () => {
  const { id } = useParams();
  const event = eventDetails[id as keyof typeof eventDetails];

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
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/events/upcoming">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Upcoming Events
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-3xl text-kerala-blue">{event.title}</CardTitle>
                <CardDescription className="text-lg">{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-kerala-blue mb-4">Event Program</h3>
                    <ul className="space-y-2">
                      {event.program.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-kerala-gold mr-3">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-kerala-blue">Event Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3 text-kerala-gold" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-kerala-gold" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-kerala-gold mt-0.5" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-3 text-kerala-gold" />
                    <span>{event.participants}</span>
                  </div>
                  {event.fee && (
                    <div className="pt-2 border-t">
                      <span className="font-semibold text-kerala-red">Registration Fee: {event.fee}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {event.registrationRequired && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-kerala-blue">Registration</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-kerala-gold hover:bg-kerala-gold/90 mb-4">
                    Register Now
                  </Button>
                  <p className="text-sm text-gray-600 mb-4">
                    Registration deadline: 3 days before the event
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-kerala-gold" />
                      <a href={`mailto:${event.contact.email}`} className="text-kerala-blue hover:underline">
                        {event.contact.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-kerala-gold" />
                      <span>{event.contact.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
