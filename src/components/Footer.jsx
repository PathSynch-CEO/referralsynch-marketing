import React from 'react';
import { theme } from '../theme';
import Logo from './Logo';

const Footer = () => (
  <footer style={{ backgroundColor: theme.colors.ink, color: 'rgba(255,255,255,0.7)', padding: '60px 32px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <Logo color={theme.colors.mint} size={28} />
          <span style={{ fontFamily: theme.fonts.display, fontSize: 18, color: '#fff' }}>ReferralSynch</span>
        </div>
        <p style={{ fontSize: 14, maxWidth: 280 }}>Turn your customers into your best advocates.</p>
      </div>
      <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
        {[
          { title: 'Product', links: [
            { label: 'Features', href: '/#features' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Industries', href: '/industries' },
            { label: 'Compare', href: '/compare' },
          ]},
          { title: 'Company', links: [
            { label: 'About', href: '#' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contact', href: '#' },
          ]},
          { title: 'Legal', links: [
            { label: 'Privacy', href: '#' },
            { label: 'Terms', href: '#' },
            { label: 'Security', href: '#' },
          ]},
        ].map(group => (
          <div key={group.title}>
            <h4 style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: 16, fontFamily: theme.fonts.body }}>{group.title}</h4>
            {group.links.map(link => (
              <a key={link.label} href={link.href} style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', marginBottom: 8, fontFamily: theme.fonts.body }}>{link.label}</a>
            ))}
          </div>
        ))}
      </div>
    </div>
    <div style={{ maxWidth: 1200, margin: '40px auto 0', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 13, color: 'rgba(255,255,255,0.5)', fontFamily: theme.fonts.body }}>
      &copy; 2026 ReferralSynch. A PathSynch Labs product. Made with &hearts; in Atlanta.
    </div>
  </footer>
);

export default Footer;
