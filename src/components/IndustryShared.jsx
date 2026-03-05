import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { theme } from '../theme';
import Logo from './Logo';

export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true);
    }, { threshold: 0.2, ...options });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, isInView];
};

export const IndustryStickyHeader = ({ industry }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      backgroundColor: scrolled ? 'rgba(250, 249, 246, 0.98)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(27, 77, 62, 0.1)' : 'none',
      transition: 'all 0.3s',
    }}>
      <nav style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <Logo color={theme.colors.forest} size={28} />
          <span style={{ fontFamily: theme.fonts.display, fontSize: 20, fontWeight: 600, color: theme.colors.ink }}>ReferralSynch</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="/industries" style={{ fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.slate, textDecoration: 'none' }}>
            All Industries
          </a>
          <a href="/signup" style={{
            padding: '10px 20px', backgroundColor: theme.colors.forest, color: theme.colors.warmWhite,
            borderRadius: 6, fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, textDecoration: 'none',
          }}>
            Start Free Trial
          </a>
        </div>
      </nav>
    </header>
  );
};

export const StatCard = ({ value, label, icon: Icon }) => (
  <div style={{
    backgroundColor: theme.colors.warmWhite, padding: 28, borderRadius: 16,
    border: `1px solid ${theme.colors.mint}`, textAlign: 'center',
  }}>
    {Icon && <Icon size={28} color={theme.colors.forest} style={{ marginBottom: 12 }} />}
    <div style={{ fontFamily: theme.fonts.display, fontSize: 36, fontWeight: 500, color: theme.colors.forest, marginBottom: 4 }}>
      {value}
    </div>
    <div style={{ fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.slate }}>
      {label}
    </div>
  </div>
);

export const FeatureCard = ({ icon: Icon, title, description }) => (
  <div style={{
    backgroundColor: theme.colors.warmWhite, padding: 32, borderRadius: 16,
    border: `1px solid ${theme.colors.mint}`,
  }}>
    <div style={{
      width: 56, height: 56, borderRadius: 14, backgroundColor: theme.colors.mint,
      display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
    }}>
      <Icon size={28} color={theme.colors.forest} />
    </div>
    <h3 style={{ fontFamily: theme.fonts.body, fontSize: 20, fontWeight: 600, color: theme.colors.ink, marginBottom: 12 }}>
      {title}
    </h3>
    <p style={{ fontFamily: theme.fonts.body, fontSize: 15, color: theme.colors.charcoal, lineHeight: 1.7 }}>
      {description}
    </p>
  </div>
);

export const UseCaseCard = ({ title, description, touchpoints }) => (
  <div style={{
    backgroundColor: theme.colors.cream, padding: 32, borderRadius: 16,
    border: `1px solid ${theme.colors.mint}`,
  }}>
    <h4 style={{ fontFamily: theme.fonts.body, fontSize: 18, fontWeight: 600, color: theme.colors.ink, marginBottom: 12 }}>
      {title}
    </h4>
    <p style={{ fontFamily: theme.fonts.body, fontSize: 15, color: theme.colors.charcoal, lineHeight: 1.6, marginBottom: 16 }}>
      {description}
    </p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {touchpoints.map((tp, i) => (
        <span key={i} style={{
          backgroundColor: theme.colors.mint, color: theme.colors.forest,
          padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 500, fontFamily: theme.fonts.body,
        }}>
          {tp}
        </span>
      ))}
    </div>
  </div>
);

