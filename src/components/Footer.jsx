import React from 'react';
import { theme } from '../theme';
import Logo from './Logo';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '/#features' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'ROI Calculator', href: '/pricing#calculator' },
        { name: 'Book a Demo', href: '/demo' },
      ],
    },
    {
      title: 'Industries',
      links: [
        { name: 'Retail', href: '/industries/retail' },
        { name: 'Beauty & Wellness', href: '/industries/beauty-wellness' },
        { name: 'Food & Beverage', href: '/industries/food-beverage' },
        { name: 'Home Services', href: '/industries/home-services' },
        { name: 'eCommerce', href: '/industries/ecommerce' },
      ],
    },
    {
      title: 'Compare',
      links: [
        { name: 'vs ReferralCandy', href: '/compare/referralcandy' },
        { name: 'vs Smile.io', href: '/compare/smile-io' },
        { name: 'vs Friendbuy', href: '/compare/friendbuy' },
        { name: 'vs UpPromote', href: '/compare/uppromote' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Security', href: '/security' },
      ],
    },
  ];

  return (
    <footer style={{ backgroundColor: theme.colors.ink, color: 'rgba(255,255,255,0.7)', padding: '80px 32px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Top Section - Logo + Links */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gap: 64,
          marginBottom: 48,
        }}>
          {/* Logo & Tagline */}
          <div>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', marginBottom: 20 }}>
              <Logo color={theme.colors.mint} size={32} />
              <span style={{
                fontFamily: theme.fonts.display,
                fontSize: 22,
                fontWeight: 600,
                color: theme.colors.warmWhite,
              }}>
                ReferralSynch
              </span>
            </a>
            <p style={{
              fontFamily: theme.fonts.body,
              fontSize: 15,
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.6,
              marginBottom: 24,
            }}>
              Turn your customers into your best advocates with the most complete referral platform.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: 16 }}>
              {['Twitter', 'LinkedIn', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href={`https://${social.toLowerCase()}.com/referralsynch`}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    fontSize: 12,
                    fontFamily: theme.fonts.body,
                    fontWeight: 500,
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 24,
          }}>
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: 16,
                }}>
                  {section.title}
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {section.links.map((link) => (
                    <li key={link.name} style={{ marginBottom: 10 }}>
                      <a
                        href={link.href}
                        style={{
                          fontFamily: theme.fonts.body,
                          fontSize: 14,
                          color: 'rgba(255,255,255,0.7)',
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => e.target.style.color = theme.colors.mint}
                        onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <p style={{
            fontFamily: theme.fonts.body,
            fontSize: 13,
            color: 'rgba(255,255,255,0.5)',
          }}>
            &copy; 2026 ReferralSynch. A PathSynch Labs product.
          </p>
          <p style={{
            fontFamily: theme.fonts.body,
            fontSize: 13,
            color: 'rgba(255,255,255,0.5)',
          }}>
            Made with <span style={{ color: '#EF4444' }}>&hearts;</span> in Atlanta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
