const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Helper to read data
const readData = (filename) => {
    const filePath = path.join(__dirname, 'data', filename);
    if (!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};

// Routes
app.get('/api/youtube', (req, res) => {
    const data = readData('youtube.json');
    res.json(data);
});

app.get('/api/courses', (req, res) => {
    const data = readData('courses.json');
    res.json(data);
});

app.get('/api/projects', (req, res) => {
    const data = readData('projects.json');
    res.json(data);
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact Form Submitted:', { name, email, message });
    res.json({ success: true, message: 'Message received!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
