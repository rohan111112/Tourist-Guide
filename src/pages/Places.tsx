import { useState } from 'react';
import Navigation from '@/components/Navigation';
import PlacesSection from '@/components/PlacesSection';

const Places = () => {
  const [selectedPlace, setSelectedPlace] = useState<string>('');

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={() => {}} />
      <PlacesSection 
        selectedPlace={selectedPlace} 
        onPlaceSelect={setSelectedPlace} 
      />
    </div>
  );
};

export default Places;