// recuperer a afficher les visites dans le tableau 
 async function fetchVisites() {
     try {

         const response = await fetch('http://localhost:4000/api/visites', {
             headers: { 'Authorization': 'Bearer ' + token }
         });
         const result = await response.json();

         const tbody = document.querySelector('#responseTable tbody');
         tbody.innerHTML = ''; // reset

         result.data.forEach(visite => {
             const row = document.createElement('tr');
             row.innerHTML = `
             <td>${new Date(visite.date).toLocaleString()}</td>
             <td>${visite.email}</td>
             <td>${visite.service.nom}</td>
             <td>${visite.raison.typeRaison}</td>
             <td>${visite.satisfaction}</td>
             <td>${visite.commentaire}</td>
             `;
             tbody.appendChild(row);
         });

     } catch (error) {
         console.error('Erreur chargement visites:', error);
     }
 }

 // appel de la fonction de recuperation des visites  
 fetchVisites();