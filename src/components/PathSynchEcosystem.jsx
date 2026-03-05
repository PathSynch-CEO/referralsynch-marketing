import React, { useState } from 'react';
import {
  QrCode, Globe, MessageSquare, FileText, Star,
  Building, Sparkles, ArrowRight, Link2
} from 'lucide-react';
import { theme } from '../theme';
import Logo from './Logo';

const PathSynchEcosystemSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    { id: 'pathconnect', name: 'PathConnect', description: 'NFC & QR review capture', icon: QrCode, color: '#3B82F6', benefit: 'Unified customer touchpoints' },
    { id: 'localsynch', name: 'LocalSynch', description: 'Google Business Profile optimization', icon: Globe, color: '#10B981', benefit: 'Local SEO + referrals' },
    { id: 'synchmate', name: 'SynchMate', description: 'AI-powered customer chat', icon: MessageSquare, color: '#8B5CF6', benefit: 'Referral prompts in chat' },
    { id: 'forms', name: 'PathSynch Forms', description: 'Smart intake & surveys', icon: FileText, color: '#F59E0B', benefit: 'Post-service referral capture' },
    { id: 'reviews', name: 'Review Widget', description: 'Social proof display', icon: Star, color: '#EC4899', benefit: 'Referral-driven testimonials' },
  ];

  const enterpriseBenefits = [
    'Single customer identity across all touchpoints',
    'Unified analytics dashboard in PathManager',
    'Cross-product referral attribution',
    'Consolidated billing and support',
    'Custom enterprise SLAs',
    'Priority feature development',
  ];

  return (
    <section
      id="ecosystem"
      style={{
        backgroundColor: theme.colors.midnight,
        padding: '120px 32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${theme.colors.forest}30 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <Building size={28} color={theme.colors.mint} />
            <span style={{
              fontFamily: theme.fonts.body,
              fontSize: 14,
              fontWeight: 600,
              color: theme.colors.mint,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
            }}>
              PathSynch Ecosystem
            </span>
          </div>
          <h2 style={{
            fontFamily: theme.fonts.display,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            color: theme.colors.warmWhite,
            lineHeight: 1.2,
            marginBottom: 20,
          }}>
            Enterprise Power When You{' '}
            <em style={{ fontStyle: 'italic', color: theme.colors.mint }}>Connect the Suite</em>
          </h2>
          <p style={{
            fontFamily: theme.fonts.body,
            fontSize: 18,
            color: 'rgba(255,255,255,0.7)',
            maxWidth: 700,
            margin: '0 auto',
          }}>
            ReferralSynch is powerful on its own. But when you connect it with PathSynch's customer engagement suite, you unlock enterprise-grade capabilities at a fraction of enterprise pricing.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 20,
          marginBottom: 64,
        }}>
          {products.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              style={{
                backgroundColor: hoveredProduct === product.id ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
                borderRadius: 16,
                padding: 24,
                border: `1px solid ${hoveredProduct === product.id ? theme.colors.mint : 'rgba(255,255,255,0.1)'}`,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            >
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                backgroundColor: product.color + '20',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
              }}>
                <product.icon size={24} color={product.color} />
              </div>
              <h3 style={{ fontFamily: theme.fonts.body, fontSize: 16, fontWeight: 600, color: theme.colors.warmWhite, marginBottom: 4 }}>
                {product.name}
              </h3>
              <p style={{ fontFamily: theme.fonts.body, fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 12 }}>
                {product.description}
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                opacity: hoveredProduct === product.id ? 1 : 0,
                transition: 'opacity 0.3s',
              }}>
                <Link2 size={14} color={theme.colors.mint} />
                <span style={{ fontFamily: theme.fonts.body, fontSize: 12, color: theme.colors.mint, fontWeight: 500 }}>
                  {product.benefit}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <h3 style={{ fontFamily: theme.fonts.display, fontSize: 28, fontWeight: 500, color: theme.colors.warmWhite, marginBottom: 24 }}>
              Why Go Enterprise?
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {enterpriseBenefits.map((benefit, i) => (
                <li key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '12px 0',
                  borderBottom: i < enterpriseBenefits.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                }}>
                  <div style={{
                    width: 24,
                    height: 24,
                    borderRadius: 6,
                    backgroundColor: theme.colors.mint + '20',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Sparkles size={14} color={theme.colors.mint} />
                  </div>
                  <span style={{ fontFamily: theme.fonts.body, fontSize: 15, color: 'rgba(255,255,255,0.9)' }}>
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            borderRadius: 20,
            padding: 40,
            border: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center',
          }}>
            <div style={{
              width: 80,
              height: 80,
              margin: '0 auto 24px',
              borderRadius: 20,
              background: `linear-gradient(135deg, ${theme.colors.forest} 0%, ${theme.colors.sage} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Logo color={theme.colors.warmWhite} size={48} />
            </div>
            <h4 style={{ fontFamily: theme.fonts.display, fontSize: 24, fontWeight: 500, color: theme.colors.warmWhite, marginBottom: 12 }}>
              PathSynch Enterprise
            </h4>
            <p style={{ fontFamily: theme.fonts.body, fontSize: 15, color: 'rgba(255,255,255,0.7)', marginBottom: 24, lineHeight: 1.6 }}>
              Get ReferralSynch + the entire PathSynch suite with dedicated support, custom integrations, and priority development.
            </p>
            <a href="/demo" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 28px',
              backgroundColor: theme.colors.mint,
              color: theme.colors.forest,
              borderRadius: 8,
              fontFamily: theme.fonts.body,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: 'none',
            }}>
              Talk to Enterprise Sales <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathSynchEcosystemSection;
