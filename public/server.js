 // index.js
import express from 'express';

import pkg from 'pg';
const { Client } = pkg;

import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Fix för __dirname i ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servera statiska filer (som index.html)
app.use(express.static(__dirname));

// Databasanslutning (byt till dina riktiga uppgifter)
const client = new Client({
  host: 'db.wzlehsdybsgkdhiidqrf.supabase.co',
  port: 5432,
  user: 'postgres',
  password: '1Bollen2Grisen777Nyser',
  database: 'postgres'
});

await client.connect();

// API-endpoint
app.get('/users', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM kunder'); // anpassa tabell/kolumn
    res.json(result.rows);
  } catch (err) {
    console.error('Fel vid databasfråga:', err);
    res.status(500).send('Databasfel');
  }
});

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
