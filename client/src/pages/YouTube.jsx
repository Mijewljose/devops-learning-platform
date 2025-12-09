import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useFetch } from '../hooks/useFetch';
import Card from '../components/Card';

const YouTube = () => {
    const { data, loading, error } = useFetch('http://localhost:5000/api/youtube');
    const [search, setSearch] = useState('');

    const filteredData = data ? data.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    ) : [];

    if (loading) return <div className="container">Loading...</div>;
    if (error) return <div className="container">Error: {error}</div>;

    return (
        <div>
            <Helmet>
                <title>YouTube Tutorials | DevOpsTrain</title>
                <meta name="description" content="Watch the latest DevOps and Cloud tutorials." />
            </Helmet>
            <h1>YouTube Tutorials</h1>
            <input
                type="text"
                placeholder="Search videos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ maxWidth: '400px', marginBottom: '2rem' }}
            />

            <div className="grid">
                {filteredData.map(video => (
                    <Card
                        key={video.id}
                        title={video.title}
                        description={video.description}
                        image={video.thumbnail}
                        tags={video.tags}
                        footer={
                            <a href={video.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                                Watch Video
                            </a>
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default YouTube;
