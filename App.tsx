import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load heavy components
const Projects = lazy(() => import('./components/Projects'));
const Journalism = lazy(() => import('./components/Journalism'));
const Blog = lazy(() => import('./components/Blog'));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center py-24">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
  </div>
);

const App: React.FC = () => {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <ErrorBoundary>
          <Hero />
          <About />
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Journalism />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Blog />
          </Suspense>
          <Contact />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};

export default App;