export const IndustryTestimonialCard = ({ quote, author, business, result }) => (
  <div style={{
    backgroundColor: theme.colors.warmWhite, padding: 32, borderRadius: 16,
    border: `1px solid ${theme.colors.mint}`,
  }}>
    <p style={{ fontFamily: theme.fonts.body, fontSize: 16, color: theme.colors.charcoal, lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' }}>
      &ldquo;{quote}&rdquo;
    </p>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
      <div>
        <p style={{ fontFamily: theme.fonts.body, fontSize: 15, fontWeight: 600, color: theme.colors.ink }}>{author}</p>
        <p style={{ fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.slate }}>{business}</p>
      </div>
      <div style={{ backgroundColor: theme.colors.forest, color: '#fff', padding: '8px 16px', borderRadius: 8 }}>
        <span style={{ fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600 }}>{result}</span>
      </div>
    </div>
  </div>
);

export const IndustryCTASection = ({ industry, headline }) => {
  const [ref, isInView] = useInView();
  return (
    <section ref={ref} style={{ padding: '40px 32px 80px' }}>
      <div style={{
        maxWidth: 1000, margin: '0 auto', backgroundColor: theme.colors.gold, borderRadius: 24,
        padding: '64px 48px', textAlign: 'center',
        opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease',
      }}>
        <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, marginBottom: 16 }}>
          {headline}
        </h2>
        <p style={{ fontFamily: theme.fonts.body, fontSize: 18, color: theme.colors.charcoal, marginBottom: 32, maxWidth: 600, margin: '0 auto 32px' }}>
          Join hundreds of {industry.toLowerCase()} businesses growing through word-of-mouth. Start your 14-day free trial today.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/signup" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 32px',
            backgroundColor: theme.colors.forest, color: theme.colors.warmWhite, borderRadius: 8,
            fontFamily: theme.fonts.body, fontSize: 16, fontWeight: 600, textDecoration: 'none',
          }}>
            Start Free Trial <ArrowRight size={18} />
          </a>
          <a href="/demo" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 32px',
            backgroundColor: theme.colors.warmWhite, color: theme.colors.forest, borderRadius: 8,
            fontFamily: theme.fonts.body, fontSize: 16, fontWeight: 600, textDecoration: 'none',
          }}>
            <Phone size={18} /> Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
};

const IndustryFooter = () => (
  <footer style={{ backgroundColor: theme.colors.ink, color: 'rgba(255,255,255,0.7)', padding: '60px 32px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <Logo color={theme.colors.mint} size={28} />
          <span style={{ fontFamily: theme.fonts.display, fontSize: 18, color: '#fff' }}>ReferralSynch</span>
        </div>
        <p style={{ fontSize: 14, maxWidth: 280 }}>Turn your customers into your best advocates.</p>
      </div>
      <div style={{ display: 'flex', gap: 48 }}>
        {[
          { title: 'Industries', links: [
            { name: 'Retail', href: '/industries/retail' },
            { name: 'Beauty & Wellness', href: '/industries/beauty-wellness' },
            { name: 'Food & Beverage', href: '/industries/food-beverage' },
            { name: 'Home Services', href: '/industries/home-services' },
            { name: 'eCommerce', href: '/industries/ecommerce' },
          ]},
          { title: 'Product', links: [
            { name: 'Features', href: '/#features' },
            { name: 'Pricing', href: '/pricing' },
            { name: 'Compare', href: '/compare' },
          ]},
          { title: 'Company', links: [
            { name: 'About', href: '/about' },
            { name: 'Blog', href: '/blog' },
            { name: 'Contact', href: '/contact' },
          ]},
        ].map(group => (
          <div key={group.title}>
            <h4 style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: 16 }}>{group.title}</h4>
            {group.links.map(link => (
              <a key={link.name} href={link.href} style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', marginBottom: 8 }}>{link.name}</a>
            ))}
          </div>
        ))}
      </div>
    </div>
    <div style={{ maxWidth: 1200, margin: '40px auto 0', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
      &copy; 2026 ReferralSynch. A PathSynch Labs product. Made with <span style={{ color: '#EF4444' }}>&hearts;</span> in Atlanta.
    </div>
  </footer>
);

export const IndustryPageLayout = ({ children }) => (
  <>
    {children}
    <IndustryFooter />
  </>
);
