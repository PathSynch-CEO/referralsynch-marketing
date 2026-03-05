import { useEffect } from 'react';

const SEOHead = ({ title, description, keywords, canonical, ogTitle, ogDescription, ogType = 'website', ogUrl, jsonLd }) => {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (name, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(name.startsWith('og:') ? 'property' : 'name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel, href) => {
      if (!href) return;
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    setMeta('description', description);
    setMeta('keywords', keywords);
    setLink('canonical', canonical);
    setMeta('og:title', ogTitle || title);
    setMeta('og:description', ogDescription || description);
    setMeta('og:type', ogType);
    setMeta('og:url', ogUrl || canonical);

    // JSON-LD structured data
    let scriptEl = document.querySelector('script[data-seo-jsonld]');
    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.setAttribute('type', 'application/ld+json');
        scriptEl.setAttribute('data-seo-jsonld', 'true');
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    }

    return () => {
      if (scriptEl) scriptEl.remove();
    };
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogType, ogUrl, jsonLd]);

  return null;
};

export default SEOHead;
