import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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
import PageTransition from './components/layout/PageTransition';

// Lazy load page components
const TeamPage = lazy(() => import('./pages/Team'));
const CareersPage = lazy(() => import('./pages/Careers'));
const FAQPage = lazy(() => import('./pages/FAQ'));
const TimelinePage = lazy(() => import('./pages/TimelinePage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Access the custom state property 'usr'
    const usrState = window.history.state?.usr as { scrollTo?: string; [key: string]: any } | undefined;
    const scrollToId = usrState?.scrollTo;

    if (scrollToId && typeof scrollToId === 'string') {
      let attempts = 0;
      const maxAttempts = 50; // Approx 800ms (50 * 16ms)
      const headerOffset = 80; // As per original code

      const tryScroll = () => {
        const element = document.getElementById(scrollToId);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });

          // Clear the scrollTo from state, preserving other usr properties
          const newUsrState = { ...usrState, scrollTo: undefined };
          // Preserve other potential top-level state properties alongside 'usr'
          const newState = { ...window.history.state, usr: newUsrState };
          navigate(pathname, { replace: true, state: newState });

        } else {
          attempts++;
          if (attempts < maxAttempts) {
            requestAnimationFrame(tryScroll);
          } else {
            // Optional: Log if element not found
            console.warn(`ScrollToTop: Element with id '${scrollToId}' not found after ${maxAttempts} attempts. Scrolling to top.`);
            // Fallback to scrolling to the top of the page
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // Clear the scrollTo from state, preserving other usr properties
            const newUsrStateOnFallback = { ...usrState, scrollTo: undefined };
            const newStateOnFallback = { ...window.history.state, usr: newUsrStateOnFallback };
            navigate(pathname, { replace: true, state: newStateOnFallback });
          }
        }
      };

      // Start the attempt to scroll
      requestAnimationFrame(tryScroll);

    } else {
      // If no scrollToId, just scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [pathname, navigate]); // Dependencies remain the same

  return null;
}

function HomePage() {
  return (
    <Layout>
      <PageTransition>
        <HeroSection />
        <TechnologySection />
        <BenefitsSection />
        <ComparisonSection />
        <IntegrationSection />
        <TimelineSection />
        <TeamSection />
        <FAQSection />
        <ContactSection />
      </PageTransition>
    </Layout>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<div className="fixed inset-0 bg-dark-900 flex items-center justify-center text-white">Loading page...</div>}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/team" 
          element={
            <Layout>
              <PageTransition>
                <TeamPage />
              </PageTransition>
            </Layout>
          } 
        />
        <Route 
          path="/careers" 
          element={
            <Layout>
              <PageTransition>
                <CareersPage />
              </PageTransition>
            </Layout>
          } 
        />
        <Route 
          path="/faq" 
          element={
            <Layout>
              <PageTransition>
                <FAQPage />
              </PageTransition>
            </Layout>
          } 
        />
        <Route 
          path="/timeline" 
          element={
            <Layout>
              <PageTransition>
                <TimelinePage />
              </PageTransition>
            </Layout>
          } 
        />
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
    <Router>
      <App />
    </Router>
  );
}