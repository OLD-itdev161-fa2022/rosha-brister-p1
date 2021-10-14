import express from 'express';
import connectDatabase from './config/db';
import {check, validationResult } from 'express-validator';

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

app.post('/api/users', 
[
    check('name', 'Please enter your name').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('dateOfBirth', 'Please enter your date of birth').not().isEmpty(),
    check('password', 'Please enter a password with 7 or more characters').isLength({min: 7})
],
(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()});
    } else
    {
        return res.send(req.body);
    }
    
});

app.listen(3000, () => console.log(`Express server running on port 3000`));