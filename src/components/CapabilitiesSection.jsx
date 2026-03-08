import React, { useState, useEffect, useRef } from 'react';
import {
  QrCode, Shield, Trophy, CreditCard, BarChart3,
  Sparkles, Check, Zap, Link, Smartphone, Gift, Lock,
  Users, Layers, Award
} from 'lucide-react';
import { theme } from '../theme';

const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold: 0.2, ...options }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};

const AnimatedFeatureCard = ({ icon: Icon, title, description, features, delay = 0, color }) => {
  const [ref, isInView] = useInView();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: theme.colors.warmWhite,
        borderRadius: 20,
        padding: 32,
        border: `1px solid ${isHovered ? theme.colors.forest : theme.colors.mint}`,
        opacity: isInView ? 1 : 0,
        transform: isInView
          ? (isHovered ? 'translateY(-8px)' : 'translateY(0)')
          : 'translateY(30px)',
        transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        cursor: 'pointer',
        boxShadow: isHovered
          ? '0 20px 40px rgba(27, 77, 62, 0.15)'
          : '0 4px 16px rgba(0, 0, 0, 0.04)',
      }}
    >
      <div style={{
        width: 64, height: 64, borderRadius: 16,
        backgroundColor: color + '15',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 24,
        transform: isHovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1) rotate(0deg)',
        transition: 'transform 0.3s ease',
      }}>
        <Icon size={32} color={color} />
      </div>
      <h3 style={{ fontFamily: theme.fonts.body, fontSize: 22, fontWeight: 600, color: theme.colors.ink, marginBottom: 12 }}>
        {title}
      </h3>
      <p style={{ fontFamily: theme.fonts.body, fontSize: 15, color: theme.colors.charcoal, lineHeight: 1.7, marginBottom: 20 }}>
        {description}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {features.map((feature, i) => (
          <li key={i} style={{
            display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0',
            fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.slate,
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateX(0)' : 'translateX(-10px)',
            transition: `all 0.4s ease ${delay + 100 + (i * 80)}ms`,
          }}>
            <Check size={16} color={theme.colors.sage} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const CapabilitiesSection = () => {
  const [sectionRef, sectionInView] = useInView();
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      icon: Zap, title: 'Referral Engine', color: '#3B82F6',
      description: 'Launch referral campaigns in minutes — custom links, double-sided rewards, and automated email sequences that drive sharing.',
      features: ['Custom referral links & landing pages', 'Double-sided rewards (referrer + friend)', 'Automated email & SMS sequences', 'A/B testing for campaigns'],
      stat: '3x', statLabel: 'more referrals vs basic programs',
    },
    {
      icon: QrCode, title: 'Physical-to-Digital', color: '#10B981',
      badge: 'THE MOAT',
      description: 'Track real-world referrals with QR codes on receipts, NFC tags on counters, and location-based attribution — no other platform does this.',
      features: ['Unlimited QR code generation', 'NFC tag programming & tracking', 'Location-based analytics', 'Receipt & packaging integration'],
      stat: '100%', statLabel: 'attribution accuracy',
    },
    {
      icon: Trophy, title: 'Rewards & Gamification', color: '#F59E0B',
      description: 'Turn advocates into champions with VIP tiers, achievement badges, streak rewards, and real-time leaderboards.',
      features: ['5 customizable VIP tiers', '20+ achievement badges', 'Streak & milestone rewards', 'Real-time leaderboards'],
      stat: '47%', statLabel: 'higher engagement',
    },
    {
      icon: Link, title: 'Integrations', color: '#8B5CF6',
      description: 'Connect your stack — Shopify, Stripe, Klaviyo, Zapier, and more. Automated payouts via Stripe Connect mean advocates get paid without you lifting a finger.',
      features: ['Stripe Connect automated payouts', 'Shopify & WooCommerce', 'Klaviyo, Mailchimp & Zapier', 'REST API for custom builds'],
      stat: '2-3 days', statLabel: 'average payout time',
    },
    {
      icon: Shield, title: 'Trust & Security', color: '#EF4444',
      description: 'Enterprise-grade fraud detection with 13+ check types — self-referral blocking, VPN detection, device fingerprinting, and behavioral analysis.',
      features: ['13+ fraud detection types', 'Risk scoring (0-100)', 'Device fingerprinting', 'Behavioral pattern analysis'],
      stat: '0.1%', statLabel: 'fraud rate vs 3% industry avg',
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      style={{ backgroundColor: theme.colors.cream, padding: '120px 32px', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          textAlign: 'center', marginBottom: 64,
          opacity: sectionInView ? 1 : 0,
          transform: sectionInView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
            <Sparkles size={24} color={theme.colors.gold} />
            <span style={{ fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.sage, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              Platform Capabilities
            </span>
          </div>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: theme.colors.ink, marginBottom: 16 }}>
            Everything You Need to{' '}
            <em style={{ fontStyle: 'italic', color: theme.colors.forest }}>Grow Through Referrals</em>
          </h2>
          <div style={{
            width: sectionInView ? 80 : 0, height: 3,
            backgroundColor: theme.colors.forest,
            margin: '0 auto', transition: 'width 0.6s ease 0.3s', borderRadius: 2,
          }} />
        </div>

        {/* Tab Navigation */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 48, flexWrap: 'wrap',
          opacity: sectionInView ? 1 : 0,
          transform: sectionInView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease 0.2s',
        }}>
          {capabilities.map((cap, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '12px 20px',
                backgroundColor: activeTab === i ? theme.colors.forest : theme.colors.warmWhite,
                color: activeTab === i ? theme.colors.warmWhite : theme.colors.charcoal,
                border: `1px solid ${activeTab === i ? theme.colors.forest : theme.colors.mint}`,
                borderRadius: 100,
                fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 500,
                cursor: 'pointer', transition: 'all 0.2s ease',
                position: 'relative',
              }}
            >
              <cap.icon size={18} />
              {cap.title}
              {cap.badge && activeTab === i && (
                <span style={{
                  position: 'absolute',
                  top: -8,
                  right: -4,
                  backgroundColor: theme.colors.gold,
                  color: theme.colors.ink,
                  fontSize: 9,
                  fontWeight: 700,
                  padding: '2px 6px',
                  borderRadius: 8,
                  letterSpacing: '0.05em',
                }}>
                  {cap.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', marginBottom: 64 }}>
          <div style={{
            opacity: sectionInView ? 1 : 0,
            transform: sectionInView ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'all 0.6s ease 0.4s',
          }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              backgroundColor: capabilities[activeTab].color + '15',
              padding: '8px 16px', borderRadius: 100, marginBottom: 20,
            }}>
              {React.createElement(capabilities[activeTab].icon, { size: 20, color: capabilities[activeTab].color })}
              <span style={{ fontFamily: theme.fonts.body, fontSize: 13, fontWeight: 600, color: capabilities[activeTab].color }}>
                {capabilities[activeTab].title}
              </span>
              {capabilities[activeTab].badge && (
                <span style={{
                  backgroundColor: theme.colors.gold,
                  color: theme.colors.ink,
                  fontSize: 10,
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: 8,
                  marginLeft: 4,
                }}>
                  {capabilities[activeTab].badge}
                </span>
              )}
            </div>
            <h3 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.ink, marginBottom: 16, lineHeight: 1.3 }}>
              {capabilities[activeTab].description}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0' }}>
              {capabilities[activeTab].features.map((feature, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0',
                  borderBottom: i < capabilities[activeTab].features.length - 1 ? `1px solid ${theme.colors.mint}` : 'none',
                  fontFamily: theme.fonts.body, fontSize: 16, color: theme.colors.charcoal,
                }}>
                  <div style={{ width: 24, height: 24, borderRadius: 6, backgroundColor: theme.colors.mint, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={14} color={theme.colors.forest} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div style={{
            opacity: sectionInView ? 1 : 0,
            transform: sectionInView ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.6s ease 0.5s',
          }}>
            <div style={{
              backgroundColor: theme.colors.forest, borderRadius: 24, padding: 48,
              textAlign: 'center', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)' }} />
              <div style={{ fontFamily: theme.fonts.display, fontSize: 72, fontWeight: 500, color: theme.colors.warmWhite, marginBottom: 8, position: 'relative' }}>
                {capabilities[activeTab].stat}
              </div>
              <div style={{ fontFamily: theme.fonts.body, fontSize: 18, color: 'rgba(255,255,255,0.8)', position: 'relative' }}>
                {capabilities[activeTab].statLabel}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {capabilities.map((cap, i) => (
            <AnimatedFeatureCard
              key={i}
              icon={cap.icon}
              title={cap.title}
              description={cap.description}
              features={cap.features}
              color={cap.color}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
