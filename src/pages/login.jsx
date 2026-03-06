import { useEffect } from 'react';

const LoginRedirect = () => {
  useEffect(() => {
    window.location.href = 'https://pathmanager.pathsynch.com/referralsynch';
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      Redirecting to login...
    </div>
  );
};

export default LoginRedirect;
