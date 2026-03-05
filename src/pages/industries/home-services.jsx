import React from 'react';
import { ArrowRight, Home, Wrench, Receipt, CreditCard, Shield, Users, DollarSign, Percent } from 'lucide-react';
import { theme } from '../../theme';
import { IndustryPageLayout, IndustryStickyHeader, StatCard, FeatureCard, UseCaseCard, IndustryTestimonialCard, IndustryCTASection } from '../../components/IndustryShared';
import SEOHead from '../../components/SEOHead';

const HomeServicesIndustry = () => {
  const stats = [
    { value: '85%', label: 'of homeowners hire contractors based on referrals', icon: Users },
    { value: '$2,500', label: 'average job value from referred customers', icon: DollarSign },
    { value: '50%', label: 'lower acquisition cost vs. paid advertising', icon: Percent },
  ];

  const features = [
    { icon: Wrench, title: 'Technician Referral Cards', description: 'Give each technician their own QR-coded business cards. Track which team members generate the most referrals and reward top performers.' },
    { icon: Receipt, title: 'Invoice Referral Codes', description: 'Add referral codes to every invoice and estimate. Turn completed jobs into future opportunities.' },
    { icon: CreditCard, title: 'Cash Rewards via Stripe', description: "Homeowners prefer cash over discounts. Send automatic payouts directly to referrers' bank accounts." },
    { icon: Shield, title: 'Lead Verification', description: 'Verify referrals are legitimate before paying out. Our fraud detection prevents gaming and self-referrals.' },
  ];

  const useCases = [
    { title: 'HVAC & Plumbing', description: "Emergency services often come from neighbor recommendations. Make sure you're capturing—and rewarding—that word-of-mouth.", touchpoints: ['Service invoices', 'Technician cards', 'Yard signs', 'Vehicle magnets'] },
    { title: 'Roofing & Exteriors', description: 'Neighbors see the work you do. Give satisfied customers an easy way to refer the friends who ask "who did your roof?"', touchpoints: ['Completion certificates', 'Yard signs', 'Door hangers', 'Before/after photo cards'] },
    { title: 'Cleaning & Landscaping', description: 'Recurring service businesses thrive on referrals. Reward customers who recommend your weekly or monthly services.', touchpoints: ['Service reminders', 'Crew cards', 'Seasonal mailers', 'Review request cards'] },
  ];

  return (
    <IndustryPageLayout>
      <SEOHead
        title="Referral Marketing for Contractors & Home Services | ReferralSynch"
        description="Grow your contractor business through neighbor referrals. ReferralSynch tracks referrals from technician cards, yard signs, and invoices with automatic payouts."
        keywords="contractor referral program, HVAC referrals, plumber word of mouth, home service marketing, roofing referrals"
        canonical="https://referralsynch.com/industries/home-services"
        ogTitle="Referral Marketing for Contractors & Home Services"
        ogDescription="Track referrals from technician cards and yard signs. Pay cash rewards automatically via Stripe."
      />
      <IndustryStickyHeader industry="Home Services" />

      <section style={{ padding: '120px 32px 80px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <Home size={24} color={theme.colors.forest} />
            <span style={{ fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.sage, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Home Services</span>
          </div>
          <h1 style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: theme.colors.ink, lineHeight: 1.2, marginBottom: 24 }}>
            Referral Marketing for{' '}<span style={{ color: theme.colors.forest }}>Contractors & Home Services</span>
          </h1>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 18, color: theme.colors.charcoal, lineHeight: 1.7, marginBottom: 32 }}>
            Homeowners trust recommendations from neighbors. ReferralSynch helps contractors track referrals from technician cards, yard signs, and invoices—then automatically reward the customers who send new business your way.
          </p>
          <a href="/signup" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', backgroundColor: theme.colors.forest, color: theme.colors.warmWhite, borderRadius: 8, fontFamily: theme.fonts.body, fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>Start Free Trial <ArrowRight size={16} /></a>
        </div>
      </section>

      <section style={{ padding: '0 32px 80px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {stats.map((stat, i) => <StatCard key={i} {...stat} />)}
        </div>
      </section>

      <section style={{ padding: '80px 32px', backgroundColor: theme.colors.warmWhite }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 48 }}>Built for Home Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {features.map((feature, i) => <FeatureCard key={i} {...feature} />)}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 32px', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 48 }}>How Home Service Businesses Use ReferralSynch</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {useCases.map((uc, i) => <UseCaseCard key={i} {...uc} />)}
        </div>
      </section>

      <section style={{ padding: '0 32px 80px', maxWidth: 800, margin: '0 auto' }}>
        <IndustryTestimonialCard quote="We give every technician their own referral card with a QR code. Now we know exactly who's generating word-of-mouth, and we can reward both the tech and the customer." author="James Crawford" business="Crawford Plumbing & HVAC" result="$47K in referral jobs" />
      </section>

      <IndustryCTASection industry="Home Services" headline="Ready to grow through word-of-mouth?" />
    </IndustryPageLayout>
  );
};

export default HomeServicesIndustry;
