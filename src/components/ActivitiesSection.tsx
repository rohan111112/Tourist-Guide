import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mountain, 
  Waves, 
  Plane, 
  Navigation, 
  Camera, 
  Tent,
  MapPin,
  ArrowRight,
  Star
} from 'lucide-react';

interface ActivitiesSectionProps {
  selectedActivity?: string;
  onActivitySelect: (activity: string) => void;
}

export default function ActivitiesSection({ selectedActivity, onActivitySelect }: ActivitiesSectionProps) {
  const { t } = useTranslation();

  const activities = [
    {
      key: 'trekking',
      name: t('activities.trekking'),
      icon: Mountain,
      description: 'Explore mountain trails and scenic routes',
      locations: [
        { name: 'Kanchenjunga Base Camp', difficulty: 'Hard', duration: '20-25 days', rating: 4.8 },
        { name: 'Makalu Base Camp', difficulty: 'Hard', duration: '18-22 days', rating: 4.7 },
        { name: 'Milke Danda Trek', difficulty: 'Medium', duration: '7-10 days', rating: 4.5 },
        { name: 'Basantapur-Jiri Trek', difficulty: 'Medium', duration: '5-7 days', rating: 4.3 }
      ]
    },
    {
      key: 'rafting',
      name: t('activities.rafting'),
      icon: Waves,
      description: 'Experience thrilling river adventures',
      locations: [
        { name: 'Tamur River', difficulty: 'Hard', duration: '5-7 days', rating: 4.6 },
        { name: 'Arun River', difficulty: 'Medium', duration: '3-5 days', rating: 4.4 },
        { name: 'Koshi River', difficulty: 'Easy', duration: '1-2 days', rating: 4.2 }
      ]
    },
    {
      key: 'paragliding',
      name: t('activities.paragliding'),
      icon: Plane,
      description: 'Soar above beautiful landscapes',
      locations: [
        { name: 'Dharan Hills', difficulty: 'Easy', duration: '2-3 hours', rating: 4.5 },
        { name: 'Ilam Tea Gardens', difficulty: 'Medium', duration: '1-2 hours', rating: 4.3 }
      ]
    },
    {
      key: 'safari',
      name: t('activities.safari'),
      icon: Camera,
      description: 'Wildlife watching and nature exploration',
      locations: [
        { name: 'Koshi Tappu Wildlife Reserve', difficulty: 'Easy', duration: '2-3 days', rating: 4.4 },
        { name: 'Makalu Barun National Park', difficulty: 'Medium', duration: '5-7 days', rating: 4.6 }
      ]
    },
    {
      key: 'camping',
      name: t('activities.camping'),
      icon: Tent,
      description: 'Overnight adventures in nature',
      locations: [
        { name: 'Halesi Mahadev', difficulty: 'Easy', duration: '1-2 nights', rating: 4.2 },
        { name: 'Pathibhara Trek', difficulty: 'Medium', duration: '3-5 nights', rating: 4.5 }
      ]
    },
    {
      key: 'hiking',
      name: t('activities.hiking'),
      icon: Navigation,
      description: 'Day hikes and short adventures',
      locations: [
        { name: 'Dhankuta Hills', difficulty: 'Easy', duration: '4-6 hours', rating: 4.1 },
        { name: 'Bhojpur Ridgeline', difficulty: 'Medium', duration: '6-8 hours', rating: 4.3 }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (selectedActivity) {
    const activity = activities.find(a => a.key === selectedActivity);
    if (activity) {
      return (
        <section className="py-16 bg-background">
          <div className="container-responsive">
            <Button 
              variant="ghost" 
              onClick={() => onActivitySelect('')}
              className="mb-8"
            >
              ← Back to Activities
            </Button>
            
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <activity.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold">{activity.name}</h1>
                  <p className="text-xl text-muted-foreground">{activity.description}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activity.locations.map((location, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{location.name}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          {location.rating}
                        </CardDescription>
                      </div>
                      <Badge className={getDifficultyColor(location.difficulty)}>
                        {location.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        Duration: {location.duration}
                      </div>
                      <Button className="w-full">
                        Book Adventure
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      );
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('nav.thingsToDo')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Adventure awaits in Koshi Pradesh with activities for every thrill-seeker
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <Card 
              key={activity.key} 
              className="group card-hover cursor-pointer"
              onClick={() => onActivitySelect(activity.key)}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <activity.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle>{activity.name}</CardTitle>
                <CardDescription>{activity.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {activity.locations.length} locations
                  </span>
                  <Button variant="ghost" size="sm" className="group/btn">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}