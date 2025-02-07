

// express
// import express from 'express';
const express = require('express');
const app = express();
const port = 3000;
// importiamo il router
const routerPosts = require('./routers/posts');

// definiamo la cartella per i file statici
app.use(express.static('public'));

// definiamo la rotta posts
app.use('/posts', routerPosts)

// aggiungiamo la rotta home
app.get('/',(req,res) => {
    res.send('casa')
});

// aggiungiamo rotta del blog
app.get('/bacheca', (req, res)=> {
    // array dei posts
    const bacheca = [
        {
          "titolo": "Ciambellone soffice",
          "contenuto": "Un dolce semplice e genuino, perfetto per la colazione o la merenda. Soffice e profumato, con una leggera spolverata di zucchero a velo.",
          "immagine": "http://localhost:3000/img/ciambellone.jpeg", 
          "tags": ["dolce", "colazione", "merenda", "tradizione"]
        },
        {
          "titolo": "Cracker di barbabietola",
          "contenuto": "Sfiziosi cracker croccanti a base di barbabietola, arricchiti con semi misti. Perfetti come snack o da accompagnare con creme e formaggi.",
          "immagine": "http://localhost:3000/img/barbabietola.jpeg",
          "tags": ["salato", "snack", "barbabietola", "healthy"]
        },
        {
          "titolo": "Pasta alla barbabietola",
          "contenuto": "Un primo piatto colorato e dal sapore delicato. La crema di barbabietola si sposa perfettamente con la pasta e la croccantezza della granella di pistacchio.",
          "immagine": "http://localhost:3000/img/pasta_barbabietola.jpeg",
          "tags": ["primo", "barbabietola", "pasta", "vegetariano"]
        },
        {
          "titolo": "Torta paesana",
          "contenuto": "Un dolce della tradizione lombarda, preparato con pane raffermo, latte, cacao, pinoli e uvetta. Un dessert ricco e goloso.",
          "immagine": "http://localhost:3000/img/torta_paesana.jpeg",
          "tags": ["dolce", "tradizione", "cacao", "riciclo"]
        },
        {
            "titolo": "Pane fritto",
            "contenuto": "Alla fine è pane, pero è fritto.",
            "immagine": "http://localhost:3000/img/pane_fritto_dolce.jpeg",
            "tags": ["pane", "buono", "buonissimo",]
          }
      ]
    // ritorniamo l array in json
    res.json(bacheca);
})

app.listen(port, () => {
    console.log(`server in ascolto su ${port}`);
})

