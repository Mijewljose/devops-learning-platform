import { Link, NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <header style={{ backgroundColor: 'var(--color-surface)', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 10 }}>
                <div className="container" style={{ height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link to="/" style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--color-primary)' }}>
                        DevOps<span style={{ color: 'var(--color-text)' }}>Train</span>
                    </Link>
                    <nav style={{ display: 'flex', gap: '1.5rem' }}>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                        <NavLink to="/youtube" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>YouTube</NavLink>
                        <NavLink to="/courses" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Courses</NavLink>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
                    </nav>
                </div>
            </header>

            <main style={{ flex: 1, padding: '2rem 0' }}>
                <div className="container">
                    {children}
                </div>
            </main>

            <footer style={{ backgroundColor: 'var(--color-secondary)', color: 'white', padding: '2rem 0', marginTop: 'auto' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p>&copy; {new Date().getFullYear()} DevOpsTrain. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#" style={{ opacity: 0.8 }}>Twitter</a>
                        <a href="#" style={{ opacity: 0.8 }}>GitHub</a>
                        <a href="#" style={{ opacity: 0.8 }}>LinkedIn</a>
                    </div>
                </div>
            </footer>

            <style>{`
        .nav-link {
          color: var(--color-text-muted);
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--color-primary);
        }
      `}</style>
        </div>
    );
};

export default Layout;
