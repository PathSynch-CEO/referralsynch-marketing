import React from 'react';
import { ArrowRight, Coffee, QrCode, Receipt, Gift, MapPin, Utensils, TrendingUp, DollarSign } from 'lucide-react';
import { theme } from '../../theme';
import { IndustryPageLayout, IndustryStickyHeader, StatCard, FeatureCard, UseCaseCard, IndustryTestimonialCard, IndustryCTASection } from '../../components/IndustryShared';
import SEOHead from '../../components/SEOHead';

const FoodBeverageIndustry = () => {
  const stats = [
    { value: '77%', label: 'of diners try new restaurants based on recommendations', icon: Utensils },
    { value: '3.5x', label: 'more likely to return when referred by a friend', icon: TrendingUp },
    { value: '$45', label: 'average higher spend for referred customers', icon: DollarSign },
  ];

  const features = [
    { icon: QrCode, title: 'Table Tent QR Codes', description: 'Place QR codes on table tents, menus, and check presenters. Diners can refer friends while waiting for their food or paying the bill.' },
    { icon: Receipt, title: 'Receipt Referral Codes', description: 'Print unique referral codes on every receipt. Turn every transaction into a chance to earn a new customer.' },
    { icon: Gift, title: 'Free Appetizer Rewards', description: 'Reward referrers with free appetizers, desserts, or drinks. Bring them back while thanking them for spreading the word.' },
    { icon: MapPin, title: 'Multi-Location Tracking', description: "Track referral performance across all your locations. See which spots generate the most word-of-mouth." },
  ];

  const useCases = [
    { title: 'Full-Service Restaurants', description: 'Turn satisfied diners into ambassadors. After a great meal, guests are happy to recommend—make it rewarding for them.', touchpoints: ['Table tents', 'Check presenters', 'Menu inserts', 'Host stand signage'] },
    { title: 'Fast Casual & QSR', description: 'High volume means high referral potential. Capture recommendations at checkout and on packaging.', touchpoints: ['Counter displays', 'Bag stickers', 'Receipt codes', 'App prompts'] },
    { title: 'Bars & Breweries', description: 'Social settings are perfect for referrals. Friends bring friends—reward them for it.', touchpoints: ['Coasters', 'Bar menus', 'Tap handles', 'Event signage'] },
  ];

  return (
    <IndustryPageLayout>
      <SEOHead
        title="Referral Marketing for Restaurants & Bars | ReferralSynch"
        description="Turn diners into ambassadors. ReferralSynch helps restaurants track word-of-mouth recommendations from table tents, receipts, and check presenters."
        keywords="restaurant referral program, bar referral marketing, cafe word of mouth, food service customer referrals"
        canonical="https://referralsynch.com/industries/food-beverage"
        ogTitle="Referral Marketing for Restaurants & Bars"
        ogDescription="Track referrals from table tents and receipts. Reward guests who bring in new customers."
      />
      <IndustryStickyHeader industry="Food & Beverage" />

      <section style={{ padding: '120px 32px 80px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <Coffee size={24} color={theme.colors.forest} />
            <span style={{ fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.sage, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Food & Beverage</span>
          </div>
          <h1 style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: theme.colors.ink, lineHeight: 1.2, marginBottom: 24 }}>
            Referral Marketing for{' '}<span style={{ color: theme.colors.forest }}>Restaurants & Bars</span>
          </h1>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 18, color: theme.colors.charcoal, lineHeight: 1.7, marginBottom: 32 }}>
            "You have to try this place!" Turn those words into tracked, rewarded referrals. ReferralSynch helps restaurants capture word-of-mouth recommendations and reward the guests who spread them.
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
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 48 }}>Built for Food & Beverage</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {features.map((feature, i) => <FeatureCard key={i} {...feature} />)}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 32px', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 48 }}>How Restaurants Use ReferralSynch</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {useCases.map((uc, i) => <UseCaseCard key={i} {...uc} />)}
        </div>
      </section>

      <section style={{ padding: '0 32px 80px', maxWidth: 800, margin: '0 auto' }}>
        <IndustryTestimonialCard quote="We added QR codes to our table tents and check presenters. Now we can actually track which guests are recommending us—and reward them with a free appetizer on their next visit." author="Chef Michael Torres" business="Harvest Kitchen" result="+28% new guests" />
      </section>

      <IndustryCTASection industry="Food & Beverage" headline="Ready to turn diners into ambassadors?" />
    </IndustryPageLayout>
  );
};

export default FoodBeverageIndustry;
