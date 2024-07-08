'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { i18nConfig } from '@/i18nConfig';
import { useEffect, useState } from 'react';
import { getCookie, setCookie } from '@/functions/utils/cookies';

export default function LanguageChanger() {
  const router = useRouter();
  const currentPathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState<string>(i18nConfig.defaultLocale);

  useEffect(() => {
    const locale = getCookie('NEXT_LOCALE') || i18nConfig.defaultLocale;
    setCurrentLocale(locale);
  }, []);

  const getLocaleFromPathname = (pathname: string) => {
    const pathLocale = pathname.split('/')[1];
    return i18nConfig.locales.includes(pathLocale) ? pathLocale : i18nConfig.defaultLocale;
  };

  const handleChange = (newLocale: string) => {
    // Set cookie for next-i18n-router
    setCookie('NEXT_LOCALE', newLocale, 30);

    let newPath = currentPathname;

    console.log('Current Pathname:', currentPathname);
    console.log('Current Locale:', currentLocale);
    console.log('New Locale:', newLocale);

    // Remove any existing locale prefix
    newPath = newPath.replace(new RegExp(`^/(${i18nConfig.locales.join('|')})(?=/|$)`), '');

    // Add the new locale prefix if it's not the default locale
    if (newLocale !== i18nConfig.defaultLocale) {
      newPath = `/${newLocale}${newPath}`;
    }

    // Ensure that we handle the root path properly
    if (newPath === '') {
      newPath = '/';
    }

    console.log('New Path:', newPath);

    // Update the current locale state and redirect to the new locale path if different
    if (currentLocale !== newLocale) {
      setCurrentLocale(newLocale);
      router.push(newPath);
      router.refresh();
    }
  };

  useEffect(() => {
    const derivedLocale = getLocaleFromPathname(currentPathname);
    if (derivedLocale !== currentLocale) {
      setCurrentLocale(derivedLocale);
    }
  }, [currentPathname, currentLocale]);

  const derivedLocale = getLocaleFromPathname(currentPathname);

  return (
    <div className="flex  text-xs items-center space-x-2">
      <span
        onClick={() => handleChange('en')}
        className={`cursor-pointer mono ${derivedLocale === 'en' ? 'font-bold' : ''}`}
      >
        EN
      </span>
      <span
        onClick={() => handleChange('ar')}
        className={`cursor-pointer text-xs  mono ${derivedLocale === 'ar' ? 'font-bold' : ''}`}
      >
        ع
      </span>
    </div>
  );
}
