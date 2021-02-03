const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

app.get('/service', (req, res) => res.status(200).send('The system is running [Status: ON]'));

app.listen(port, () => console.log('Example app listening on port 3000'))
