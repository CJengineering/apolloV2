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
    setCookie('NEXT_LOCALE', newLocale, 30);

    let newPath = currentPathname;

    newPath = newPath.replace(new RegExp(`^/(${i18nConfig.locales.join('|')})(?=/|$)`), '');

    if (newLocale !== i18nConfig.defaultLocale) {
      newPath = `/${newLocale}${newPath}`;
    }

    if (newPath === '') {
      newPath = '/';
    }

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
    <div className="absolute top-24 right-4 flex justify-center items-center">
      <div className="bg-slate-100 py-1 px-2 rounded">
        {derivedLocale === 'en' ? (
          <span
            onClick={() => handleChange('ar')}
            className="cursor-pointer mono text-xs font-medium"
          >
            عربي
          </span>
        ) : (
          <span
            onClick={() => handleChange('en')}
            className="cursor-pointer mono text-xs uppercase font-medium"
          >
            english
          </span>
        )}
      </div>
    </div>
  );
}
