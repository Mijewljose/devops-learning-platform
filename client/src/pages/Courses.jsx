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

    if (loading) return <div className="container">Loading...</div>;
    if (error) return <div className="container">Error: {error}</div>;

    return (
        <div>
            <Helmet>
                <title>Premium Courses | DevOpsTrain</title>
                <meta name="description" content="Top rated DevOps courses from Udemy and other platforms." />
            </Helmet>
            <h1>Premium Courses</h1>
            <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ maxWidth: '400px', marginBottom: '2rem' }}
            />

            <div className="grid">
                {filteredData.map(course => (
                    <Card
                        key={course.id}
                        title={course.title}
                        description={`Platform: ${course.platform} | Rating: ${course.rating}`}
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
