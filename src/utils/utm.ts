export function getUtmParamsFromURL() {
    if (typeof window === 'undefined') return {};
  
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
    };
  }
  