
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: "Dr. Rajesh Kumar",
    position: "President",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Priya Nair",
    position: "Vice President",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Suresh Menon",
    position: "Secretary",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Lakshmi Pillai",
    position: "Treasurer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Krishna Iyer",
    position: "Cultural Secretary",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Meera Thomas",
    position: "Youth Coordinator",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face"
  }
];

const Team = () => {
  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-kerala-gold text-center mb-16">
          Our Team
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white border border-gray-200">
              <CardContent className="p-6">
                <div className="relative mx-auto w-32 h-32 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-4 border-kerala-gold"
                  />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {member.name}
                </h3>
                <p className="text-kerala-gold font-medium">
                  {member.position}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
