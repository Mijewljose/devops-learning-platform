const Card = ({ title, description, image, footer, onClick, tags }) => {
    return (
        <div className="card" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100%',
            cursor: onClick ? 'pointer' : 'default',
            position: 'relative',
            overflow: 'hidden'
        }} onClick={onClick}>
            {image && (
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--border-radius) var(--border-radius) 0 0' }}>
                    <img
                        src={image}
                        alt={title}
                        style={{ 
                            width: '100%', 
                            height: '200px', 
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                    }} />
                </div>
            )}
            
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ 
                    marginBottom: '0.75rem', 
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    lineHeight: 1.3,
                    color: 'var(--color-text)'
                }}>{title}</h3>

                {tags && tags.length > 0 && (
                    <div style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: '0.5rem', 
                        marginBottom: '1rem' 
                    }}>
                        {tags.map((tag, index) => (
                            <span key={index} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {description && (
                    <p style={{ 
                        color: 'var(--color-text-muted)', 
                        flex: 1, 
                        marginBottom: '1.25rem',
                        lineHeight: 1.6,
                        fontSize: '0.875rem'
                    }}>{description}</p>
                )}

                {footer && (
                    <div style={{ marginTop: 'auto' }}>
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;