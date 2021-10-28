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
    mongo.connect((err, result) => {
        result.db('social').collection('posts').find({}).toArray().then(posts => {
            res.send(posts);
        }).finally(() => mongo.close());
    })
})

app.listen(port, () => console.log(`listening on port ${port}`));