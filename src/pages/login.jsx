import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Eye, EyeOff, Loader2, Shield, Zap, Trophy, QrCode, Users } from 'lucide-react';
import { theme } from '../theme';
import Logo from '../components/Logo';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password) {
      setError('Please enter your email and password.');
      return;
    }

    setIsLoading(true);
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Invalid email or password.');
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    fontSize: 16,
    fontFamily: theme.fonts.body,
    border: `1px solid ${theme.colors.mint}`,
    borderRadius: 8,
    backgroundColor: theme.colors.warmWhite,
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: theme.fonts.body,
    fontSize: 14,
    fontWeight: 500,
    color: theme.colors.charcoal,
    marginBottom: 8,
  };

  const benefits = [
    { icon: QrCode, text: 'QR & NFC tracking included' },
    { icon: Shield, text: '13+ fraud detection types' },
    { icon: Trophy, text: 'Full gamification suite' },
    { icon: Zap, text: 'Setup in under 10 minutes' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: theme.colors.cream,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    }} className="signup-grid">
      {/* Left Side - Form */}
      <div style={{
        padding: '48px 64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 560,
        margin: '0 auto',
        width: '100%',
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', marginBottom: 48 }}>
          <Logo color={theme.colors.forest} size={32} />
          <span style={{ fontFamily: theme.fonts.display, fontSize: 22, fontWeight: 600, color: theme.colors.ink }}>
            ReferralSynch
          </span>
        </a>

        <h1 style={{
          fontFamily: theme.fonts.display,
          fontSize: 36,
          fontWeight: 500,
          color: theme.colors.ink,
          marginBottom: 12,
          lineHeight: 1.2,
        }}>
          Welcome Back
        </h1>
        <p style={{
          fontFamily: theme.fonts.body,
          fontSize: 16,
          color: theme.colors.slate,
          marginBottom: 32,
        }}>
          Sign in to manage your referral programs and track performance.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(''); }}
              placeholder="you@company.com"
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = theme.colors.forest}
              onBlur={(e) => e.target.style.borderColor = theme.colors.mint}
            />
          </div>

          <div style={{ marginBottom: 28 }}>
            <label style={labelStyle}>Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                placeholder="Enter your password"
                style={{ ...inputStyle, paddingRight: 48 }}
                onFocus={(e) => e.target.style.borderColor = theme.colors.forest}
                onBlur={(e) => e.target.style.borderColor = theme.colors.mint}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
              >
                {showPassword ? <EyeOff size={20} color={theme.colors.slate} /> : <Eye size={20} color={theme.colors.slate} />}
              </button>
            </div>
          </div>

          {error && (
            <div style={{ backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 8, padding: '12px 16px', marginBottom: 20 }}>
              <p style={{ fontFamily: theme.fonts.body, fontSize: 13, color: theme.colors.red, margin: 0 }}>{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '16px 24px',
              backgroundColor: isLoading ? theme.colors.sage : theme.colors.forest,
              color: theme.colors.warmWhite,
              border: 'none',
              borderRadius: 8,
              fontFamily: theme.fonts.body,
              fontSize: 16,
              fontWeight: 600,
              cursor: isLoading ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              transition: 'background-color 0.2s',
            }}
          >
            {isLoading ? (
              <><Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} /> Signing in...</>
            ) : (
              <>Sign In <ArrowRight size={18} /></>
            )}
          </button>
        </form>

        <p style={{ fontFamily: theme.fonts.body, fontSize: 15, color: theme.colors.charcoal, marginTop: 32, textAlign: 'center' }}>
          Don't have an account?{' '}
          <a href="/signup" style={{ color: theme.colors.forest, fontWeight: 600 }}>Start Free</a>
        </p>
      </div>

      {/* Right Side - Benefits */}
      <div style={{
        backgroundColor: theme.colors.forest,
        padding: '64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <div style={{ maxWidth: 480 }}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: 32, fontWeight: 500, color: theme.colors.warmWhite, marginBottom: 16, lineHeight: 1.3 }}>
            Turn your customers into your best advocates
          </h2>
          <p style={{ fontFamily: theme.fonts.body, fontSize: 17, color: 'rgba(255,255,255,0.8)', marginBottom: 48, lineHeight: 1.6 }}>
            Join hundreds of local businesses growing through word-of-mouth referrals.
          </p>

          <div style={{ marginBottom: 48 }}>
            {benefits.map((benefit, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 0', borderBottom: i < benefits.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <benefit.icon size={22} color={theme.colors.mint} />
                </div>
                <span style={{ fontFamily: theme.fonts.body, fontSize: 16, color: theme.colors.warmWhite }}>{benefit.text}</span>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 16, padding: 24 }}>
            <p style={{ fontFamily: theme.fonts.body, fontSize: 15, color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', marginBottom: 16, lineHeight: 1.6 }}>
              "We put QR codes on our shopping bags and receipts. Within 3 months, referrals became our #2 acquisition channel."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: theme.colors.mint, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={20} color={theme.colors.forest} />
              </div>
              <div>
                <p style={{ fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 600, color: theme.colors.warmWhite }}>Sarah Chen</p>
                <p style={{ fontFamily: theme.fonts.body, fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Urban Threads Boutique</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
