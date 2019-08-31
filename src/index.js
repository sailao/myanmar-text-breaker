import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import syllable from './../syllable-breaker';
import word from './../word-breaker';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/bot/messages', (req, res) => {
    const message = {
        syllable: syllable(req.body.text),
        word: word(req.body.text)
    };
    return res.json(message);
});

app.listen(process.env.PORT, () =>
    console.log(`My app listening on port ${process.env.PORT}!`),
);