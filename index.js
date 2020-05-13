const express = require('express');
const app = express()
const http = require('http').createServer(app);

app.use(express.static('web'))

app.listen(4545, () => {
    console.log(`Listening on 4545`);
})