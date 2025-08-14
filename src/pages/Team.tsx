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

const committeeMembers = [
  { name: "Bijoy Parekadavil", image: "src/components/images/Committee/Bejoy Parekadavil.jpg" },
  { name: "Member 2", image: "src/components/images/Committee/George Mathew CPA.jpeg" },
  { name: "Member 3", image: "src/components/images/Committee/Jaiby George.jpg" },
  { name: "Member 4", image: "src/components/images/Committee/Jaimol Sreedhar.jpeg" },
  { name: "Member 5", image: "src/components/images/Committee/James Joseph (1).jpeg" },
  { name: "Member 6", image: "src/components/images/Committee/Jerly Kottor.jpeg" },
  { name: "Member 7", image: "src/components/images/Committee/Jimmy Chacko.jpg" },
  { name: "Member 8", image: "src/components/images/Committee/Johny Karumathy.jpg" },
  { name: "Member 9", image: "src/components/images/Committee/Jojo Kottor.png" },
  { name: "Member 10", image: "src/components/images/Committee/Joy Karumathy.jpg" },
  { name: "Member 11", image: "src/components/images/Committee/Saji Sebastian.jpg" },
  { name: "Member 12", image: "src/components/images/Committee/Sebastian Abharam Kizhakethottam.jpg" },
  { name: "Member 13", image: "src/components/images/Committee/Siby George.png" }
];

const Team = () => {
  return (
    <div className="min-h-screen py-16 bg-white" style={{ marginTop: '6rem' }}>
      <div className="container mx-auto px-4">
        
        {/* Our Team */}
        <h1 className="text-4xl font-serif font-bold text-kerala-gold text-center mb-16">
          Our Team
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

        {/* Committee Members */}
        <h2 className="text-3xl font-serif font-bold text-kerala-gold text-center mb-12">
          Committee Members
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {committeeMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mx-auto w-40 h-40 mb-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-2 border-kerala-gold bg-white"
                />
              </div>
              <p className="text-lg font-medium text-black">
                {member.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Team;
