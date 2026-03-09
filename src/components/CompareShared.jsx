import React, { useState } from 'react';
import { Check, X, ArrowRight, ChevronDown, Phone } from 'lucide-react';
import { theme } from '../theme';
import Logo from './Logo';
import EnhancedNavigation from './Navigation';
import Footer from './Footer';

export const FeatureCheck = ({ ours, theirs, feature }) => (
  <tr style={{ borderBottom: `1px solid ${theme.colors.mint}40` }}>
    <td style={{ padding: '16px 20px', fontFamily: theme.fonts.body, fontSize: 15, color: theme.colors.ink }}>
      {feature}
    </td>
    <td style={{ padding: '16px 20px', textAlign: 'center' }}>
      {ours ? <Check size={20} color="#16A34A" strokeWidth={3} /> : <X size={20} color="#DC2626" strokeWidth={3} />}
    </td>
    <td style={{ padding: '16px 20px', textAlign: 'center' }}>
      {theirs ? <Check size={20} color="#16A34A" strokeWidth={3} /> : <X size={20} color="#DC2626" strokeWidth={3} />}
    </td>
  </tr>
);

export const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${theme.colors.mint}` }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{ fontFamily: theme.fonts.body, fontSize: 17, fontWeight: 600, color: theme.colors.ink }}>
          {question}
        </span>
        <ChevronDown
          size={20} color={theme.colors.forest}
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
        />
      </button>
      {isOpen && (
        <div style={{ paddingBottom: 20 }}>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 15, color: theme.colors.charcoal, lineHeight: 1.7 }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export const CompareTestimonialCard = ({ quote, author, company, metric }) => (
  <div style={{ backgroundColor: theme.colors.warmWhite, padding: 32, borderRadius: 16, border: `1px solid ${theme.colors.mint}` }}>
    <p style={{ fontFamily: theme.fonts.body, fontSize: 16, color: theme.colors.charcoal, lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' }}>
      &ldquo;{quote}&rdquo;
    </p>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <p style={{ fontFamily: theme.fonts.body, fontSize: 15, fontWeight: 600, color: theme.colors.ink }}>{author}</p>
        <p style={{ fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.slate }}>{company}</p>
      </div>
      {metric && (
        <div style={{ backgroundColor: theme.colors.mint, padding: '8px 16px', borderRadius: 8 }}>
          <span style={{ fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.forest }}>{metric}</span>
        </div>
      )}
    </div>
  </div>
);

export const CTABanner = ({ competitor }) => (
  <div style={{ backgroundColor: theme.colors.forest, padding: '48px 32px', borderRadius: 16, textAlign: 'center', marginTop: 60 }}>
    <h3 style={{ fontFamily: theme.fonts.display, fontSize: 28, color: theme.colors.warmWhite, marginBottom: 16 }}>
      Ready to switch from {competitor}?
    </h3>
    <p style={{ fontFamily: theme.fonts.body, fontSize: 16, color: 'rgba(255,255,255,0.8)', marginBottom: 24, maxWidth: 500, margin: '0 auto 24px' }}>
      Start free today and we'll help you migrate your referral program and transfer your existing advocates.
    </p>
    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
      <a href="/signup" style={{
        display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 32px',
        backgroundColor: theme.colors.warmWhite, color: theme.colors.forest, borderRadius: 8,
        fontFamily: theme.fonts.body, fontSize: 16, fontWeight: 600, textDecoration: 'none',
      }}>
        Start Free Trial <ArrowRight size={18} />
      </a>
      <a href="/demo" style={{
        display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 32px',
        backgroundColor: 'transparent', color: theme.colors.warmWhite, borderRadius: 8,
        fontFamily: theme.fonts.body, fontSize: 16, fontWeight: 600, textDecoration: 'none',
        border: '2px solid rgba(255,255,255,0.3)',
      }}>
        <Phone size={18} /> Book a Demo
      </a>
    </div>
  </div>
);

export const ComparisonPageLayout = ({ children }) => (
  <>
    <EnhancedNavigation />
    <main style={{ backgroundColor: theme.colors.cream, minHeight: '100vh', paddingTop: 80 }}>
      {children}
    </main>
    <Footer />
  </>
);
