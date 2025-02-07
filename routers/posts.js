// Esercizio
// Creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l’entità post.
// All’interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)
// Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, 
// secondo le convenzioni REST.
// Ad esempio:
// Se viene chiamata /posts col verbo GET ci aspettiamo “Lista dei post”;
// Se viene chiamato /posts/1 col verbo DELETE ci aspettiamo “Cancellazione del post 1"
// e via dicendo…
// Registrare il router dentro app.js con il prefisso posts/.
// Nota:
// Avete anche l’array dei post che vi abbiamo fornito, salvatelo da qualche parte. Ci servirà per 
// i prossimi step. Per oggi vi può servire in caso vogliate provare i bonus.
// Bonus
// Provare a restituire la lista dei post dalla rotta index, in formato json
// Provare a restituire un singolo post dalla rotta show, sempre in formato json


// import express
const express = require('express')
const router = express.Router();

// rotte crud

// index
router.get('/', function (req, res){
    res.send('Lista dei posts');
});

// show
router.get('/:id', function (req, res){
    res.send('Post' + req.params.id);
});

// store
router.post('/', function (req, res){
    res.send('Creazione nuovo post');
});

// update
router.put('/:id', function (req, res){
    res.send('Modifica del post' + req.params.id);
});
// modify
router.patch('/:id', function (req, res){
    res.send('Patch del post' + req.params.id);
});
// destroy
router.delete('/:id', function (req, res){
    res.send('Elimina post' + req.params.id);
});

// esportiamo il modulo 

module.exports = router;