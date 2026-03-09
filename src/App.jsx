import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AuthProvider } from './context/AuthContext';

import Home from './pages/index';

const Pricing = lazy(() => import('./pages/pricing'));
const Signup = lazy(() => import('./pages/signup'));
const Demo = lazy(() => import('./pages/demo'));
const Login = lazy(() => import('./pages/login'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const Privacy = lazy(() => import('./pages/privacy'));
const Terms = lazy(() => import('./pages/terms'));
const Security = lazy(() => import('./pages/security'));
const Dashboard = lazy(() => import('./pages/dashboard'));

// Compare pages
const CompareIndex = lazy(() => import('./pages/compare/index'));
const VsReferralCandy = lazy(() => import('./pages/compare/referralcandy'));
const VsReferralFactory = lazy(() => import('./pages/compare/referral-factory'));
const VsGrowSurf = lazy(() => import('./pages/compare/growsurf'));
const VsSmileIO = lazy(() => import('./pages/compare/smile-io'));
const VsFriendbuy = lazy(() => import('./pages/compare/friendbuy'));
const VsUpPromote = lazy(() => import('./pages/compare/uppromote'));

// Industry pages
const IndustriesIndex = lazy(() => import('./pages/industries/index'));
const RetailIndustry = lazy(() => import('./pages/industries/retail'));
const BeautyIndustry = lazy(() => import('./pages/industries/beauty-wellness'));
const FoodBeverageIndustry = lazy(() => import('./pages/industries/food-beverage'));
const HomeServicesIndustry = lazy(() => import('./pages/industries/home-services'));
const AutoServicesIndustry = lazy(() => import('./pages/industries/auto-services'));
const FitnessIndustry = lazy(() => import('./pages/industries/fitness'));
const ProfessionalServicesIndustry = lazy(() => import('./pages/industries/professional-services'));
const EcommerceIndustry = lazy(() => import('./pages/industries/ecommerce'));

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/security" element={<Security />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Compare routes */}
          <Route path="/compare" element={<CompareIndex />} />
          <Route path="/compare/referralcandy" element={<VsReferralCandy />} />
          <Route path="/compare/referral-factory" element={<VsReferralFactory />} />
          <Route path="/compare/growsurf" element={<VsGrowSurf />} />
          <Route path="/compare/smile-io" element={<VsSmileIO />} />
          <Route path="/compare/friendbuy" element={<VsFriendbuy />} />
          <Route path="/compare/uppromote" element={<VsUpPromote />} />

          {/* Industry routes */}
          <Route path="/industries" element={<IndustriesIndex />} />
          <Route path="/industries/retail" element={<RetailIndustry />} />
          <Route path="/industries/beauty-wellness" element={<BeautyIndustry />} />
          <Route path="/industries/food-beverage" element={<FoodBeverageIndustry />} />
          <Route path="/industries/home-services" element={<HomeServicesIndustry />} />
          <Route path="/industries/auto-services" element={<AutoServicesIndustry />} />
          <Route path="/industries/fitness" element={<FitnessIndustry />} />
          <Route path="/industries/professional-services" element={<ProfessionalServicesIndustry />} />
          <Route path="/industries/ecommerce" element={<EcommerceIndustry />} />
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

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
          html { scroll-behavior: auto; }
        }

        @media (max-width: 1024px) {
          .story-grid { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 900px) {
          .signup-grid { grid-template-columns: 1fr !important; }
          .signup-grid > div:last-child { display: none; }
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
    </AuthProvider>
  );
}

export default App;
