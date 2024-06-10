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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLocale = e.target.value;

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
    <div className="flex items-center space-x-4">
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          name="language"
          value="en"
          checked={derivedLocale === 'en'}
          onChange={handleChange}
          className="form-radio hover:cursor-pointer h-4 w-4 text-blue-600"
        />
        <span>English</span>
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          name="language"
          value="ar"
          checked={derivedLocale === 'ar'}
          onChange={handleChange}
          className="form-radio hover:cursor-pointer h-4 w-4 text-blue-600"
        />
        <span>Arabic</span>
      </label>
    </div>
  );
}
