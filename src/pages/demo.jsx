import React, { useState, useEffect } from 'react';
import {
  Calendar, CheckCircle, Play, ArrowRight,
  BarChart3, Shield, QrCode, Trophy, Zap,
  Users, Clock, Star
} from 'lucide-react';
import { theme } from '../theme';
import EnhancedNavigation from '../components/Navigation';
import Footer from '../components/Footer';

// =============================================================================
// DEMO PAGE
// =============================================================================

const DemoPage = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  // Load HubSpot script when calendar is shown
  useEffect(() => {
    if (showCalendar) {
      const script = document.createElement('script');
      script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [showCalendar]);

  const benefits = [
    { icon: BarChart3, title: 'Full Dashboard Walkthrough', desc: 'See real-time analytics, referral tracking, and ROI reporting in action.' },
    { icon: QrCode, title: 'QR & NFC Attribution', desc: 'Watch how physical touchpoints track referrals with 100% accuracy.' },
    { icon: Shield, title: 'Fraud Detection Demo', desc: '13+ detection methods that catch self-referrals, VPN abuse, and more.' },
    { icon: Trophy, title: 'Gamification & Rewards', desc: 'Tiers, streaks, achievements, and leaderboards that drive engagement.' },
    { icon: Zap, title: 'Automated Payouts', desc: 'Stripe Connect integration for instant advocate payouts.' },
    { icon: Users, title: 'Advocate Portal', desc: 'See the white-label portal your advocates will use to share and earn.' },
  ];

  const stats = [
    { value: '47%', label: 'Higher engagement with gamification' },
    { value: '3x', label: 'More referrals vs. basic programs' },
    { value: '<10min', label: 'Average setup time' },
    { value: '0.1%', label: 'Fraud rate with our detection' },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: theme.colors.cream }}>
      <EnhancedNavigation />

      {/* Hero Section */}
      <section style={{
        paddingTop: 140,
        paddingBottom: 80,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, ${theme.colors.forest}08 0%, transparent 50%, ${theme.colors.mint}10 100%)`,
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'center',
          }} className="demo-grid">
            {/* Left - Copy */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 16px',
                borderRadius: 100,
                backgroundColor: `${theme.colors.forest}10`,
                marginBottom: 24,
              }}>
                <Calendar size={14} style={{ color: theme.colors.forest }} />
                <span style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 13,
                  fontWeight: 600,
                  color: theme.colors.forest,
                  letterSpacing: '0.02em',
                }}>
                  FREE 30-MINUTE CONSULTATION
                </span>
              </div>

              <h1 style={{
                fontFamily: theme.fonts.display,
                fontSize: theme.fontSize['3xl'],
                fontWeight: 600,
                color: theme.colors.ink,
                lineHeight: 1.15,
                marginBottom: 20,
              }}>
                See ReferralSynch{' '}
                <span style={{
                  fontStyle: 'italic',
                  color: theme.colors.forest,
                }}>in Action</span>
              </h1>

              <p style={{
                fontFamily: theme.fonts.body,
                fontSize: theme.fontSize.lg,
                color: theme.colors.slate,
                lineHeight: 1.7,
                marginBottom: 32,
                maxWidth: 480,
              }}>
                Get a personalized walkthrough of the most complete referral marketing
                platform. We'll show you how to turn customers into your best advocates.
              </p>

              {/* What you'll see */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
                {['Live dashboard with real data', 'QR & NFC tracking setup', 'Custom reward configuration', 'ROI projections for your business'].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <CheckCircle size={18} style={{ color: theme.colors.sage, flexShrink: 0 }} />
                    <span style={{
                      fontFamily: theme.fonts.body,
                      fontSize: 15,
                      color: theme.colors.charcoal,
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    setShowCalendar(true);
                    setTimeout(() => {
                      document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '14px 28px',
                    backgroundColor: theme.colors.forest,
                    color: '#fff',
                    border: 'none',
                    borderRadius: 10,
                    fontFamily: theme.fonts.body,
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.backgroundColor = theme.colors.sage}
                  onMouseLeave={e => e.target.style.backgroundColor = theme.colors.forest}
                >
                  <Calendar size={18} />
                  Book Your Demo
                </button>
                <a
                  href="/signup"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '14px 28px',
                    backgroundColor: 'transparent',
                    color: theme.colors.forest,
                    border: `2px solid ${theme.colors.forest}`,
                    borderRadius: 10,
                    fontFamily: theme.fonts.body,
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  Start Free Trial
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right - Dashboard Preview */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.12), 0 8px 20px rgba(0,0,0,0.08)',
                border: '1px solid rgba(0,0,0,0.06)',
              }}>
                <img
                  src="/images/dashboard-viewport.png"
                  alt="ReferralSynch Dashboard - Real-time referral analytics and tracking"
                  style={{ width: '100%', display: 'block' }}
                  loading="eager"
                />
              </div>
              {/* Floating badge */}
              <div style={{
                position: 'absolute',
                bottom: -16,
                left: 24,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 18px',
                backgroundColor: '#fff',
                borderRadius: 12,
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.05)',
              }}>
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: theme.colors.green,
                  animation: 'pulse 2s infinite',
                }} />
                <span style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 13,
                  fontWeight: 600,
                  color: theme.colors.charcoal,
                }}>
                  Live demo available now
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{
        padding: '40px 24px',
        backgroundColor: theme.colors.forest,
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 32,
        }} className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: theme.fonts.display,
                fontSize: theme.fontSize['2xl'],
                fontWeight: 600,
                color: '#fff',
                marginBottom: 4,
              }}>
                {stat.value}
              </div>
              <div style={{
                fontFamily: theme.fonts.body,
                fontSize: 14,
                color: theme.colors.mint,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What You'll See Section */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{
              fontFamily: theme.fonts.display,
              fontSize: theme.fontSize['2xl'],
              fontWeight: 600,
              color: theme.colors.ink,
              marginBottom: 12,
            }}>
              What You'll See in Your Demo
            </h2>
            <p style={{
              fontFamily: theme.fonts.body,
              fontSize: theme.fontSize.base,
              color: theme.colors.slate,
              maxWidth: 560,
              margin: '0 auto',
            }}>
              A personalized tour of every feature, tailored to your business
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }} className="benefits-grid">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                style={{
                  padding: 28,
                  backgroundColor: '#fff',
                  borderRadius: 14,
                  border: '1px solid rgba(0,0,0,0.06)',
                  transition: 'all 0.25s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
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
                  <benefit.icon size={22} style={{ color: theme.colors.forest }} />
                </div>
                <h3 style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 16,
                  fontWeight: 600,
                  color: theme.colors.ink,
                  marginBottom: 8,
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 14,
                  color: theme.colors.slate,
                  lineHeight: 1.6,
                }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Dashboard Screenshot */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
            border: '1px solid rgba(0,0,0,0.06)',
          }}>
            <img
              src="/images/dashboard.png"
              alt="ReferralSynch Full Dashboard - Analytics, Campaigns, Advocates, and more"
              style={{ width: '100%', display: 'block' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section
        id="calendar-section"
        style={{
          padding: '80px 24px',
          backgroundColor: '#fff',
          borderTop: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{
              fontFamily: theme.fonts.display,
              fontSize: theme.fontSize['2xl'],
              fontWeight: 600,
              color: theme.colors.ink,
              marginBottom: 12,
            }}>
              Pick a Time That Works
            </h2>
            <p style={{
              fontFamily: theme.fonts.body,
              fontSize: theme.fontSize.base,
              color: theme.colors.slate,
            }}>
              30-minute call with our team. No pressure, no commitment.
            </p>
          </div>

          {!showCalendar ? (
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => setShowCalendar(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '16px 36px',
                  backgroundColor: theme.colors.forest,
                  color: '#fff',
                  border: 'none',
                  borderRadius: 12,
                  fontFamily: theme.fonts.body,
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => e.target.style.backgroundColor = theme.colors.sage}
                onMouseLeave={e => e.target.style.backgroundColor = theme.colors.forest}
              >
                <Calendar size={20} />
                Open Calendar
                <ArrowRight size={16} />
              </button>
              <p style={{
                fontFamily: theme.fonts.body,
                fontSize: 13,
                color: theme.colors.slate,
                marginTop: 16,
              }}>
                Or email us directly at{' '}
                <a href="mailto:hello@pathsynch.com" style={{ color: theme.colors.forest, textDecoration: 'none', fontWeight: 600 }}>
                  hello@pathsynch.com
                </a>
              </p>
            </div>
          ) : (
            <div
              className="meetings-iframe-container"
              data-src="https://meetings.hubspot.com/charles494?uuid=d0220343-6dd6-4294-8743-208eea5004c7&embed=true"
              style={{
                minHeight: 650,
                borderRadius: 12,
                overflow: 'hidden',
              }}
            />
          )}
        </div>
      </section>

      {/* Testimonial / Trust */}
      <section style={{
        padding: '60px 24px',
        backgroundColor: `${theme.colors.forest}05`,
      }}>
        <div style={{
          maxWidth: 700,
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 16 }}>
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} size={20} fill={theme.colors.gold} style={{ color: theme.colors.gold }} />
            ))}
          </div>
          <blockquote style={{
            fontFamily: theme.fonts.display,
            fontSize: theme.fontSize.xl,
            fontStyle: 'italic',
            color: theme.colors.charcoal,
            lineHeight: 1.6,
            marginBottom: 20,
          }}>
            "ReferralSynch gave us the physical + digital attribution we couldn't find anywhere
            else. Our QR code referrals alone drove 40% of new customers last quarter."
          </blockquote>
          <div style={{
            fontFamily: theme.fonts.body,
            fontSize: 14,
            color: theme.colors.slate,
          }}>
            <strong style={{ color: theme.colors.ink }}>Sarah Mitchell</strong> &middot; Marketing Director, Urban Wellness Co.
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        padding: '80px 24px',
        backgroundColor: theme.colors.midnight,
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: theme.fonts.display,
            fontSize: theme.fontSize['2xl'],
            fontWeight: 600,
            color: '#fff',
            marginBottom: 16,
          }}>
            Ready to grow through referrals?
          </h2>
          <p style={{
            fontFamily: theme.fonts.body,
            fontSize: theme.fontSize.base,
            color: 'rgba(255,255,255,0.65)',
            marginBottom: 32,
          }}>
            Start free today — no credit card required. Or schedule a demo to see everything in action.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="/signup"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 28px',
                backgroundColor: theme.colors.forest,
                color: '#fff',
                borderRadius: 10,
                fontFamily: theme.fonts.body,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
            >
              Start Free Trial
              <ArrowRight size={16} />
            </a>
            <button
              onClick={() => {
                setShowCalendar(true);
                setTimeout(() => {
                  document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 28px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 10,
                fontFamily: theme.fonts.body,
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.target.style.backgroundColor = 'rgba(255,255,255,0.15)'}
              onMouseLeave={e => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
            >
              <Calendar size={16} />
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @media (max-width: 900px) {
          .demo-grid { grid-template-columns: 1fr !important; }
          .demo-grid > div:last-child { margin-top: 24px; }
        }
        @media (max-width: 768px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
};

export default DemoPage;
