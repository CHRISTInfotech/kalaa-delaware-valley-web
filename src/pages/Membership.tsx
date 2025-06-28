
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Users, Calendar, Heart, Star } from 'lucide-react';

const membershipBenefits = [
  "Access to all KALAA cultural events and celebrations",
  "Discounted rates for event registrations and workshops",
  "Monthly newsletter with community updates",
  "Voting rights in annual general meetings",
  "Access to community directory and networking opportunities",
  "Priority booking for venue rentals",
  "Participation in cultural committees and programs",
  "Access to Malayalam library and cultural resources"
];

const membershipTypes = [
  {
    type: "Individual Membership",
    fee: "$50/year",
    description: "Perfect for single professionals and students",
    icon: Users
  },
  {
    type: "Family Membership",
    fee: "$75/year",
    description: "Ideal for families with children",
    icon: Heart
  },
  {
    type: "Senior Membership",
    fee: "$30/year",
    description: "Special rate for members above 65 years",
    icon: Star
  },
  {
    type: "Student Membership",
    fee: "$25/year",
    description: "Discounted rate for full-time students",
    icon: Calendar
  }
];

const Membership = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-kerala-blue text-center mb-16">
          Membership
        </h1>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-2xl font-serif font-bold text-kerala-red mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Become a part of KALAA and connect with the vibrant Malayalam community in the Delaware Valley. 
            Our membership offers you the opportunity to celebrate Kerala's rich culture, participate in 
            meaningful events, and build lasting friendships.
          </p>
          <div className="bg-muted p-6 rounded-lg">
            <p className="text-kerala-blue font-semibold">
              "KALAA has been our home away from home for over 45 years, bringing together families 
              and preserving our beautiful Malayalam heritage."
            </p>
          </div>
        </div>

        {/* Membership Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-kerala-blue text-center mb-12">
            Membership Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipTypes.map((membership, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-kerala-gold/10 rounded-full flex items-center justify-center mb-4">
                    <membership.icon className="h-8 w-8 text-kerala-gold" />
                  </div>
                  <CardTitle className="text-lg text-kerala-blue">{membership.type}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-kerala-red">
                    {membership.fee}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{membership.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-kerala-blue mb-8">
                Membership Benefits
              </h2>
              <div className="space-y-4">
                {membershipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-kerala-gold/10 rounded-full p-1 mr-4 mt-1">
                      <Check className="h-4 w-4 text-kerala-gold" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop"
                alt="KALAA Community"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-kerala-blue text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-serif font-bold mb-6">Ready to Join?</h2>
              <p className="text-lg mb-8 text-gray-100">
                Take the first step towards becoming part of our amazing community. 
                Fill out our membership application and start your journey with KALAA today.
              </p>
              <Link to="/membership/apply">
                <Button size="lg" className="bg-kerala-gold hover:bg-kerala-gold/90 text-kerala-blue font-semibold">
                  Apply for Membership
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-kerala-blue mb-4">
            Questions about Membership?
          </h3>
          <p className="text-gray-600 mb-4">
            Contact our membership committee for more information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:membership@kalaa.org" 
              className="text-kerala-blue hover:text-kerala-gold"
            >
              membership@kalaa.org
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <span className="text-gray-600">(555) 123-4567</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
