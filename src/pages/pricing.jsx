import React, { useState } from 'react';
import {
  Check, X, ArrowRight, Shield, QrCode, CreditCard,
  Users, ChevronDown, Phone, DollarSign, Calculator,
  Building, HelpCircle, Sparkles, Star,
  ChevronUp, Gift, BarChart3, Lock, Clock, Percent
} from 'lucide-react';
import { theme } from '../theme';
import EnhancedNavigation from '../components/Navigation';
import Footer from '../components/Footer';

// =============================================================================
// PRICING TOGGLE
// =============================================================================
const PricingToggle = ({ isAnnual, setIsAnnual }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 48 }}>
    <span style={{ 
      fontFamily: theme.fonts.body, 
      fontSize: 15, 
      fontWeight: isAnnual ? 400 : 600,
      color: isAnnual ? theme.colors.slate : theme.colors.ink,
    }}>
      Monthly
    </span>
    <button
      onClick={() => setIsAnnual(!isAnnual)}
      style={{
        width: 56,
        height: 28,
        borderRadius: 14,
        backgroundColor: isAnnual ? theme.colors.forest : theme.colors.mint,
        border: 'none',
        cursor: 'pointer',
        position: 'relative',
        transition: 'background-color 0.2s',
      }}
    >
      <div style={{
        width: 22,
        height: 22,
        borderRadius: '50%',
        backgroundColor: theme.colors.warmWhite,
        position: 'absolute',
        top: 3,
        left: isAnnual ? 31 : 3,
        transition: 'left 0.2s',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }} />
    </button>
    <span style={{ 
      fontFamily: theme.fonts.body, 
      fontSize: 15, 
      fontWeight: isAnnual ? 600 : 400,
      color: isAnnual ? theme.colors.ink : theme.colors.slate,
    }}>
      Annual
    </span>
    <span style={{
      backgroundColor: theme.colors.gold,
      color: theme.colors.ink,
      padding: '4px 10px',
      borderRadius: 12,
      fontSize: 12,
      fontWeight: 600,
      fontFamily: theme.fonts.body,
    }}>
      Save 20%
    </span>
  </div>
);

