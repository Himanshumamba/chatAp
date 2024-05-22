const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'chatdb',
  password: 'admin',
  port: 5432,
});

app.get('/api/messages', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM messagess ORDER BY created_at ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/messages', async (req, res) => {
  const { text, isUser } = req.body;
  const createdAt = new Date().toISOString();
  try {
    await pool.query('INSERT INTO messagess (text, is_user, created_at) VALUES ($1, $2, $3)', [text, isUser, createdAt]);
    const botResponse = { text: 'Bot response', isUser: false, createdAt: new Date().toISOString() };
    res.json(botResponse);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
