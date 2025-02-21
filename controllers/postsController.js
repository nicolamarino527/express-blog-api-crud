// importiamo i post 
const posts = require('../data/posts');

// console.log(posts);
// const id = req.posts.id
// console.log(id);



// impostiamo le funzioni realtive alle funzioni del router 



// funzione index 
function index(req, res) {

    // restituiamo la lista di posts in formato json
    res.json(posts);

    // definiamo il caso dell'errore 
    if (!post) {
        return res.status(404);
    }

}



// funzione show
function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    // diamo l'errore nel momento in cui il post non viene trovato
    if (!post) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    res.json(post);
}



// funzione post
function store(req, res) {
    res.send('Creazione nuovo post');

    // aggiungiamo l' id dal momento in cui non disponiamo di un database
    const lastPost = posts[posts.length - 1];
    const idLastPost = lastPost.id;
    const newId = idLastPost + 1;
    console.log(newId);

    // nuovo post aggiunto 

    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image
    }

    // aggiungiamo il post alla lista
    posts.push(newPost);

    // restituiamo il nuovo post nello status correto e in formato json
    res.status(201)

    // controllimo 
    console.log(posts);


}



// funzione update
function update(req, res) {
    // res.send('Modifica del post' + req.params.id);

    // prendiamo l'id e trasformiamolo in un numero 
    const id = parseInt(req.params.id);

    // cerchiamo i post tramite l'id
    const post = posts.find(p => p.id === id)

    // impostiamo lo stato di errore
    if (!post) {
        return res.status(404).json({ error: "Post non trovato" });
    }


    // modifichiamo i dati del post
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    // stampiamo in console
    console.log(posts);

    // restituiamo il json
    res.json(post);
}


// funzione modify
function modify(req, res) {
    // res.send('Patch del post' + req.params.id);

    // cerchiamo i post tramite l'id
    const post = posts.find(p => p.id === id)

    // impostiamo lo stato di errore
    if (!post) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    // modifichiamo i dati del post
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    // restituiamo il json
    res.json(post);


}



// funzione destroy
function destroy(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    posts.splice(index, 1);
    console.log("Lista aggiornata:", posts);

    res.status(204).send();
}

module.exports = { index, show, store, update, modify, destroy };