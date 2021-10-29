const express = require('express');
const port = 8080;
const cors = require('cors');
const app = express();
const { checkIfAuthenticated } = require('./services/token');

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.send({data: 'new'});
});

app.get('/api/protected', checkIfAuthenticated, (req, res) => {
    res.send({data: 'that was good'});
})

app.listen(port, () => console.log(`listening on port ${port}`));