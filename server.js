// API Express - Strike-prod
const express = require('express');
const app = express();

let articles = [
  { id: 1, titre: "Premier article", contenu: "Bonjour le monde !" },
  { id: 2, titre: "Deuxième article", contenu: "Express c'est facile." }
];

app.use(express.json()); // Pour lire les données JSON

// GET /api/articles → retourne tous les articles
app.get('/api/articles', (req, res) => {
  res.json(articles);
});

// POST /api/articles → ajoute un nouvel article
app.post('/api/articles', (req, res) => {
  const nouvelArticle = {
    id: articles.length + 1,
    titre: req.body.titre,
    contenu: req.body.contenu
  };
  articles.push(nouvelArticle);
  res.status(201).json(nouvelArticle);
});

app.listen(5000, () => {
  console.log('Serveur démarré sur le port 5000 ✅');
});