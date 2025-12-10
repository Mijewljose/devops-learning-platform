import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Failed to send message.');
            }
        } catch (err) {
            setStatus('Error: ' + err.message);
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Helmet>
                <title>Contact Us | Mj DevOps Playground</title>
                <meta name="description" content="Get in touch with us for inquiries." />
            </Helmet>
            
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1>Contact Us</h1>
                <p style={{ 
                    fontSize: '1.125rem', 
                    color: 'var(--color-text-muted)', 
                    maxWidth: '500px', 
                    margin: '0 auto',
                    lineHeight: 1.6
                }}>
                    Have questions about our DevOps courses or need guidance on your learning journey? 
                    We're here to help you succeed in your DevOps career.
                </p>
            </div>

            <div className="card" style={{ padding: '2.5rem' }}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--color-text)' }}>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--color-text)' }}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--color-text)' }}>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            required
                            placeholder="Tell us about your DevOps learning goals or any questions you have..."
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary hover-lift" 
                        style={{ 
                            width: '100%', 
                            fontSize: '1rem',
                            padding: '1rem 2rem',
                            marginTop: '1rem'
                        }}
                    >
                        Send Message
                    </button>
                </form>
                {status && (
                    <p style={{ 
                        marginTop: '1.5rem', 
                        textAlign: 'center', 
                        fontWeight: '600',
                        fontSize: '0.875rem',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--border-radius)',
                        backgroundColor: status.includes('successfully') ? '#10b98120' : status.includes('Error') ? '#ef444420' : '#f59e0b20',
                        color: status.includes('successfully') ? '#10b981' : status.includes('Error') ? '#ef4444' : '#f59e0b'
                    }}>
                        {status}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Contact;