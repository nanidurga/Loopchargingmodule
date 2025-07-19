import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/layout/Layout';
import HeroSection from './components/home/HeroSection';
import TechnologySection from './components/home/TechnologySection';
import BenefitsSection from './components/home/BenefitsSection';
import ComparisonSection from './components/home/ComparisonSection';
import IntegrationSection from './components/home/IntegrationSection';
import TimelineSection from './components/home/TimelineSection';
import TeamSection from './components/home/TeamSection';
import ContactSection from './components/home/ContactSection';
import FAQSection from './components/home/FAQSection';

// Lazy load page components
const TeamPage = lazy(() => import('./pages/Team'));
const CareersPage = lazy(() => import('./pages/Careers'));
const FAQPage = lazy(() => import('./pages/FAQ'));
const TimelinePage = lazy(() => import('./pages/TimelinePage'));

interface UsrState {
  scrollTo?: string;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const usrState = window.history.state?.usr as UsrState | undefined;
    const scrollToId = usrState?.scrollTo;

    if (scrollToId && typeof scrollToId === 'string') {
      let attempts = 0;
      const maxAttempts = 50;
      const headerOffset = 80;

      const tryScroll = () => {
        const element = document.getElementById(scrollToId);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });

          const newUsrState = { ...usrState, scrollTo: undefined };
          const newState = { ...window.history.state, usr: newUsrState };
          navigate(pathname, { replace: true, state: newState });

        } else {
          attempts++;
          if (attempts < maxAttempts) {
            requestAnimationFrame(tryScroll);
          } else {
            console.warn(`ScrollToTop: Element with id '${scrollToId}' not found after ${maxAttempts} attempts. Scrolling to top.`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const newUsrStateOnFallback = { ...usrState, scrollTo: undefined };
            const newStateOnFallback = { ...window.history.state, usr: newUsrStateOnFallback };
            navigate(pathname, { replace: true, state: newStateOnFallback });
          }
        }
      };

      requestAnimationFrame(tryScroll);

    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [pathname, navigate]);

  return null;
}

const AppLayout = () => (
    <Layout>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <Outlet />
        </motion.div>
    </Layout>
);

const HomeContent = () => (
    <>
        <HeroSection />
        <TechnologySection />
        <BenefitsSection />
        <ComparisonSection />
        <IntegrationSection />
        <TimelineSection />
        <TeamSection />
        <FAQSection />
        <ContactSection />
    </>
);

function AppRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<div className="fixed inset-0 bg-dark-900 flex items-center justify-center text-white">Loading page...</div>}>
      <Routes location={location} key={location.pathname}>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomeContent />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

function App() {
  const location = useLocation();
  
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <AppRoutes key={location.pathname} />
      </AnimatePresence>
    </>
  );
}

export default function WrappedApp() {
  return (
    <Router basename="/">
      <App />
    </Router>
  );
}
