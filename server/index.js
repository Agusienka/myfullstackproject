import express from 'express';

const PORT = process.env.PORT || 3001;

const app = express();

//the '/api' is an endpoint that will be used to connect to the server to fetch data from the server

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});