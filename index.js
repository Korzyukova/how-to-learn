require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile('./public/index.html');
});

app.all('*', (res, req) => {
    res.status(404).send('Not found.')
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);