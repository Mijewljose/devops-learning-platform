import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useFetch } from '../hooks/useFetch';
import Card from '../components/Card';

const Projects = () => {
    const { data, loading, error } = useFetch('http://localhost:5000/api/projects');
    const [selectedProject, setSelectedProject] = useState(null);

    if (loading) return (
        <div className="container loading">
            <div className="loading-spinner"></div>
        </div>
    );
    if (error) return <div className="container">Error: {error}</div>;

    const getComplexityColor = (complexity) => {
        switch (complexity) {
            case 'High': return '#ef4444';
            case 'Medium': return '#f59e0b';
            case 'Low': return '#10b981';
            default: return '#6b7280';
        }
    };

    return (
        <div>
            <Helmet>
                <title>Real-World Projects | Mj DevOps Playground</title>
                <meta name="description" content="Hands-on DevOps projects to build your portfolio and gain practical experience." />
            </Helmet>
            
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1>Real-World DevOps Projects</h1>
                <p style={{ 
                    fontSize: '1.125rem', 
                    color: 'var(--color-text-muted)', 
                    maxWidth: '700px', 
                    margin: '0 auto',
                    lineHeight: 1.6
                }}>
                    Build your portfolio with these comprehensive, industry-relevant DevOps projects. 
                    Each project includes detailed implementation guides and best practices.
                </p>
            </div>

            <div className="grid">
                {data.map(project => (
                    <Card
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        tags={project.tech_stack}
                        onClick={() => setSelectedProject(project)}
                        footer={
                            <div style={{ 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center', 
                                marginTop: 'auto' 
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ 
                                        fontSize: '0.75rem', 
                                        fontWeight: '600',
                                        color: getComplexityColor(project.complexity),
                                        backgroundColor: `${getComplexityColor(project.complexity)}20`,
                                        padding: '0.25rem 0.5rem',
                                        borderRadius: '999px'
                                    }}>
                                        {project.complexity}
                                    </span>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                                        {project.duration}
                                    </span>
                                </div>
                                <button 
                                    className="btn btn-primary" 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedProject(project);
                                    }}
                                    style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
                                >
                                    View Details
                                </button>
                            </div>
                        }
                    />
                ))}
            </div>

            {/* Project Details Modal */}
            {selectedProject && (
                <div 
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        padding: '1rem'
                    }}
                    onClick={() => setSelectedProject(null)}
                >
                    <div 
                        style={{
                            backgroundColor: 'var(--color-surface)',
                            borderRadius: 'var(--border-radius-lg)',
                            maxWidth: '800px',
                            width: '100%',
                            maxHeight: '90vh',
                            overflow: 'auto',
                            position: 'relative'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                background: 'none',
                                border: 'none',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                color: 'var(--color-text-muted)',
                                zIndex: 1
                            }}
                        >
                            ✕
                        </button>

                        <div style={{ padding: '2rem' }}>
                            {selectedProject.image && (
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    style={{
                                        width: '100%',
                                        height: '250px',
                                        objectFit: 'cover',
                                        borderRadius: 'var(--border-radius)',
                                        marginBottom: '1.5rem'
                                    }}
                                />
                            )}

                            <h2 style={{ marginBottom: '1rem', fontSize: '1.875rem' }}>
                                {selectedProject.title}
                            </h2>

                            <div style={{ 
                                display: 'flex', 
                                gap: '1rem', 
                                marginBottom: '1.5rem',
                                flexWrap: 'wrap'
                            }}>
                                <span style={{ 
                                    fontSize: '0.875rem', 
                                    fontWeight: '600',
                                    color: getComplexityColor(selectedProject.complexity),
                                    backgroundColor: `${getComplexityColor(selectedProject.complexity)}20`,
                                    padding: '0.5rem 1rem',
                                    borderRadius: '999px'
                                }}>
                                    {selectedProject.complexity} Complexity
                                </span>
                                <span style={{ 
                                    fontSize: '0.875rem', 
                                    color: 'var(--color-text-muted)',
                                    backgroundColor: 'var(--color-bg-muted)',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '999px'
                                }}>
                                    📅 {selectedProject.duration}
                                </span>
                                <span style={{ 
                                    fontSize: '0.875rem', 
                                    color: 'var(--color-text-muted)',
                                    backgroundColor: 'var(--color-bg-muted)',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '999px'
                                }}>
                                    👥 {selectedProject.team_size}
                                </span>
                            </div>

                            <p style={{ 
                                fontSize: '1rem', 
                                lineHeight: 1.6, 
                                color: 'var(--color-text)',
                                marginBottom: '1.5rem'
                            }}>
                                {selectedProject.description}
                            </p>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Key Features</h3>
                                <ul style={{ 
                                    listStyle: 'none', 
                                    padding: 0, 
                                    margin: 0 
                                }}>
                                    {selectedProject.key_features.map((feature, index) => (
                                        <li key={index} style={{ 
                                            marginBottom: '0.5rem',
                                            paddingLeft: '1.5rem',
                                            position: 'relative'
                                        }}>
                                            <span style={{ 
                                                position: 'absolute',
                                                left: 0,
                                                color: 'var(--color-primary)'
                                            }}>
                                                ✓
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Tech Stack</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {selectedProject.tech_stack.map((tech, index) => (
                                        <span key={index} className="tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;