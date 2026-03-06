import React from 'react';
import { theme } from '../theme';
import EnhancedNavigation from '../components/Navigation';
import Footer from '../components/Footer';

const section = {
  marginBottom: 32,
};

const heading = {
  fontFamily: theme.fonts.display,
  fontSize: 22,
  fontWeight: 500,
  color: theme.colors.ink,
  marginBottom: 12,
};

const paragraph = {
  fontFamily: theme.fonts.body,
  fontSize: 15,
  color: theme.colors.charcoal,
  lineHeight: 1.7,
  marginBottom: 12,
};

const PrivacyPage = () => (
  <>
    <EnhancedNavigation />
    <div style={{ backgroundColor: theme.colors.cream, minHeight: '100vh' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '120px 24px 80px' }}>
        <h1 style={{
          fontFamily: theme.fonts.display,
          fontSize: 42,
          fontWeight: 500,
          color: theme.colors.ink,
          marginBottom: 8,
        }}>
          Privacy Policy
        </h1>
        <p style={{ ...paragraph, color: theme.colors.slate, marginBottom: 48 }}>
          Last updated: March 1, 2026
        </p>

        <div style={section}>
          <h2 style={heading}>1. Introduction</h2>
          <p style={paragraph}>
            ReferralSynch, a product of PathSynch Labs LLC ("we," "our," or "us"), is committed to protecting
            the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you use our referral marketing platform and related services.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>2. Information We Collect</h2>
          <p style={paragraph}>
            <strong>Account Information:</strong> When you create an account, we collect your business name,
            email address, password, and industry. If you connect a Stripe account for payouts, Stripe processes
            your financial information directly — we only store your Stripe account ID and status.
          </p>
          <p style={paragraph}>
            <strong>Referral Data:</strong> We collect data about referral links, clicks, conversions, and
            advocate activity to operate the platform. This includes IP addresses, browser information, and
            device identifiers for fraud detection purposes.
          </p>
          <p style={paragraph}>
            <strong>Usage Data:</strong> We automatically collect information about how you interact with our
            platform, including pages visited, features used, and time spent on the service.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>3. How We Use Your Information</h2>
          <p style={paragraph}>
            We use the information we collect to: operate and maintain the platform; process referral tracking
            and reward distribution; detect and prevent fraud; send transactional emails (referral notifications,
            reward alerts, account updates); improve our services and develop new features; and comply with legal
            obligations.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>4. Information Sharing</h2>
          <p style={paragraph}>
            We do not sell your personal information. We may share information with: service providers who assist
            in operating our platform (e.g., SendGrid for email, Stripe for payments, MongoDB for data storage);
            business partners when you explicitly authorize an integration; and law enforcement when required by law.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>5. Data Security</h2>
          <p style={paragraph}>
            We implement industry-standard security measures including encrypted data transmission (TLS/SSL),
            hashed passwords, JWT-based authentication, role-based access control, and rate limiting to protect
            against unauthorized access. Our fraud detection system monitors for suspicious referral activity
            across 13+ signal types.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>6. Data Retention</h2>
          <p style={paragraph}>
            We retain your account data for as long as your account is active. Referral tracking data is retained
            for 24 months after the last activity. You may request deletion of your data at any time by contacting
            us at support@pathsynch.com.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>7. Your Rights</h2>
          <p style={paragraph}>
            You have the right to: access and download your personal data; correct inaccurate information; request
            deletion of your data; opt out of marketing communications; and withdraw consent for data processing.
            To exercise these rights, contact us at support@pathsynch.com.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>8. Cookies and Tracking</h2>
          <p style={paragraph}>
            We use cookies and similar technologies to track referral attributions, maintain user sessions, and
            analyze platform usage. Referral tracking cookies are essential to the service and cannot be disabled
            without affecting functionality.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>9. Changes to This Policy</h2>
          <p style={paragraph}>
            We may update this Privacy Policy from time to time. We will notify you of material changes by posting
            the updated policy on this page and updating the "Last updated" date.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>10. Contact Us</h2>
          <p style={paragraph}>
            If you have questions about this Privacy Policy, please contact us at:<br />
            Email: <a href="mailto:support@pathsynch.com" style={{ color: theme.colors.forest }}>support@pathsynch.com</a><br />
            Phone: <a href="tel:+14707406841" style={{ color: theme.colors.forest }}>(470) 740-6841</a><br />
            PathSynch Labs LLC, Atlanta, GA
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default PrivacyPage;
