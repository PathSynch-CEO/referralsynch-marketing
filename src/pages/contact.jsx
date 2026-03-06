import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { theme } from '../theme';
import EnhancedNavigation from '../components/Navigation';
import Footer from '../components/Footer';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'support@pathsynch.com',
      href: 'mailto:support@pathsynch.com',
      description: 'For general inquiries and support',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(470) 740-6841',
      href: 'tel:+14707406841',
      description: 'Monday\u2013Friday, 9am\u20136pm ET',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Atlanta, GA',
      href: null,
      description: 'PathSynch Labs LLC',
    },
  ];

  return (
    <>
      <EnhancedNavigation />
      <div style={{ backgroundColor: theme.colors.cream, minHeight: '100vh' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '120px 24px 80px', textAlign: 'center' }}>
          <h1 style={{
            fontFamily: theme.fonts.display,
            fontSize: 42,
            fontWeight: 500,
            color: theme.colors.ink,
            marginBottom: 16,
          }}>
            Get in Touch
          </h1>
          <p style={{
            fontFamily: theme.fonts.body,
            fontSize: 18,
            color: theme.colors.slate,
            lineHeight: 1.6,
            marginBottom: 56,
            maxWidth: 540,
            margin: '0 auto 56px',
          }}>
            Have questions about ReferralSynch? We'd love to hear from you. Reach out and we'll get back to you within one business day.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            marginBottom: 56,
          }}>
            {contactMethods.map((method) => (
              <div
                key={method.label}
                style={{
                  backgroundColor: theme.colors.warmWhite,
                  borderRadius: 16,
                  padding: 32,
                  border: `1px solid ${theme.colors.mint}`,
                }}
              >
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: `${theme.colors.forest}10`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  <method.icon size={24} color={theme.colors.forest} />
                </div>
                <h3 style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 12,
                  fontWeight: 600,
                  color: theme.colors.slate,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: 8,
                }}>
                  {method.label}
                </h3>
                {method.href ? (
                  <a
                    href={method.href}
                    style={{
                      fontFamily: theme.fonts.body,
                      fontSize: 18,
                      fontWeight: 600,
                      color: theme.colors.forest,
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: 8,
                    }}
                  >
                    {method.value}
                  </a>
                ) : (
                  <p style={{
                    fontFamily: theme.fonts.body,
                    fontSize: 18,
                    fontWeight: 600,
                    color: theme.colors.ink,
                    marginBottom: 8,
                  }}>
                    {method.value}
                  </p>
                )}
                <p style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 14,
                  color: theme.colors.slate,
                }}>
                  {method.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: theme.colors.forest,
            borderRadius: 20,
            padding: '48px 40px',
            textAlign: 'center',
          }}>
            <h2 style={{
              fontFamily: theme.fonts.display,
              fontSize: 28,
              fontWeight: 500,
              color: theme.colors.warmWhite,
              marginBottom: 12,
            }}>
              Ready to see ReferralSynch in action?
            </h2>
            <p style={{
              fontFamily: theme.fonts.body,
              fontSize: 16,
              color: 'rgba(255,255,255,0.8)',
              marginBottom: 24,
            }}>
              Book a personalized demo and we'll walk you through everything.
            </p>
            <a
              href="/demo"
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
              Book a Demo <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
