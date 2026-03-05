import React from 'react';
import { ArrowRight, Check, X, QrCode, Shield, DollarSign, Trophy } from 'lucide-react';
import { theme } from '../../theme';
import { ComparisonPageLayout, FeatureCheck, FAQItem, CTABanner } from '../../components/CompareShared';
import Logo from '../../components/Logo';
import SEOHead from '../../components/SEOHead';

const VsReferralCandy = () => {
  const features = [
    { feature: 'QR Code Referral Tracking', ours: true, theirs: false },
    { feature: 'NFC Tag Attribution', ours: true, theirs: false },
    { feature: 'Fraud Detection (13+ types)', ours: true, theirs: false },
    { feature: 'Automated Stripe Payouts', ours: true, theirs: false },
    { feature: 'Gamification (Tiers & Badges)', ours: true, theirs: false },
    { feature: 'Shopify Integration', ours: true, theirs: true },
    { feature: 'Email Campaign Builder', ours: true, theirs: true },
    { feature: 'Custom Reward Rules', ours: true, theirs: true },
    { feature: 'Analytics Dashboard', ours: true, theirs: true },
    { feature: 'White-label Portal', ours: true, theirs: false },
    { feature: 'Flat Pricing (No Success Fees)', ours: true, theirs: false },
    { feature: 'Multi-location Support', ours: true, theirs: false },
  ];

  const faqs = [
    { question: 'How does ReferralSynch differ from ReferralCandy?', answer: 'While ReferralCandy is primarily designed for eCommerce stores with online-only tracking, ReferralSynch bridges the physical-digital gap with QR code and NFC attribution. We also offer enterprise-grade fraud detection (13+ types vs. basic checks), automated Stripe payouts (vs. manual gift cards), and full gamification with 5 tiers and 20+ achievements.' },
    { question: 'Can I migrate my advocates from ReferralCandy?', answer: 'Yes! We offer free migration assistance. Our team will help you export your advocate list from ReferralCandy and import them into ReferralSynch, preserving their referral history and earned rewards. Most migrations complete within 48 hours.' },
    { question: 'Does ReferralSynch work for brick-and-mortar businesses?', answer: 'Absolutely. Unlike ReferralCandy which focuses on eCommerce, ReferralSynch was built for local businesses. Our QR codes and NFC tags let you track referrals from business cards, receipts, table tents, and in-store displays—something ReferralCandy simply cannot do.' },
    { question: 'How does pricing compare?', answer: "ReferralCandy charges $59/month plus a 3.5% commission on all referral sales. ReferralSynch uses flat pricing starting at $29/month with zero success fees. For a business doing $10,000/month in referral sales, you'd pay $350+ with ReferralCandy vs. $69 with ReferralSynch." },
    { question: 'Is ReferralSynch harder to set up?', answer: 'Not at all. Both platforms offer easy setup, but ReferralSynch includes a guided onboarding wizard and free white-glove setup for Growth and Scale plans. Most customers launch their first campaign within 30 minutes.' },
  ];

  const seoJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ReferralSynch vs ReferralCandy - Honest Comparison",
    "description": "Side-by-side comparison of ReferralSynch and ReferralCandy referral marketing platforms.",
    "author": { "@type": "Organization", "name": "ReferralSynch" },
    "publisher": { "@type": "Organization", "name": "ReferralSynch" },
    "datePublished": "2026-03-01",
    "dateModified": "2026-03-05"
  };

  return (
    <ComparisonPageLayout>
      <SEOHead
        title="ReferralSynch vs ReferralCandy (2026) - Honest Comparison | ReferralSynch"
        description="Compare ReferralSynch and ReferralCandy side-by-side. See why local businesses choose ReferralSynch for QR/NFC tracking, fraud detection, and flat pricing with no success fees."
        keywords="referralsynch vs referralcandy, referralcandy alternative, referralcandy competitors, referral marketing software comparison"
        canonical="https://referralsynch.com/compare/referralcandy"
        ogTitle="ReferralSynch vs ReferralCandy - Which Is Better for Your Business?"
        ogDescription="Honest comparison of ReferralSynch and ReferralCandy. See features, pricing, and which platform fits your needs."
        ogType="article"
        jsonLd={seoJsonLd}
      />

      {/* Hero Section */}
      <section style={{ padding: '80px 32px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 800 }}>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.sage, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Comparison</p>
          <h1 style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: theme.colors.ink, lineHeight: 1.2, marginBottom: 24 }}>
            ReferralSynch vs ReferralCandy:{' '}
            <span style={{ color: theme.colors.forest }}>Which Referral Platform Is Right for You?</span>
          </h1>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 18, color: theme.colors.charcoal, lineHeight: 1.7, marginBottom: 32 }}>
            ReferralCandy is a solid choice for Shopify stores. But if you need physical attribution, enterprise fraud detection, or you're tired of paying commission fees, ReferralSynch might be the better fit. Here's an honest comparison.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/signup" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', backgroundColor: theme.colors.forest, color: theme.colors.warmWhite, borderRadius: 8, fontFamily: theme.fonts.body, fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
              Try ReferralSynch Free <ArrowRight size={16} />
            </a>
            <a href="#comparison" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', backgroundColor: 'transparent', color: theme.colors.forest, borderRadius: 8, fontFamily: theme.fonts.body, fontSize: 15, fontWeight: 600, textDecoration: 'none', border: `2px solid ${theme.colors.forest}` }}>
              See Full Comparison
            </a>
          </div>
        </div>
      </section>

      {/* Quick Summary Cards */}
      <section style={{ padding: '0 32px 60px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {[
            { icon: QrCode, title: 'Physical Attribution', desc: 'ReferralSynch tracks referrals from QR codes and NFC tags. ReferralCandy is online-only.' },
            { icon: Shield, title: 'Fraud Detection', desc: 'We offer 13+ fraud checks including VPN detection. ReferralCandy has basic self-referral blocking.' },
            { icon: DollarSign, title: 'No Success Fees', desc: 'ReferralSynch charges flat monthly pricing. ReferralCandy takes 3.5% of every referral sale.' },
            { icon: Trophy, title: 'Gamification', desc: 'Full tier system with 20+ achievements. ReferralCandy has no gamification features.' },
          ].map((card, i) => (
            <div key={i} style={{ backgroundColor: theme.colors.warmWhite, padding: 28, borderRadius: 16, border: `1px solid ${theme.colors.mint}` }}>
              <card.icon size={28} color={theme.colors.forest} style={{ marginBottom: 16 }} />
              <h3 style={{ fontFamily: theme.fonts.body, fontSize: 18, fontWeight: 600, color: theme.colors.ink, marginBottom: 8 }}>{card.title}</h3>
              <p style={{ fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.slate, lineHeight: 1.6 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" style={{ padding: '60px 32px', backgroundColor: theme.colors.warmWhite }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 40 }}>Feature-by-Feature Comparison</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: theme.colors.cream, borderRadius: 16, overflow: 'hidden' }}>
              <thead>
                <tr style={{ backgroundColor: theme.colors.forest }}>
                  <th style={{ padding: '16px 20px', textAlign: 'left', fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.warmWhite }}>Feature</th>
                  <th style={{ padding: '16px 20px', textAlign: 'center', fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.warmWhite }}>ReferralSynch</th>
                  <th style={{ padding: '16px 20px', textAlign: 'center', fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.warmWhite }}>ReferralCandy</th>
                </tr>
              </thead>
              <tbody>{features.map((f, i) => <FeatureCheck key={i} {...f} />)}</tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section style={{ padding: '80px 32px', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 16 }}>Pricing That Actually Makes Sense</h2>
        <p style={{ fontFamily: theme.fonts.body, fontSize: 16, color: theme.colors.charcoal, textAlign: 'center', marginBottom: 48, maxWidth: 600, margin: '0 auto 48px' }}>
          ReferralCandy's commission model can get expensive fast. Here's what you'd pay with $10,000/month in referral sales:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
          <div style={{ backgroundColor: theme.colors.warmWhite, padding: 40, borderRadius: 16, border: `2px solid ${theme.colors.forest}`, position: 'relative' }}>
            <span style={{ position: 'absolute', top: -12, left: 24, backgroundColor: theme.colors.forest, color: '#fff', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600 }}>Recommended</span>
            <Logo color={theme.colors.forest} size={32} />
            <h3 style={{ fontFamily: theme.fonts.body, fontSize: 24, fontWeight: 600, color: theme.colors.ink, margin: '16px 0 8px' }}>ReferralSynch Growth</h3>
            <div style={{ marginBottom: 24 }}>
              <span style={{ fontFamily: theme.fonts.display, fontSize: 48, fontWeight: 500, color: theme.colors.forest }}>$69</span>
              <span style={{ color: theme.colors.slate }}>/month</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Flat pricing, no commissions', '500 advocates included', 'QR + NFC tracking', 'Full fraud detection', 'Stripe Connect payouts'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.charcoal }}>
                  <Check size={16} color="#16A34A" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ backgroundColor: theme.colors.cream, padding: 40, borderRadius: 16, border: `1px solid ${theme.colors.mint}` }}>
            <div style={{ width: 32, height: 32, backgroundColor: '#7C3AED', borderRadius: 8, marginBottom: 16 }} />
            <h3 style={{ fontFamily: theme.fonts.body, fontSize: 24, fontWeight: 600, color: theme.colors.ink, margin: '16px 0 8px' }}>ReferralCandy Premium</h3>
            <div style={{ marginBottom: 24 }}>
              <span style={{ fontFamily: theme.fonts.display, fontSize: 48, fontWeight: 500, color: theme.colors.ink }}>$409</span>
              <span style={{ color: theme.colors.slate }}>/month*</span>
            </div>
            <p style={{ fontSize: 12, color: theme.colors.slate, marginBottom: 16 }}>*$59 base + 3.5% of $10,000 in referral sales</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Commission on every sale', 'Online tracking only', 'Basic fraud protection', 'Manual payouts', 'No gamification'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.slate }}>
                  <X size={16} color="#DC2626" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who Should Choose Which */}
      <section style={{ padding: '60px 32px', backgroundColor: theme.colors.mint + '30' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 48 }}>Which Platform Is Right for You?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 32 }}>
            <div style={{ backgroundColor: theme.colors.warmWhite, padding: 32, borderRadius: 16 }}>
              <h3 style={{ fontFamily: theme.fonts.body, fontSize: 20, fontWeight: 600, color: theme.colors.forest, marginBottom: 16 }}>Choose ReferralSynch if:</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['You have a physical location or use printed materials', 'You want to avoid paying commission fees', 'Fraud protection is a priority', 'You want to gamify your referral program', 'You need automated bank payouts'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 0', fontFamily: theme.fonts.body, fontSize: 15, color: theme.colors.charcoal }}>
                    <Check size={18} color="#16A34A" style={{ flexShrink: 0, marginTop: 2 }} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ backgroundColor: theme.colors.warmWhite, padding: 32, borderRadius: 16 }}>
              <h3 style={{ fontFamily: theme.fonts.body, fontSize: 20, fontWeight: 600, color: '#7C3AED', marginBottom: 16 }}>Choose ReferralCandy if:</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {["You're a pure eCommerce store with no physical presence", 'You prefer their specific Shopify integration', 'You have low referral volume (commission model is cheaper)', "You're comfortable with manual reward fulfillment"].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 0', fontFamily: theme.fonts.body, fontSize: 15, color: theme.colors.charcoal }}>
                    <Check size={18} color={theme.colors.slate} style={{ flexShrink: 0, marginTop: 2 }} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 32px', maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 48 }}>Frequently Asked Questions</h2>
        <div>{faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}</div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 32px 80px', maxWidth: 900, margin: '0 auto' }}>
        <CTABanner competitor="ReferralCandy" />
      </section>
    </ComparisonPageLayout>
  );
};

export default VsReferralCandy;
