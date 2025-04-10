'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initMixpanel } from '../lib/mixpanelClient';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    initMixpanel();
    // Optionally track page views:
    // mixpanel.track('Page Viewed', { pathname });
  }, []);

  return <>{children}</>;
}
