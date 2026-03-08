import React from 'react';
import { ArrowRight } from 'lucide-react';
import { theme } from '../../theme';
import { ComparisonPageLayout, FeatureCheck, FAQItem, CTABanner } from '../../components/CompareShared';
import SEOHead from '../../components/SEOHead';

const VsFriendbuy = () => {
  const features = [
    { feature: 'QR Code Referral Tracking', ours: true, theirs: false },
    { feature: 'NFC Tag Attribution', ours: true, theirs: false },
    { feature: 'Fraud Detection (13+ types)', ours: true, theirs: true },
    { feature: 'Automated Stripe Payouts', ours: true, theirs: false },
    { feature: 'Gamification (Tiers & Badges)', ours: true, theirs: false },
    { feature: 'Enterprise Analytics', ours: true, theirs: true },
    { feature: 'A/B Testing', ours: true, theirs: true },
    { feature: 'API Access', ours: true, theirs: true },
    { feature: 'SMB Pricing Available', ours: true, theirs: false },
    { feature: 'Flat Pricing (No Success Fees)', ours: true, theirs: false },
    { feature: 'Self-serve Setup', ours: true, theirs: false },
    { feature: 'White-label Portal', ours: true, theirs: true },
  ];

  const faqs = [
    { question: 'How does ReferralSynch compare to Friendbuy for enterprise features?', answer: "Friendbuy is built for enterprise brands with custom pricing starting at $1,000+/month plus success fees. ReferralSynch offers comparable enterprise features (fraud detection, API access, white-labeling) at SMB-friendly pricing — start free and scale to Pro at $179/month with no success fees." },
    { question: 'Does ReferralSynch have the same fraud protection as Friendbuy?', answer: "Yes, and more. ReferralSynch offers 13+ fraud detection types including VPN detection, velocity abuse, device fingerprinting, and behavioral analysis. Our fraud detection is on par with Friendbuy's enterprise offering, but included in all plans." },
    { question: 'Why is ReferralSynch so much cheaper than Friendbuy?', answer: "Friendbuy targets enterprise brands and charges accordingly. ReferralSynch was built for local businesses and SMBs, with efficient cloud architecture that keeps costs low. We don't charge success fees because we believe you shouldn't pay extra for being successful." },
    { question: 'Can small businesses use Friendbuy?', answer: "Friendbuy focuses on enterprise customers and doesn't publish pricing—you need to contact sales. Their minimum contracts typically start at $1,000+/month. ReferralSynch is designed for businesses of all sizes — start free, then upgrade as you grow." },
    { question: "What does ReferralSynch have that Friendbuy doesn't?", answer: "Physical QR/NFC attribution for tracking real-world referrals, full gamification with 5 tiers and 20+ achievements, automated Stripe Connect payouts to advocates' bank accounts, and self-serve setup with pricing that doesn't require a sales call." },
  ];

  return (
    <ComparisonPageLayout>
      <SEOHead
        title="ReferralSynch vs Friendbuy (2026) - Enterprise Features, SMB Pricing | ReferralSynch"
        description="Compare ReferralSynch to Friendbuy. Get enterprise-grade fraud detection and analytics without enterprise pricing. See why growing businesses choose ReferralSynch."
        keywords="referralsynch vs friendbuy, friendbuy alternative, friendbuy pricing, friendbuy competitors, enterprise referral software"
        canonical="https://referralsynch.com/compare/friendbuy"
        ogTitle="ReferralSynch vs Friendbuy - Enterprise Features at SMB Pricing"
        ogDescription="Friendbuy starts at $1,000+/month. ReferralSynch starts at $29/month with comparable features."
        ogType="article"
      />

      <section style={{ padding: '80px 32px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 800 }}>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.sage, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Comparison</p>
          <h1 style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: theme.colors.ink, lineHeight: 1.2, marginBottom: 24 }}>
            ReferralSynch vs Friendbuy:{' '}
            <span style={{ color: theme.colors.forest }}>Enterprise Features Without Enterprise Pricing</span>
          </h1>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 18, color: theme.colors.charcoal, lineHeight: 1.7, marginBottom: 32 }}>
            Friendbuy builds excellent referral software for enterprise brands—with enterprise pricing to match. ReferralSynch delivers comparable features at a fraction of the cost, plus physical attribution that Friendbuy can't match.
          </p>
          <a href="/signup" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', backgroundColor: theme.colors.forest, color: theme.colors.warmWhite, borderRadius: 8, fontFamily: theme.fonts.body, fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
            Try ReferralSynch Free <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Pricing Callout */}
      <section style={{ padding: '0 32px 60px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ backgroundColor: theme.colors.gold, padding: 40, borderRadius: 16, textAlign: 'center' }}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: 28, color: theme.colors.ink, marginBottom: 16 }}>Enterprise features. Startup-friendly pricing.</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: 14, color: theme.colors.charcoal, marginBottom: 8 }}>ReferralSynch Growth</p>
              <p style={{ fontFamily: theme.fonts.display, fontSize: 48, fontWeight: 500, color: theme.colors.forest }}>$69<span style={{ fontSize: 18 }}>/mo</span></p>
            </div>
            <div>
              <p style={{ fontSize: 14, color: theme.colors.charcoal, marginBottom: 8 }}>Friendbuy (Starting)</p>
              <p style={{ fontFamily: theme.fonts.display, fontSize: 48, fontWeight: 500, color: theme.colors.ink }}>$1,000<span style={{ fontSize: 18 }}>/mo+</span></p>
            </div>
          </div>
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
                <th style={{ padding: '16px 20px', textAlign: 'center', fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.warmWhite }}>Friendbuy</th>
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
        <CTABanner competitor="Friendbuy" />
      </section>
    </ComparisonPageLayout>
  );
};

export default VsFriendbuy;
