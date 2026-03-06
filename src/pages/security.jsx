import React from 'react';
import { Shield, Lock, Eye, Server, ArrowRight } from 'lucide-react';
import { theme } from '../theme';
import EnhancedNavigation from '../components/Navigation';
import Footer from '../components/Footer';

const SecurityPage = () => {
  const features = [
    {
      icon: Lock,
      title: 'Encryption',
      description: 'All data encrypted in transit (TLS/SSL) and at rest. Passwords are hashed with bcrypt.',
    },
    {
      icon: Shield,
      title: 'Fraud Detection',
      description: '13+ fraud signal types including self-referral, velocity abuse, disposable email, and IP blocking.',
    },
    {
      icon: Eye,
      title: 'Access Control',
      description: 'JWT-based authentication with role-based access control and subscription plan gating.',
    },
    {
      icon: Server,
      title: 'Infrastructure',
      description: 'Rate limiting on all endpoints, input validation, and secure webhook signature verification.',
    },
  ];

  return (
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
            Security
          </p>
          <h1 style={{
            fontFamily: theme.fonts.display,
            fontSize: 42,
            fontWeight: 500,
            color: theme.colors.ink,
            marginBottom: 16,
          }}>
            Your data, protected
          </h1>
          <p style={{
            fontFamily: theme.fonts.body,
            fontSize: 18,
            color: theme.colors.slate,
            lineHeight: 1.6,
            maxWidth: 560,
            margin: '0 auto 56px',
          }}>
            Security is built into every layer of ReferralSynch. Here's how we keep your business and advocate data safe.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
            marginBottom: 56,
            textAlign: 'left',
          }}>
            {features.map((feature) => (
              <div
                key={feature.title}
                style={{
                  backgroundColor: theme.colors.warmWhite,
                  borderRadius: 16,
                  padding: 28,
                  border: `1px solid ${theme.colors.mint}`,
                }}
              >
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  backgroundColor: `${theme.colors.forest}10`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <feature.icon size={22} color={theme.colors.forest} />
                </div>
                <h3 style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 17,
                  fontWeight: 600,
                  color: theme.colors.ink,
                  marginBottom: 8,
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 15,
                  color: theme.colors.charcoal,
                  lineHeight: 1.6,
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: theme.colors.forest,
            borderRadius: 20,
            padding: '40px',
            textAlign: 'center',
          }}>
            <h2 style={{
              fontFamily: theme.fonts.display,
              fontSize: 24,
              fontWeight: 500,
              color: theme.colors.warmWhite,
              marginBottom: 12,
            }}>
              Have a security question?
            </h2>
            <p style={{
              fontFamily: theme.fonts.body,
              fontSize: 15,
              color: 'rgba(255,255,255,0.8)',
              marginBottom: 24,
            }}>
              We take security reports seriously. Reach out anytime.
            </p>
            <a
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 28px',
                backgroundColor: theme.colors.warmWhite,
                color: theme.colors.forest,
                fontFamily: theme.fonts.body,
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 8,
                textDecoration: 'none',
              }}
            >
              Contact Us <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SecurityPage;
