import React from 'react';
import { ArrowRight, Scissors, Calendar, Smartphone, Gift, Trophy, Heart, DollarSign, MessageCircle } from 'lucide-react';
import { theme } from '../../theme';
import { IndustryPageLayout, IndustryStickyHeader, StatCard, FeatureCard, UseCaseCard, IndustryTestimonialCard, IndustryCTASection } from '../../components/IndustryShared';
import SEOHead from '../../components/SEOHead';

const BeautyIndustry = () => {
  const stats = [
    { value: '83%', label: 'of beauty clients choose providers based on referrals', icon: Heart },
    { value: '$1,200', label: 'average lifetime value of a referred salon client', icon: DollarSign },
    { value: '67%', label: 'of new clients come from word-of-mouth', icon: MessageCircle },
  ];

  const features = [
    { icon: Calendar, title: 'Post-Appointment Referrals', description: 'Automatically prompt clients to refer friends after their appointment. Strike while the iron is hot—right after a great blowout or facial.' },
    { icon: Smartphone, title: 'Mirror & Station QR Codes', description: 'Place QR codes at styling stations and mirrors. Clients can scan and share while admiring their new look.' },
    { icon: Gift, title: 'Double-Sided Rewards', description: 'Give both the referrer AND the new client a discount. Perfect for service businesses where first impressions matter.' },
    { icon: Trophy, title: 'VIP Client Tiers', description: 'Reward your most loyal advocates with priority booking, exclusive services, and special perks that keep them coming back.' },
  ];

  const useCases = [
    { title: 'Hair Salons & Barbershops', description: 'Turn happy clients into your marketing team. After a great haircut, clients are excited to share—make it easy with a quick scan.', touchpoints: ['Mirror QR codes', 'Appointment cards', 'Product bags', 'Stylist cards'] },
    { title: 'Spas & Med Spas', description: 'High-ticket services benefit enormously from referrals. Build trust through word-of-mouth for treatments like facials, injectables, and wellness packages.', touchpoints: ['Treatment room signage', 'Post-treatment follow-up', 'Membership cards', 'Gift certificates'] },
    { title: 'Nail Salons & Studios', description: 'With quick service times and high repeat rates, nail salons are perfect for referral programs. Reward clients who bring friends.', touchpoints: ['Station displays', 'Receipt codes', 'Loyalty punch cards', 'Social media prompts'] },
  ];

  return (
    <IndustryPageLayout>
      <SEOHead
        title="Referral Marketing for Salons & Spas | ReferralSynch"
        description="Turn your happiest salon and spa clients into your best marketers. ReferralSynch helps beauty businesses track referrals and reward advocates automatically."
        keywords="salon referral program, spa referral marketing, hair salon referrals, beauty word of mouth, med spa referrals"
        canonical="https://referralsynch.com/industries/beauty-wellness"
        ogTitle="Referral Marketing for Salons & Spas"
        ogDescription="Fill your appointment book through word-of-mouth. QR codes at styling stations, automatic rewards for referrers."
      />
      <IndustryStickyHeader industry="Beauty" />

      <section style={{ padding: '120px 32px 80px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <Scissors size={24} color={theme.colors.forest} />
            <span style={{ fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.sage, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Beauty & Wellness</span>
          </div>
          <h1 style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: theme.colors.ink, lineHeight: 1.2, marginBottom: 24 }}>
            Referral Marketing for{' '}<span style={{ color: theme.colors.forest }}>Salons & Spas</span>
          </h1>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 18, color: theme.colors.charcoal, lineHeight: 1.7, marginBottom: 32 }}>
            Beauty is personal—and so are the recommendations that drive new clients through your door. Turn your happiest clients into your best marketers with ReferralSynch.
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
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 48 }}>Built for Beauty & Wellness</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {features.map((feature, i) => <FeatureCard key={i} {...feature} />)}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 32px', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 48 }}>How Beauty Businesses Use ReferralSynch</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {useCases.map((uc, i) => <UseCaseCard key={i} {...uc} />)}
        </div>
      </section>

      <section style={{ padding: '0 32px 80px', maxWidth: 800, margin: '0 auto' }}>
        <IndustryTestimonialCard quote="Our stylists love it. They put their personal QR code on business cards, and we track who's bringing in the most referrals. It's turned into a friendly competition." author="Marcus Williams" business="The Grooming Lounge" result="+52 new clients/mo" />
      </section>

      <IndustryCTASection industry="Beauty & Wellness" headline="Ready to fill your appointment book?" />
    </IndustryPageLayout>
  );
};

export default BeautyIndustry;
