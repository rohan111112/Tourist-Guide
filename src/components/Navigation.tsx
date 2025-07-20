import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

interface NavigationProps {
  onNavigate: (section: string, subsection?: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const places = [
    { key: 'dharan', name: t('places.dharan.name') },
    { key: 'ilam', name: t('places.ilam.name') },
    { key: 'koshiTappu', name: t('places.koshiTappu.name') },
    { key: 'kanchenjunga', name: 'Kanchenjunga Base Camp' },
    { key: 'makalu', name: 'Makalu Barun National Park' },
    { key: 'halasi', name: 'Halasi Mahadev' },
    { key: 'panchthar', name: 'Panchthar' },
    { key: 'bhojpur', name: 'Bhojpur' },
    { key: 'basantapur', name: 'Basantapur' },
  ];

  const activities = [
    { key: 'trekking', name: t('activities.trekking') },
    { key: 'boating', name: t('activities.boating') },
    { key: 'paragliding', name: t('activities.paragliding') },
    { key: 'rafting', name: t('activities.rafting') },
    { key: 'safari', name: t('activities.safari') },
    { key: 'camping', name: t('activities.camping') },
    { key: 'hiking', name: t('activities.hiking') },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">K</span>
            </div>
            <span className="font-bold text-xl hero-text">Koshi Pradesh Tourism</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Places to Go */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary">
                    {t('nav.placesToGo')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-80 gap-3 p-4 md:w-96 md:grid-cols-2">
                      {places.map((place) => (
                        <button
                          key={place.key}
                          onClick={() => navigate('/places')}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                        >
                          <div className="text-sm font-medium leading-none">{place.name}</div>
                        </button>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Things to Do */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary">
                    {t('nav.thingsToDo')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-80 gap-3 p-4 md:w-96 md:grid-cols-2">
                      {activities.map((activity) => (
                        <button
                          key={activity.key}
                          onClick={() => navigate('/activities')}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                        >
                          <div className="text-sm font-medium leading-none">{activity.name}</div>
                        </button>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Other Menu Items */}
                <NavigationMenuItem>
                  <Button 
                    variant="ghost" 
                    onClick={() => navigate('/festivals')}
                    className="text-foreground hover:text-primary"
                  >
                    {t('nav.festivals')}
                  </Button>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Button 
                    variant="ghost" 
                    onClick={() => navigate('/plan-trip')}
                    className="text-foreground hover:text-primary"
                  >
                    {t('nav.planTrip')}
                  </Button>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Button 
                    variant="ghost" 
                    onClick={() => navigate('/travel-updates')}
                    className="text-foreground hover:text-primary"
                  >
                    {t('nav.travelUpdates')}
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  {i18n.language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage('en')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('ne')}>
                  नेपाली
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('hi')}>
                  हिन्दी
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage('en')}>EN</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('ne')}>नेपाली</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('hi')}>हिन्दी</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => {
                  navigate('/places');
                  setIsMobileMenuOpen(false);
                }}
              >
                {t('nav.placesToGo')}
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => {
                  navigate('/activities');
                  setIsMobileMenuOpen(false);
                }}
              >
                {t('nav.thingsToDo')}
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => {
                  navigate('/festivals');
                  setIsMobileMenuOpen(false);
                }}
              >
                {t('nav.festivals')}
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => {
                  navigate('/plan-trip');
                  setIsMobileMenuOpen(false);
                }}
              >
                {t('nav.planTrip')}
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => {
                  navigate('/travel-updates');
                  setIsMobileMenuOpen(false);
                }}
              >
                {t('nav.travelUpdates')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
