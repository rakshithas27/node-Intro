const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('In the middleware');
    next();    //Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
    console.log('In another middleware');
    res.send('<h2>Hello From express!!</h2>');
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
})