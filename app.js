require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bookRoutes = require('./routes/bookRoutes');

app.use(bookRoutes);

app.get('/foo', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'booklist.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
