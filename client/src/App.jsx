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
      <title>Home | DevOpsTrain</title>
      <meta name="description" content="Master DevOps and Cloud Engineering with our curated resources." />
    </Helmet>
    <h1>Welcome to DevOps Training</h1>
    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '600px' }}>
      Master DevOps and Cloud Engineering with our curated resources, courses, and real-world projects.
    </p>
    <div className="grid" style={{ marginTop: '2rem' }}>
      <div className="card">
        <h3>Latest Videos</h3>
        <p>Check out our latest tutorials on YouTube.</p>
      </div>
      <div className="card">
        <h3>Premium Courses</h3>
        <p>In-depth structured learning on Udemy.</p>
      </div>
      <div className="card">
        <h3>Freelance Projects</h3>
        <p>Build your portfolio with real scenarios.</p>
      </div>
    </div>
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
