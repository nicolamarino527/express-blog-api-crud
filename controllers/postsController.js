// Esercizio
// Milestone 1
// Come prima cosa, creiamo un controller per i nostri post, in una cartella controllers.
// All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica 
// delle funzioni che attualmente si trovano nel router (al momento restituiscono solo 
// dei messaggi).
// Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller 
// e le associamo alle varie rotte, come visto in classe.
// Testiamo su postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte
//  che avevamo prima.
// Se tutto funziona, passiamo alla prossima milestone
// Milestone 2
// Per iniziare, creiamo una cartella data in cui creare un file che contenga ed esporti 
// l’array di posts che trovate in allegato. Importiamo questo file in cima al controller.
// Ora passiamo ad implementare le logiche delle nostre CRUD:
// 1 -- Index dovrà restituire la lista dei post in formato JSON
// 2 -- Show dovrà restituire un singolo post in formato JSON
// 3 -- Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) 
// la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.
// Bonus
// Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
// In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso
// contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
// Buon Lavoro e buon divertimento :metallica:


// importiamo la bacheca con 
const bacheca = require('../app');

// impostiamo le funzioni realtive alle funzioni del router 
function index(req, res) {
    // funzione index 
    res.json(posts);
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