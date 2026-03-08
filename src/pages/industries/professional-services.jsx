import React from 'react';
import { ArrowRight, Briefcase, DollarSign, Users, TrendingUp, Smartphone, Globe, Shield, ChartColumnIncreasing } from 'lucide-react';
import { theme } from '../../theme';
import { IndustryPageLayout, IndustryStickyHeader, StatCard, FeatureCard, UseCaseCard, IndustryTestimonialCard, IndustryCTASection } from '../../components/IndustryShared';
import SEOHead from '../../components/SEOHead';

const ProfessionalServicesIndustry = () => {
  const stats = [
    { value: '91%', label: 'of clients give referrals when asked — but only 11% of professionals ask', icon: Users },
    { value: '$5,000+', label: 'average client value for professional services', icon: DollarSign },
    { value: '65%', label: 'of new business comes from referrals', icon: TrendingUp },
  ];

  const features = [
    { icon: Smartphone, title: 'Business Card NFC Tags', description: 'Embed referral links in NFC-enabled business cards. Clients tap to refer with zero friction.' },
    { icon: Globe, title: 'Client Portal Referrals', description: 'White-label referral portal matches your brand. Clients share via email, text, or social.' },
    { icon: Shield, title: 'Compliant Rewards', description: "Cash, gift cards, or service credits. Configure reward rules that fit your industry's compliance requirements." },
    { icon: ChartColumnIncreasing, title: 'Revenue Attribution', description: 'Track exactly which clients and campaigns drive the most high-value referrals.' },
  ];

  const useCases = [
    { title: 'Law Firms & Attorneys', description: 'Client trust is everything in legal. Make it effortless for satisfied clients to refer colleagues and friends.', touchpoints: ['Business cards', 'Closing packets', 'Client portals', 'Holiday mailers'] },
    { title: 'Accountants & Financial Advisors', description: 'Your best clients know other high-value prospects. Give them a professional, branded way to make introductions.', touchpoints: ['Engagement letters', 'Quarterly review packets', 'NFC desk cards', 'Email signatures'] },
    { title: 'Insurance & Real Estate Agents', description: 'Life events trigger referrals. Capture them at closings, policy renewals, and annual reviews when clients are most engaged.', touchpoints: ['Policy welcome kits', 'Closing gifts', 'Annual review reminders', 'Door hangers'] },
  ];

  return (
    <IndustryPageLayout>
      <SEOHead
        title="Referral Marketing for Professional Services | ReferralSynch"
        description="Grow your professional services firm through client referrals. ReferralSynch tracks referrals from NFC cards, client portals, and branded campaigns with compliant rewards."
        keywords="professional services referral program, lawyer referrals, accountant word of mouth, financial advisor marketing, insurance agent referrals"
        canonical="https://referralsynch.com/industries/professional-services"
        ogTitle="Referral Marketing for Professional Services"
        ogDescription="Track referrals from NFC business cards and client portals. Compliant rewards configured for your industry."
      />
      <IndustryStickyHeader industry="Professional Services" />

      <section style={{ padding: '120px 32px 80px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <Briefcase size={24} color="#0EA5E9" />
            <span style={{ fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.sage, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Professional Services</span>
          </div>
          <h1 style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: theme.colors.ink, lineHeight: 1.2, marginBottom: 24 }}>
            Referral Marketing for{' '}<span style={{ color: '#0EA5E9' }}>Professional Services</span>
          </h1>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 18, color: theme.colors.charcoal, lineHeight: 1.7, marginBottom: 32 }}>
            Most professionals know referrals drive their best business — but few have a system to ask for and track them. ReferralSynch gives lawyers, accountants, and advisors a professional, branded referral program with compliant rewards and full attribution.
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
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 48 }}>Built for Professional Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {features.map((feature, i) => <FeatureCard key={i} {...feature} />)}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 32px', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 48 }}>How Professional Services Use ReferralSynch</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {useCases.map((uc, i) => <UseCaseCard key={i} {...uc} />)}
        </div>
      </section>

      <section style={{ padding: '0 32px 80px', maxWidth: 800, margin: '0 auto' }}>
        <IndustryTestimonialCard quote="Our NFC business cards were a conversation starter. We've tracked $120K in new client revenue directly to referrals in 6 months." author="David Park" business="Park & Associates Law" result="$120K in referral revenue" />
      </section>

      <IndustryCTASection industry="Professional Services" headline="Ready to grow through word-of-mouth?" />
    </IndustryPageLayout>
  );
};

export default ProfessionalServicesIndustry;
