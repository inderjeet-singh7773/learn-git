const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// Frontend dist folder ka path
const distPath = path.join(__dirname, '..', 'dist');

// CORS (simple dev mode allowed)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

app.use(express.json());

/* ---------------------- API ROUTES ---------------------- */

// Default API route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Bolt API' });
});

// Example API
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js API' });
});

// Another example API
app.get('/api/hello/bye', (req, res) => {
  res.json({ message: 'Bye !' });
});

// Contact form → Save JSON
app.post('/api/contact', (req, res) => {
  const data = req.body;

  const filePath = path.join(__dirname, 'data.json');

  // Step 1 → Read old data
  let oldData = [];
  if (fs.existsSync(filePath)) {
    oldData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }

  // Step 2 → Add new entry
  oldData.push({
    ...data,
    receivedAt: new Date().toISOString()
  });

  // Step 3 → Save file
  fs.writeFileSync(filePath, JSON.stringify(oldData, null, 2));

  // Step 4 → Send response
  res.json({
    status: 'saved',
    message: 'Form data saved successfully!',
    saved: data
  });
});


/* ---------------------- FRONTEND SERVE ---------------------- */

if (fs.existsSync(distPath)) {
  console.log("Serving frontend from:", distPath);

  // Serve static files
  app.use(express.static(distPath));

  // SPA fallback → always send index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });

} else {
  console.log("⚠ dist folder not found — Frontend not served.");
}

/* ---------------------- START SERVER ---------------------- */

app.listen(port, () => {
  console.log(`Bolt server running at http://localhost:${port}`);
});
