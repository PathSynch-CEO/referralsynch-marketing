import React from 'react';
import { Check, X, ArrowRight, Star, Shield, QrCode, CreditCard, Users, Zap, Award } from 'lucide-react';
import { theme } from '../../theme';
import { FeatureCheck, FAQItem, CTABanner, ComparisonPageLayout } from '../../components/CompareShared';
import Logo from '../../components/Logo';
import SEOHead from '../../components/SEOHead';

const VsGrowSurf = () => {
  const features = [
    { feature: 'QR Code / NFC Tracking', ours: true, theirs: false },
    { feature: 'Fraud Detection (13+ types)', ours: true, theirs: true },
    { feature: 'Automated Stripe Payouts', ours: true, theirs: false },
    { feature: 'Gamification (Tiers & Badges)', ours: true, theirs: false },
    { feature: 'API Access', ours: true, theirs: true },
    { feature: 'Webhook Support', ours: true, theirs: true },
    { feature: 'SaaS-Specific Features', ours: false, theirs: true },
    { feature: 'Custom Reward Rules', ours: true, theirs: true },
    { feature: 'Analytics Dashboard', ours: true, theirs: true },
    { feature: 'Flat Pricing', ours: true, theirs: true },
    { feature: 'Multi-location Support', ours: true, theirs: false },
    { feature: 'Physical Touchpoint Tracking', ours: true, theirs: false },
  ];

  const faqs = [
    { question: 'How does ReferralSynch compare to GrowSurf?', answer: "GrowSurf is built for B2B SaaS companies. ReferralSynch is built for local businesses with physical locations. We offer QR/NFC tracking, gamification, and automated payouts that GrowSurf doesn't have." },
    { question: 'Can I migrate from GrowSurf?', answer: "Yes, free migration on all paid plans. We'll help import your advocate data." },
    { question: 'Does GrowSurf support QR codes or NFC?', answer: 'No. GrowSurf is purely digital. If you have a physical location and want to track real-world referrals, ReferralSynch is the better choice.' },
    { question: 'How does pricing compare?', answer: "ReferralSynch Growth ($69/mo) includes 1,000 advocates with gamification, NFC tracking, and fraud detection. GrowSurf's comparable Startup plan is $175/mo without those features." },
    { question: 'Which is better for B2B vs local business?', answer: "GrowSurf excels for SaaS/B2B with API-first design. ReferralSynch is purpose-built for local businesses with QR codes, NFC tags, location analytics, and physical touchpoint tracking." },
  ];

  const seoJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ReferralSynch vs GrowSurf - Honest Comparison",
    "description": "Side-by-side comparison of ReferralSynch and GrowSurf referral marketing platforms.",
    "author": { "@type": "Organization", "name": "ReferralSynch" },
    "publisher": { "@type": "Organization", "name": "ReferralSynch" },
    "datePublished": "2026-03-08",
    "dateModified": "2026-03-08"
  };

  return (
    <ComparisonPageLayout>
      <SEOHead
        title="ReferralSynch vs GrowSurf (2026) - Honest Comparison | ReferralSynch"
        description="Compare ReferralSynch and GrowSurf side-by-side. See why local businesses choose ReferralSynch for QR/NFC tracking, gamification, and 60% lower pricing."
        keywords="referralsynch vs growsurf, growsurf alternative, growsurf competitors, referral marketing software comparison"
        canonical="https://referralsynch.com/compare/growsurf"
        ogTitle="ReferralSynch vs GrowSurf - Which Is Better for Your Business?"
        ogDescription="Honest comparison of ReferralSynch and GrowSurf. See features, pricing, and which platform fits your needs."
        ogType="article"
        jsonLd={seoJsonLd}
      />

      {/* Hero Section */}
      <section style={{ padding: '80px 32px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 800 }}>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.sage, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Comparison</p>
          <h1 style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: theme.colors.ink, lineHeight: 1.2, marginBottom: 24 }}>
            ReferralSynch vs GrowSurf:{' '}
            <span style={{ color: theme.colors.forest }}>Which Referral Platform Is Right for You?</span>
          </h1>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 18, color: theme.colors.charcoal, lineHeight: 1.7, marginBottom: 32 }}>
            GrowSurf is a strong referral platform for B2B and SaaS companies. But if you have a physical location, need QR/NFC tracking, or want gamification and lower pricing, ReferralSynch might be the better fit. Here's an honest comparison.
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
            { icon: QrCode, title: 'Physical Attribution', desc: 'QR + NFC tracking across real-world locations' },
            { icon: CreditCard, title: '60% Lower Cost', desc: '$69/mo vs $175/mo for same participant count' },
            { icon: Award, title: 'Gamification', desc: 'Full suite: tiers, badges, streaks, leaderboards' },
            { icon: Users, title: 'Local Business Focus', desc: 'Built for brick-and-mortar, not just SaaS' },
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
                  <th style={{ padding: '16px 20px', textAlign: 'center', fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.warmWhite }}>GrowSurf</th>
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
          GrowSurf charges over 2x more for the same number of participants. Here's how the plans compare:
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
              {['1,000 advocates included', 'QR + NFC tracking', 'Full gamification suite', 'Fraud detection (13+ types)', 'Stripe Connect payouts'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.charcoal }}>
                  <Check size={16} color="#16A34A" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ backgroundColor: theme.colors.cream, padding: 40, borderRadius: 16, border: `1px solid ${theme.colors.mint}` }}>
            <div style={{ width: 32, height: 32, backgroundColor: '#4F46E5', borderRadius: 8, marginBottom: 16 }} />
            <h3 style={{ fontFamily: theme.fonts.body, fontSize: 24, fontWeight: 600, color: theme.colors.ink, margin: '16px 0 8px' }}>GrowSurf Startup</h3>
            <div style={{ marginBottom: 24 }}>
              <span style={{ fontFamily: theme.fonts.display, fontSize: 48, fontWeight: 500, color: theme.colors.ink }}>$175</span>
              <span style={{ color: theme.colors.slate }}>/month</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['1,000 participants included', 'No QR or NFC tracking', 'No gamification', 'Basic fraud detection', 'No automated payouts'].map((item, i) => (
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
                {['You have a local business with a physical location', 'You need QR code or NFC tracking for real-world referrals', 'You want gamification to motivate your advocates', 'You need lower cost with more features included'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 0', fontFamily: theme.fonts.body, fontSize: 15, color: theme.colors.charcoal }}>
                    <Check size={18} color="#16A34A" style={{ flexShrink: 0, marginTop: 2 }} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ backgroundColor: theme.colors.warmWhite, padding: 32, borderRadius: 16 }}>
              <h3 style={{ fontFamily: theme.fonts.body, fontSize: 20, fontWeight: 600, color: '#4F46E5', marginBottom: 16 }}>Choose GrowSurf if:</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {["You're a B2B SaaS company with a digital-only product", 'You need deep API integration for your tech stack', 'You need SaaS-specific features like in-app widgets'].map((item, i) => (
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
        <CTABanner competitor="GrowSurf" />
      </section>
    </ComparisonPageLayout>
  );
};

export default VsGrowSurf;
