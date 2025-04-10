'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import mixpanel from 'mixpanel-browser';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const initialized = useRef(false);

  console.log('MIXPANEL TOKEN:', process.env.NEXT_PUBLIC_MIXPANEL_TOKEN);


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
      mixpanel.track('Page Viewed', { pathname });
    }
  }, [pathname]);

  return <>{children}</>;
}
