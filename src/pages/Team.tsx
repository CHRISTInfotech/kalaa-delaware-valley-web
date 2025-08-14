import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

// Import team member images
import sujith from '@/components/images/Sujith Sreedhar.jpeg';
import swapna from '@/components/images/Swapna Saji Sebastian.jpeg';
import shaji from '@/components/images/Shaji Mittathany.jpeg';
import george from '@/components/images/George V George.jpeg';
import james from '@/components/images/James Joseph.jpeg';
import sibichen from '@/components/images/Sibichen Mukkadan.jpeg';

// Import committee images
import bijoy from '@/components/images/Committee/Bejoy Parekadavil.jpg';
import georgeMathew from '@/components/images/Committee/George Mathew CPA.jpeg';
import jaiby from '@/components/images/Committee/Jaiby George.jpg';
import jaimol from '@/components/images/Committee/Jaimol Sreedhar.jpeg';
import jamesJoseph1 from '@/components/images/Committee/James Joseph (1).jpeg';
import jerly from '@/components/images/Committee/Jerly Kottor.jpeg';
import jimmy from '@/components/images/Committee/Jimmy Chacko.jpg';
import johny from '@/components/images/Committee/Johny Karumathy.jpg';
import jojo from '@/components/images/Committee/Jojo Kottor.png';
import joy from '@/components/images/Committee/Joy Karumathy.jpg';
import saji from '@/components/images/Committee/Saji Sebastian.jpg';
import sebastian from '@/components/images/Committee/Sebastian Abharam Kizhakethottam.jpg';
import siby from '@/components/images/Committee/Siby George.png';

// Team members
 const teamMembers = [
  { name: "Sujith Sreedhar", position: "President", image: sujith },
  { name: "Swapna Saji Sebastian", position: "Secretary", image: swapna },
  { name: "Shaji Mittathany", position: "Treasurer", image: shaji },
  { name: "George V George", position: "Vice President", image: george },
  { name: "James Joseph", position: "Joint Secretary", image: james },
  { name: "Sibichen Mukkadan", position: "Joint Treasurer", image: sibichen }
];

// Committee members
 const committeeMembers = [
  { name: "Bijoy Parekadavil", image: bijoy },
  { name: "George Mathew", image: georgeMathew },
  { name: "Jaiby George", image: jaiby },
  { name: "Jaimol Sreedhar", image: jaimol },
  { name: "James Joseph ", image: jamesJoseph1 },
  { name: "Jerly Kottor", image: jerly },
  { name: "Jimmy Chacko", image: jimmy },
  { name: "Johny Karumathy", image: johny },
  { name: "Jojo Kottor", image: jojo },
  { name: "Joy Karumathy", image: joy },
  { name: "Saji Sebastian", image: saji },
  { name: "Sebastian Abharam Kizhakethottam", image: sebastian },
  { name: "Siby george", image: siby }
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
