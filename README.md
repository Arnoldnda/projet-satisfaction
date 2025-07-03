# projet-satisfaction
# 📋 Application d’Enquête de Satisfaction

Projet universitaire - UE Développement Dynamique (JavaScript & Node.js)  
Université Pigier CI – Année 2024-2025

## 🧠 Objectif du projet

Développer une application web permettant de :
- Collecter l’avis des visiteurs après une prestation
- Stocker les réponses dans une base de données
- Permettre aux administrateurs de consulter les résultats
- Afficher des statistiques dynamiques
- Exporter les réponses au format CSV ou Excel

## 🔧 Technologies utilisées

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/) (via `mysql2`)
- [json2csv](https://www.npmjs.com/package/json2csv) pour l’export CSV

### Frontend
- HTML5, CSS3, JavaScript
- [Chart.js](https://www.chartjs.org/)  pour les graphiques

### Outils
- Git & GitHub (collaboration)
- Postman ou Thunder Client (test d’API)

## 📦 Fonctionnalités

- ✅ Enregistrement des réponses via formulaire web
- ✅ Connexion sécurisée des administrateurs
- ✅ Visualisation des réponses reçues
- ✅ Statistiques dynamiques (taux de satisfaction, services les plus sollicités)
- ✅ Export CSV / Excel
- ✅ Affichage des graphiques (pie, bar, etc.)

## 👥 Équipe projet

- **Arnold** – Backend / Organisation
- **Cherif** – Frontend / Interface utilisateur
- **Archange** – Backend / Export 

## Fonctionnement 

- `git clone https://github.com/Arnoldnda/projet-satisfaction.git` : pour recuprer le projet en local 
- Une fois le projet en local, ouvir avec un editeur de text (vscode recommandé)
- Lancer vwamp ou xamp, activez les services (apache et mysql)
- Dans mysql créez une base de donné nommé **project_satisfaction**
- Dans le terminal de vscode se deplacer dans le dossier backend `cd ./backend`
- Une fois dans le dosier backend, installer les dependances du projet avec la commande `npm install`
- Une fois les dépendances installé, lancé le serveur avec la commande `npm run start`
- Quand le serveur est lancé accédez a la page **form_statisfaction**
