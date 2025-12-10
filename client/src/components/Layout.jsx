import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Layout = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.setAttribute('data-theme', 'dark');
        }

        // Add scroll reveal animation
        const handleScroll = () => {
            const reveals = document.querySelectorAll('.scroll-reveal');
            reveals.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDarkMode = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <header style={{ 
                backgroundColor: isDarkMode ? 'rgba(26, 26, 26, 0.95)' : 'rgba(255, 255, 255, 0.95)', 
                borderBottom: `1px solid var(--color-border)`, 
                position: 'sticky', 
                top: 0, 
                zIndex: 1000,
                backdropFilter: 'blur(10px)'
            }}>
                <div className="container" style={{ 
                    height: 'var(--header-height)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between' 
                }}>
                    <Link to="/" style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: '900', 
                        color: 'var(--color-primary)',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <span style={{ 
                            background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Mj DevOps
                        </span>
                        <span style={{ color: 'var(--color-text)' }}>Playground</span>
                    </Link>

                    <nav style={{ 
                        display: 'flex', 
                        gap: '2rem',
                        alignItems: 'center'
                    }}>
                        <div className="nav-links" style={{
                            display: 'flex',
                            gap: '2rem',
                            alignItems: 'center'
                        }}>
                            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                            <NavLink to="/youtube" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>YouTube</NavLink>
                            <NavLink to="/courses" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Courses</NavLink>
                            <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
                        </div>
                        
                        <button 
                            onClick={toggleDarkMode}
                            style={{
                                background: 'none',
                                border: 'none',
                                fontSize: '1.25rem',
                                cursor: 'pointer',
                                padding: '0.5rem',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease',
                                backgroundColor: 'var(--color-bg-muted)'
                            }}
                            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {isDarkMode ? '☀️' : '🌙'}
                        </button>

                        <button 
                            className="mobile-menu-toggle"
                            onClick={toggleMobileMenu}
                            style={{
                                display: 'none'
                            }}
                        >
                            {isMobileMenuOpen ? '✕' : '☰'}
                        </button>
                    </nav>
                </div>

                {/* Mobile Menu */}
                <div className="mobile-menu" style={{
                    display: isMobileMenuOpen ? 'block' : 'none',
                    borderTop: `1px solid var(--color-border)`,
                    backgroundColor: 'var(--color-surface)'
                }}>
                    <div className="container" style={{
                        padding: '1rem 0'
                    }}>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link mobile-nav-link active' : 'nav-link mobile-nav-link'} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
                        <NavLink to="/youtube" className={({ isActive }) => isActive ? 'nav-link mobile-nav-link active' : 'nav-link mobile-nav-link'} onClick={() => setIsMobileMenuOpen(false)}>YouTube</NavLink>
                        <NavLink to="/courses" className={({ isActive }) => isActive ? 'nav-link mobile-nav-link active' : 'nav-link mobile-nav-link'} onClick={() => setIsMobileMenuOpen(false)}>Courses</NavLink>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link mobile-nav-link active' : 'nav-link mobile-nav-link'} onClick={() => setIsMobileMenuOpen(false)}>Projects</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link mobile-nav-link active' : 'nav-link mobile-nav-link'} onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
                    </div>
                </div>
            </header>

            <main style={{ flex: 1, padding: '2rem 0' }}>
                <div className="container">
                    {children}
                </div>
            </main>

            <footer style={{ 
                backgroundColor: 'var(--color-secondary)', 
                color: 'var(--color-text-light)', 
                padding: '3rem 0', 
                marginTop: 'auto',
                borderTop: '1px solid var(--color-border)'
            }}>
                <div className="container" style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    alignItems: 'start'
                }}>
                    <div>
                        <h3 style={{ color: 'var(--color-text-light)', marginBottom: '1rem' }}>Mj DevOps Playground</h3>
                        <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
                            Master DevOps and Cloud Engineering with our curated resources, courses, and real-world projects.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--color-text-light)', marginBottom: '1rem' }}>Quick Links</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <a href="/youtube" style={{ opacity: 0.8, transition: 'opacity 0.2s' }}>YouTube Tutorials</a>
                            <a href="/courses" style={{ opacity: 0.8, transition: 'opacity 0.2s' }}>Premium Courses</a>
                            <a href="/projects" style={{ opacity: 0.8, transition: 'opacity 0.2s' }}>Projects</a>
                            <a href="/contact" style={{ opacity: 0.8, transition: 'opacity 0.2s' }}>Contact</a>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--color-text-light)', marginBottom: '1rem' }}>Connect</h4>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ 
                                opacity: 0.8, 
                                fontSize: '1.25rem',
                                transition: 'opacity 0.2s, transform 0.2s'
                            }}>𝕏</a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ 
                                opacity: 0.8, 
                                fontSize: '1.25rem',
                                transition: 'opacity 0.2s, transform 0.2s'
                            }}>⚡</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ 
                                opacity: 0.8, 
                                fontSize: '1.25rem',
                                transition: 'opacity 0.2s, transform 0.2s'
                            }}>💼</a>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ 
                    marginTop: '2rem', 
                    paddingTop: '2rem', 
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    textAlign: 'center'
                }}>
                    <p style={{ opacity: 0.8 }}>&copy; {new Date().getFullYear()} Mj DevOps Playground. All rights reserved.</p>
                </div>
            </footer>

            <style>{`
        .nav-link {
          color: var(--color-text-muted);
          font-weight: 600;
          text-decoration: none;
          padding: 0.5rem 0;
          position: relative;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover, .nav-link.active {
          color: var(--color-primary);
        }
        
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--color-primary);
        }
        
        .mobile-nav-link {
          display: block;
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--color-border-light);
        }
        
        .mobile-nav-link:last-child {
          border-bottom: none;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          
          .mobile-menu-toggle {
            display: block !important;
          }
          
          footer {
            padding: 2rem 0;
          }
        }
        
        a:hover {
          opacity: 1 !important;
          transform: translateY(-1px);
        }
      `}</style>
        </div>
    );
};

export default Layout;