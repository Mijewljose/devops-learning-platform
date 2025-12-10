import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from './components/Layout';
import YouTube from './pages/YouTube';
import Courses from './pages/Courses';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Home Page Component
const Home = () => (
  <div>
    <Helmet>
      <title>Home | Mj DevOps Playground</title>
      <meta name="description" content="Master DevOps and Cloud Engineering with our curated resources." />
    </Helmet>
    
    {/* Hero Section */}
    <section className="fade-in" style={{
      textAlign: 'center',
      padding: '5rem 0',
      background: 'linear-gradient(135deg, var(--color-bg-muted) 0%, var(--color-bg) 50%, var(--color-bg-muted) 100%)',
      borderRadius: 'var(--border-radius-lg)',
      marginBottom: '4rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, var(--color-primary)10 0%, transparent 50%), radial-gradient(circle at 80% 50%, var(--color-accent)10 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="gradient-text" style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: '900',
          marginBottom: '1.5rem',
          lineHeight: 1.1,
          animation: 'fadeIn 1s ease-out'
        }}>
          Welcome to Mj DevOps Playground
        </h1>
        <p style={{ 
          fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', 
          color: 'var(--color-text-muted)', 
          maxWidth: '700px', 
          margin: '0 auto 2.5rem',
          lineHeight: 1.6,
          animation: 'fadeIn 1s ease-out 0.2s both'
        }}>
          Master DevOps and Cloud Engineering with our curated resources, hands-on courses, and real-world projects. 
          Transform your career with practical, industry-relevant skills.
        </p>
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          animation: 'fadeIn 1s ease-out 0.4s both'
        }}>
          <a href="/courses" className="btn btn-primary hover-lift" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
            🚀 Explore Courses
          </a>
          <a href="/youtube" className="btn btn-secondary hover-lift" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
            🎥 Watch Tutorials
          </a>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="scroll-reveal" style={{ marginBottom: '4rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
        What We Offer
      </h2>
      <div className="grid">
        <div className="feature-card hover-lift">
          <span className="feature-icon">🎥</span>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Latest Videos</h3>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Stay updated with our latest DevOps tutorials, tips, and best practices on YouTube. 
            From beginner to advanced topics with hands-on examples.
          </p>
          <a href="/youtube" className="btn btn-primary">
            Watch Now
          </a>
        </div>
        
        <div className="feature-card hover-lift">
          <span className="feature-icon">📚</span>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Premium Courses</h3>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            In-depth structured learning on Udemy and other platforms. 
            Master Docker, Kubernetes, AWS, and more with expert instructors.
          </p>
          <a href="/courses" className="btn btn-primary">
            Browse Courses
          </a>
        </div>
        
        <div className="feature-card hover-lift">
          <span className="feature-icon">🚀</span>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Real Projects</h3>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Build your portfolio with real-world DevOps scenarios. 
            Gain practical experience that employers value and showcase your skills.
          </p>
          <a href="/projects" className="btn btn-primary">
            View Projects
          </a>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="scroll-reveal" style={{
      background: 'linear-gradient(135deg, var(--color-bg-muted) 0%, var(--color-surface) 100%)',
      padding: '4rem 2rem',
      borderRadius: 'var(--border-radius-lg)',
      textAlign: 'center',
      marginBottom: '4rem',
      border: '1px solid var(--color-border-light)'
    }}>
      <h2 style={{ marginBottom: '3rem', fontSize: '2.5rem' }}>Our Impact</h2>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        <div className="stats-card">
          <div className="stats-number pulse">50+</div>
          <div className="stats-label">Video Tutorials</div>
        </div>
        <div className="stats-card">
          <div className="stats-number pulse">25+</div>
          <div className="stats-label">Premium Courses</div>
        </div>
        <div className="stats-card">
          <div className="stats-number pulse">30+</div>
          <div className="stats-label">Hands-on Projects</div>
        </div>
        <div className="stats-card">
          <div className="stats-number pulse">10K+</div>
          <div className="stats-label">Students</div>
        </div>
      </div>
    </section>
  </div>
);

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/youtube" element={<YouTube />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;