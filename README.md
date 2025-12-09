<<<<<<< HEAD
# DevOps & Cloud Training Website

A modern, mobile-first training website for DevOps and Cloud Engineering, built with Node.js and React (Vite).

## Features
- **Modern UI**: Clean, responsive design using CSS variables and Flexbox/Grid.
- **Dynamic Content**: Fetches YouTube videos, Udemy courses, and Project ideas from a backend API.
- **Search & Filter**: Filter content by title, tags, or platform.
- **Contact Form**: Functional contact form (logs to server console).
- **SEO Optimized**: Unique titles and meta descriptions for pages.

## Tech Stack
- **Frontend**: Vite, React, React Router, Vanilla CSS (Modern), React Helmet Async.
- **Backend**: Node.js, Express, CORS.
- **Data**: JSON based data storage (in `server/data`).

## Project Structure
```
root/
├── client/     # Frontend (Vite + React)
├── server/     # Backend (Express API)
└── package.json # Root scripts
```

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm

### Installation
1. Clone the repository.
2. Install dependencies for both client and server:
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   cd ..
   ```

### Running the App
Run both frontend and backend concurrently with a single command:
```bash
npm start
```
- Client runs on: `http://localhost:5173`
- Server runs on: `http://localhost:5000`

## Deployment
1. **Frontend**: Build the client (`npm run build` in `client/`). Serve the `dist` folder via Nginx, Vercel, or Netlify.
2. **Backend**: Deploy the `server/` folder to a Node.js host (Heroku, Railway, AWS EC2).
3. **Environment**: Ensure the frontend API URL points to your production backend URL.

## Customization
- Update data files in `server/data/` to change content.
- Modify `client/src/index.css` variables to change the color scheme.
=======
# devops-learning-platform
>>>>>>> 80a14183ed3b3fa5da0d0504dee02e418443ddd0
