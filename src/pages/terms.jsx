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

const TermsPage = () => (
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
          Terms of Service
        </h1>
        <p style={{ ...paragraph, color: theme.colors.slate, marginBottom: 48 }}>
          Last updated: March 1, 2026
        </p>

        <div style={section}>
          <h2 style={heading}>1. Acceptance of Terms</h2>
          <p style={paragraph}>
            By accessing or using ReferralSynch, a product of PathSynch Labs LLC ("we," "our," or "us"),
            you agree to be bound by these Terms of Service. If you are using the service on behalf of a
            business, you represent that you have authority to bind that business to these terms.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>2. Description of Service</h2>
          <p style={paragraph}>
            ReferralSynch is a referral marketing platform that enables businesses to create, manage, and
            track customer referral programs. The service includes referral tracking, reward management,
            fraud detection, advocate portals, QR/NFC-based sharing, gamification features, and analytics.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>3. Account Registration</h2>
          <p style={paragraph}>
            You must provide accurate and complete information when creating an account. You are responsible
            for maintaining the confidentiality of your login credentials and for all activity under your
            account. You must notify us immediately of any unauthorized access.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>4. Subscription Plans and Payment</h2>
          <p style={paragraph}>
            ReferralSynch offers tiered subscription plans (Free, Starter, Growth, and Pro) with varying
            feature access and usage limits. Paid plans are billed monthly or annually. You may upgrade
            or downgrade your plan at any time. Refunds are handled on a case-by-case basis.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>5. Acceptable Use</h2>
          <p style={paragraph}>
            You agree not to: use the platform for fraudulent referral schemes; create fake advocates or
            generate artificial referral activity; attempt to circumvent fraud detection systems; use the
            service to send spam or unsolicited communications; violate any applicable laws or regulations;
            or reverse-engineer, decompile, or attempt to extract the source code of the platform.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>6. Referral Program Rules</h2>
          <p style={paragraph}>
            You are responsible for ensuring your referral programs comply with all applicable laws, including
            FTC guidelines on endorsements and testimonials. Reward promises made to advocates through the
            platform are your responsibility to fulfill. We provide the tools; you define and honor the terms
            of your referral programs.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>7. Fraud Detection and Enforcement</h2>
          <p style={paragraph}>
            Our platform includes automated fraud detection that monitors for self-referrals, velocity abuse,
            duplicate activity, disposable emails, and other suspicious patterns. We reserve the right to flag,
            hold, or reject referrals and rewards that our systems identify as potentially fraudulent. Accounts
            engaged in systematic fraud may be suspended or terminated.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>8. Payouts and Stripe Connect</h2>
          <p style={paragraph}>
            Advocate payouts processed through Stripe Connect are subject to Stripe's terms of service and
            processing times. We facilitate the transfer but are not responsible for delays or issues caused
            by Stripe or the advocate's banking institution. A minimum payout threshold may apply.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>9. Intellectual Property</h2>
          <p style={paragraph}>
            The ReferralSynch platform, including its design, code, features, and documentation, is owned by
            PathSynch Labs LLC. You retain ownership of your business data and content uploaded to the platform.
            By using the service, you grant us a limited license to process your data as needed to provide the service.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>10. Limitation of Liability</h2>
          <p style={paragraph}>
            To the maximum extent permitted by law, PathSynch Labs LLC shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages arising from your use of the service. Our
            total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>11. Termination</h2>
          <p style={paragraph}>
            Either party may terminate this agreement at any time. Upon termination, your access to the platform
            will cease. You may request an export of your data within 30 days of termination. We reserve the
            right to suspend or terminate accounts that violate these terms.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>12. Changes to Terms</h2>
          <p style={paragraph}>
            We may modify these terms at any time. Material changes will be communicated via email or in-app
            notification at least 30 days before taking effect. Continued use of the service after changes
            constitutes acceptance of the updated terms.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>13. Governing Law</h2>
          <p style={paragraph}>
            These terms are governed by the laws of the State of Georgia, without regard to conflict of law
            principles. Any disputes shall be resolved in the courts of Fulton County, Georgia.
          </p>
        </div>

        <div style={section}>
          <h2 style={heading}>14. Contact</h2>
          <p style={paragraph}>
            Questions about these Terms of Service may be directed to:<br />
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

export default TermsPage;