// =============================================================================
// PRICING CARD
// =============================================================================
const PricingCard = ({ plan, isAnnual, isPopular }) => {
  const isEnterprise = plan.price === null;
  const monthlyPrice = plan.price;
  const annualPrice = isEnterprise ? null : Math.round(plan.price * 0.8);
  const displayPrice = isEnterprise ? null : (isAnnual ? annualPrice : monthlyPrice);

  return (
    <div style={{
      backgroundColor: theme.colors.warmWhite,
      borderRadius: 20,
      padding: 32,
      border: isPopular ? `2px solid ${theme.colors.forest}` : `1px solid ${theme.colors.mint}`,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {isPopular && (
        <span style={{
          position: 'absolute',
          top: -14,
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: theme.colors.forest,
          color: theme.colors.warmWhite,
          padding: '6px 16px',
          borderRadius: 20,
          fontSize: 12,
          fontWeight: 600,
          fontFamily: theme.fonts.body,
        }}>
          Most Popular
        </span>
      )}

      <h3 style={{ fontFamily: theme.fonts.body, fontSize: 20, fontWeight: 600, color: theme.colors.ink, marginBottom: 8 }}>
        {plan.name}
      </h3>
      <p style={{ fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.slate, marginBottom: 24, minHeight: 40 }}>
        {plan.description}
      </p>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
          <span style={{ fontFamily: theme.fonts.display, fontSize: 48, fontWeight: 500, color: theme.colors.ink }}>
            {isEnterprise ? 'Custom' : `$${displayPrice}`}
          </span>
          {!isEnterprise && <span style={{ fontFamily: theme.fonts.body, fontSize: 16, color: theme.colors.slate }}>/month</span>}
        </div>
        {isAnnual && !isEnterprise && (
          <p style={{ fontFamily: theme.fonts.body, fontSize: 13, color: theme.colors.sage, marginTop: 4 }}>
            billed at ${annualPrice * 12}/year (save ${(monthlyPrice - annualPrice) * 12})
          </p>
        )}
        {isEnterprise && (
          <p style={{ fontFamily: theme.fonts.body, fontSize: 13, color: theme.colors.sage, marginTop: 4 }}>
            Tailored to your business needs
          </p>
        )}
        <p style={{ fontFamily: theme.fonts.body, fontSize: 13, color: theme.colors.slate, marginTop: 8 }}>
          {plan.advocateLimit}
        </p>
      </div>

      <a
        href={isEnterprise ? '/demo' : '/signup'}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          padding: '14px 24px',
          backgroundColor: isPopular ? theme.colors.forest : 'transparent',
          color: isPopular ? theme.colors.warmWhite : theme.colors.forest,
          border: isPopular ? 'none' : `2px solid ${theme.colors.forest}`,
          borderRadius: 8,
          fontFamily: theme.fonts.body,
          fontSize: 15,
          fontWeight: 600,
          textDecoration: 'none',
          marginBottom: 24,
        }}
      >
        {plan.cta} <ArrowRight size={16} />
      </a>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
        {plan.features.map((feature, i) => (
          <li key={i} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 12,
            padding: '10px 0',
            borderTop: i === 0 ? `1px solid ${theme.colors.mint}` : 'none',
            fontFamily: theme.fonts.body,
            fontSize: 14,
            color: theme.colors.charcoal,
          }}>
            <Check size={16} color={theme.colors.green} style={{ flexShrink: 0, marginTop: 2 }} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

// =============================================================================
// ROI CALCULATOR
// =============================================================================
const ROICalculator = () => {
  const [monthlyCustomers, setMonthlyCustomers] = useState(500);
  const [avgOrderValue, setAvgOrderValue] = useState(75);
  const [currentReferralRate, setCurrentReferralRate] = useState(2);

  // Calculations
  const improvedReferralRate = Math.min(currentReferralRate * 3, 15); // 3x improvement, max 15%
  const monthlyReferrals = Math.round(monthlyCustomers * (improvedReferralRate / 100));
  const monthlyReferralRevenue = monthlyReferrals * avgOrderValue;
  const annualReferralRevenue = monthlyReferralRevenue * 12;
  const estimatedROI = Math.round((annualReferralRevenue / (69 * 12)) * 100); // Based on Growth plan

  return (
    <section style={{ padding: '80px 32px', backgroundColor: theme.colors.warmWhite }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
            <Calculator size={28} color={theme.colors.forest} />
            <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink }}>
              ROI Calculator
            </h2>
          </div>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 16, color: theme.colors.charcoal, maxWidth: 600, margin: '0 auto' }}>
            See how much revenue ReferralSynch could generate for your business
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
          {/* Inputs */}
          <div style={{ backgroundColor: theme.colors.cream, padding: 32, borderRadius: 16 }}>
            <h3 style={{ fontFamily: theme.fonts.body, fontSize: 18, fontWeight: 600, color: theme.colors.ink, marginBottom: 24 }}>
              Your Business Metrics
            </h3>

            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 500, color: theme.colors.charcoal, marginBottom: 8 }}>
                Monthly Customers
              </label>
              <input
                type="range"
                min="100"
                max="5000"
                step="100"
                value={monthlyCustomers}
                onChange={(e) => setMonthlyCustomers(Number(e.target.value))}
                style={{ width: '100%', accentColor: theme.colors.forest }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                <span style={{ fontSize: 12, color: theme.colors.slate }}>100</span>
                <span style={{ fontSize: 16, fontWeight: 600, color: theme.colors.forest }}>{monthlyCustomers.toLocaleString()}</span>
                <span style={{ fontSize: 12, color: theme.colors.slate }}>5,000</span>
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 500, color: theme.colors.charcoal, marginBottom: 8 }}>
                Average Order Value
              </label>
              <input
                type="range"
                min="25"
                max="500"
                step="25"
                value={avgOrderValue}
                onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                style={{ width: '100%', accentColor: theme.colors.forest }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                <span style={{ fontSize: 12, color: theme.colors.slate }}>$25</span>
                <span style={{ fontSize: 16, fontWeight: 600, color: theme.colors.forest }}>${avgOrderValue}</span>
                <span style={{ fontSize: 12, color: theme.colors.slate }}>$500</span>
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 500, color: theme.colors.charcoal, marginBottom: 8 }}>
                Current Referral Rate (%)
              </label>
              <input
                type="range"
                min="0"
                max="10"
                step="0.5"
                value={currentReferralRate}
                onChange={(e) => setCurrentReferralRate(Number(e.target.value))}
                style={{ width: '100%', accentColor: theme.colors.forest }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                <span style={{ fontSize: 12, color: theme.colors.slate }}>0%</span>
                <span style={{ fontSize: 16, fontWeight: 600, color: theme.colors.forest }}>{currentReferralRate}%</span>
                <span style={{ fontSize: 12, color: theme.colors.slate }}>10%</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <div style={{ backgroundColor: theme.colors.forest, padding: 32, borderRadius: 16, color: theme.colors.warmWhite, marginBottom: 24 }}>
              <h3 style={{ fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, opacity: 0.8, marginBottom: 8 }}>
                PROJECTED ANNUAL REFERRAL REVENUE
              </h3>
              <div style={{ fontFamily: theme.fonts.display, fontSize: 48, fontWeight: 500 }}>
                ${annualReferralRevenue.toLocaleString()}
              </div>
              <p style={{ fontFamily: theme.fonts.body, fontSize: 14, opacity: 0.8, marginTop: 8 }}>
                Based on {improvedReferralRate}% referral rate (industry average with ReferralSynch)
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ backgroundColor: theme.colors.cream, padding: 20, borderRadius: 12, textAlign: 'center' }}>
                <div style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.forest }}>
                  {monthlyReferrals}
                </div>
                <div style={{ fontFamily: theme.fonts.body, fontSize: 13, color: theme.colors.slate }}>
                  New referrals/month
                </div>
              </div>
              <div style={{ backgroundColor: theme.colors.cream, padding: 20, borderRadius: 12, textAlign: 'center' }}>
                <div style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.forest }}>
                  {estimatedROI}%
                </div>
                <div style={{ fontFamily: theme.fonts.body, fontSize: 13, color: theme.colors.slate }}>
                  Estimated ROI
                </div>
              </div>
            </div>

            <p style={{ fontFamily: theme.fonts.body, fontSize: 12, color: theme.colors.slate, marginTop: 16, textAlign: 'center' }}>
              * Estimates based on Growth plan ($69/mo). Actual results may vary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// COMPARE PLANS TABLE
