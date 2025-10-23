'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from './language-provider';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={`text-xs ${language === 'en'
            ? 'bg-lime-400 text-black hover:bg-lime-300'
            : 'border-white/30 text-white hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/10'
          }`}
      >
        EN
      </Button>
      <Button
        variant={language === 'ch' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('ch')}
        className={`text-xs ${language === 'ch'
            ? 'bg-lime-400 text-black hover:bg-lime-300'
            : 'border-white/30 text-white hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/10'
          }`}
      >
        CH
      </Button>
    </div>
  );
}