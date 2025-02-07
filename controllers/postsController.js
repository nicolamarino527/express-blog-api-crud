// importiamo i dati del router
const roots = require('../routers/posts');

// impostiamo le funzioni realtive alle funzioni del router 
function index(req, res) {
    // funzione index
    res.send('Lista dei posts');
}

function show(req, res) {
    // funzione show
    res.send('Post' + req.params.id);
}

function store(req, res) {
    // funzione update
    res.send('Creazione nuovo post');
}

function update(req, res) {
    // funzione update
    res.send('Modifica del post' + req.params.id);
}

function modify(req, res) {
    // funzione modify
    res.send('Patch del post' + req.params.id);
}

function destroy(req, res) {
    // funzione destroy
    res.send('Elimina post' + req.params.id);
}


module.exports = { index, show, store, update, modify, destroy};