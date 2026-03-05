import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Home from './pages/index';

const Pricing = lazy(() => import('./pages/pricing'));

function App() {
  return (
    <>
      <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />

          {/* Compare routes (coming soon) */}
          {/* <Route path="/compare" element={<CompareIndex />} /> */}
          {/* <Route path="/compare/referralcandy" element={<VsReferralCandy />} /> */}
          {/* <Route path="/compare/smile-io" element={<VsSmileIO />} /> */}
          {/* <Route path="/compare/friendbuy" element={<VsFriendbuy />} /> */}
          {/* <Route path="/compare/uppromote" element={<VsUpPromote />} /> */}

          {/* Industry routes (coming soon) */}
          {/* <Route path="/industries" element={<IndustriesIndex />} /> */}
          {/* <Route path="/industries/retail" element={<Retail />} /> */}
          {/* <Route path="/industries/beauty-wellness" element={<Beauty />} /> */}
          {/* <Route path="/industries/food-beverage" element={<FoodBeverage />} /> */}
          {/* <Route path="/industries/home-services" element={<HomeServices />} /> */}
          {/* <Route path="/industries/ecommerce" element={<Ecommerce />} /> */}
        </Routes>
      </Suspense>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Source+Sans+3:wght@400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background-color: #FAF9F6; -webkit-font-smoothing: antialiased; }

        *:focus { outline: none; }
        *:focus-visible { outline: 3px solid #1B4D3E; outline-offset: 3px; border-radius: 4px; }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
          html { scroll-behavior: auto; }
        }

        @media (max-width: 1024px) {
          .story-grid { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .show-mobile { display: block !important; }
          .hide-mobile { display: none !important; }
          .hero-text, .hero-cards { grid-column: 1 / -1 !important; padding-right: 0 !important; }
        }

        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }

        input[type="range"] {
          -webkit-appearance: none;
          height: 8px;
          border-radius: 4px;
          background: #A8D5BA;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #1B4D3E;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default App;
