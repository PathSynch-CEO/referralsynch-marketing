import React from 'react';
import { ArrowRight, Store, Scissors, Coffee, Home, ShoppingBag, Wrench, Dumbbell, Briefcase } from 'lucide-react';
import { theme } from '../../theme';
import { IndustryPageLayout, IndustryStickyHeader, IndustryCTASection } from '../../components/IndustryShared';
import SEOHead from '../../components/SEOHead';

const IndustriesIndex = () => {
  const industries = [
    { icon: Store, name: 'Retail', tagline: 'Turn shopping bags and receipts into referral machines', href: '/industries/retail', color: '#E11D48' },
    { icon: Scissors, name: 'Beauty & Wellness', tagline: 'Fill your appointment book through word-of-mouth', href: '/industries/beauty-wellness', color: '#EC4899' },
    { icon: Coffee, name: 'Food & Beverage', tagline: 'Turn diners into ambassadors for your restaurant', href: '/industries/food-beverage', color: '#F59E0B' },
    { icon: Home, name: 'Home Services', tagline: 'Grow your contractor business through neighbor referrals', href: '/industries/home-services', color: '#3B82F6' },
    { icon: Wrench, name: 'Auto Services', tagline: 'Turn oil changes and repairs into referral opportunities', href: '/industries/auto-services', color: '#F97316' },
    { icon: Dumbbell, name: 'Fitness Studios', tagline: 'Turn members into your best recruiting tool', href: '/industries/fitness', color: '#8B5CF6' },
    { icon: Briefcase, name: 'Professional Services', tagline: 'Turn client satisfaction into high-value referrals', href: '/industries/professional-services', color: '#0EA5E9' },
    { icon: ShoppingBag, name: 'eCommerce', tagline: 'Build a referral engine with fraud protection built-in', href: '/industries/ecommerce', color: '#7C3AED' },
  ];

  return (
    <IndustryPageLayout>
      <SEOHead
        title="Referral Marketing by Industry | ReferralSynch"
        description="See how businesses in retail, beauty, food & beverage, home services, auto services, fitness, professional services, and eCommerce use ReferralSynch to grow through word-of-mouth referrals."
        canonical="https://referralsynch.com/industries"
      />
      <IndustryStickyHeader industry="" />

      <section style={{ padding: '120px 32px 80px', maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h1 style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: theme.colors.ink, marginBottom: 16 }}>
            Referral Marketing for{' '}
            <span style={{ color: theme.colors.forest }}>Your Industry</span>
          </h1>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 18, color: theme.colors.charcoal, maxWidth: 600, margin: '0 auto' }}>
            ReferralSynch is built for local businesses. See how companies in your industry use physical attribution and automated rewards to grow through word-of-mouth.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {industries.map((ind) => (
            <a
              key={ind.name}
              href={ind.href}
              style={{
                display: 'flex', alignItems: 'center', gap: 24, padding: 32,
                backgroundColor: theme.colors.warmWhite, borderRadius: 16,
                border: `1px solid ${theme.colors.mint}`, textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = theme.colors.forest; e.currentTarget.style.transform = 'translateX(8px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = theme.colors.mint; e.currentTarget.style.transform = 'translateX(0)'; }}
            >
              <div style={{
                width: 64, height: 64, borderRadius: 16, backgroundColor: ind.color + '15',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <ind.icon size={32} color={ind.color} />
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontFamily: theme.fonts.body, fontSize: 22, fontWeight: 600, color: theme.colors.ink, marginBottom: 4 }}>{ind.name}</h2>
                <p style={{ fontFamily: theme.fonts.body, fontSize: 15, color: theme.colors.slate }}>{ind.tagline}</p>
              </div>
              <ArrowRight size={24} color={theme.colors.forest} />
            </a>
          ))}
        </div>
      </section>

      <IndustryCTASection industry="your" headline="Don't see your industry? We can help." />
    </IndustryPageLayout>
  );
};

export default IndustriesIndex;
