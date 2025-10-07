import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'sw';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero
    'hero.badge': 'AI-Powered Food Intelligence',
    'hero.title1': 'Akiba AI',
    'hero.title2': 'Save Food',
    'hero.description': 'Reduce food waste by 70% using AI and weather predictions. Know exactly what food to stock and prepare each day.',
    'hero.waste': 'Less Waste',
    'hero.saved': 'Saved monthly',
    'hero.weather': 'Weather Smart',
    'hero.predictions': 'AI predictions',
    'hero.cta1': 'Get Started',
    'hero.cta2': 'Learn More',
    'hero.savings': 'Saved today',
    
    // Features
    'features.title': 'Our Features',
    'features.subtitle': 'Modern technology helping you reduce waste and increase profits',
    'features.ai.title': 'AI Predictions',
    'features.ai.desc': 'Artificial intelligence provides advice on what to stock based on historical data',
    'features.weather.title': 'Weather Integration',
    'features.weather.desc': 'Weather forecasts are used to predict food demand patterns',
    'features.offline.title': 'Offline Mode',
    'features.offline.desc': 'Work without internet - data will be saved and synced later',
    'features.payment.title': 'Intasend Payments',
    'features.payment.desc': 'Pay with M-Pesa, card, or bank account securely',
    'features.analytics.title': 'Analytics',
    'features.analytics.desc': 'Get complete reports on your business and save more money',
    'features.secure.title': 'Secure & Reliable',
    'features.secure.desc': 'Your data is safe and the system works all the time',
    
    // Dashboard
    'dashboard.title': 'AI Dashboard',
    'dashboard.subtitle': 'Real-time predictions for your restaurant',
    'dashboard.revenue': "Today's Revenue",
    'dashboard.revenue.change': 'from yesterday',
    'dashboard.waste': 'Waste Reduced',
    'dashboard.waste.period': 'This month',
    'dashboard.items': 'Food Items',
    'dashboard.items.active': 'Active inventory',
    'dashboard.savings': 'Savings',
    'dashboard.savings.period': 'Last 30 days',
    'dashboard.weather': 'Weather Impact',
    'dashboard.humidity': 'Humidity',
    'dashboard.wind': 'Wind',
    'dashboard.impact': 'Higher demand for cold drinks and light meals expected',
    'dashboard.predictions': 'AI Food Predictions',
    'dashboard.demand': 'Demand',
    'dashboard.stock': 'Stock',
    'dashboard.recommendation': 'AI Recommendation',
    'dashboard.recommendation.text': 'Increase Sukuma Wiki stock by 30% tomorrow. Weather forecast shows rainy conditions, typically increasing demand for warm meals.',
    'dashboard.update': 'Update Inventory',
    
    // Common
    'common.online': 'Online',
    'common.offline': 'Offline Mode',
  },
  sw: {
    // Hero
    'hero.badge': 'Akili Bandia ya Chakula',
    'hero.title1': 'Akiba AI',
    'hero.title2': 'Ukimu Chakula',
    'hero.description': 'Punguza hasara za chakula kwa 70% ukitumia AI na ubashiri wa hali ya hewa. Jua ni chakula gani cha kuhifadhi na kutayarisha kila siku.',
    'hero.waste': 'Hasara Chache',
    'hero.saved': 'Okoa kila mwezi',
    'hero.weather': 'Hali ya Hewa',
    'hero.predictions': 'Ubashiri wa AI',
    'hero.cta1': 'Anza Sasa',
    'hero.cta2': 'Jifunze Zaidi',
    'hero.savings': 'Hifadhi leo',
    
    // Features
    'features.title': 'Vipengele Vyetu',
    'features.subtitle': 'Teknolojia ya kisasa inayokusaidia kupunguza hasara na kuongeza faida',
    'features.ai.title': 'Ubashiri wa AI',
    'features.ai.desc': 'Akili Bandia inakupa ushauri wa kile cha kuhifadhi kulingana na data ya siku nyingi',
    'features.weather.title': 'Hali ya Hewa',
    'features.weather.desc': 'Ubashiri wa hali ya hewa unatumika kubaini mahitaji ya chakula',
    'features.offline.title': 'Bila Mtandao',
    'features.offline.desc': 'Fanya kazi bila mtandao - data itahifadhiwa na kusync baadaye',
    'features.payment.title': 'Malipo ya Intasend',
    'features.payment.desc': 'Lipa na M-Pesa, kadi, au akaunti ya benki kwa usalama',
    'features.analytics.title': 'Takwimu',
    'features.analytics.desc': 'Pata ripoti kamili za biashara yako na okoa pesa zaidi',
    'features.secure.title': 'Salama na Imara',
    'features.secure.desc': 'Data yako iko salama na system inafanya kazi kila wakati',
    
    // Dashboard
    'dashboard.title': 'Dashibodi ya AI',
    'dashboard.subtitle': 'Ubashiri wa wakati halisi kwa mkahawa wako',
    'dashboard.revenue': 'Mapato ya Leo',
    'dashboard.revenue.change': 'kutoka jana',
    'dashboard.waste': 'Hasara Zilizopunguzwa',
    'dashboard.waste.period': 'Mwezi huu',
    'dashboard.items': 'Vyakula',
    'dashboard.items.active': 'Hesabu ya sasa',
    'dashboard.savings': 'Akiba',
    'dashboard.savings.period': 'Siku 30 zilizopita',
    'dashboard.weather': 'Athari ya Hali ya Hewa',
    'dashboard.humidity': 'Unyevu',
    'dashboard.wind': 'Upepo',
    'dashboard.impact': 'Mahitaji makubwa ya vinywaji baridi na vyakula vya kupikika kwa kiasi kidogo',
    'dashboard.predictions': 'Ubashiri wa Chakula',
    'dashboard.demand': 'Mahitaji',
    'dashboard.stock': 'Hesabu',
    'dashboard.recommendation': 'Ushauri wa AI',
    'dashboard.recommendation.text': 'Ongeza Sukuma Wiki kwa 30% kesho. Ubashiri wa hali ya hewa unaonyesha mvua, ambayo huongeza mahitaji ya vyakula vya moto.',
    'dashboard.update': 'Sasisha Hesabu',
    
    // Common
    'common.online': 'Mtandaoni',
    'common.offline': 'Bila Mtandao',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'sw' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
