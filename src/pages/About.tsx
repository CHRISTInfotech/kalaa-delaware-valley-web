import React from 'react';

import img from '@/components/images/image.png';

const About = () => {
  return (
    <div className="bg-white py-20 px-4" style={{ marginTop: '6rem' }}>
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl lg:text-5xl font-serif font-bold text-center text-kerala-gold mb-16">
          About Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div>
            <img
              src="{img}"
              alt="KALAA Community"
              className="w-full h-80 object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6 text-base text-gray-800 leading-relaxed mb-0">
            <p>
              The <strong>Malayali Association of Delaware Valley (KALAA)</strong> was established in 1979 as a 
              not-for-profit cultural organization dedicated to preserving and celebrating the 
              rich heritage of Kerala in the Delaware Valley region.
            </p>
            <p>
              For over four decades, we have served as a bridge between our homeland and our 
              new home, creating a supportive community where Malayalam culture thrives and 
              generations connect through shared traditions, language, and values.
            </p>
            <p>
              Our organization brings together families from across <strong>Pennsylvania, New Jersey, and 
              Delaware</strong>, fostering unity while celebrating the diversity within our community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
