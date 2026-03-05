import React from 'react';
import { ArrowRight, Store, QrCode, Building, Trophy } from 'lucide-react';
import { theme } from '../../theme';
import { ComparisonPageLayout, FeatureCheck, FAQItem, CTABanner } from '../../components/CompareShared';
import SEOHead from '../../components/SEOHead';

const VsUpPromote = () => {
  const features = [
    { feature: 'QR Code Referral Tracking', ours: true, theirs: false },
    { feature: 'NFC Tag Attribution', ours: true, theirs: false },
    { feature: 'Fraud Detection (13+ types)', ours: true, theirs: true },
    { feature: 'Automated Stripe Payouts', ours: true, theirs: true },
    { feature: 'Gamification (Tiers & Badges)', ours: true, theirs: false },
    { feature: 'Affiliate Program', ours: true, theirs: true },
    { feature: 'Influencer Management', ours: false, theirs: true },
    { feature: 'Multi-level Marketing (MLM)', ours: false, theirs: true },
    { feature: 'Works Outside Shopify', ours: true, theirs: false },
    { feature: 'Local Business Focus', ours: true, theirs: false },
    { feature: 'Physical Touchpoint Tracking', ours: true, theirs: false },
    { feature: 'Flat Pricing', ours: true, theirs: true },
  ];

  const faqs = [
    { question: "What's the difference between ReferralSynch and UpPromote?", answer: "UpPromote is a Shopify-exclusive affiliate and influencer management platform. ReferralSynch is a referral platform that works with any business—including physical locations. If you're on Shopify and need influencer tools, UpPromote is solid. If you need physical attribution or aren't on Shopify, ReferralSynch is your answer." },
    { question: 'Does ReferralSynch work with Shopify?', answer: "Yes! ReferralSynch integrates with Shopify, WooCommerce, and works standalone for any business. Unlike UpPromote, we're not limited to one platform." },
    { question: 'Does UpPromote offer QR code tracking?', answer: 'No. UpPromote is designed for online affiliate and influencer marketing with digital referral links. ReferralSynch offers QR code and NFC tag tracking for businesses that want to capture referrals from physical touchpoints like business cards, receipts, and in-store displays.' },
    { question: 'Which is better for local businesses?', answer: 'ReferralSynch, without question. UpPromote is built for eCommerce stores on Shopify. ReferralSynch is built for local businesses—restaurants, salons, contractors, retail stores—with physical QR/NFC attribution that tracks real-world referrals.' },
    { question: 'How does pricing compare?', answer: "Both platforms offer competitive pricing. UpPromote starts at $29.99/month for their Grow plan. ReferralSynch starts at $29/month for Starter. The main difference is what you get: UpPromote focuses on affiliate/influencer features, while ReferralSynch focuses on referral depth with fraud detection and physical attribution." },
  ];

  return (
    <ComparisonPageLayout>
      <SEOHead
        title="ReferralSynch vs UpPromote (2026) - Beyond Shopify Affiliates | ReferralSynch"
        description="Comparing ReferralSynch and UpPromote for referral marketing. See why businesses needing physical attribution and multi-platform support choose ReferralSynch."
        keywords="referralsynch vs uppromote, uppromote alternative, shopify referral app, uppromote competitors"
        canonical="https://referralsynch.com/compare/uppromote"
        ogTitle="ReferralSynch vs UpPromote - Affiliate Platform or Referral Engine?"
        ogDescription="UpPromote is Shopify-only. ReferralSynch works with any business. Compare features."
        ogType="article"
      />

      <section style={{ padding: '80px 32px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 800 }}>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.sage, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Comparison</p>
          <h1 style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: theme.colors.ink, lineHeight: 1.2, marginBottom: 24 }}>
            ReferralSynch vs UpPromote:{' '}
            <span style={{ color: theme.colors.forest }}>Affiliate Platform or Referral Engine?</span>
          </h1>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 18, color: theme.colors.charcoal, lineHeight: 1.7, marginBottom: 32 }}>
            UpPromote excels at affiliate and influencer management for Shopify stores. ReferralSynch is built for referral marketing with physical attribution—and works with any business, not just eCommerce.
          </p>
          <a href="/signup" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', backgroundColor: theme.colors.forest, color: theme.colors.warmWhite, borderRadius: 8, fontFamily: theme.fonts.body, fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
            Try ReferralSynch Free <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section style={{ padding: '0 32px 60px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {[
            { icon: Store, title: 'Beyond Shopify', desc: 'ReferralSynch works with any business—Shopify, WooCommerce, or standalone. UpPromote is Shopify-only.' },
            { icon: QrCode, title: 'Physical Attribution', desc: 'Track referrals from QR codes and NFC tags. UpPromote only tracks online affiliate links.' },
            { icon: Building, title: 'Local Business Ready', desc: 'Built for restaurants, salons, contractors, and retailers. UpPromote focuses on eCommerce.' },
            { icon: Trophy, title: 'Gamification', desc: '5 tiers and 20+ achievements to motivate advocates. UpPromote has no gamification.' },
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
                <th style={{ padding: '16px 20px', textAlign: 'center', fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.warmWhite }}>UpPromote</th>
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
        <CTABanner competitor="UpPromote" />
      </section>
    </ComparisonPageLayout>
  );
};

export default VsUpPromote;
