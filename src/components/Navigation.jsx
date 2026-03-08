import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ChevronDown, Play, Shield, Building, ArrowRight,
  FileText, BarChart3, MessageSquare, Menu, X
} from 'lucide-react';
import { theme } from '../theme';
import Logo from './Logo';

const EnhancedNavigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setFeaturesOpen(false);
    setMobileOpen(false);
  };

  const navButtonStyle = {
    background: 'none',
    border: 'none',
    fontFamily: theme.fonts.body,
    fontSize: 15,
    fontWeight: 500,
    color: theme.colors.charcoal,
    cursor: 'pointer',
    padding: '8px 0',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  };

  const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    paddingTop: 12,
    transition: 'all 0.2s ease',
  };

  const dropdownCardStyle = {
    backgroundColor: theme.colors.warmWhite,
    borderRadius: 16,
    padding: 8,
    boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
    border: `1px solid ${theme.colors.mint}`,
    minWidth: 280,
  };

  const dropdownItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    padding: '12px 14px',
    borderRadius: 10,
    textDecoration: 'none',
    transition: 'background 0.2s',
    cursor: 'pointer',
  };

  const dropdownLabelStyle = {
    fontFamily: theme.fonts.body,
    fontSize: 11,
    fontWeight: 600,
    color: theme.colors.slate,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: 8,
    paddingLeft: 14,
  };

  const featureItems = [
    { id: 'story', name: 'Our Story', desc: 'How referrals grow your business', icon: Play, color: '#EC4899' },
    { id: 'features', name: 'Capabilities', desc: 'QR tracking, fraud detection, payouts', icon: Shield, color: '#3B82F6' },
    { id: 'ecosystem', name: 'PathSynch Ecosystem', desc: 'Enterprise-grade when connected', icon: Building, color: '#8B5CF6' },
  ];

  const industries = [
    { name: 'Retail', href: '/industries/retail', icon: '\u{1F3EA}' },
    { name: 'Beauty & Wellness', href: '/industries/beauty-wellness', icon: '\u{1F487}' },
    { name: 'Food & Beverage', href: '/industries/food-beverage', icon: '\u{1F37D}\uFE0F' },
    { name: 'Home Services', href: '/industries/home-services', icon: '\u{1F3E0}' },
    { name: 'Auto Services', href: '/industries/auto-services', icon: '\u{1F697}' },
    { name: 'Fitness Studios', href: '/industries/fitness', icon: '\u{1F4AA}' },
    { name: 'Professional Services', href: '/industries/professional-services', icon: '\u{1F4BC}' },
    { name: 'eCommerce', href: '/industries/ecommerce', icon: '\u{1F6D2}' },
  ];

  const compareItems = [
    { name: 'vs ReferralCandy', href: '/compare/referralcandy' },
    { name: 'vs Referral Factory', href: '/compare/referral-factory' },
    { name: 'vs GrowSurf', href: '/compare/growsurf' },
    { name: 'vs Smile.io', href: '/compare/smile-io' },
    { name: 'vs Friendbuy', href: '/compare/friendbuy' },
    { name: 'vs UpPromote', href: '/compare/uppromote' },
  ];

  const learnItems = [
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Case Studies', href: '/cases', icon: BarChart3 },
    { name: 'Help Center', href: '/help', icon: MessageSquare },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(250, 249, 246, 0.98)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(27, 77, 62, 0.1)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <nav
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '16px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate('/'); }}
          style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}
        >
          <Logo color={theme.colors.forest} size={32} />
          <span style={{
            fontFamily: theme.fonts.display,
            fontSize: 22,
            fontWeight: 600,
            color: theme.colors.ink,
          }}>
            ReferralSynch
          </span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">

          {/* Features Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setFeaturesOpen(true)}
            onMouseLeave={() => setFeaturesOpen(false)}
          >
            <button style={navButtonStyle}>
              Features
              <ChevronDown size={16} style={{
                transform: featuresOpen ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.2s',
              }} />
            </button>

            <div style={{
              ...dropdownStyle,
              opacity: featuresOpen ? 1 : 0,
              visibility: featuresOpen ? 'visible' : 'hidden',
            }}>
              <div style={{ ...dropdownCardStyle, minWidth: 320 }}>
                {featureItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    style={{
                      ...dropdownItemStyle,
                      width: '100%',
                      border: 'none',
                      background: 'none',
                      textAlign: 'left',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.cream}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      backgroundColor: item.color + '15',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <item.icon size={20} color={item.color} />
                    </div>
                    <div>
                      <div style={{ fontFamily: theme.fonts.body, fontSize: 15, fontWeight: 600, color: theme.colors.ink }}>
                        {item.name}
                      </div>
                      <div style={{ fontFamily: theme.fonts.body, fontSize: 13, color: theme.colors.slate }}>
                        {item.desc}
                      </div>
                    </div>
                  </button>
                ))}

                <div style={{ borderTop: `1px solid ${theme.colors.mint}`, margin: '8px 0', padding: '12px 14px' }}>
                  <a
                    href="/pricing"
                    onClick={(e) => { e.preventDefault(); navigate('/pricing'); setFeaturesOpen(false); }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textDecoration: 'none',
                    }}
                  >
                    <span style={{ fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.forest }}>
                      View Pricing & Plans
                    </span>
                    <ArrowRight size={16} color={theme.colors.forest} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Link */}
          <a
            href="/pricing"
            onClick={(e) => { e.preventDefault(); navigate('/pricing'); }}
            style={{ ...navButtonStyle, textDecoration: 'none' }}
          >
            Pricing
          </a>

          {/* Industries Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button style={navButtonStyle}>
              Industries
              <ChevronDown size={16} style={{
                transform: industriesOpen ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.2s',
              }} />
            </button>

            <div style={{
              ...dropdownStyle,
              opacity: industriesOpen ? 1 : 0,
              visibility: industriesOpen ? 'visible' : 'hidden',
            }}>
              <div style={dropdownCardStyle}>
                {industries.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); navigate(item.href); setIndustriesOpen(false); }}
                    style={dropdownItemStyle}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.cream}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <span style={{ fontSize: 24 }}>{item.icon}</span>
                    <span style={{ fontFamily: theme.fonts.body, fontSize: 15, fontWeight: 500, color: theme.colors.ink }}>
                      {item.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button style={navButtonStyle}>
              Resources
              <ChevronDown size={16} style={{
                transform: resourcesOpen ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.2s',
              }} />
            </button>

            <div style={{
              ...dropdownStyle,
              opacity: resourcesOpen ? 1 : 0,
              visibility: resourcesOpen ? 'visible' : 'hidden',
            }}>
              <div style={dropdownCardStyle}>
                <div style={{ padding: '8px 0' }}>
                  <p style={dropdownLabelStyle}>Compare</p>
                  {compareItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); navigate(item.href); setResourcesOpen(false); }}
                      style={{ ...dropdownItemStyle, padding: '10px 14px' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.cream}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <span style={{ fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.ink }}>
                        {item.name}
                      </span>
                    </a>
                  ))}
                </div>

                <div style={{ height: 1, backgroundColor: theme.colors.mint, margin: '4px 14px' }} />

                <div style={{ padding: '8px 0' }}>
                  <p style={dropdownLabelStyle}>Learn</p>
                  {learnItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      style={dropdownItemStyle}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.cream}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <item.icon size={18} color={theme.colors.sage} />
                      <span style={{ fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.ink }}>
                        {item.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="/login" style={{
            fontFamily: theme.fonts.body,
            fontSize: 15,
            fontWeight: 500,
            color: theme.colors.charcoal,
            textDecoration: 'none',
          }} className="hide-mobile">
            Sign In
          </a>
          <a href="/signup" style={{
            fontFamily: theme.fonts.body,
            fontSize: 15,
            fontWeight: 600,
            color: theme.colors.warmWhite,
            backgroundColor: theme.colors.forest,
            padding: '12px 24px',
            borderRadius: 8,
            textDecoration: 'none',
          }}>
            Start Free
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              padding: 8,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            className="show-mobile"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: theme.colors.warmWhite,
          padding: 24,
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        }}>
          {[
            { label: 'Features', action: () => scrollTo('features') },
            { label: 'Pricing', action: () => { navigate('/pricing'); setMobileOpen(false); } },
            { label: 'Industries', action: () => { navigate('/industries'); setMobileOpen(false); } },
            { label: 'Compare', action: () => { navigate('/compare'); setMobileOpen(false); } },
          ].map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              style={{
                display: 'block',
                width: '100%',
                padding: '16px 0',
                background: 'none',
                border: 'none',
                borderBottom: `1px solid ${theme.colors.mint}`,
                fontFamily: theme.fonts.body,
                fontSize: 18,
                color: theme.colors.ink,
                textAlign: 'left',
                cursor: 'pointer',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default EnhancedNavigation;
