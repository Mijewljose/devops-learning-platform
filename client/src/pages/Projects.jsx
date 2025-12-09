import { Helmet } from 'react-helmet-async';
import { useFetch } from '../hooks/useFetch';
import Card from '../components/Card';

const Projects = () => {
    const { data, loading, error } = useFetch('http://localhost:5000/api/projects');

    if (loading) return <div className="container">Loading...</div>;
    if (error) return <div className="container">Error: {error}</div>;

    return (
        <div>
            <Helmet>
                <title>Freelance Projects | DevOpsTrain</title>
                <meta name="description" content="Real-world DevOps projects to build your portfolio." />
            </Helmet>
            <h1>Freelance Projects</h1>
            <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
                Real-world scenarios to build your portfolio.
            </p>

            <div className="grid">
                {data.map(project => (
                    <Card
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        tags={project.tech_stack}
                        footer={
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>Complexity: {project.complexity}</span>
                                <button className="btn btn-primary">Details</button>
                            </div>
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
