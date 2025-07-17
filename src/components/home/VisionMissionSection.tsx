import React from 'react';

export const VisionMissionSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-kerala-gold mb-8">
          Vision and Mission
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-white border-l-4 border-[#E1AD01] shadow-md rounded-lg p-6 h-full">
            <h3 className="text-2xl font-bold text-[#E1AD01] mb-4">Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              Kalaa is a not-for-profit [501(C)(3)] organization formed in 1979 and incorporated in the
              Commonwealth of Pennsylvania. It operates under a constitution and by-laws approved by the
              General Body. Officers of the organization are elected annually according to its by-laws.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white border-l-4 border-[#E1AD01] shadow-md rounded-lg p-6 h-full">
            <h3 className="text-2xl font-bold text-[#E1AD01] mb-4">Mission</h3>
            <ul className="pl-4 list-disc text-gray-700 space-y-2">
              <li>
                Conduct and coordinate charitable, educational, literary, scientific, cultural, and
                social activities for the Indian community of Kerala origin in the Delaware Valley.
              </li>
              <li>Help the poor and the needy both in America and abroad.</li>
              <li>Promote a better understanding and friendlier relationship among community members.</li>
              <li>Foster appreciation for the art and literature of India.</li>
              <li>
                Bring closer understanding between the Kerala immigrant community and the American
                community at large.
              </li>
              <li>
                Engage in activities in support of these objectives, as allowed under not-for-profit
                regulations.
              </li>
              <li>Promote political and civic awareness among members.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
