const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.listen(PORT, () => {
console.log('Server is running on PORT:', PORT);
});