import React from 'react';
import { ArrowRight, Dumbbell, DollarSign, Users, TrendingUp, QrCode, Trophy, Target, CreditCard } from 'lucide-react';
import { theme } from '../../theme';
import { IndustryPageLayout, IndustryStickyHeader, StatCard, FeatureCard, UseCaseCard, IndustryTestimonialCard, IndustryCTASection } from '../../components/IndustryShared';
import SEOHead from '../../components/SEOHead';

const FitnessIndustry = () => {
  const stats = [
    { value: '73%', label: 'of gym members joined because of a friend', icon: Users },
    { value: '$3,500', label: 'average lifetime member value', icon: DollarSign },
    { value: '40%', label: 'higher retention for referred members', icon: TrendingUp },
  ];

  const features = [
    { icon: QrCode, title: 'Front Desk QR Codes', description: 'Display QR codes at check-in, on mirrors, and in locker rooms where members scan between sets.' },
    { icon: Trophy, title: 'Member Referral Challenges', description: 'Gamify referrals with leaderboards, badges, and tier rewards. Top referrers earn free months or merch.' },
    { icon: Target, title: 'Class-Specific Campaigns', description: 'Run different referral campaigns for yoga, CrossFit, spinning — track which classes drive the most referrals.' },
    { icon: CreditCard, title: 'Automated Rewards', description: 'Free months, discounts, or cash via Stripe. Set it and forget it.' },
  ];

  const useCases = [
    { title: 'Gyms & Fitness Centers', description: 'Members who train together stay together. Make it easy for your regulars to invite friends and earn rewards.', touchpoints: ['Front desk displays', 'Locker room signage', 'Water bottle stickers', 'Membership cards'] },
    { title: 'Yoga & Pilates Studios', description: 'The post-class glow is the perfect time to ask for referrals. Capture that energy with frictionless sharing tools.', touchpoints: ['Studio mirrors', 'Mat tags', 'Class schedule cards', 'Post-class emails'] },
    { title: 'CrossFit & Boutique Fitness', description: 'Community is everything in boutique fitness. Turn your tight-knit culture into a powerful referral engine.', touchpoints: ['Whiteboard signage', 'WOD cards', 'Community board', 'Event flyers'] },
  ];

  return (
    <IndustryPageLayout>
      <SEOHead
        title="Referral Marketing for Fitness Studios & Gyms | ReferralSynch"
        description="Grow your gym or fitness studio through member referrals. ReferralSynch tracks referrals with QR codes, gamified challenges, and automatic rewards."
        keywords="gym referral program, fitness studio referrals, CrossFit word of mouth, yoga studio marketing, member referral rewards"
        canonical="https://referralsynch.com/industries/fitness"
        ogTitle="Referral Marketing for Fitness Studios & Gyms"
        ogDescription="Gamify referrals with leaderboards and challenges. Pay rewards automatically via Stripe."
      />
      <IndustryStickyHeader industry="Fitness" />

      <section style={{ padding: '120px 32px 80px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <Dumbbell size={24} color="#8B5CF6" />
            <span style={{ fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.sage, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Fitness</span>
          </div>
          <h1 style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: theme.colors.ink, lineHeight: 1.2, marginBottom: 24 }}>
            Referral Marketing for{' '}<span style={{ color: '#8B5CF6' }}>Fitness Studios</span>
          </h1>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 18, color: theme.colors.charcoal, lineHeight: 1.7, marginBottom: 32 }}>
            Most gym members join because a friend invited them. ReferralSynch helps gyms, yoga studios, and CrossFit boxes turn that word-of-mouth into a trackable, rewarding referral program that keeps your community growing.
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
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 48 }}>Built for Fitness Studios</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {features.map((feature, i) => <FeatureCard key={i} {...feature} />)}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 32px', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 48 }}>How Fitness Businesses Use ReferralSynch</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {useCases.map((uc, i) => <UseCaseCard key={i} {...uc} />)}
        </div>
      </section>

      <section style={{ padding: '0 32px 80px', maxWidth: 800, margin: '0 auto' }}>
        <IndustryTestimonialCard quote="The gamification is a game changer. Our members compete to be the top referrer each month. We've added 30+ members from referrals alone." author="Jessica Park" business="Peak Performance Studio" result="+30 members/month" />
      </section>

      <IndustryCTASection industry="Fitness" headline="Ready to grow through word-of-mouth?" />
    </IndustryPageLayout>
  );
};

export default FitnessIndustry;
