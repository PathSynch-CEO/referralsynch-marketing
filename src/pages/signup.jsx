import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight, Shield, Zap, Trophy, QrCode,
  Eye, EyeOff, Loader2, Users
} from 'lucide-react';
import { theme } from '../theme';
import Logo from '../components/Logo';

const API_URL = import.meta.env.VITE_API_URL;

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    password: '',
    industry: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const industries = [
    'Retail',
    'Beauty & Wellness',
    'Food & Beverage',
    'Home Services',
    'Auto Services',
    'Fitness Studios',
    'Professional Services',
    'eCommerce',
    'Other',
  ];

  const benefits = [
    { icon: QrCode, text: 'QR & NFC tracking included' },
    { icon: Shield, text: '13+ fraud detection types' },
    { icon: Trophy, text: 'Full gamification suite' },
    { icon: Zap, text: 'Setup in under 10 minutes' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (!formData.industry) newErrors.industry = 'Please select your industry';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          businessName: formData.businessName,
          industry: formData.industry,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || 'Registration failed');
      }

      const data = await res.json();
      localStorage.setItem('referralsynch_token', data.token);
      navigate('/dashboard');
    } catch (error) {
      setErrors({ submit: error.message || 'Something went wrong. Please try again.' });
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

  const errorStyle = {
    fontFamily: theme.fonts.body,
    fontSize: 13,
    color: theme.colors.red,
    marginTop: 6,
  };

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
          Get Started<br />Free Today
        </h1>
        <p style={{
          fontFamily: theme.fonts.body,
          fontSize: 16,
          color: theme.colors.slate,
          marginBottom: 32,
        }}>
          No credit card required. Free plan forever, or try paid plans free for 14 days.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Business Name</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Your business name"
              style={{ ...inputStyle, borderColor: errors.businessName ? theme.colors.red : theme.colors.mint }}
              onFocus={(e) => e.target.style.borderColor = theme.colors.forest}
              onBlur={(e) => e.target.style.borderColor = errors.businessName ? theme.colors.red : theme.colors.mint}
            />
            {errors.businessName && <p style={errorStyle}>{errors.businessName}</p>}
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Work Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              style={{ ...inputStyle, borderColor: errors.email ? theme.colors.red : theme.colors.mint }}
              onFocus={(e) => e.target.style.borderColor = theme.colors.forest}
              onBlur={(e) => e.target.style.borderColor = errors.email ? theme.colors.red : theme.colors.mint}
            />
            {errors.email && <p style={errorStyle}>{errors.email}</p>}
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Minimum 8 characters"
                style={{ ...inputStyle, paddingRight: 48, borderColor: errors.password ? theme.colors.red : theme.colors.mint }}
                onFocus={(e) => e.target.style.borderColor = theme.colors.forest}
                onBlur={(e) => e.target.style.borderColor = errors.password ? theme.colors.red : theme.colors.mint}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
              >
                {showPassword ? <EyeOff size={20} color={theme.colors.slate} /> : <Eye size={20} color={theme.colors.slate} />}
              </button>
            </div>
            {errors.password && <p style={errorStyle}>{errors.password}</p>}
          </div>

          <div style={{ marginBottom: 28 }}>
            <label style={labelStyle}>Industry</label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              style={{
                ...inputStyle,
                cursor: 'pointer',
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%235C5C5C' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 14px center',
                borderColor: errors.industry ? theme.colors.red : theme.colors.mint,
              }}
            >
              <option value="">Select your industry</option>
              {industries.map(ind => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
            {errors.industry && <p style={errorStyle}>{errors.industry}</p>}
          </div>

          {errors.submit && (
            <div style={{ backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 8, padding: '12px 16px', marginBottom: 20 }}>
              <p style={{ ...errorStyle, margin: 0 }}>{errors.submit}</p>
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
              <><Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} /> Creating your account...</>
            ) : (
              <>Start Free Trial <ArrowRight size={18} /></>
            )}
          </button>
        </form>

        <p style={{ fontFamily: theme.fonts.body, fontSize: 13, color: theme.colors.slate, marginTop: 20, textAlign: 'center' }}>
          By signing up, you agree to our{' '}
          <a href="/terms" style={{ color: theme.colors.forest }}>Terms of Service</a>
          {' '}and{' '}
          <a href="/privacy" style={{ color: theme.colors.forest }}>Privacy Policy</a>
        </p>

        <p style={{ fontFamily: theme.fonts.body, fontSize: 15, color: theme.colors.charcoal, marginTop: 32, textAlign: 'center' }}>
          Already have an account?{' '}
          <a href="/login" style={{ color: theme.colors.forest, fontWeight: 600 }}>Sign in</a>
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

export default SignupPage;
