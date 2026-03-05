import React, { useState } from 'react';
import { Check, X, ArrowRight, ChevronDown, Phone } from 'lucide-react';
import { theme } from '../theme';
import Logo from './Logo';

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
      Get 3 months free when you migrate your referral program to ReferralSynch. We'll even help you transfer your existing advocates.
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

const CompareStickyHeader = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      backgroundColor: scrolled ? 'rgba(250, 249, 246, 0.98)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(27, 77, 62, 0.1)' : 'none',
      transition: 'all 0.3s',
    }}>
      <nav style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <Logo color={theme.colors.forest} size={28} />
          <span style={{ fontFamily: theme.fonts.display, fontSize: 20, fontWeight: 600, color: theme.colors.ink }}>ReferralSynch</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="/compare" style={{ fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.slate, textDecoration: 'none' }}>
            All Comparisons
          </a>
          <a href="/signup" style={{
            padding: '10px 20px', backgroundColor: theme.colors.forest, color: theme.colors.warmWhite,
            borderRadius: 6, fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, textDecoration: 'none',
          }}>
            Try Free
          </a>
        </div>
      </nav>
    </header>
  );
};

const CompareFooter = () => (
  <footer style={{ backgroundColor: theme.colors.ink, color: 'rgba(255,255,255,0.7)', padding: '60px 32px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <Logo color={theme.colors.mint} size={28} />
          <span style={{ fontFamily: theme.fonts.display, fontSize: 18, color: '#fff' }}>ReferralSynch</span>
        </div>
        <p style={{ fontSize: 14, maxWidth: 280 }}>Turn your customers into your best advocates.</p>
      </div>
      <div style={{ display: 'flex', gap: 48 }}>
        {[
          { title: 'Compare', links: [
            { name: 'vs ReferralCandy', href: '/compare/referralcandy' },
            { name: 'vs Smile.io', href: '/compare/smile-io' },
            { name: 'vs Friendbuy', href: '/compare/friendbuy' },
            { name: 'vs UpPromote', href: '/compare/uppromote' },
          ]},
          { title: 'Product', links: [
            { name: 'Features', href: '/#features' },
            { name: 'Pricing', href: '/pricing' },
            { name: 'Industries', href: '/industries' },
          ]},
          { title: 'Company', links: [
            { name: 'About', href: '/about' },
            { name: 'Blog', href: '/blog' },
            { name: 'Contact', href: '/contact' },
          ]},
        ].map(group => (
          <div key={group.title}>
            <h4 style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: 16 }}>{group.title}</h4>
            {group.links.map(link => (
              <a key={link.name} href={link.href} style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', marginBottom: 8 }}>{link.name}</a>
            ))}
          </div>
        ))}
      </div>
    </div>
    <div style={{ maxWidth: 1200, margin: '40px auto 0', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
      &copy; 2026 ReferralSynch. A PathSynch Labs product.
    </div>
  </footer>
);

export const ComparisonPageLayout = ({ children }) => (
  <>
    <CompareStickyHeader />
    <main style={{ backgroundColor: theme.colors.cream, minHeight: '100vh', paddingTop: 80 }}>
      {children}
    </main>
    <CompareFooter />
  </>
);