// =============================================================================
const ComparePlansTable = () => {
  const [expandedSections, setExpandedSections] = useState({
    referrals: true,
    attribution: false,
    fraud: false,
    gamification: false,
    payouts: false,
    support: false,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const plans = ['Starter', 'Growth', 'Scale', 'Enterprise'];

  const sections = [
    {
      id: 'referrals',
      title: 'Referral Campaigns',
      features: [
        { name: 'Active campaigns', values: ['1', '5', 'Unlimited', 'Unlimited'] },
        { name: 'Monthly advocates', values: ['100', '500', '2,000', 'Unlimited'] },
        { name: 'Custom reward rules', values: [false, true, true, true] },
        { name: 'Double-sided rewards', values: [true, true, true, true] },
        { name: 'Email sequences', values: [false, true, true, true] },
        { name: 'A/B testing', values: [false, true, true, true] },
      ],
    },
    {
      id: 'attribution',
      title: 'QR & NFC Attribution',
      features: [
        { name: 'QR code generation', values: [true, true, true, true] },
        { name: 'Dynamic QR codes', values: [false, true, true, true] },
        { name: 'NFC tag support', values: [false, true, true, true] },
        { name: 'Location-based tracking', values: [false, true, true, true] },
        { name: 'Custom landing pages', values: [false, true, true, true] },
      ],
    },
    {
      id: 'fraud',
      title: 'Fraud Detection',
      features: [
        { name: 'Self-referral blocking', values: [true, true, true, true] },
        { name: 'Disposable email detection', values: [true, true, true, true] },
        { name: 'VPN/Proxy detection', values: [false, true, true, true] },
        { name: 'Device fingerprinting', values: [false, true, true, true] },
        { name: 'Velocity abuse detection', values: [false, true, true, true] },
        { name: 'Behavioral analysis', values: [false, true, true, true] },
        { name: 'Payment matching', values: [false, false, true, true] },
        { name: 'Risk score (0-100)', values: [false, true, true, true] },
      ],
    },
    {
      id: 'gamification',
      title: 'Gamification',
      features: [
        { name: 'Leaderboards', values: [false, true, true, true] },
        { name: 'Achievement badges', values: [false, '20+', 'Custom', 'Custom'] },
        { name: 'VIP tiers', values: [false, '5', 'Custom', 'Custom'] },
        { name: 'Streak rewards', values: [false, true, true, true] },
        { name: 'Milestone bonuses', values: [false, true, true, true] },
      ],
    },
    {
      id: 'payouts',
      title: 'Payouts & Rewards',
      features: [
        { name: 'Discount codes', values: [true, true, true, true] },
        { name: 'Store credit', values: [false, true, true, true] },
        { name: 'Stripe Connect payouts', values: [false, true, true, true] },
        { name: 'Custom reward types', values: [false, false, true, true] },
        { name: 'Bulk payouts', values: [false, false, true, true] },
      ],
    },
    {
      id: 'support',
      title: 'Support & Services',
      features: [
        { name: 'Email support', values: [true, true, true, true] },
        { name: 'Live chat', values: [false, true, true, true] },
        { name: 'Phone support', values: [false, false, true, true] },
        { name: 'Dedicated CSM', values: [false, false, false, true] },
        { name: 'White-glove onboarding', values: [false, true, true, true] },
        { name: 'API access', values: [false, false, true, true] },
        { name: 'White-label portal', values: [false, false, true, true] },
      ],
    },
  ];

  const renderValue = (value) => {
    if (value === true) return <Check size={18} color={theme.colors.green} />;
    if (value === false) return <X size={18} color={theme.colors.slate} style={{ opacity: 0.3 }} />;
    return <span style={{ fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.ink }}>{value}</span>;
  };

  return (
    <section id="compare-plans" style={{ padding: '80px 32px', backgroundColor: theme.colors.cream }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 48 }}>
          Compare Plans
        </h2>

        {/* Sticky header */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '250px repeat(4, 1fr)', 
          gap: 0,
          backgroundColor: theme.colors.forest,
          borderRadius: '16px 16px 0 0',
          padding: '16px 20px',
          position: 'sticky',
          top: 72,
          zIndex: 10,
        }}>
          <div></div>
          {plans.map((plan, i) => (
            <div key={plan} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: theme.fonts.body, fontSize: 16, fontWeight: 600, color: theme.colors.warmWhite }}>
                {plan}
              </div>
              <div style={{ fontFamily: theme.fonts.body, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                {['$29', '$69', '$179', 'Custom'][i]}{i < 3 ? '/mo' : ''}
              </div>
            </div>
          ))}
        </div>

        {/* Feature sections */}
        <div style={{ backgroundColor: theme.colors.warmWhite, borderRadius: '0 0 16px 16px', overflow: 'hidden' }}>
          {sections.map((section) => (
            <div key={section.id}>
              {/* Section header */}
              <button
                onClick={() => toggleSection(section.id)}
                style={{
                  width: '100%',
                  display: 'grid',
                  gridTemplateColumns: '250px repeat(4, 1fr)',
                  gap: 0,
                  padding: '16px 20px',
                  backgroundColor: theme.colors.mint + '30',
                  border: 'none',
                  borderBottom: `1px solid ${theme.colors.mint}`,
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {expandedSections[section.id] ? (
                    <ChevronUp size={18} color={theme.colors.forest} />
                  ) : (
                    <ChevronDown size={18} color={theme.colors.forest} />
                  )}
                  <span style={{ fontFamily: theme.fonts.body, fontSize: 15, fontWeight: 600, color: theme.colors.ink }}>
                    {section.title}
                  </span>
                </div>
              </button>

              {/* Section features */}
              {expandedSections[section.id] && section.features.map((feature, i) => (
                <div
                  key={feature.name}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '250px repeat(4, 1fr)',
                    gap: 0,
                    padding: '12px 20px',
                    borderBottom: i < section.features.length - 1 ? `1px solid ${theme.colors.mint}40` : 'none',
                  }}
                >
                  <div style={{ fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.charcoal }}>
                    {feature.name}
                  </div>
                  {feature.values.map((value, j) => (
                    <div key={j} style={{ textAlign: 'center' }}>
                      {renderValue(value)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '250px repeat(4, 1fr)',
          gap: 16,
          marginTop: 24,
          padding: '0 20px',
        }}>
          <div></div>
          {plans.map((plan, i) => (
            <a
              key={plan}
              href={i === 3 ? '/demo' : '/signup'}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '12px 16px',
                backgroundColor: i === 1 ? theme.colors.forest : 'transparent',
                color: i === 1 ? theme.colors.warmWhite : theme.colors.forest,
                border: i === 1 ? 'none' : `2px solid ${theme.colors.forest}`,
                borderRadius: 8,
                fontFamily: theme.fonts.body,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              {i === 3 ? 'Contact Us' : 'Start Free Trial'}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// FAQ SECTION
// =============================================================================
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Is there a free trial?',
      answer: 'Yes! All plans include a 14-day free trial with full access. No credit card required to start. Cancel anytime during the trial and you won\'t be charged.',
    },
    {
      question: 'What happens when I exceed my advocate limit?',
      answer: 'You\'ll receive a notification when you\'re approaching your limit. You can upgrade to a higher plan anytime, or we\'ll automatically pause new advocate signups until your next billing cycle. Existing advocates continue to work normally.',
    },
    {
      question: 'Can I switch plans later?',
      answer: 'Absolutely. You can upgrade or downgrade at any time. Upgrades take effect immediately with prorated billing. Downgrades take effect at your next billing cycle.',
    },
    {
      question: 'How does Stripe Connect payouts work?',
      answer: 'Advocates connect their bank account once through Stripe Connect. When they earn rewards above the minimum threshold ($10), payouts are sent automatically. You never touch the money—Stripe handles everything securely.',
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees on any plan. Growth and above include white-glove onboarding assistance at no extra cost.',
    },
    {
      question: 'Do you charge success fees or commissions?',
      answer: 'Never. Unlike competitors who take 3-5% of every referral sale, ReferralSynch uses flat monthly pricing. Your success doesn\'t cost you extra.',
    },
    {
      question: 'Can I migrate from another referral platform?',
      answer: 'Yes! We offer free migration assistance for all paid plans. Our team will help you export your advocate list and import them into ReferralSynch, preserving their referral history.',
    },
    {
      question: 'What integrations are included?',
      answer: 'All plans include Shopify, WooCommerce, and Stripe integrations. Growth adds Klaviyo, Mailchimp, and Zapier. Scale includes API access for custom integrations.',
    },
  ];

  return (
    <section style={{ padding: '80px 32px', backgroundColor: theme.colors.cream }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, textAlign: 'center', marginBottom: 48 }}>
          Frequently Asked Questions
        </h2>

        <div>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: `1px solid ${theme.colors.mint}` }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontFamily: theme.fonts.body, fontSize: 17, fontWeight: 600, color: theme.colors.ink, paddingRight: 16 }}>
                  {faq.question}
                </span>
                <ChevronDown 
                  size={20} 
                  color={theme.colors.forest}
                  style={{ 
                    flexShrink: 0,
                    transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)', 
                    transition: 'transform 0.2s' 
                  }}
                />
              </button>
              {openIndex === i && (
                <div style={{ paddingBottom: 20 }}>
                  <p style={{ fontFamily: theme.fonts.body, fontSize: 15, color: theme.colors.charcoal, lineHeight: 1.7 }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// CTA SECTION
// =============================================================================
const CTASection = () => (
  <section style={{ padding: '40px 32px 80px' }}>
    <div style={{
      maxWidth: 900,
      margin: '0 auto',
      backgroundColor: theme.colors.gold,
      borderRadius: 24,
      padding: '64px 48px',
      textAlign: 'center',
    }}>
      <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, marginBottom: 16 }}>
        Need Something Custom?
      </h2>
      <p style={{ fontFamily: theme.fonts.body, fontSize: 18, color: theme.colors.charcoal, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
        For businesses needing custom integrations, higher volumes, or dedicated support — let's talk.
      </p>
      <a href="/demo" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '16px 32px',
        backgroundColor: theme.colors.forest,
        color: theme.colors.warmWhite,
        borderRadius: 8,
        fontFamily: theme.fonts.body,
        fontSize: 16,
        fontWeight: 600,
        textDecoration: 'none',
      }}>
        <Phone size={18} /> Talk to Sales
      </a>
    </div>
  </section>
);

// =============================================================================
// MAIN PRICING PAGE
// =============================================================================
const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      price: 29,
      description: 'For small businesses starting with referrals',
      advocateLimit: 'Up to 100 advocates',
      cta: 'Start Free Trial',
      features: [
        '1 referral campaign',
        'QR code tracking',
        'Fraud detection included',
        'Discount code rewards',
        'Email support',
        '14-day free trial',
      ],
    },
    {
      name: 'Growth',
      price: 69,
      description: 'For businesses ready to scale word of mouth',
      advocateLimit: 'Up to 500 advocates',
      cta: 'Start Free Trial',
      features: [
        '5 referral campaigns',
        'QR + NFC tracking',
        'Stripe Connect payouts',
        '5-tier gamification suite',
        'Klaviyo, Mailchimp & Zapier',
        'Priority support',
        '14-day free trial',
      ],
    },
    {
      name: 'Scale',
      price: 179,
      description: 'For high-volume referral programs',
      advocateLimit: 'Up to 2,000 advocates',
      cta: 'Start Free Trial',
      features: [
        'Unlimited campaigns',
        'Everything in Growth',
        'API access',
        'White-label portal',
        'Behavioral fraud analysis',
        'Phone support',
        '14-day free trial',
      ],
    },
    {
      name: 'Enterprise',
      price: null,
      description: 'For organizations needing custom solutions',
      advocateLimit: 'Unlimited advocates',
      cta: 'Contact Us',
      features: [
        'Unlimited everything',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee',
        'White-glove onboarding',
        'Volume discounts',
      ],
    },
  ];

  return (
    <>
      <EnhancedNavigation />
      
      <main style={{ backgroundColor: theme.colors.cream, minHeight: '100vh', paddingTop: 80 }}>
        {/* Hero */}
        <section style={{ padding: '60px 32px 40px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: theme.colors.ink, marginBottom: 16 }}>
            Simple, Transparent Pricing
          </h1>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 18, color: theme.colors.charcoal, maxWidth: 600, margin: '0 auto 32px' }}>
            14-day free trial on every plan. No hidden fees. No success fees. Cancel anytime.
          </p>
          <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
        </section>

        {/* Pricing Cards */}
        <section style={{ padding: '0 32px 60px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {plans.map((plan, i) => (
              <PricingCard
                key={plan.name}
                plan={plan}
                isAnnual={isAnnual}
                isPopular={i === 1}
              />
            ))}
          </div>
        </section>

        {/* Social Proof */}
        <section style={{ padding: '40px 32px', backgroundColor: theme.colors.midnight, textAlign: 'center' }}>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 24 }}>
            TRUSTED BY LOCAL BUSINESSES ACROSS AMERICA
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap', opacity: 0.6 }}>
            {['Auto Repair', 'Salons', 'Restaurants', 'Contractors', 'Retail'].map((industry) => (
              <span key={industry} style={{ fontFamily: theme.fonts.body, fontSize: 16, color: 'rgba(255,255,255,0.8)' }}>
                {industry}
              </span>
            ))}
          </div>
        </section>

        <ROICalculator />
        <ComparePlansTable />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />

    </>
  );
};

export default PricingPage;
