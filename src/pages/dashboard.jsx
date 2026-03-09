import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { theme } from '../theme';
import Logo from '../components/Logo';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, isAuthenticated, loading, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/login');
    }
  }, [loading, isAuthenticated, navigate]);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: theme.fonts.body }}>
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) return null;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: theme.colors.cream }}>
      {/* Header */}
      <header style={{
        backgroundColor: theme.colors.warmWhite,
        borderBottom: `1px solid ${theme.colors.mint}`,
        padding: '14px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Logo color={theme.colors.forest} size={28} />
          <span style={{ fontFamily: theme.fonts.display, fontSize: 20, fontWeight: 600, color: theme.colors.ink }}>
            ReferralSynch
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {user?.email && (
            <span style={{ fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.slate }}>
              {user.email}
            </span>
          )}
          <button
            onClick={handleLogout}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              fontFamily: theme.fonts.body, fontSize: 14, fontWeight: 500,
              color: theme.colors.charcoal, background: 'none', border: `1px solid ${theme.colors.mint}`,
              borderRadius: 8, padding: '8px 16px', cursor: 'pointer',
              transition: 'border-color 0.2s',
            }}
          >
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </header>

      {/* Content */}
      <main style={{ maxWidth: 960, margin: '0 auto', padding: '64px 32px', textAlign: 'center' }}>
        <h1 style={{
          fontFamily: theme.fonts.display,
          fontSize: 32,
          fontWeight: 500,
          color: theme.colors.ink,
          marginBottom: 16,
        }}>
          Welcome to your ReferralSynch Dashboard
        </h1>
        <p style={{
          fontFamily: theme.fonts.body,
          fontSize: 17,
          color: theme.colors.slate,
          lineHeight: 1.6,
        }}>
          Your referral programs, analytics, and settings will appear here.
        </p>
        {/* TODO: Import full ReferralSynchApp when ready */}
      </main>
    </div>
  );
};

export default Dashboard;
