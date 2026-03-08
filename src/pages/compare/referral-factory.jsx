import React from 'react';
import { Check, X, ArrowRight, Star, Shield, QrCode, CreditCard, Users, Zap, Award } from 'lucide-react';
import { theme } from '../../theme';
import { ComparisonPageLayout, FeatureCheck, FAQItem, CTABanner } from '../../components/CompareShared';
import Logo from '../../components/Logo';
import SEOHead from '../../components/SEOHead';

const VsReferralFactory = () => {
  const features = [
    { feature: 'QR Code/NFC Tracking', ours: true, theirs: false },
    { feature: 'Fraud Detection (13+ types)', ours: true, theirs: false },
    { feature: 'Automated Stripe Payouts', ours: true, theirs: false },
    { feature: 'Gamification (Tiers & Badges)', ours: true, theirs: false },
    { feature: 'Drag-and-Drop Builder', ours: false, theirs: true },
    { feature: 'Multi-Language Support', ours: false, theirs: true },
    { feature: 'Custom Reward Rules', ours: true, theirs: true },
    { feature: 'Analytics Dashboard', ours: true, theirs: true },
    { feature: 'White-label Portal', ours: true, theirs: true },
    { feature: 'Flat Pricing (No Success Fees)', ours: true, theirs: true },
    { feature: 'Multi-location Support', ours: true, theirs: false },
    { feature: 'Physical Touchpoint Tracking', ours: true, theirs: false },
  ];

  const faqs = [
    { question: 'How does ReferralSynch differ from Referral Factory?', answer: 'ReferralSynch focuses on physical attribution (QR/NFC), fraud detection, and gamification that Referral Factory lacks. Built specifically for local businesses with brick-and-mortar locations.' },
    { question: 'Can I migrate from Referral Factory?', answer: "Yes, free migration assistance on all paid plans. We'll help import your referral data and advocate lists." },
    { question: 'Does Referral Factory offer QR or NFC tracking?', answer: 'No. Referral Factory focuses on online referral links and landing pages. For businesses needing physical touchpoint tracking, ReferralSynch is the only option.' },
    { question: 'How does pricing compare?', answer: "ReferralSynch Growth ($69/mo) includes features that Referral Factory doesn't offer at any price — like physical attribution, gamification, and automated Stripe payouts. Referral Factory's comparable plan starts at $200/mo." },
    { question: 'Which platform is better for local businesses?', answer: "ReferralSynch was built specifically for local businesses. QR codes on receipts, NFC tags on counters, location-based analytics — these features don't exist in Referral Factory." },
  ];

  const seoJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ReferralSynch vs Referral Factory - Honest Comparison",
    "description": "Side-by-side comparison of ReferralSynch and Referral Factory referral marketing platforms.",
    "author": { "@type": "Organization", "name": "ReferralSynch" },
    "publisher": { "@type": "Organization", "name": "ReferralSynch" },
    "datePublished": "2026-03-08",
    "dateModified": "2026-03-08"
  };

  return (
    <ComparisonPageLayout>
      <SEOHead
        title="ReferralSynch vs Referral Factory (2026) - Honest Comparison | ReferralSynch"
        description="Compare ReferralSynch and Referral Factory side-by-side. See why local businesses choose ReferralSynch for QR/NFC tracking, fraud detection, gamification, and lower pricing."
        keywords="referralsynch vs referral factory, referral factory alternative, referral factory competitors, referral marketing software comparison"
        canonical="https://referralsynch.com/compare/referral-factory"
        ogTitle="ReferralSynch vs Referral Factory - Which Is Better for Your Business?"
        ogDescription="Honest comparison of ReferralSynch and Referral Factory. See features, pricing, and which platform fits your needs."
        ogType="article"
        jsonLd={seoJsonLd}
      />

      {/* Hero Section */}
      <section style={{ padding: '80px 32px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 800 }}>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.sage, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Comparison</p>
          <h1 style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: theme.colors.ink, lineHeight: 1.2, marginBottom: 24 }}>
            ReferralSynch vs Referral Factory:{' '}
            <span style={{ color: theme.colors.forest }}>Which Referral Platform Is Right for You?</span>
          </h1>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 18, color: theme.colors.charcoal, lineHeight: 1.7, marginBottom: 32 }}>
            Referral Factory makes it easy to build referral programs with drag-and-drop templates. But if you need physical attribution, enterprise fraud detection, or gamification to engage your advocates, ReferralSynch might be the better fit. Here's an honest comparison.
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
            { icon: QrCode, title: 'Physical Attribution', desc: 'Track QR codes and NFC tags across locations. Referral Factory is online-only.' },
            { icon: Shield, title: 'Fraud Protection', desc: '13+ automated fraud detection types. Referral Factory has limited fraud detection.' },
            { icon: Award, title: 'Gamification', desc: 'Tiers, badges, streaks, leaderboards. Referral Factory has no gamification features.' },
            { icon: CreditCard, title: 'Cost Savings', desc: '66% less than Referral Factory\'s Basic plan with more features included.' },
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
                  <th style={{ padding: '16px 20px', textAlign: 'center', fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.warmWhite }}>Referral Factory</th>
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
          Referral Factory charges significantly more for fewer features. Here's how the plans compare:
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
              {['Flat pricing, no hidden fees', 'Up to 1,000 advocates', 'QR + NFC tracking', 'Full fraud detection (13+ types)', 'Stripe Connect automated payouts', 'Gamification with tiers & badges'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.charcoal }}>
                  <Check size={16} color="#16A34A" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ backgroundColor: theme.colors.cream, padding: 40, borderRadius: 16, border: `1px solid ${theme.colors.mint}` }}>
            <div style={{ width: 32, height: 32, backgroundColor: '#2563EB', borderRadius: 8, marginBottom: 16 }} />
            <h3 style={{ fontFamily: theme.fonts.body, fontSize: 24, fontWeight: 600, color: theme.colors.ink, margin: '16px 0 8px' }}>Referral Factory Basic</h3>
            <div style={{ marginBottom: 24 }}>
              <span style={{ fontFamily: theme.fonts.display, fontSize: 48, fontWeight: 500, color: theme.colors.ink }}>$200</span>
              <span style={{ color: theme.colors.slate }}>/month</span>
            </div>
            <p style={{ fontSize: 12, color: theme.colors.slate, marginBottom: 16 }}>Up to 10,000 users</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['No physical touchpoint tracking', 'No QR code or NFC support', 'Limited fraud detection', 'No automated Stripe payouts', 'No gamification system', 'No leaderboards or badges'].map((item, i) => (
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
                {['You have a brick-and-mortar location', 'You need physical QR/NFC touchpoint tracking', 'Fraud detection and gamification are important to you', 'You want a lower cost with more features included'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 0', fontFamily: theme.fonts.body, fontSize: 15, color: theme.colors.charcoal }}>
                    <Check size={18} color="#16A34A" style={{ flexShrink: 0, marginTop: 2 }} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ backgroundColor: theme.colors.warmWhite, padding: 32, borderRadius: 16 }}>
              <h3 style={{ fontFamily: theme.fonts.body, fontSize: 20, fontWeight: 600, color: '#2563EB', marginBottom: 16 }}>Choose Referral Factory if:</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {["You're an online-only business with no physical locations", 'You need a drag-and-drop referral program builder', 'You need multi-language referral pages'].map((item, i) => (
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
        <CTABanner competitor="Referral Factory" />
      </section>
    </ComparisonPageLayout>
  );
};

export default VsReferralFactory;
