import express from 'express';
import multer from 'multer';
import cors from 'cors';
import pkg from 'pg';  // Ensure this line is correct
const { Pool } = pkg;  // Ensure Pool is destructured correctly
import dotenv from 'dotenv';
import path from 'path';
import crypto from 'crypto';

dotenv.config();

const app = express();
app.use(cors({
  origin: 'https://jovial-croissant-d13a24.netlify.app' // Replace with your actual frontend domain
}));

app.use(express.json());

// Set up multer to handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.env.UPLOADS_DIR || 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = crypto.randomBytes(16).toString('hex');
    cb(null, `${uniqueSuffix}.pdf`);
  }
});

const upload = multer({ storage });

console.log('Uploads directory:', process.env.UPLOADS_DIR || 'uploads/');

// Initialize PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.post('/api/signup', upload.single('resume'), async (req, res) => {
  const { name, email } = req.body;
  const resume = req.file ? req.file.filename : null;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  console.log('Received data:', { name, email, resume });

  try {
    await pool.query(
      'INSERT INTO job_seekers (name, email, resume) VALUES ($1, $2, $3)',
      [name, email, resume]
    );
    res.status(200).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Error inserting into database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
