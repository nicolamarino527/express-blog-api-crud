

// express
// import express from 'express';
const express = require('express');
const app = express();
const port = 3000;

// aggiungiamo cors
const cors = require('cors')

// abilitiamo cors per la rotta
app.use(cors({ origin: 'http://localhost:5173' }));


// importiamo il router
const routerPosts = require('./routers/posts');
const bodyParser = require('body-parser');
// configuriamo il body parser
app.use(express.json());

// definiamo la cartella per i file statici
app.use(express.static('public'));

// definiamo la rotta posts
app.use('/posts', routerPosts)

// aggiungiamo la rotta home
app.get('/', (req, res) => {
    res.send('casa')
});



app.listen(port, () => {
    console.log(`server in ascolto su ${port}`);
})

