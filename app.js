const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
    res.send('<form method="POST" action="/product"><input type="text" name="title"><input type="text" name="size"><button type="submit">Send</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log('Submitted Data:', req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>hello from Express</h1>');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
