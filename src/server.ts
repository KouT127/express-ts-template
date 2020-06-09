import express from 'express';
import morgan from 'morgan';

const app = express();

const PORT = process.env.PORT || 8080;

app.use(morgan('dev'));

app.get('/health', (req, res) => {
    res.status(200).json({ message: 'ok' });
});

app.get('/', (_req, res) => {
    res.send(`<h1>TypeScript Express!</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
