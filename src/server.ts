import express from 'express';

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (_req, res) => {
    console.log('test2');
    res.send(`<h1>TypeScript Express!</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
