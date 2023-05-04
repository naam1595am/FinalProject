const express = require('express');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
    connectionString: "jdbc:postgresql://csce-315-db.engr.tamu.edu/csce315331_team_62",
    user: "csce315331_team_62_master",
    password: "panda"
  });

app.get('/api/data', async (req, res) => {
  try {
    const data = await pool.query('SELECT * FROM Inventory');
    res.json(data.rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});