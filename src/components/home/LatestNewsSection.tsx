
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const news = [
  {
    id: 1,
    title: "Community Cleanup Drive",
    description: "Our recent cleanup event brought together 100+ volunteers. Here's what happened.",
    date: "December 15, 2024"
  },
  {
    id: 2,
    title: "Annual Meeting 2025",
    description: "Highlights from our association's annual general meeting and plans ahead.",
    date: "December 10, 2024"
  }
];

export const LatestNewsSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-serif font-bold text-kerala-blue mb-8">Latest News</h2>
      {news.length > 0 ? (
        <div className="space-y-6">
          {news.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
          <Link to="/news">
            <Button className="w-full bg-kerala-blue hover:bg-kerala-blue/90">
              View All News
            </Button>
          </Link>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No recent news available</p>
          <Link to="/news">
            <Button variant="outline">View News Page</Button>
          </Link>
        </div>
      )}
    </div>
  );
};
