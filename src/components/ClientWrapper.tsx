'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import mixpanel from 'mixpanel-browser';

function getUtmSource(searchParams: URLSearchParams) {
  const utm_source = searchParams.get('utm_source') ?? 'direct';

  // Save to localStorage for future use (optional)
  if (typeof window !== 'undefined') {
    localStorage.setItem('utm_source', utm_source);
  }

  return utm_source;
}

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
      if (token) {
        mixpanel.init(token, { debug: true });
        initialized.current = true;
      } else {
        console.warn('Mixpanel token is missing');
      }
    }
  }, []);

  useEffect(() => {
    if (initialized.current && typeof mixpanel.track === 'function') {
      const utm_source = getUtmSource(searchParams);

      // Track page view with just utm_source
      mixpanel.track('Page Viewed', {
        pathname,
        utm_source,
      });

      // Set it on the user profile once
      mixpanel.people?.set_once({
        'UTM Source': utm_source,
      });

      // Clean URL by removing query params
      if (typeof window !== 'undefined' && window.location.search.includes('utm_')) {
        setTimeout(() => {
          const cleanUrl = window.location.pathname + window.location.hash;
          window.history.replaceState(null, '', cleanUrl);
        }, 500);
      }
    }
  }, [pathname, searchParams]);

  return <>{children}</>;
}
