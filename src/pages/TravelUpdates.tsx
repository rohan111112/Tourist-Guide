import Navigation from '@/components/Navigation';
import TravelUpdatesSection from '@/components/TravelUpdatesSection';

const TravelUpdates = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={() => {}} />
      <TravelUpdatesSection />
    </div>
  );
};

export default TravelUpdates;