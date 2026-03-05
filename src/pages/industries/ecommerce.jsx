import React from 'react';
import { ArrowRight, ShoppingBag, Gift, Shield, BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';
import { theme } from '../../theme';
import { IndustryPageLayout, IndustryStickyHeader, StatCard, FeatureCard, UseCaseCard, IndustryTestimonialCard, IndustryCTASection } from '../../components/IndustryShared';
import SEOHead from '../../components/SEOHead';

const EcommerceIndustry = () => {
  const stats = [
    { value: '16%', label: 'higher lifetime value for referred customers', icon: TrendingUp },
    { value: '5x', label: 'more likely to refer others after being referred', icon: Users },
    { value: '25%', label: 'of revenue can come from referral programs', icon: DollarSign },
  ];

  const features = [
    { icon: ShoppingBag, title: 'Post-Purchase Prompts', description: 'Automatically invite customers to refer friends after checkout. Capture enthusiasm while the purchase is still fresh.' },
    { icon: Gift, title: 'Flexible Reward Types', description: 'Offer cash, store credit, discounts, or free products. Mix and match to find what motivates your customers.' },
    { icon: Shield, title: 'Coupon Abuse Prevention', description: '13+ fraud checks prevent coupon stacking, self-referrals, and fake accounts that drain your marketing budget.' },
    { icon: BarChart3, title: 'Revenue Attribution', description: 'Track exactly how much revenue each advocate generates. Calculate true ROI on your referral program.' },
  ];

  const useCases = [
    { title: 'Direct-to-Consumer Brands', description: 'Build a community of brand advocates who love your products. Reward them for sharing with friends and on social media.', touchpoints: ['Order confirmation', 'Package inserts', 'Account dashboard', 'Email sequences'] },
    { title: 'Subscription Boxes', description: 'Subscribers love to share unboxing experiences. Make it easy—and rewarding—for them to bring in new members.', touchpoints: ['Box inserts', 'Account portal', 'Renewal emails', 'Social prompts'] },
    { title: 'Marketplace Sellers', description: 'Stand out from competitors with a referral program. Build direct relationships with customers who find you on marketplaces.', touchpoints: ['Package cards', 'Follow-up emails', 'Product inserts', 'Thank you notes'] },
  ];

  return (
    <IndustryPageLayout>
      <SEOHead
        title="Referral Marketing for eCommerce & Online Stores | ReferralSynch"
        description="Turn satisfied buyers into a referral engine. ReferralSynch helps eCommerce brands grow through word-of-mouth with fraud protection competitors can't match."
        keywords="ecommerce referral program, online store referrals, d2c referral marketing, shopify referral program"
        canonical="https://referralsynch.com/industries/ecommerce"
        ogTitle="Referral Marketing for eCommerce & Online Stores"
        ogDescription="Post-purchase referral prompts, fraud protection, and flexible rewards for D2C brands."
      />
      <IndustryStickyHeader industry="eCommerce" />

      <section style={{ padding: '120px 32px 80px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <ShoppingBag size={24} color={theme.colors.forest} />
            <span style={{ fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.sage, textTransform: 'uppercase', letterSpacing: '0.1em' }}>eCommerce</span>
          </div>
          <h1 style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: theme.colors.ink, lineHeight: 1.2, marginBottom: 24 }}>
            Referral Marketing for{' '}<span style={{ color: theme.colors.forest }}>Online Stores</span>
          </h1>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 18, color: theme.colors.charcoal, lineHeight: 1.7, marginBottom: 32 }}>
            Your best customers are your best marketers. ReferralSynch helps eCommerce brands turn satisfied buyers into a referral engine—with fraud protection that competitors can't match.
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
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 48 }}>Built for eCommerce</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {features.map((feature, i) => <FeatureCard key={i} {...feature} />)}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 32px', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 48 }}>How eCommerce Brands Use ReferralSynch</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {useCases.map((uc, i) => <UseCaseCard key={i} {...uc} />)}
        </div>
      </section>

      <section style={{ padding: '0 32px 80px', maxWidth: 800, margin: '0 auto' }}>
        <IndustryTestimonialCard quote="We switched from ReferralCandy to save on commission fees. Not only are we saving $400/month, but the fraud detection caught a referral ring we didn't even know existed." author="Amanda Lee" business="Glow Skincare Co." result="-$400/mo costs" />
      </section>

      <IndustryCTASection industry="eCommerce" headline="Ready to turn customers into advocates?" />
    </IndustryPageLayout>
  );
};

export default EcommerceIndustry;
