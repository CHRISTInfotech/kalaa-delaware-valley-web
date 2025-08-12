
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: "Sujith Sreedhar",
    position: "President",
    image: "src/components/images/Sujith Sreedhar.jpeg"
  },
  {
    name: "Swapna Saji Sebastian",
    position: "Secretary",
    image: "src/components/images/Swapna Saji Sebastian .jpeg"
  },
  {
    name: "Shaji Mittathany",
    position: "Treasurer",
    image: "src/components/images/Shaji Mittathany .jpeg"
  },
  {
    name: "George V George",
    position: "Vice President",
    image: "src/components/images/George V George .jpeg"
  },
  {
    name: "James Joseph",
    position: "Joint Secretary",
    image: "src/components/images/James Joseph.jpeg"
  },
  {
    name: "Sibichen Mukkadan",
    position: "Joint Treasurer",
    image: "src/components/images/Sibichen Mukkadan.jpeg"
  }
];

const Team = () => {
  return (
    <div className="min-h-screen py-16 bg-white" style={{ marginTop: '6rem' }}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-kerala-gold text-center mb-16">
          Our Team
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white border border-gray-200">
              <CardContent className="p-6">
                <div className="relative mx-auto w-40 h-40 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain rounded-full border-4 border-kerala-gold bg-white"
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
