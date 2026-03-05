import React, { useState, useEffect, useRef } from 'react';
import {
  QrCode, Shield, CreditCard, Check,
  ArrowRight, Play, ChevronDown, Pause, Volume2, VolumeX, Phone
} from 'lucide-react';
import { theme } from '../theme';
import EnhancedNavigation from '../components/Navigation';
import PathSynchEcosystemSection from '../components/PathSynchEcosystem';
import Footer from '../components/Footer';

// =============================================================================
// HOOKS
// =============================================================================
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true);
    }, { threshold: 0.2, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};


// =============================================================================
// SKIP LINK (Accessibility)
// =============================================================================
const SkipLink = () => (
  <a
    href="#main-content"
    style={{
      position: 'absolute',
      top: -100,
      left: 16,
      padding: '12px 24px',
      backgroundColor: theme.colors.forest,
      color: '#fff',
      borderRadius: 8,
      fontFamily: theme.fonts.body,
      fontWeight: 600,
      textDecoration: 'none',
      zIndex: 9999,
      transition: 'top 0.2s',
    }}
    onFocus={(e) => e.target.style.top = '16px'}
    onBlur={(e) => e.target.style.top = '-100px'}
  >
    Skip to main content
  </a>
);

// =============================================================================
// HERO SECTION
// =============================================================================
const HeroSection = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        backgroundColor: theme.colors.cream,
        paddingTop: 120,
        paddingBottom: 80,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${theme.colors.mint}30 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 24,
          alignItems: 'center',
          minHeight: '70vh',
        }}>
          {/* Content */}
          <div style={{ gridColumn: '1 / 7', paddingRight: 40 }} className="hero-text">
            <p style={{
              fontFamily: theme.fonts.body,
              fontSize: theme.fontSize.sm,
              fontWeight: 600,
              color: theme.colors.sage,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: 24,
            }}>
              Referral Marketing Platform
            </p>

            <h1 style={{
              fontFamily: theme.fonts.display,
              fontSize: theme.fontSize['4xl'],
              fontWeight: 500,
              color: theme.colors.ink,
              lineHeight: 1.1,
              marginBottom: 32,
            }}>
              Turn satisfied customers into your most{' '}
              <em style={{ fontStyle: 'italic', color: theme.colors.forest }}>persuasive</em>{' '}
              advocates
            </h1>

            <p style={{
              fontFamily: theme.fonts.body,
              fontSize: theme.fontSize.lg,
              color: theme.colors.charcoal,
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 520,
            }}>
              The only referral platform with physical QR/NFC tracking, 
              enterprise-grade fraud detection, and automated Stripe payouts.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <a href="/signup" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: theme.fonts.body,
                fontSize: 16,
                fontWeight: 600,
                color: theme.colors.warmWhite,
                backgroundColor: theme.colors.forest,
                padding: '16px 32px',
                borderRadius: 8,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}>
                Start 14-Day Free Trial
                <ArrowRight size={18} />
              </a>

              <button
                onClick={() => scrollTo('story')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: theme.fonts.body,
                  fontSize: 16,
                  fontWeight: 500,
                  color: theme.colors.charcoal,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '16px 0',
                }}
              >
                <span style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  border: `2px solid ${theme.colors.sage}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Play size={18} fill={theme.colors.forest} color={theme.colors.forest} />
                </span>
                Watch Our Story
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div style={{ gridColumn: '7 / 13', display: 'flex', flexDirection: 'column', gap: 20 }} className="hero-cards">
            {[
              { icon: QrCode, title: 'Physical Attribution', desc: 'QR codes & NFC tags that track real-world referrals' },
              { icon: Shield, title: '13+ Fraud Checks', desc: 'ML-powered detection catches what others miss' },
              { icon: CreditCard, title: 'Instant Payouts', desc: 'Advocates connect Stripe and get paid automatically' },
            ].map((card, i) => (
              <article
                key={i}
                style={{
                  backgroundColor: theme.colors.warmWhite,
                  padding: 28,
                  borderRadius: 16,
                  border: '1px solid rgba(27, 77, 62, 0.08)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                  marginLeft: i === 1 ? 40 : 0,
                  marginRight: i === 0 ? 20 : i === 2 ? 40 : 0,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.04)';
                }}
              >
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: theme.colors.mint,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <card.icon size={24} color={theme.colors.forest} />
                </div>
                <h3 style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 18,
                  fontWeight: 600,
                  color: theme.colors.ink,
                  marginBottom: 6,
                }}>
                  {card.title}
                </h3>
                <p style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 15,
                  color: theme.colors.slate,
                  lineHeight: 1.5,
                  margin: 0,
                }}>
                  {card.desc}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            cursor: 'pointer',
            animation: 'bounce 2s infinite',
          }}
          onClick={() => scrollTo('story')}
        >
          <span style={{
            fontFamily: theme.fonts.body,
            fontSize: 12,
            color: theme.colors.slate,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}>
            Discover
          </span>
          <ChevronDown size={20} color={theme.colors.slate} />
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// BRAND STORY SECTION - With Video
// =============================================================================
const BrandStorySection = () => {
  const [ref, isInView] = useInView();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);

  const chapters = [
    {
      number: '01',
      title: 'The Seed',
      subtitle: 'Every relationship starts somewhere',
      content: 'A customer walks through your door. They leave happy. That moment of satisfaction is a seed—full of potential, waiting to grow.',
      timeStart: 0,
      timeEnd: 2.5,
    },
    {
      number: '02',
      title: 'The Growth',
      subtitle: 'Nurturing creates advocates',
      content: 'With the right tools, that satisfied customer becomes your champion. They share your story, spread your name, plant new seeds wherever they go.',
      timeStart: 2.5,
      timeEnd: 5,
    },
    {
      number: '03',
      title: 'The Network',
      subtitle: 'Watch your community multiply',
      content: 'One customer becomes ten. Ten become a hundred. Each referral tracked, each advocate rewarded, each relationship strengthened.',
      timeStart: 5,
      timeEnd: 8,
    },
  ];

  useEffect(() => {
    if (isInView && videoRef.current && !showVideo) {
      setShowVideo(true);
      setTimeout(() => {
        videoRef.current?.play();
        setIsPlaying(true);
      }, 500);
    }
  }, [isInView, showVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      const duration = video.duration || 8;
      setVideoProgress((currentTime / duration) * 100);

      const chapterIndex = chapters.findIndex(
        (ch) => currentTime >= ch.timeStart && currentTime < ch.timeEnd
      );
      if (chapterIndex !== -1 && chapterIndex !== activeChapter) {
        setActiveChapter(chapterIndex);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, [activeChapter, chapters]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const seekToChapter = (index) => {
    if (videoRef.current) {
      videoRef.current.currentTime = chapters[index].timeStart;
      setActiveChapter(index);
      if (!isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section
      id="story"
      ref={ref}
      style={{
        backgroundColor: theme.colors.midnight,
        color: theme.colors.warmWhite,
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse at 30% 20%, ${theme.colors.forest}30 0%, transparent 50%),
          radial-gradient(ellipse at 70% 80%, ${theme.colors.sage}20 0%, transparent 40%)
        `,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: 80 }}>
          <p style={{
            fontFamily: theme.fonts.body,
            fontSize: theme.fontSize.sm,
            fontWeight: 600,
            color: theme.colors.mint,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginBottom: 20,
          }}>
            Our Story
          </p>
          <h2 style={{
            fontFamily: theme.fonts.display,
            fontSize: theme.fontSize['3xl'],
            fontWeight: 500,
            lineHeight: 1.2,
            maxWidth: 800,
            margin: '0 auto',
          }}>
            How a single happy customer becomes your{' '}
            <em style={{ fontStyle: 'italic', color: theme.colors.mint }}>
              most powerful growth engine
            </em>
          </h2>
        </header>

        {/* Video + Chapters */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: 48,
          alignItems: 'start',
        }} className="story-grid">
          {/* Video Player */}
          <div style={{
            position: 'relative',
            borderRadius: 24,
            overflow: 'hidden',
            backgroundColor: '#000',
            aspectRatio: '16/9',
            opacity: showVideo ? 1 : 0,
            transform: showVideo ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease',
          }}>
            <video
              ref={videoRef}
              src="/videos/ReferralSynch_Video.mp4"
              muted={isMuted}
              loop
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            {/* Controls */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '40px 24px 24px',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
            }}>
              {/* Progress bar */}
              <div style={{
                height: 4,
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: 2,
                marginBottom: 16,
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: `${videoProgress}%`,
                  backgroundColor: theme.colors.mint,
                  borderRadius: 2,
                  transition: 'width 0.1s linear',
                }} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <button
                    onClick={togglePlay}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      backgroundColor: theme.colors.mint,
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {isPlaying ? (
                      <Pause size={20} color={theme.colors.forest} fill={theme.colors.forest} />
                    ) : (
                      <Play size={20} color={theme.colors.forest} fill={theme.colors.forest} style={{ marginLeft: 2 }} />
                    )}
                  </button>

                  <button
                    onClick={toggleMute}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {isMuted ? <VolumeX size={18} color="#fff" /> : <Volume2 size={18} color="#fff" />}
                  </button>
                </div>

                <div style={{ display: 'flex', gap: 8 }}>
                  {chapters.map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: i === activeChapter ? theme.colors.mint : 'rgba(255,255,255,0.3)',
                        transition: 'all 0.3s',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Chapter Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {chapters.map((chapter, i) => (
              <button
                key={i}
                onClick={() => seekToChapter(i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 20,
                  padding: '24px 28px',
                  backgroundColor: activeChapter === i ? 'rgba(168, 213, 186, 0.1)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${activeChapter === i ? theme.colors.mint : 'rgba(255,255,255,0.08)'}`,
                  borderRadius: 16,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: activeChapter === i ? 4 : 0,
                  backgroundColor: theme.colors.mint,
                  transition: 'width 0.3s ease',
                }} />

                <span style={{
                  fontFamily: theme.fonts.display,
                  fontSize: 28,
                  fontWeight: 400,
                  color: activeChapter === i ? theme.colors.mint : 'rgba(255,255,255,0.3)',
                  transition: 'color 0.3s',
                  lineHeight: 1,
                }}>
                  {chapter.number}
                </span>

                <div>
                  <h3 style={{
                    fontFamily: theme.fonts.body,
                    fontSize: 18,
                    fontWeight: 600,
                    color: activeChapter === i ? theme.colors.warmWhite : 'rgba(255,255,255,0.6)',
                    marginBottom: 4,
                    transition: 'color 0.3s',
                  }}>
                    {chapter.title}
                  </h3>
                  <p style={{
                    fontFamily: theme.fonts.body,
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.5)',
                    margin: 0,
                    marginBottom: activeChapter === i ? 12 : 0,
                  }}>
                    {chapter.subtitle}
                  </p>

                  <div style={{
                    maxHeight: activeChapter === i ? 100 : 0,
                    opacity: activeChapter === i ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                  }}>
                    <p style={{
                      fontFamily: theme.fonts.body,
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: 1.6,
                      margin: 0,
                    }}>
                      {chapter.content}
                    </p>
                  </div>
                </div>
              </button>
            ))}

            <a
              href="/signup"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                marginTop: 16,
                padding: '16px 24px',
                backgroundColor: theme.colors.forest,
                color: theme.colors.warmWhite,
                borderRadius: 12,
                fontFamily: theme.fonts.body,
                fontSize: 16,
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Start Growing Today
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// FEATURES SECTION
// =============================================================================
const FeaturesSection = () => {
  const features = [
    {
      number: '01',
      title: 'Physical Meets Digital',
      subtitle: 'QR & NFC Attribution',
      description: 'Track referrals from business cards, receipts, table tents, and NFC-enabled materials. Know exactly which physical touchpoint drove each conversion.',
      icon: QrCode,
      stats: [
        { value: '3x', label: 'higher conversion' },
        { value: '100%', label: 'attribution accuracy' },
      ],
    },
    {
      number: '02',
      title: 'Enterprise Security',
      subtitle: '13+ Fraud Detection Types',
      description: 'Self-referrals, VPN detection, velocity abuse, disposable emails, device fingerprinting, payment matching, and behavioral analysis. All automated.',
      icon: Shield,
      stats: [
        { value: '90+', label: 'risk score threshold' },
        { value: '0.1%', label: 'fraud rate' },
      ],
    },
    {
      number: '03',
      title: 'Automated Payouts',
      subtitle: 'Stripe Connect Integration',
      description: 'Advocates connect their bank account once, then receive instant automated payouts. No gift cards, no manual transfers, no friction.',
      icon: CreditCard,
      stats: [
        { value: '2-3', label: 'days to payout' },
        { value: '$10', label: 'minimum threshold' },
      ],
    },
  ];

  return (
    <section
      id="features"
      style={{
        backgroundColor: theme.colors.warmWhite,
        padding: '120px 0',
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
        <header style={{ maxWidth: 600, marginBottom: 80 }}>
          <p style={{
            fontFamily: theme.fonts.body,
            fontSize: theme.fontSize.sm,
            fontWeight: 600,
            color: theme.colors.sage,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: 16,
          }}>
            Capabilities
          </p>
          <h2 style={{
            fontFamily: theme.fonts.display,
            fontSize: theme.fontSize['3xl'],
            fontWeight: 500,
            color: theme.colors.ink,
            lineHeight: 1.15,
          }}>
            Everything you need,{' '}
            <em style={{ fontStyle: 'italic', color: theme.colors.forest }}>nothing you don't</em>
          </h2>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 100 }}>
          {features.map((feature, i) => {
            const [ref, isInView] = useInView();
            return (
              <article
                key={feature.number}
                ref={ref}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gap: 48,
                  alignItems: 'center',
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'all 0.8s ease',
                }}
              >
                <div style={{ 
                  gridColumn: i % 2 === 0 ? '1 / 6' : '8 / 13', 
                  order: i % 2 === 0 ? 1 : 2 
                }}>
                  <span style={{
                    fontFamily: theme.fonts.display,
                    fontSize: 56,
                    fontWeight: 400,
                    color: theme.colors.mint,
                    lineHeight: 1,
                  }}>
                    {feature.number}
                  </span>
                  <p style={{
                    fontFamily: theme.fonts.body,
                    fontSize: theme.fontSize.sm,
                    fontWeight: 600,
                    color: theme.colors.sage,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: 8,
                    marginTop: 16,
                  }}>
                    {feature.subtitle}
                  </p>
                  <h3 style={{
                    fontFamily: theme.fonts.display,
                    fontSize: theme.fontSize['2xl'],
                    fontWeight: 500,
                    color: theme.colors.ink,
                    marginBottom: 20,
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontFamily: theme.fonts.body,
                    fontSize: theme.fontSize.base,
                    color: theme.colors.charcoal,
                    lineHeight: 1.7,
                    marginBottom: 32,
                  }}>
                    {feature.description}
                  </p>

                  <div style={{ display: 'flex', gap: 48 }}>
                    {feature.stats.map((stat, j) => (
                      <div key={j}>
                        <span style={{
                          fontFamily: theme.fonts.display,
                          fontSize: 32,
                          fontWeight: 500,
                          color: theme.colors.forest,
                        }}>
                          {stat.value}
                        </span>
                        <span style={{
                          display: 'block',
                          fontFamily: theme.fonts.body,
                          fontSize: 12,
                          color: theme.colors.slate,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          marginTop: 4,
                        }}>
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ 
                  gridColumn: i % 2 === 0 ? '7 / 13' : '1 / 7', 
                  order: i % 2 === 0 ? 2 : 1 
                }}>
                  <div style={{
                    aspectRatio: '4/3',
                    backgroundColor: theme.colors.cream,
                    borderRadius: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${theme.colors.mint}`,
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute',
                      width: 200,
                      height: 200,
                      borderRadius: '50%',
                      border: `1px solid ${theme.colors.mint}`,
                      opacity: 0.3,
                    }} />
                    <feature.icon size={80} color={theme.colors.forest} strokeWidth={1} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// MAJOR CTA SECTION (Antavo-style)
// =============================================================================
const MajorCTASection = () => {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: theme.colors.cream,
        padding: '40px 32px',
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        backgroundColor: theme.colors.gold,
        borderRadius: 32,
        padding: '80px 60px',
        position: 'relative',
        overflow: 'hidden',
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease',
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: -50,
          right: -50,
          width: 300,
          height: 300,
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.1)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.05)',
        }} />

        <div style={{ position: 'relative', textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: theme.fonts.display,
            fontSize: theme.fontSize['3xl'],
            fontWeight: 500,
            color: theme.colors.ink,
            lineHeight: 1.2,
            marginBottom: 20,
          }}>
            Ready to turn your customers into your{' '}
            <em style={{ fontStyle: 'italic' }}>best salespeople?</em>
          </h2>
          
          <p style={{
            fontFamily: theme.fonts.body,
            fontSize: theme.fontSize.lg,
            color: theme.colors.charcoal,
            lineHeight: 1.6,
            marginBottom: 40,
          }}>
            Our team can answer all your questions, walk you through the platform, 
            and help you design a referral program that actually works.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <a
              href="/signup"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '18px 36px',
                backgroundColor: theme.colors.forest,
                color: theme.colors.warmWhite,
                borderRadius: 10,
                fontFamily: theme.fonts.body,
                fontSize: 17,
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
            >
              Start Free Trial
              <ArrowRight size={20} />
            </a>
            
            <a
              href="/demo"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '18px 36px',
                backgroundColor: theme.colors.warmWhite,
                color: theme.colors.forest,
                borderRadius: 10,
                fontFamily: theme.fonts.body,
                fontSize: 17,
                fontWeight: 600,
                textDecoration: 'none',
                border: `2px solid ${theme.colors.forest}`,
                transition: 'all 0.2s',
              }}
            >
              <Phone size={20} />
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// PRICING SECTION
// =============================================================================
const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: 29,
      description: 'For small businesses beginning their referral journey',
      features: ['1 campaign', '100 advocates', 'QR tracking', 'Email support'],
      highlighted: false,
    },
    {
      name: 'Growth',
      price: 69,
      description: 'For growing businesses ready to scale',
      features: ['5 campaigns', '500 advocates', 'QR + NFC tracking', 'Stripe payouts', '5-tier gamification', 'Priority support'],
      highlighted: true,
    },
    {
      name: 'Scale',
      price: 179,
      description: 'For established businesses with high volume',
      features: ['Unlimited campaigns', '2,000 advocates', 'Everything in Growth', 'API access', 'White-label portal'],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" style={{ backgroundColor: theme.colors.midnight, padding: '120px 0', color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <header style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{
            fontFamily: theme.fonts.body,
            fontSize: theme.fontSize.sm,
            fontWeight: 600,
            color: theme.colors.mint,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: 16,
          }}>
            Pricing
          </p>
          <h2 style={{
            fontFamily: theme.fonts.display,
            fontSize: theme.fontSize['3xl'],
            fontWeight: 500,
            marginBottom: 16,
          }}>
            Simple, transparent pricing
          </h2>
          <p style={{
            fontFamily: theme.fonts.body,
            fontSize: theme.fontSize.base,
            color: 'rgba(255,255,255,0.7)',
          }}>
            No hidden fees. No success fees. 14-day free trial on all plans.
          </p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {plans.map((plan) => (
            <article
              key={plan.name}
              style={{
                backgroundColor: plan.highlighted ? theme.colors.forest : theme.colors.darkSlate,
                padding: 40,
                borderRadius: 20,
                border: plan.highlighted ? 'none' : '1px solid rgba(255,255,255,0.1)',
                position: 'relative',
              }}
            >
              {plan.highlighted && (
                <span style={{
                  position: 'absolute',
                  top: -14,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: theme.colors.mint,
                  color: theme.colors.forest,
                  padding: '6px 16px',
                  borderRadius: 50,
                  fontFamily: theme.fonts.body,
                  fontSize: 12,
                  fontWeight: 600,
                }}>
                  Most Popular
                </span>
              )}

              <h3 style={{ fontFamily: theme.fonts.body, fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
                {plan.name}
              </h3>
              <div style={{ marginBottom: 8 }}>
                <span style={{ fontFamily: theme.fonts.display, fontSize: 48, fontWeight: 500 }}>
                  ${plan.price}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>/month</span>
              </div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>
                {plan.description}
              </p>

              <a href="/signup" style={{
                display: 'block',
                width: '100%',
                padding: '14px',
                backgroundColor: plan.highlighted ? '#fff' : 'transparent',
                color: plan.highlighted ? theme.colors.forest : '#fff',
                border: plan.highlighted ? 'none' : '1px solid rgba(255,255,255,0.3)',
                borderRadius: 8,
                fontFamily: theme.fonts.body,
                fontSize: 15,
                fontWeight: 600,
                textAlign: 'center',
                textDecoration: 'none',
                marginBottom: 32,
              }}>
                Start Free Trial
              </a>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '10px 0',
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.9)',
                    borderTop: i === 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  }}>
                    <Check size={16} color={theme.colors.mint} />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// MAIN APP
// =============================================================================
const ReferralSynchMarketing = () => (
  <>
    <SkipLink />
    <div style={{ minHeight: '100vh', backgroundColor: theme.colors.cream }}>
      <EnhancedNavigation />

      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <BrandStorySection />
        <FeaturesSection />
        <PathSynchEcosystemSection />
        <MajorCTASection />
        <PricingSection />
      </main>

      <Footer />
    </div>

  </>
);

export default ReferralSynchMarketing;
