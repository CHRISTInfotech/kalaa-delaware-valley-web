
import React from 'react';

const benefits = [
  {
    icon: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
    title: "350+",
    description: "Active Members"
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/1049/1049160.png",
    title: "20+",
    description: "Achieved Events"
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/2921/2921222.png",
    title: "25+",
    description: "Years of Cultural Heritage"
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/942/942748.png",
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
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100 h-full">
                <div className="flex justify-center mb-4">
                  <img 
                    src={benefit.icon} 
                    alt={benefit.description}
                    className="w-20 h-20 object-contain"
                  />
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
