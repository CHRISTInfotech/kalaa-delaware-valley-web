
import React from 'react';
import { Users, Calendar, Heart, Trophy } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: "350+",
    description: "Active Members"
  },
  {
    icon: Calendar,
    title: "20+",
    description: "Achieved Events"
  },
  {
    icon: Heart,
    title: "25+",
    description: "Years of Cultural Heritage"
  },
  {
    icon: Trophy,
    title: "10+",
    description: "Sponsors"
  }
];

export const WhyJoinSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-red-600 mb-6">
              Why You Should Join KALAA
            </h2>
            <p className="text-lg text-black mb-8 leading-relaxed">
              At the KALAA, we are more than just a community; we are a family that celebrates 
              the vibrant culture and traditions of Kerala in the heart of Ontario, Canada. As a 
              non-profit cultural organization, we bring together the Malayalee diaspora in 
              Kitchener, Waterloo, Cambridge, and Guelph areas to create a strong, supportive, 
              and inclusive community.
            </p>
            <p className="text-lg text-black leading-relaxed">
              By choosing us, you gain access to cultural enrichment, a platform to preserve 
              heritage, and opportunities to connect, grow, and contribute meaningfully to society. 
              Join us in celebrating unity, diversity, and the spirit of Kerala, away from home!
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-100 rounded-lg hover:shadow-lg transition-shadow border border-gray-200">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-black mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
