import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, Camera, Utensils, Compass } from 'lucide-react';
import dharanImage from '@/assets/clock tower.jpg';
import ilamImage from '@/assets/ilam.jpg';
import koshiTappuImage from '@/assets/koshi-tappu.jpg';
import kanchenjungaImage from '@/assets/kanchenjunga.jpg';

interface PlacesSectionProps {
  selectedPlace?: string;
  onPlaceSelect: (place: string) => void;
}

export default function PlacesSection({ selectedPlace, onPlaceSelect }: PlacesSectionProps) {
  const { t } = useTranslation();

  const places = [
    { 
      key: 'dharan', 
      name: t('places.dharan.name'),
      image: dharanImage,
      category: 'City',
      highlights: ['Cultural Diversity', 'Pleasant Climate', 'Religious Sites']
    },
    { 
      key: 'ilam', 
      name: t('places.ilam.name'),
      image: ilamImage,
      category: 'Hill Station',
      highlights: ['Tea Gardens', 'Scenic Beauty', 'Cool Climate']
    },
    { 
      key: 'koshiTappu', 
      name: t('places.koshiTappu.name'),
      image: koshiTappuImage,
      category: 'Wildlife Reserve',
      highlights: ['Bird Watching', 'Wildlife', 'Wetlands']
    },
    { 
      key: 'kanchenjunga', 
      name: 'Kanchenjunga Base Camp',
      image: kanchenjungaImage,
      category: 'Trekking',
      highlights: ['Mountain Views', 'Adventure', 'High Altitude']
    },
  ];

  if (selectedPlace) {
    const place = places.find(p => p.key === selectedPlace);
    if (place) {
      return (
        <section className="py-16 bg-background">
          <div className="container-responsive">
            <Button 
              variant="ghost" 
              onClick={() => onPlaceSelect('')}
              className="mb-8"
            >
              ← Back to Places
            </Button>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="w-full h-96 object-cover rounded-lg shadow-large"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <Badge variant="secondary" className="mb-2">{place.category}</Badge>
                  <h1 className="text-4xl font-bold mb-4">{place.name}</h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    {t(`places.${selectedPlace}.intro`)}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">How to Reach</h3>
                      <p className="text-muted-foreground">{t(`places.${selectedPlace}.howToReach`)}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Camera className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Culture</h3>
                      <p className="text-muted-foreground">{t(`places.${selectedPlace}.culture`)}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Utensils className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Food</h3>
                      <p className="text-muted-foreground">{t(`places.${selectedPlace}.food`)}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Compass className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Hidden Destinations</h3>
                      <p className="text-muted-foreground">{t(`places.${selectedPlace}.hiddenDestinations`)}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="flex-1">Plan Visit</Button>
                  <Button variant="outline" className="flex-1">View Gallery</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }

  return (
    <section className="py-16 bg-muted/50">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('nav.placesToGo')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the incredible destinations that make Koshi Pradesh a must-visit region
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {places.map((place) => (
            <Card 
              key={place.key} 
              className="group card-hover cursor-pointer overflow-hidden"
              onClick={() => onPlaceSelect(place.key)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="mb-2">{place.category}</Badge>
                    <h3 className="text-white font-semibold text-lg">{place.name}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-1 mb-3">
                  {place.highlights.map((highlight, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full group/btn">
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}