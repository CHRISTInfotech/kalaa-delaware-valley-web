
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Users, Calendar, Heart, Star } from 'lucide-react';
import { UserPlus } from 'lucide-react';

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
        {/* Membership Types */}
        <div className="mb-16">
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
          <Card className="max-w-2xl mx-auto bg-kerala-blue text-black">
            <CardContent className="p-12">
              <h2 className="text-3xl text-black font-bold mb-6">Ready to Join?</h2>
              <p className="text-lg mb-8 text-black">
                Take the first step towards becoming part of our amazing community.
                Fill out our membership application and start your journey with KALAA today.
              </p>
              <Link to="/membership/apply">
                <div className="flex justify-center mt-6">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold shadow-lg rounded-full px-6 py-3 flex items-center gap-2"
                  >
                    <UserPlus className="w-5 h-5" />
                    Apply for Membership
                  </Button>
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}

      </div>
    </div>
  );
};

export default Membership;
