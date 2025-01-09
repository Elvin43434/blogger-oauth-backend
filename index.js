const express = require('express');
const {google} = require('googleapis');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Merhaba Dünya!');
});

app.listen(port, () => {
    console.log(`Uygulama ${port} portunda dinleniyor`);
});
