import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Calendar, MapPin, Users } from 'lucide-react';

const pastEvents = [
  {
    id: 1,
    title: "Onam Celebration 2024",
    date: "September 14, 2024",
    location: "Community Hall, Philadelphia, PA",
    participants: "250+ attendees",
    description:
      "A grand celebration of Onam with traditional Sadya, cultural programs, and Thiruvathira dance performances.",
    image: "/src/components/images/onam image.jpg",
    highlights: [
      "Traditional Onam Sadya for 250+ people",
      "Pookalam competition with 15+ participants",
      "Cultural performances by community members"
    ]
  },
  {
    id: 2,
    title: "Vishu Celebration 2024",
    date: "April 15, 2024",
    location: "KALAA Community Center, Delaware Valley",
    participants: "180+ attendees",
    description:
      "Malayalam New Year celebration with Vishukkani, traditional feast, and cultural programs.",
    image: "/src/components/images/vishu 1.jpeg",
    highlights: [
      "Traditional Vishukkani arrangement",
      "Kaikottikali dance performance",
      "Community feast with traditional dishes"
    ]
  },
  {
    id: 3,
    title: "Christmas Celebration 2023",
    date: "December 23, 2023",
    location: "Community Hall, Philadelphia, PA",
    participants: "200+ attendees",
    description:
      "Festive Christmas celebration with carols, cultural programs, and community dinner.",
    image: "/src/components/images/xmas.jpeg",
    highlights: [
      "Christmas carol singing competition",
      "Cultural dance performances",
      "Secret Santa gift exchange"
    ]
  }
];

const PastEvents = () => {
  return (
    <div className="min-h-screen py-16 bg-white" style={{ marginTop: '6rem' }}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-kerala-gold text-center mb-16">
          Past Events
        </h1>

        <div className="space-y-8">
          {pastEvents.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden hover:shadow-lg transition-shadow bg-white border border-gray-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  {/* Fixed image size and uniform display */}
                  <div className="w-full h-64 lg:h-80 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                <div className="lg:col-span-2 p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl text-black mb-2">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="space-y-2">
                        <div className="flex items-center text-black">
                          <Calendar className="h-4 w-4 mr-3 text-kerala-gold" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-start text-black">
                          <MapPin className="h-4 w-4 mr-3 text-kerala-gold mt-0.5" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-black">
                          <Users className="h-4 w-4 mr-3 text-kerala-gold" />
                          <span>{event.participants}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-2">
                          Event Highlights:
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {event.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-kerala-gold mr-2">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
