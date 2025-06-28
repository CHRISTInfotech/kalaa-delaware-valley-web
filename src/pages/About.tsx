
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-kerala-blue text-center mb-12">
            About Us
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop"
                alt="KALAA Community"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Malayali Association of Delaware Valley (KALAA) was established in 1979 as a 
                not-for-profit cultural organization dedicated to preserving and celebrating the 
                rich heritage of Kerala in the Delaware Valley region.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For over four decades, we have served as a bridge between our homeland and our 
                new home, creating a supportive community where Malayalam culture thrives and 
                generations connect through shared traditions, language, and values.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our organization brings together families from across Pennsylvania, New Jersey, and 
                Delaware, fostering unity while celebrating the diversity within our community.
              </p>
            </div>
          </div>

          <div className="bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold text-kerala-gold mb-6 text-center">
              Our Heritage
            </h2>
            <p className="text-gray-700 leading-relaxed text-center">
              Kerala, known as "God's Own Country," is renowned for its natural beauty, rich cultural 
              traditions, classical arts, and literary heritage. Through KALAA, we ensure that these 
              treasures continue to flourish in the Delaware Valley, passing them on to future generations 
              while embracing the opportunities and diversity of American life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
