const express = require('express');

const app = express();
app.get('/', (req, res) => res.json({
    msg: 'Hi there',
}));


app.get('/:path', (req, res) => res.json({
    msg: 'Hi there',
    msg2: `from ${req.params.path}`,
}));

app.listen(8080, () => console.log('🚀 Server ready at http://localhost:8080'));
