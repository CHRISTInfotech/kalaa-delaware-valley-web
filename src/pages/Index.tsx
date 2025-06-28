
import React from 'react';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { WhyJoinSection } from '@/components/home/WhyJoinSection';
import { VisionMissionSection } from '@/components/home/VisionMissionSection';
import { LatestNewsSection } from '@/components/home/LatestNewsSection';
import { UpcomingEventsSection } from '@/components/home/UpcomingEventsSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <WhyJoinSection />
      <VisionMissionSection />
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <LatestNewsSection />
            <UpcomingEventsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
