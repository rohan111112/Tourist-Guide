import Navigation from '@/components/Navigation';
import PlanTripSection from '@/components/PlanTripSection';

const PlanTrip = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={() => {}} />
      <PlanTripSection />
    </div>
  );
};

export default PlanTrip;