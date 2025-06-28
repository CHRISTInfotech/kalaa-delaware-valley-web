
import React from 'react';
import { Users, Calendar, Heart, Trophy } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: "350+ Active Members",
    description: "Join a thriving community of Malayalees"
  },
  {
    icon: Calendar,
    title: "20+ Annual Events",
    description: "Participate in cultural celebrations and programs"
  },
  {
    icon: Heart,
    title: "25+ Years of Heritage",
    description: "Be part of preserving Kerala's rich traditions"
  },
  {
    icon: Trophy,
    title: "10+ Community Partners",
    description: "Support our community initiatives and growth"
  }
];

export const WhyJoinSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-kerala-red mb-6">
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
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-kerala-blue/10 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-kerala-blue" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-kerala-blue mb-2">{benefit.title}</h3>
                <p className="text-sm text-black">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
