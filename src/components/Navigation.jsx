import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ChevronDown, Menu, X, Gift, Star, Shield, QrCode, Trophy,
  Smartphone, MessageSquare, Zap, Link2, CreditCard, Mail,
  Send, Webhook, Code, LayoutGrid, Store, Car, Scissors, Dumbbell,
  ShoppingBag, Briefcase, Building, MapPin, HelpCircle, BookOpen,
  FileText, ArrowRight, Fingerprint, DollarSign,
} from 'lucide-react';
import { theme } from '../theme';

/* ───────────────────── DATA ───────────────────── */

const platformData = {
  products: [
    {
      name: 'Referral Program',
      desc: 'Turn customers into advocates with trackable, rewarded referrals',
      icon: Gift,
      color: '#3B82F6',
      href: '/#features',
    },
    {
      name: 'Loyalty & Rewards',
      desc: 'Store credits, tiers, challenges, and gamification that keep customers coming back',
      icon: Star,
      color: '#F59E0B',
      href: '/#features',
    },
    {
      name: 'Fraud Protection',
      desc: 'Built-in fraud detection on every referral — included on all plans',
      icon: Shield,
      color: '#EF4444',
      href: '/#features',
    },
  ],
  referralUseCases: [
    { name: 'Give/Get Rewards', href: '/#features' },
    { name: 'Referral Challenges', href: '/#features' },
    { name: 'QR Code Referrals', href: '/#features' },
    { name: 'NFC Tap-to-Refer', href: '/#features' },
    { name: 'SMS-First Sharing', href: '/#features' },
    { name: 'Campaign Templates', href: '/#features' },
    { name: 'Branded Landing Pages', href: '/#features' },
    { name: 'Link Expiry', href: '/#features' },
  ],
  loyaltyUseCases: [
    { name: 'Store Credit Wallet', href: '/#features' },
    { name: 'VIP Tiers (Bronze → Diamond)', href: '/#features' },
    { name: 'Achievement Badges', href: '/#features' },
    { name: 'Non-Referral Points', href: '/#features' },
    { name: 'TV Leaderboard', href: '/#features' },
  ],
  integrations: [
    { name: 'Stripe Connect', icon: CreditCard, href: '/#ecosystem' },
    { name: 'Klaviyo', icon: Mail, href: '/#ecosystem' },
    { name: 'Mailchimp', icon: Mail, href: '/#ecosystem' },
    { name: 'SendGrid', icon: Send, href: '/#ecosystem' },
    { name: 'Webhooks', icon: Webhook, href: '/#ecosystem' },
    { name: 'Embeddable Widget', icon: LayoutGrid, href: '/#ecosystem' },
  ],
  devTools: [
    { name: 'Webhook API', href: '/#ecosystem' },
    { name: 'Point Events API', href: '/#ecosystem' },
    { name: 'Embeddable Widget SDK', href: '/#ecosystem' },
  ],
};

const industriesData = {
  byIndustry: [
    {
      name: 'Restaurants & Hospitality',
      desc: 'Table tent QR codes, SMS sharing, first-visit bonuses',
      icon: Store,
      href: '/industries/food-beverage',
    },
    {
      name: 'Auto Services',
      desc: 'NFC at the counter, high-value rewards, trust-based referrals',
      icon: Car,
      href: '/industries/auto-services',
    },
    {
      name: 'Beauty & Wellness',
      desc: 'Post-appointment sharing, percentage rewards, birthday campaigns',
      icon: Scissors,
      href: '/industries/beauty-wellness',
    },
    {
      name: 'Fitness Studios',
      desc: 'Challenges, free trial offers, community leaderboards',
      icon: Dumbbell,
      href: '/industries/fitness',
    },
    {
      name: 'Retail',
      desc: 'Website widget, seasonal campaigns, double-sided rewards',
      icon: ShoppingBag,
      href: '/industries/retail',
    },
    {
      name: 'Professional Services',
      desc: 'High-value gift cards, email sharing, long-lived links',
      icon: Briefcase,
      href: '/industries/professional-services',
    },
  ],
  byType: [
    {
      name: 'Single Location',
      desc: 'Launch a referral program for your store',
      icon: MapPin,
      href: '/industries',
    },
    {
      name: 'Multi-Location',
      desc: 'Track referrals across all your locations',
      icon: Building,
      href: '/industries',
      badge: 'Coming soon',
    },
  ],
};

