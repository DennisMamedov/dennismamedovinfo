const express = require('express');
const app = express()
const http = require('http').createServer(app);

app.use(express.static('web'))

app.listen(3030, () => {
    console.log(`Listening on ${3030}`);
})