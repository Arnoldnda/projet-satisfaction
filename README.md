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

### 1. Cloner le projet
```bash
git clone https://github.com/Arnoldnda/projet-satisfaction.git

### 2. Configuration locale
Ouvrir le projet avec VSCode ou un autre éditeur.

Lancer WAMP ou XAMPP et activer les services Apache & MySQL.

Créer une base de données nommée :`project_satisfaction`.

### 3. Préparer le backend
```bash
cd backend
npm install
npm run start

### 4. Accéder à l’application
📄 Ouvrir le fichier `form_statisfaction.html` dans un navigateur pour soumettre une réponse.

🔐 Accéder au tableau de bord via la page d’administration pour consulter les résultats et statistiques ( email : **monsieurahipka@gmail.com** , pwd : **12345678**)