const resourcesData = {
  learn: [
    {
      name: 'Help Center',
      desc: 'Find answers, guides, and best practices',
      icon: HelpCircle,
      href: 'https://help.referralsynch.com',
      external: true,
    },
    {
      name: 'Quick Start Guide',
      desc: 'Launch your referral program in under 10 minutes',
      icon: BookOpen,
      href: '/help', // TODO: create dedicated quick-start page
    },
    {
      name: 'Blog',
      desc: 'Tips and strategies for local businesses',
      icon: FileText,
      href: '/blog',
      badge: 'Coming soon',
    },
  ],
  compare: [
    { name: 'vs Referral Factory', href: '/compare/referral-factory' },
    { name: 'vs ReferralCandy', href: '/compare/referralcandy' },
    { name: 'vs GrowSurf', href: '/compare/growsurf' },
  ],
  whyUs: [
    {
      name: 'Physical-to-Digital Attribution',
      desc: 'The only platform that tracks QR and NFC referrals',
      icon: Fingerprint,
    },
    {
      name: 'No Success Fees',
      desc: 'Flat pricing — you keep 100% of your referral revenue',
      icon: DollarSign,
    },
  ],
};

/* ───────────────────── STYLES ───────────────────── */

const s = {
  navBtn: {
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
    whiteSpace: 'nowrap',
  },
  megaPanel: {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    paddingTop: 12,
    transition: 'opacity 0.2s ease, visibility 0.2s ease',
  },
  megaCard: {
    backgroundColor: theme.colors.warmWhite,
    borderRadius: 16,
    boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(27,77,62,0.08)',
    overflow: 'hidden',
  },
  colHeading: {
    fontFamily: theme.fonts.body,
    fontSize: 11,
    fontWeight: 700,
    color: theme.colors.slate,
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    marginBottom: 12,
  },
  subHeading: {
    fontFamily: theme.fonts.body,
    fontSize: 10,
    fontWeight: 700,
    color: theme.colors.slate,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: 8,
    marginTop: 16,
  },
  item: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
    padding: '10px 12px',
    borderRadius: 10,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'background 0.15s',
    border: 'none',
    background: 'none',
    width: '100%',
    textAlign: 'left',
  },
  itemName: {
    fontFamily: theme.fonts.body,
    fontSize: 14,
    fontWeight: 600,
    color: theme.colors.ink,
    lineHeight: 1.3,
  },
  itemDesc: {
    fontFamily: theme.fonts.body,
    fontSize: 12,
    color: theme.colors.slate,
    lineHeight: 1.4,
    marginTop: 2,
  },
  simpleLink: {
    display: 'block',
    padding: '6px 12px',
    borderRadius: 6,
    fontFamily: theme.fonts.body,
    fontSize: 13,
    fontWeight: 500,
    color: theme.colors.charcoal,
    textDecoration: 'none',
    transition: 'background 0.15s, color 0.15s',
    cursor: 'pointer',
  },
  badge: {
    display: 'inline-block',
    fontFamily: theme.fonts.body,
    fontSize: 10,
    fontWeight: 700,
    color: theme.colors.forest,
    backgroundColor: theme.colors.mint,
    padding: '2px 8px',
    borderRadius: 10,
    marginLeft: 8,
    verticalAlign: 'middle',
  },
};

/* ───────────────────── COMPONENT ───────────────────── */

const EnhancedNavigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // 'platform' | 'industries' | 'resources' | null
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  const handleNav = useCallback((href, external) => {
    setOpenMenu(null);
    setMobileOpen(false);
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 150);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  }, [navigate, location.pathname]);

  const openDropdown = (menu) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };
  const cancelClose = () => clearTimeout(closeTimer.current);

  const hoverBg = (e) => { e.currentTarget.style.backgroundColor = theme.colors.cream; };
  const unhoverBg = (e) => { e.currentTarget.style.backgroundColor = 'transparent'; };
  const hoverLink = (e) => { e.currentTarget.style.backgroundColor = `${theme.colors.forest}08`; e.currentTarget.style.color = theme.colors.forest; };
  const unhoverLink = (e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = theme.colors.charcoal; };

  const toggleAccordion = (id) => setMobileAccordion(mobileAccordion === id ? null : id);

  /* ── Render helpers ── */

  const IconBox = ({ icon: Icon, color }) => (
    <div style={{
      width: 36, height: 36, borderRadius: 10, flexShrink: 0,
      backgroundColor: color + '12', display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <Icon size={18} color={color} />
    </div>
  );

  const ProductItem = ({ item }) => (
    <a
      href={item.href}
      onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
      style={s.item}
      onMouseEnter={hoverBg}
      onMouseLeave={unhoverBg}
    >
      <IconBox icon={item.icon} color={item.color} />
      <div>
        <div style={s.itemName}>{item.name}</div>
        <div style={s.itemDesc}>{item.desc}</div>
      </div>
    </a>
  );

  const IndustryItem = ({ item }) => (
    <a
      href={item.href}
      onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
      style={s.item}
      onMouseEnter={hoverBg}
      onMouseLeave={unhoverBg}
    >
      <IconBox icon={item.icon} color={theme.colors.forest} />
      <div>
        <div style={s.itemName}>
          {item.name}
          {item.badge && <span style={s.badge}>{item.badge}</span>}
        </div>
        <div style={s.itemDesc}>{item.desc}</div>
      </div>
    </a>
  );

  const SimpleLink = ({ name, href, external, badge }) => (
    <a
      href={href}
      onClick={(e) => { e.preventDefault(); handleNav(href, external); }}
      style={s.simpleLink}
      onMouseEnter={hoverLink}
      onMouseLeave={unhoverLink}
    >
      {name}
      {badge && <span style={s.badge}>{badge}</span>}
    </a>
  );

  /* ═════════════════ PLATFORM MEGA MENU ═════════════════ */
  const PlatformPanel = () => (
    <div style={{ ...s.megaCard, display: 'grid', gridTemplateColumns: '280px 1fr 240px', minWidth: 780 }}>
      {/* Col 1: Products */}
      <div style={{ padding: '24px 20px', borderRight: `1px solid ${theme.colors.mint}40` }}>
        <p style={s.colHeading}>Our Products</p>
        {platformData.products.map((p) => <ProductItem key={p.name} item={p} />)}
      </div>

      {/* Col 2: Use Cases */}
      <div style={{ padding: '24px 20px', borderRight: `1px solid ${theme.colors.mint}40` }}>
        <p style={s.colHeading}>Use Cases</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
          <div>
            <p style={s.subHeading}>Referral Platform</p>
            {platformData.referralUseCases.map((u) => (
              <SimpleLink key={u.name} name={u.name} href={u.href} />
            ))}
          </div>
          <div>
            <p style={s.subHeading}>Loyalty Platform</p>
            {platformData.loyaltyUseCases.map((u) => (
              <SimpleLink key={u.name} name={u.name} href={u.href} />
            ))}
          </div>
        </div>
      </div>

      {/* Col 3: Integrations */}
      <div style={{ padding: '24px 20px' }}>
        <p style={s.colHeading}>Integrations</p>
        {platformData.integrations.map((ig) => (
          <a
            key={ig.name}
            href={ig.href}
            onClick={(e) => { e.preventDefault(); handleNav(ig.href); }}
            style={{ ...s.simpleLink, display: 'flex', alignItems: 'center', gap: 8 }}
            onMouseEnter={hoverLink}
            onMouseLeave={unhoverLink}
          >
            <ig.icon size={14} />
            {ig.name}
          </a>
        ))}
        <p style={{ ...s.subHeading, marginTop: 20 }}>Developer Tools</p>
        {platformData.devTools.map((d) => (
          <SimpleLink key={d.name} name={d.name} href={d.href} />
        ))}
      </div>
    </div>
  );

  /* ═════════════════ INDUSTRIES MEGA MENU ═════════════════ */
  const IndustriesPanel = () => (
    <div style={{ ...s.megaCard, display: 'grid', gridTemplateColumns: '1fr 260px', minWidth: 620 }}>
      {/* Col 1: By Industry */}
      <div style={{ padding: '24px 20px', borderRight: `1px solid ${theme.colors.mint}40` }}>
        <p style={s.colHeading}>By Industry</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
          {industriesData.byIndustry.map((ind) => <IndustryItem key={ind.name} item={ind} />)}
        </div>
      </div>
      {/* Col 2: By Business Type */}
      <div style={{ padding: '24px 20px' }}>
        <p style={s.colHeading}>By Business Type</p>
        {industriesData.byType.map((bt) => <IndustryItem key={bt.name} item={bt} />)}
      </div>
    </div>
  );

  /* ═════════════════ RESOURCES MEGA MENU ═════════════════ */
  const ResourcesPanel = () => (
    <div style={{ ...s.megaCard, display: 'grid', gridTemplateColumns: '280px 280px', minWidth: 560 }}>
      {/* Col 1: Learn */}
      <div style={{ padding: '24px 20px', borderRight: `1px solid ${theme.colors.mint}40` }}>
        <p style={s.colHeading}>Learn</p>
        {resourcesData.learn.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => { e.preventDefault(); handleNav(item.href, item.external); }}
            style={s.item}
            onMouseEnter={hoverBg}
            onMouseLeave={unhoverBg}
          >
            <IconBox icon={item.icon} color={theme.colors.sage} />
            <div>
              <div style={s.itemName}>
                {item.name}
                {item.badge && <span style={s.badge}>{item.badge}</span>}
              </div>
              <div style={s.itemDesc}>{item.desc}</div>
            </div>
          </a>
        ))}
      </div>
      {/* Col 2: Compare + Why Us */}
      <div style={{ padding: '24px 20px' }}>
        <p style={s.colHeading}>Compare</p>
        {resourcesData.compare.map((c) => (
          <SimpleLink key={c.name} name={c.name} href={c.href} />
        ))}

        <p style={{ ...s.colHeading, marginTop: 24 }}>Why ReferralSynch</p>
        {resourcesData.whyUs.map((w) => (
          <div key={w.name} style={{ ...s.item, cursor: 'default' }}>
            <IconBox icon={w.icon} color={theme.colors.forest} />
            <div>
              <div style={s.itemName}>{w.name}</div>
              <div style={s.itemDesc}>{w.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  /* ═════════════════ DROPDOWN WRAPPER ═════════════════ */
  const DropdownTrigger = ({ id, label, children }) => (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => openDropdown(id)}
      onMouseLeave={scheduleClose}
    >
      <button style={s.navBtn}>
        {label}
        <ChevronDown size={15} style={{
          transform: openMenu === id ? 'rotate(180deg)' : 'rotate(0)',
          transition: 'transform 0.2s',
        }} />
      </button>
      <div
        style={{
          ...s.megaPanel,
          opacity: openMenu === id ? 1 : 0,
          visibility: openMenu === id ? 'visible' : 'hidden',
          pointerEvents: openMenu === id ? 'auto' : 'none',
        }}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        {children}
      </div>
    </div>
  );

  /* ═════════════════ MOBILE ACCORDION ═════════════════ */
  const MobileSection = ({ id, label, children }) => (
    <div style={{ borderBottom: `1px solid ${theme.colors.mint}40` }}>
      <button
        onClick={() => toggleAccordion(id)}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          width: '100%', padding: '16px 0', background: 'none', border: 'none',
          fontFamily: theme.fonts.body, fontSize: 17, fontWeight: 600,
          color: theme.colors.ink, cursor: 'pointer',
        }}
      >
        {label}
        <ChevronDown size={18} style={{
          transform: mobileAccordion === id ? 'rotate(180deg)' : 'rotate(0)',
          transition: 'transform 0.2s',
        }} />
      </button>
      {mobileAccordion === id && (
        <div style={{ paddingBottom: 16 }}>
          {children}
        </div>
      )}
    </div>
  );

  const MobileLink = ({ name, href, external, badge }) => (
    <a
      href={href}
      onClick={(e) => { e.preventDefault(); handleNav(href, external); }}
      style={{
        display: 'block', padding: '10px 12px', fontFamily: theme.fonts.body,
        fontSize: 15, color: theme.colors.charcoal, textDecoration: 'none',
        borderRadius: 8,
      }}
    >
      {name}
      {badge && <span style={s.badge}>{badge}</span>}
    </a>
  );

  const MobileSectionLabel = ({ children }) => (
    <p style={{
      fontFamily: theme.fonts.body, fontSize: 10, fontWeight: 700,
      color: theme.colors.slate, textTransform: 'uppercase',
      letterSpacing: '0.1em', padding: '8px 12px 4px',
    }}>
      {children}
    </p>
  );

  /* ═════════════════ RENDER ═════════════════ */

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(250, 249, 246, 0.98)' : 'rgba(250, 249, 246, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(27, 77, 62, 0.1)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <nav
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '14px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); handleNav('/'); }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}
        >
          <svg width="280" height="60" viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 36, width: 'auto' }}>
            <path d="M30 58 L30 34" stroke="#252524" strokeWidth="5" strokeLinecap="round"/>
            <ellipse cx="14" cy="20" rx="6" ry="16" transform="rotate(-40 14 20)" fill="#252524"/>
            <ellipse cx="30" cy="14" rx="7" ry="16" fill="#252524"/>
            <ellipse cx="46" cy="20" rx="6" ry="16" transform="rotate(40 46 20)" fill="#252524"/>
            <text x="70" y="40" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="28" fontWeight="600" fill="#252524">ReferralSynch</text>
          </svg>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="desktop-nav">
          <DropdownTrigger id="platform" label="Platform">
            <PlatformPanel />
          </DropdownTrigger>

          <DropdownTrigger id="industries" label="Industries">
            <IndustriesPanel />
          </DropdownTrigger>

          <DropdownTrigger id="resources" label="Resources">
            <ResourcesPanel />
          </DropdownTrigger>

          <a
            href="/pricing"
            onClick={(e) => { e.preventDefault(); handleNav('/pricing'); }}
            style={{ ...s.navBtn, textDecoration: 'none' }}
          >
            Pricing
          </a>
        </div>

        {/* CTA + Mobile toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          <a
            href="/login"
            onClick={(e) => { e.preventDefault(); handleNav('/login'); }}
            style={{
              fontFamily: theme.fonts.body,
              fontSize: 14,
              fontWeight: 600,
              color: theme.colors.forest,
              padding: '10px 22px',
              borderRadius: 8,
              border: `1px solid ${theme.colors.forest}`,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'background-color 0.2s',
              backgroundColor: 'transparent',
            }}
            className="desktop-nav"
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${theme.colors.forest}08`; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            Sign In
          </a>
          <a
            href="/signup"
            onClick={(e) => { e.preventDefault(); handleNav('/signup'); }}
            style={{
              fontFamily: theme.fonts.body,
              fontSize: 14,
              fontWeight: 600,
              color: theme.colors.warmWhite,
              backgroundColor: theme.colors.forest,
              padding: '10px 22px',
              borderRadius: 8,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            Start Free
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none', padding: 8, background: 'none', border: 'none', cursor: 'pointer',
              color: theme.colors.ink,
            }}
            className="show-mobile"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ═══ MOBILE MENU ═══ */}
      {mobileOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: theme.colors.warmWhite,
            padding: '8px 24px 24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            maxHeight: 'calc(100vh - 70px)',
            overflowY: 'auto',
          }}
        >
          <MobileSection id="platform" label="Platform">
            <MobileSectionLabel>Products</MobileSectionLabel>
            {platformData.products.map((p) => (
              <MobileLink key={p.name} name={p.name} href={p.href} />
            ))}
            <MobileSectionLabel>Referral Use Cases</MobileSectionLabel>
            {platformData.referralUseCases.map((u) => (
              <MobileLink key={u.name} name={u.name} href={u.href} />
            ))}
            <MobileSectionLabel>Loyalty Use Cases</MobileSectionLabel>
            {platformData.loyaltyUseCases.map((u) => (
              <MobileLink key={u.name} name={u.name} href={u.href} />
            ))}
            <MobileSectionLabel>Integrations</MobileSectionLabel>
            {platformData.integrations.map((ig) => (
              <MobileLink key={ig.name} name={ig.name} href={ig.href} />
            ))}
          </MobileSection>

          <MobileSection id="industries" label="Industries">
            <MobileSectionLabel>By Industry</MobileSectionLabel>
            {industriesData.byIndustry.map((ind) => (
              <MobileLink key={ind.name} name={ind.name} href={ind.href} />
            ))}
            <MobileSectionLabel>By Business Type</MobileSectionLabel>
            {industriesData.byType.map((bt) => (
              <MobileLink key={bt.name} name={bt.name} href={bt.href} badge={bt.badge} />
            ))}
          </MobileSection>

          <MobileSection id="resources" label="Resources">
            <MobileSectionLabel>Learn</MobileSectionLabel>
            {resourcesData.learn.map((item) => (
              <MobileLink key={item.name} name={item.name} href={item.href} external={item.external} badge={item.badge} />
            ))}
            <MobileSectionLabel>Compare</MobileSectionLabel>
            {resourcesData.compare.map((c) => (
              <MobileLink key={c.name} name={c.name} href={c.href} />
            ))}
          </MobileSection>

          {/* Direct links */}
          <a
            href="/pricing"
            onClick={(e) => { e.preventDefault(); handleNav('/pricing'); }}
            style={{
              display: 'block', padding: '16px 0',
              fontFamily: theme.fonts.body, fontSize: 17, fontWeight: 600,
              color: theme.colors.ink, textDecoration: 'none',
              borderBottom: `1px solid ${theme.colors.mint}40`,
            }}
          >
            Pricing
          </a>

          {/* Sign In (mobile) */}
          <a
            href="/login"
            onClick={(e) => { e.preventDefault(); handleNav('/login'); }}
            style={{
              display: 'block', textAlign: 'center', marginTop: 20,
              padding: '14px 24px', backgroundColor: 'transparent',
              color: theme.colors.forest, borderRadius: 10,
              border: `1px solid ${theme.colors.forest}`,
              fontFamily: theme.fonts.body, fontSize: 16, fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Sign In
          </a>

          {/* Start Free (mobile) */}
          <a
            href="/signup"
            onClick={(e) => { e.preventDefault(); handleNav('/signup'); }}
            style={{
              display: 'block', textAlign: 'center', marginTop: 12,
              padding: '14px 24px', backgroundColor: theme.colors.forest,
              color: theme.colors.warmWhite, borderRadius: 10,
              fontFamily: theme.fonts.body, fontSize: 16, fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Start Free
          </a>
        </div>
      )}
    </header>
  );
};

export default EnhancedNavigation;
