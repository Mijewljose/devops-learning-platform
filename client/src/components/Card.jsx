const Card = ({ title, description, image, footer, onClick, tags }) => {
    return (
        <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {image && (
                <img
                    src={image}
                    alt={title}
                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem' }}
                />
            )}
            <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>

            {tags && tags.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    {tags.map((tag, index) => (
                        <span key={index} style={{
                            backgroundColor: '#e0f2fe',
                            color: '#0369a1',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '999px',
                            fontSize: '0.75rem',
                            fontWeight: '600'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            {description && <p style={{ color: 'var(--color-text-muted)', flex: 1, marginBottom: '1rem' }}>{description}</p>}

            {footer}
        </div>
    );
};

export default Card;
