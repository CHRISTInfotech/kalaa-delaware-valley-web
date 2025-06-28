
import React from 'react';

export const VisionMissionSection = () => {
  return (
    <section className="py-16 cultural-pattern">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center text-kerala-gold mb-16">
          Vision and Mission
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="border-l-4 border-kerala-gold pl-8">
            <h3 className="text-2xl font-serif font-bold text-kerala-gold mb-6">Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              KALAA is a not-for-profit [501(C)(3)] organization formed in 1979 and incorporated 
              in the Commonwealth of Pennsylvania. It operates under a constitution and by-laws 
              approved by the General Body. Officers of the organization are elected annually 
              according to its by-laws.
            </p>
          </div>

          {/* Mission */}
          <div className="border-l-4 border-kerala-red pl-8">
            <h3 className="text-2xl font-serif font-bold text-kerala-red mb-6">Mission</h3>
            <ul className="text-gray-700 space-y-3">
              <li className="flex items-start">
                <span className="text-kerala-red mr-2">•</span>
                Conduct and coordinate charitable, educational, literary, scientific, cultural, and social activities for the Indian community of Kerala origin in the Delaware Valley.
              </li>
              <li className="flex items-start">
                <span className="text-kerala-red mr-2">•</span>
                Help the poor and the needy both in America and abroad.
              </li>
              <li className="flex items-start">
                <span className="text-kerala-red mr-2">•</span>
                Promote a better understanding and friendlier relationship among community members.
              </li>
              <li className="flex items-start">
                <span className="text-kerala-red mr-2">•</span>
                Foster appreciation for the art and literature of India.
              </li>
              <li className="flex items-start">
                <span className="text-kerala-red mr-2">•</span>
                Bring closer understanding between the Kerala immigrant community and the American community at large.
              </li>
              <li className="flex items-start">
                <span className="text-kerala-red mr-2">•</span>
                Engage in activities in support of these objectives, as allowed under not-for-profit regulations.
              </li>
              <li className="flex items-start">
                <span className="text-kerala-red mr-2">•</span>
                Promote political and civic awareness among members.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
