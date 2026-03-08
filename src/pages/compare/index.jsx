import React from 'react';
import { ArrowRight } from 'lucide-react';
import { theme } from '../../theme';
import { ComparisonPageLayout } from '../../components/CompareShared';
import SEOHead from '../../components/SEOHead';

const CompareIndex = () => {
  const competitors = [
    { name: 'ReferralCandy', tagline: 'eCommerce referral tool with commission fees', ourEdge: 'QR/NFC tracking, no success fees, fraud detection', href: '/compare/referralcandy' },
    { name: 'Referral Factory', tagline: 'Drag-and-drop referral program builder', ourEdge: 'Physical attribution, gamification, 66% lower cost', href: '/compare/referral-factory' },
    { name: 'GrowSurf', tagline: 'B2B/SaaS referral platform', ourEdge: 'Built for local business, QR/NFC, 60% lower cost', href: '/compare/growsurf' },
    { name: 'Smile.io', tagline: 'Full loyalty platform with referral features', ourEdge: 'Deeper referral features, physical attribution, flat pricing', href: '/compare/smile-io' },
    { name: 'Friendbuy', tagline: 'Enterprise referral platform', ourEdge: 'Same features at 1/10th the price, plus QR/NFC', href: '/compare/friendbuy' },
    { name: 'UpPromote', tagline: 'Shopify affiliate & influencer platform', ourEdge: 'Works beyond Shopify, physical attribution, gamification', href: '/compare/uppromote' },
  ];

  return (
    <ComparisonPageLayout>
      <SEOHead
        title="Compare Referral Platforms | ReferralSynch"
        description="Honest, side-by-side comparisons of ReferralSynch vs ReferralCandy, Referral Factory, GrowSurf, Smile.io, Friendbuy, and UpPromote. Find the right referral platform for your business."
        canonical="https://referralsynch.com/compare"
        ogTitle="How ReferralSynch Compares to Other Referral Platforms"
        ogDescription="Side-by-side comparisons to help you choose the right referral platform."
      />
      <section style={{ padding: '80px 32px', maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h1 style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: theme.colors.ink, marginBottom: 16 }}>
            How ReferralSynch Compares
          </h1>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 18, color: theme.colors.charcoal, maxWidth: 600, margin: '0 auto' }}>
            Honest, side-by-side comparisons to help you choose the right referral platform for your business.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {competitors.map((comp) => (
            <a
              key={comp.name}
              href={comp.href}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 32,
                backgroundColor: theme.colors.warmWhite, borderRadius: 16,
                border: `1px solid ${theme.colors.mint}`, textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = theme.colors.forest; e.currentTarget.style.transform = 'translateX(8px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = theme.colors.mint; e.currentTarget.style.transform = 'translateX(0)'; }}
            >
              <div>
                <h2 style={{ fontFamily: theme.fonts.body, fontSize: 22, fontWeight: 600, color: theme.colors.ink, marginBottom: 4 }}>
                  ReferralSynch vs {comp.name}
                </h2>
                <p style={{ fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.slate, marginBottom: 8 }}>{comp.tagline}</p>
                <p style={{ fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.forest, fontWeight: 500 }}>Our edge: {comp.ourEdge}</p>
              </div>
              <ArrowRight size={24} color={theme.colors.forest} />
            </a>
          ))}
        </div>
      </section>
    </ComparisonPageLayout>
  );
};

export default CompareIndex;
