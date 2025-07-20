import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WelcomeFeatures from '@/components/WelcomeFeatures';
import WeatherWidget from '@/components/WeatherWidget';
import QuickStats from '@/components/QuickStats';

const Index = () => {
  const navigate = useNavigate();

  const handleNavigation = (section: string) => {
    if (section === 'places') {
      navigate('/places');
    } else if (section === 'activities') {
      navigate('/activities');
    } else if (section === 'festivals') {
      navigate('/festivals');
    } else if (section === 'planTrip') {
      navigate('/plan-trip');
    } else if (section === 'travelUpdates') {
      navigate('/travel-updates');
    }
  };

  const handleExplore = () => {
    navigate('/places');
  };

  const handlePlanTrip = () => {
    navigate('/plan-trip');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={handleNavigation} />
      <Hero onExplore={handleExplore} onPlanTrip={handlePlanTrip} />
      <QuickStats />
      <WelcomeFeatures />
      <WeatherWidget />
    </div>
  );
};

export default Index;
