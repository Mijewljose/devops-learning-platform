import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useFetch } from '../hooks/useFetch';
import Card from '../components/Card';

const Courses = () => {
    const { data, loading, error } = useFetch('http://localhost:5000/api/courses');
    const [search, setSearch] = useState('');

    const filteredData = data ? data.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    ) : [];

    if (loading) return (
        <div className="container loading">
            <div className="loading-spinner"></div>
        </div>
    );
    if (error) return <div className="container">Error: {error}</div>;

    return (
        <div>
            <Helmet>
                <title>Premium Courses | Mj DevOps Playground</title>
                <meta name="description" content="Top rated DevOps courses from Udemy and other platforms." />
            </Helmet>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1>Premium Courses</h1>
                <p style={{ 
                    fontSize: '1.125rem', 
                    color: 'var(--color-text-muted)', 
                    maxWidth: '600px', 
                    margin: '0 auto',
                    lineHeight: 1.6
                }}>
                    Master DevOps with our carefully curated premium courses. 
                    Learn from industry experts and advance your career.
                </p>
            </div>
            <div className="search-input">
                <input
                    type="text"
                    placeholder="Search courses..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="grid">
                {filteredData.map(course => (
                    <Card
                        key={course.id}
                        title={course.title}
                        description={`Platform: ${course.platform} | Rating: ${course.rating}/5 ⭐`}
                        image={course.image}
                        tags={course.tags}
                        footer={
                            <a href={course.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                                View Course
                            </a>
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default Courses;