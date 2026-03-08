import React from 'react';
import { ArrowRight, Car, DollarSign, Users, TrendingUp, QrCode, Smartphone, CreditCard, Shield } from 'lucide-react';
import { theme } from '../../theme';
import { IndustryPageLayout, IndustryStickyHeader, StatCard, FeatureCard, UseCaseCard, IndustryTestimonialCard, IndustryCTASection } from '../../components/IndustryShared';
import SEOHead from '../../components/SEOHead';

const AutoServicesIndustry = () => {
  const stats = [
    { value: '88%', label: 'of car owners choose mechanics based on referrals', icon: Users },
    { value: '$1,800', label: 'average lifetime customer value', icon: DollarSign },
    { value: '45%', label: 'lower acquisition cost vs paid ads', icon: TrendingUp },
  ];

  const features = [
    { icon: QrCode, title: 'Service Bay QR Codes', description: 'Put QR codes in waiting areas, on invoices, and service reminders. Customers scan while waiting for their car.' },
    { icon: Smartphone, title: 'Technician Referral Cards', description: 'Give each tech NFC-enabled cards. Track which technicians drive the most referrals.' },
    { icon: CreditCard, title: 'Cash Rewards via Stripe', description: "Referring customers get real cash deposited to their bank. No coupons, no hassle." },
    { icon: Shield, title: 'Fraud Protection', description: 'Prevent coupon abuse and self-referrals with 13+ automated fraud checks.' },
  ];

  const useCases = [
    { title: 'Auto Repair & Maintenance', description: 'Regular maintenance builds trust. Turn satisfied customers into a steady stream of referrals with touchpoints at every visit.', touchpoints: ['Waiting room displays', 'Invoice inserts', 'Key tags', 'Oil change reminder cards'] },
    { title: 'Car Dealerships', description: 'The excitement of a new car is the perfect moment to ask for referrals. Capture that enthusiasm with seamless sharing tools.', touchpoints: ['Thank-you packages', 'License plate frames', 'Service department cards', 'Follow-up mailers'] },
    { title: 'Detailing & Car Wash', description: 'Customers love showing off a freshly detailed ride. Give them an easy way to share — and get rewarded when friends book.', touchpoints: ['Dashboard cards', 'Membership cards', 'Air freshener tags', 'Receipt codes'] },
  ];

  return (
    <IndustryPageLayout>
      <SEOHead
        title="Referral Marketing for Auto Services & Repair Shops | ReferralSynch"
        description="Grow your auto service business through customer referrals. ReferralSynch tracks referrals from QR codes, technician cards, and invoices with automatic cash payouts."
        keywords="auto repair referral program, car dealership referrals, mechanic word of mouth, auto service marketing, detailing referrals"
        canonical="https://referralsynch.com/industries/auto-services"
        ogTitle="Referral Marketing for Auto Services & Repair Shops"
        ogDescription="Track referrals from service bay QR codes and technician cards. Pay cash rewards automatically via Stripe."
      />
      <IndustryStickyHeader industry="Auto Services" />

      <section style={{ padding: '120px 32px 80px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <Car size={24} color="#F97316" />
            <span style={{ fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.sage, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Auto Services</span>
          </div>
          <h1 style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: theme.colors.ink, lineHeight: 1.2, marginBottom: 24 }}>
            Referral Marketing for{' '}<span style={{ color: '#F97316' }}>Auto Services</span>
          </h1>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 18, color: theme.colors.charcoal, lineHeight: 1.7, marginBottom: 32 }}>
            Car owners trust recommendations from friends and family. ReferralSynch helps auto shops, dealerships, and detailers track referrals from QR codes, technician cards, and invoices — then automatically reward the customers who send new business your way.
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
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 48 }}>Built for Auto Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {features.map((feature, i) => <FeatureCard key={i} {...feature} />)}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 32px', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 48 }}>How Auto Service Businesses Use ReferralSynch</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {useCases.map((uc, i) => <UseCaseCard key={i} {...uc} />)}
        </div>
      </section>

      <section style={{ padding: '0 32px 80px', maxWidth: 800, margin: '0 auto' }}>
        <IndustryTestimonialCard quote="We put QR codes on our key tags and invoice inserts. Our referral rate went from almost nothing to 15 new customers a month." author="Mike Rodriguez" business="Rodriguez Auto Care" result="+15 new customers/month" />
      </section>

      <IndustryCTASection industry="Auto Services" headline="Ready to grow through word-of-mouth?" />
    </IndustryPageLayout>
  );
};

export default AutoServicesIndustry;
