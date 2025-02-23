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


// importiam il controller
const controller = require('../controllers/postsController');


// rotte crud

// index
router.get('/', controller.index);

// show
router.get('/:id', controller.show);

// store
router.post('/', controller.store);

// update
router.put('/:id', controller.update);

// modify
router.patch('/:id', controller.modify);

// destroy
router.delete('/:id', controller.destroy);

// esportiamo il modulo 

module.exports = router;


// http://localhost:3000/posts