import React from 'react';
import { ArrowRight } from 'lucide-react';
import { theme } from '../theme';
import EnhancedNavigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage = () => (
  <>
    <EnhancedNavigation />
    <div style={{ backgroundColor: theme.colors.cream, minHeight: '100vh' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '120px 24px 80px', textAlign: 'center' }}>
        <p style={{
          fontFamily: theme.fonts.body,
          fontSize: 13,
          fontWeight: 600,
          color: theme.colors.forest,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: 16,
        }}>
          About Us
        </p>
        <h1 style={{
          fontFamily: theme.fonts.display,
          fontSize: 42,
          fontWeight: 500,
          color: theme.colors.ink,
          marginBottom: 24,
          lineHeight: 1.2,
        }}>
          Making word-of-mouth work for local business
        </h1>
        <p style={{
          fontFamily: theme.fonts.body,
          fontSize: 18,
          color: theme.colors.slate,
          lineHeight: 1.7,
          maxWidth: 600,
          margin: '0 auto 48px',
        }}>
          ReferralSynch is a product of PathSynch Labs, built in Atlanta. We believe every local business
          deserves the same referral marketing tools that enterprise brands use — without the enterprise
          price tag or complexity.
        </p>

        <div style={{
          backgroundColor: theme.colors.warmWhite,
          borderRadius: 20,
          padding: '48px 40px',
          border: `1px solid ${theme.colors.mint}`,
          marginBottom: 48,
          textAlign: 'left',
        }}>
          <h2 style={{
            fontFamily: theme.fonts.display,
            fontSize: 28,
            fontWeight: 500,
            color: theme.colors.ink,
            marginBottom: 16,
          }}>
            Our story is just getting started
          </h2>
          <p style={{
            fontFamily: theme.fonts.body,
            fontSize: 16,
            color: theme.colors.charcoal,
            lineHeight: 1.7,
            marginBottom: 16,
          }}>
            We're a small team with a big vision: help local businesses grow through the power of their
            own customers. We've built ReferralSynch from the ground up with QR/NFC tracking, fraud
            detection, gamification, and analytics that actually make sense for brick-and-mortar and
            local service businesses.
          </p>
          <p style={{
            fontFamily: theme.fonts.body,
            fontSize: 16,
            color: theme.colors.charcoal,
            lineHeight: 1.7,
          }}>
            More details about our team and mission are on the way. In the meantime, we'd love to
            show you what we've built.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="/demo"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 28px',
              backgroundColor: theme.colors.forest,
              color: theme.colors.warmWhite,
              fontFamily: theme.fonts.body,
              fontSize: 16,
              fontWeight: 600,
              borderRadius: 8,
              textDecoration: 'none',
            }}
          >
            Book a Demo <ArrowRight size={18} />
          </a>
          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 28px',
              backgroundColor: 'transparent',
              color: theme.colors.forest,
              fontFamily: theme.fonts.body,
              fontSize: 16,
              fontWeight: 600,
              borderRadius: 8,
              textDecoration: 'none',
              border: `1px solid ${theme.colors.forest}`,
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default AboutPage;
