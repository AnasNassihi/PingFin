const express = require('express');
const app = express();
const port = 3001;

const routes = require('./routes');

app.use(express.json());

app.get("/", (req, res) => {
    res.send('Hello');
})

app.use('/api', routes);

app.listen(port, () => console.log(`app listening on port ${port}`));