import React from 'react';
import { ArrowRight, Store, QrCode, Receipt, Trophy, Shield, Users, TrendingUp, DollarSign } from 'lucide-react';
import { theme } from '../../theme';
import { IndustryPageLayout, IndustryStickyHeader, StatCard, FeatureCard, UseCaseCard, IndustryTestimonialCard, IndustryCTASection } from '../../components/IndustryShared';
import SEOHead from '../../components/SEOHead';

const RetailIndustry = () => {
  const stats = [
    { value: '92%', label: 'of consumers trust referrals from people they know', icon: Users },
    { value: '4x', label: 'higher conversion rate for referred customers', icon: TrendingUp },
    { value: '25%', label: 'higher profit margins on referred sales', icon: DollarSign },
  ];

  const features = [
    { icon: QrCode, title: 'In-Store QR Codes', description: 'Place branded QR codes at checkout, on receipts, shopping bags, and dressing rooms. Track exactly which touchpoint drives each referral.' },
    { icon: Receipt, title: 'Receipt Integration', description: 'Print unique referral codes on every receipt. Turn every transaction into a referral opportunity without changing your POS workflow.' },
    { icon: Trophy, title: 'VIP Loyalty Tiers', description: '5 customizable tiers turn casual shoppers into brand ambassadors. Reward your best advocates with exclusive perks and early access.' },
    { icon: Shield, title: 'Fraud Protection', description: 'Prevent return abuse, coupon stacking, and self-referrals with 13+ automated fraud checks designed for retail environments.' },
  ];

  const useCases = [
    { title: 'Boutique & Specialty Retail', description: 'Turn your loyal customers into a referral army. Perfect for fashion boutiques, gift shops, and specialty stores where personal recommendations matter.', touchpoints: ['Shopping bags', 'Dressing room mirrors', 'Gift receipts', 'Loyalty cards'] },
    { title: 'Multi-Location Retail', description: 'Track referral performance across all your locations. See which stores generate the most advocates and replicate their success.', touchpoints: ['Store-specific QR codes', 'Regional campaigns', 'Staff incentives', 'Cross-store attribution'] },
    { title: 'Pop-Up & Event Retail', description: 'Capture referrals at temporary locations with portable QR codes and NFC tags. Turn event attendees into long-term customers.', touchpoints: ['Event signage', 'Product tags', 'Business cards', 'NFC table displays'] },
  ];

  return (
    <IndustryPageLayout>
      <SEOHead
        title="Referral Marketing for Retail Stores | ReferralSynch"
        description="Turn every shopping bag, receipt, and in-store display into a referral opportunity. ReferralSynch helps retail businesses track physical touchpoints and reward customers who spread the word."
        keywords="retail referral program, store referral marketing, boutique customer referrals, retail word of mouth"
        canonical="https://referralsynch.com/industries/retail"
        ogTitle="Referral Marketing for Retail Stores"
        ogDescription="Track referrals from QR codes on shopping bags, receipts, and in-store displays. Reward customers who spread the word."
      />
      <IndustryStickyHeader industry="Retail" />

      <section style={{ padding: '120px 32px 80px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <Store size={24} color={theme.colors.forest} />
            <span style={{ fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.sage, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Retail Industry</span>
          </div>
          <h1 style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: theme.colors.ink, lineHeight: 1.2, marginBottom: 24 }}>
            Referral Marketing for{' '}<span style={{ color: theme.colors.forest }}>Retail Stores</span>
          </h1>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 18, color: theme.colors.charcoal, lineHeight: 1.7, marginBottom: 32 }}>
            Turn every shopping bag, receipt, and in-store display into a referral opportunity. ReferralSynch helps retail businesses track physical touchpoints and reward customers who spread the word.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/signup" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', backgroundColor: theme.colors.forest, color: theme.colors.warmWhite, borderRadius: 8, fontFamily: theme.fonts.body, fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>Start Free Trial <ArrowRight size={16} /></a>
            <a href="/demo" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', backgroundColor: 'transparent', color: theme.colors.forest, borderRadius: 8, fontFamily: theme.fonts.body, fontSize: 15, fontWeight: 600, textDecoration: 'none', border: `2px solid ${theme.colors.forest}` }}>See Retail Demo</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 32px 80px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {stats.map((stat, i) => <StatCard key={i} {...stat} />)}
        </div>
      </section>

      <section style={{ padding: '80px 32px', backgroundColor: theme.colors.warmWhite }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 16 }}>Built for Retail</h2>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 18, color: theme.colors.charcoal, textAlign: 'center', marginBottom: 48, maxWidth: 600, margin: '0 auto 48px' }}>Features designed specifically for brick-and-mortar retail environments.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {features.map((feature, i) => <FeatureCard key={i} {...feature} />)}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 32px', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 48 }}>How Retail Businesses Use ReferralSynch</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {useCases.map((uc, i) => <UseCaseCard key={i} {...uc} />)}
        </div>
      </section>

      <section style={{ padding: '0 32px 80px', maxWidth: 800, margin: '0 auto' }}>
        <IndustryTestimonialCard quote="We put QR codes on our shopping bags and receipts. Within 3 months, referrals became our #2 acquisition channel behind Google. The ROI is incredible." author="Sarah Chen" business="Urban Threads Boutique" result="+340% referrals" />
      </section>

      <IndustryCTASection industry="Retail" headline="Ready to turn shoppers into advocates?" />
    </IndustryPageLayout>
  );
};

export default RetailIndustry;
