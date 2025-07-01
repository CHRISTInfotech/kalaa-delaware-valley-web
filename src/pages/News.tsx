import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: "KALAA Hosts Successful Community Cleanup Drive",
    excerpt: "Over 100 volunteers from the Malayalam community came together for a neighborhood cleanup initiative, demonstrating our commitment to environmental responsibility.",
    content: "Our recent community cleanup event brought together families, young professionals, and students from across the Delaware Valley. The initiative covered three neighborhoods and collected over 500 pounds of litter while planting 50 new trees.",
    author: "KALAA Communications Team",
    date: "December 15, 2024",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=300&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Annual General Meeting 2025 - Key Decisions and Future Plans",
    excerpt: "KALAA's Annual General Meeting outlined ambitious plans for 2025, including new cultural programs and community outreach initiatives.",
    content: "The meeting saw record attendance with over 200 members participating. Key decisions included expanding our youth programs, establishing a scholarship fund, and planning our 50th anniversary celebration.",
    author: "Secretary, KALAA",
    date: "December 10, 2024",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=300&fit=crop",
    featured: false
  },
  {
    id: 3,
    title: "New Partnership with Local Schools for Malayalam Language Classes",
    excerpt: "KALAA partners with three local schools to introduce Malayalam language and cultural education programs for children.",
    content: "This groundbreaking partnership will offer weekend Malayalam classes to over 150 children in the Delaware Valley area, ensuring our language and culture continue to thrive among younger generations.",
    author: "Cultural Secretary",
    date: "November 28, 2024",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=300&fit=crop",
    featured: false
  },
  {
    id: 4,
    title: "KALAA Celebrates 45 Years of Cultural Excellence",
    excerpt: "Reflecting on four and a half decades of preserving Kerala's rich cultural heritage in the Delaware Valley.",
    content: "Since 1979, KALAA has been the cornerstone of Malayalam culture in our region. From humble beginnings with just 20 families to today's vibrant community of 350+ members, our journey has been remarkable.",
    author: "KALAA Historical Committee",
    date: "November 15, 2024",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=300&fit=crop",
    featured: false
  }
];

const News = () => {
  const featuredNews = newsArticles.find(article => article.featured);
  const otherNews = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif text-black font-bold text-center mb-16">
          News & Updates
        </h1>

        {/* Featured News */}
        {featuredNews && (
          <div className="mb-16">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-8">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {featuredNews.date}
                      <User className="h-4 w-4 ml-4 mr-2" />
                      {featuredNews.author}
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl text-kerala-blue mb-3">
                      {featuredNews.title}
                    </CardTitle>
                    <CardDescription className="text-lg leading-relaxed">
                      {featuredNews.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {featuredNews.content}
                    </p>
                    <Button className="bg-white hover:bg-/90">
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Other News */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherNews.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <Calendar className="h-3 w-3 mr-1" />
                  {article.date}
                </div>
                <CardTitle className="text-lg text-kerala-blue group-hover:text-kerala-gold transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{article.author}</span>
                  <Button variant="ghost" size="sm" className="text-kerala-blue hover:text-kerala-gold">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
