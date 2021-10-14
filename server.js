import express from 'express';
import connectDatabase from './config/db';

const app = express();

connectDatabase();

app.use(express.json({ extended: false}));

//API endpoints
/**
 * @route GET/
 * @desc Test endpoint
 */

app.get ('/', (req, res) =>
        res.send('This is Rosha Project 1'));

app.post('/api/users', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(3000, () => console.log(`Express server running on port 3000`));