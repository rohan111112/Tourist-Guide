import Navigation from '@/components/Navigation';
import FestivalsSection from '@/components/FestivalsSection';

const Festivals = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={() => {}} />
      <FestivalsSection onFestivalSelect={() => {}} />
    </div>
  );
};

export default Festivals;