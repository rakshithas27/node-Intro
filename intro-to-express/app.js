const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    res.send(`<form action="/product" method="POST">
    <input type="text" name="title" placeholder="Product title">
    <input type="number" name="quantity" placeholder="Product quantity">
    <button type="submit">Add Product</button>
    </form>`);
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req, res, next) => {
    res.send('<h2>Hello From express!!</h2>');
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
})