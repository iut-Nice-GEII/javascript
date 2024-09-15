const express = require('express');
const path = require('path'); // Pour servir le fichier index.html
const app = express();
const bodyParser = require('body-parser');

// Définir le dossier contenant les fichiers statiques (HTML, CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware pour parser les requêtes POST en JSON
app.use(bodyParser.json());

// Variable pour stocker les valeurs
let storedPrenom = '';
let storedNom = '';

// Route GET pour renvoyer les valeurs
app.get('/nom', (req, res) => {
    res.send({ nom: storedNom });
});
app.get('/prenom', (req, res) => {
    res.send({ prenom: storedPrenom });
});
app.get('/all', (req, res) => {
    res.send({ nom: storedNom, prenom: storedPrenom });
});

// Route POST pour mettre à jour les valeurs
app.post('/nom', (req, res) => {
    const newValue = req.body.nom;
    if (newValue) {
        storedNom = newValue;
        res.send({ message: 'Value updated successfully', nom: storedNom });
    } else {
        res.status(400).send({ message: 'No value provided' });
    }
});
app.post('/prenom', (req, res) => {
    const newValue = req.body.prenom;
    if (newValue) {
        storedPrenom = newValue;
        res.send({ message: 'Value updated successfully', prenom: storedPrenom });
    } else {
        res.status(400).send({ message: 'No value provided' });
    }
});
app.post('/all', (req, res) => {
    const newNom = req.body.nom;
    const newPrenom = req.body.prenom;
    if (newNom && newPrenom) {
        storedNom = newNom;
        storedPrenom = newPrenom;
        res.send({ message: 'Values updated successfully', nom: storedNom, prenom: storedPrenom });
    } else {
        res.status(400).send({ message: 'No value provided for nom or prenom' });
    }
});

// Démarrer le serveur sur le port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
