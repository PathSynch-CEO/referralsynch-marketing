import React from 'react';
import { ArrowRight, Shield, QrCode, CreditCard, DollarSign } from 'lucide-react';
import { theme } from '../../theme';
import { ComparisonPageLayout, FeatureCheck, FAQItem, CTABanner } from '../../components/CompareShared';
import SEOHead from '../../components/SEOHead';

const VsSmileIO = () => {
  const features = [
    { feature: 'QR Code Referral Tracking', ours: true, theirs: false },
    { feature: 'NFC Tag Attribution', ours: true, theirs: false },
    { feature: 'Fraud Detection (13+ types)', ours: true, theirs: false },
    { feature: 'Automated Stripe Payouts', ours: true, theirs: false },
    { feature: 'Points-based Rewards', ours: true, theirs: true },
    { feature: 'VIP Tiers', ours: true, theirs: true },
    { feature: 'Referral Program', ours: true, theirs: true },
    { feature: 'Loyalty Program', ours: false, theirs: true },
    { feature: 'Birthday Rewards', ours: false, theirs: true },
    { feature: 'Flat Pricing (No Revenue Limits)', ours: true, theirs: false },
    { feature: 'Local Business Focus', ours: true, theirs: false },
    { feature: 'Physical Touchpoint Tracking', ours: true, theirs: false },
  ];

  const faqs = [
    { question: "What's the main difference between ReferralSynch and Smile.io?", answer: 'Smile.io is a full loyalty platform (points, VIP tiers, birthday rewards) with referrals as one feature. ReferralSynch is purpose-built for referral marketing with deeper functionality: physical QR/NFC attribution, 13+ fraud detection types, automated Stripe payouts, and advanced gamification. If referrals are your priority, ReferralSynch delivers more.' },
    { question: 'Does ReferralSynch offer a loyalty points program?', answer: "Currently, ReferralSynch focuses exclusively on referral marketing. If you need a comprehensive loyalty program with points for purchases, birthday rewards, and reviews, Smile.io might be a better fit. However, if referrals are your main growth channel, ReferralSynch offers deeper functionality." },
    { question: 'How does pricing compare between the two?', answer: "Smile.io's Growth plan is $199/month with a 1,000 order limit. ReferralSynch Growth is $69/month with no order limits—just advocate limits. For referral-focused businesses, ReferralSynch is significantly more cost-effective." },
    { question: 'Can I use both platforms together?', answer: "Yes! Some businesses use Smile.io for their loyalty program and ReferralSynch for referrals. ReferralSynch's superior fraud detection and physical attribution can complement Smile.io's broader loyalty features." },
    { question: 'Which platform is better for local businesses?', answer: 'ReferralSynch is specifically designed for local businesses with physical locations. Our QR code and NFC tracking lets you capture referrals from business cards, receipts, and in-store displays—something Smile.io cannot do.' },
  ];

  return (
    <ComparisonPageLayout>
      <SEOHead
        title="ReferralSynch vs Smile.io (2026) - Loyalty vs Referral Focus | ReferralSynch"
        description="Comparing ReferralSynch and Smile.io for referral marketing. Discover why businesses focused on referrals choose ReferralSynch for fraud detection, QR tracking, and flat pricing."
        keywords="referralsynch vs smile.io, smile.io alternative, smile io referral, loyalty program vs referral program"
        canonical="https://referralsynch.com/compare/smile-io"
        ogTitle="ReferralSynch vs Smile.io - Which Should You Choose?"
        ogDescription="Smile.io is a loyalty platform. ReferralSynch is referral-focused. See which is right for you."
        ogType="article"
      />

      <section style={{ padding: '80px 32px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 800 }}>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.sage, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Comparison</p>
          <h1 style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: theme.colors.ink, lineHeight: 1.2, marginBottom: 24 }}>
            ReferralSynch vs Smile.io:{' '}
            <span style={{ color: theme.colors.forest }}>Loyalty Platform or Referral Powerhouse?</span>
          </h1>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 18, color: theme.colors.charcoal, lineHeight: 1.7, marginBottom: 32 }}>
            Smile.io is a comprehensive loyalty platform. ReferralSynch is a referral-first solution with enterprise features. The right choice depends on whether you need broad loyalty features or deep referral functionality.
          </p>
          <a href="/signup" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', backgroundColor: theme.colors.forest, color: theme.colors.warmWhite, borderRadius: 8, fontFamily: theme.fonts.body, fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
            Try ReferralSynch Free <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section style={{ padding: '0 32px 60px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {[
            { icon: Shield, title: 'Fraud-First Design', desc: 'ReferralSynch has 13+ fraud checks including VPN detection, velocity abuse, and device fingerprinting. Smile.io has minimal fraud protection.' },
            { icon: QrCode, title: 'Physical Attribution', desc: 'Track referrals from QR codes and NFC tags in physical locations. Smile.io is digital-only.' },
            { icon: CreditCard, title: 'Automated Payouts', desc: 'Advocates get paid directly to their bank via Stripe Connect. Smile.io uses points and discount codes.' },
            { icon: DollarSign, title: 'No Order Limits', desc: 'ReferralSynch charges by advocates, not orders. Smile.io caps orders at each tier.' },
          ].map((card, i) => (
            <div key={i} style={{ backgroundColor: theme.colors.warmWhite, padding: 28, borderRadius: 16, border: `1px solid ${theme.colors.mint}` }}>
              <card.icon size={28} color={theme.colors.forest} style={{ marginBottom: 16 }} />
              <h3 style={{ fontFamily: theme.fonts.body, fontSize: 18, fontWeight: 600, color: theme.colors.ink, marginBottom: 8 }}>{card.title}</h3>
              <p style={{ fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.slate, lineHeight: 1.6 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '60px 32px', backgroundColor: theme.colors.warmWhite }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 40 }}>Feature Comparison</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: theme.colors.cream, borderRadius: 16, overflow: 'hidden' }}>
            <thead>
              <tr style={{ backgroundColor: theme.colors.forest }}>
                <th style={{ padding: '16px 20px', textAlign: 'left', fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.warmWhite }}>Feature</th>
                <th style={{ padding: '16px 20px', textAlign: 'center', fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.warmWhite }}>ReferralSynch</th>
                <th style={{ padding: '16px 20px', textAlign: 'center', fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.warmWhite }}>Smile.io</th>
              </tr>
            </thead>
            <tbody>{features.map((f, i) => <FeatureCheck key={i} {...f} />)}</tbody>
          </table>
        </div>
      </section>

      <section style={{ padding: '80px 32px', maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 48 }}>Frequently Asked Questions</h2>
        {faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
      </section>

      <section style={{ padding: '0 32px 80px', maxWidth: 900, margin: '0 auto' }}>
        <CTABanner competitor="Smile.io" />
      </section>
    </ComparisonPageLayout>
  );
};

export default VsSmileIO;
