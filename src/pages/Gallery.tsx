
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, ArrowLeft } from 'lucide-react';

const eventCollections = [
  {
    id: 1,
    name: "Onam Celebration 2024",
    coverImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 2,
    name: "Vishu Festival 2024",
    coverImage: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 3,
    name: "Christmas Celebration 2023",
    coverImage: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&h=600&fit=crop"
    ]
  }
];

const Gallery = () => {
  const [selectedEvent, setSelectedEvent] = useState<typeof eventCollections[0] | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openEventGallery = (event: typeof eventCollections[0]) => {
    setSelectedEvent(event);
  };

  const closeEventGallery = () => {
    setSelectedEvent(null);
  };

  const openImageModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="container mx-auto px-4">
        {!selectedEvent ? (
          <>
            <h1 className="text-4xl font-serif font-bold text-kerala-gold text-center mb-16">
              Event Gallery
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventCollections.map((event) => (
                <Card 
                  key={event.id} 
                  className="cursor-pointer hover:shadow-lg transition-shadow bg-white border border-gray-200"
                  onClick={() => openEventGallery(event)}
                >
                  <CardContent className="p-0">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img
                        src={event.coverImage}
                        alt={event.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-all duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h3 className="text-white font-semibold text-lg">{event.name}</h3>
                        <p className="text-gray-200 text-sm">{event.images.length} photos</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center mb-8">
              <Button 
                variant="ghost" 
                onClick={closeEventGallery}
                className="mr-4 text-black hover:text-kerala-gold"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Gallery
              </Button>
              <h1 className="text-3xl font-serif font-bold text-kerala-gold">
                {selectedEvent.name}
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedEvent.images.map((image, index) => (
                <div 
                  key={index}
                  className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden bg-white border border-gray-200"
                  onClick={() => openImageModal(image)}
                >
                  <img
                    src={image}
                    alt={`${selectedEvent.name} - Photo ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={closeImageModal}
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                src={selectedImage}
                alt="Full size view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
