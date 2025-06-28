import { useEffect, useState, Suspense, lazy } from 'react';
import './App.css';
import Loader from './components/Loader';

const Hero = lazy(() => import('./components/Hero'));
const Logs = lazy(() => import('./components/Logs'));
const Tools = lazy(() => import('./components/Tools'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Projects = lazy(() => import('./components/Projects'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [isClient, setIsClient] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [startFadeOut, setStartFadeOut] = useState(false);

  const [showLogs, setShowLogs] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showFooter, setShowFooter] = useState(false);


  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const timeout = setTimeout(() => {
        setStartFadeOut(true);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isClient]);

  const handleFadeOutComplete = () => {
    setShowLoader(false);
  };

  useEffect(() => {
    if (!showLoader) {
      const timeouts: NodeJS.Timeout[] = [];

      timeouts.push(setTimeout(() => setShowLogs(true), 100));
      timeouts.push(setTimeout(() => setShowTools(true), 300));
      timeouts.push(setTimeout(() => setShowAbout(true), 500));
      timeouts.push(setTimeout(() => setShowProjects(true), 700));
      timeouts.push(setTimeout(() => setShowContact(true), 900));
      timeouts.push(setTimeout(() => setShowFooter(true), 1100));

      return () => timeouts.forEach(clearTimeout);
    }
  }, [showLoader]);

  if (!isClient) {
    return (
      <div className="bg-neutral-900 min-h-screen flex flex-col px-6 py-8">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-neutral-900 min-h-screen flex flex-col px-6 py-8 relative">
      {showLoader && (
        <Loader isFadingOut={startFadeOut} onFadeOutComplete={handleFadeOutComplete} />
      )}

      {isClient && (
        <>
          <Suspense fallback={null}>
            <Hero />
          </Suspense>

          <div className="max-w-2xl mx-auto space-y-10">
            <Suspense fallback={null}>
              <div className={`transition-opacity duration-700 ${showLogs ? 'opacity-100' : 'opacity-0'}`}>
                <Logs />
              </div>

              <div className={`transition-opacity duration-700 ${showTools ? 'opacity-100' : 'opacity-0'}`}>
                <Tools />
              </div>

              <div className={`transition-opacity duration-700 ${showAbout ? 'opacity-100' : 'opacity-0'}`}>
                <About />
              </div>

              <div className={`transition-opacity duration-700 ${showProjects ? 'opacity-100' : 'opacity-0'}`}>
                <Projects />
              </div>
              
              <div className={`transition-opacity duration-700 ${showContact ? 'opacity-100' : 'opacity-0'}`}>
                <Contact />
              </div>
            </Suspense>
          </div>

          <Suspense fallback={null}>
            <div className={`transition-opacity duration-700 ${showFooter ? 'opacity-100' : 'opacity-0'}`}>
              <Footer />
            </div>
          </Suspense>
        </>
      )}
    </div>
  )
}

export default App
