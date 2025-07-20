import { useState } from 'react';
import Navigation from '@/components/Navigation';
import ActivitiesSection from '@/components/ActivitiesSection';

const Activities = () => {
  const [selectedActivity, setSelectedActivity] = useState<string>('');

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={() => {}} />
      <ActivitiesSection 
        selectedActivity={selectedActivity} 
        onActivitySelect={setSelectedActivity} 
      />
    </div>
  );
};

export default Activities;