import express from 'express';
const axios = require('axios').default;
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // Optionally the request above could also be done as
    axios.get('https://www.google.co.in', {
        params: {
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    res.send('Google World!');
});



app.post('/createissue', (req, res) => {
    res.send('Hello World!');
});

app.put('/updateissue/:id', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});