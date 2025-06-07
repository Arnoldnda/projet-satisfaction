// fonction pour recuperer les services dans la base de donnée et les afficher dynamiquement dans le formulaire 
function fetchServices() {
    fetch('http://localhost:3000/api/services')
    .then(response => response.json())
    .then(result => {
        const services = result.data; // 🔥 c’est ici qu’on récupère le tableau
        const serviceSelect = document.getElementById('service');
        services.forEach(service => {
            const option = document.createElement('option');
            option.value = service.id;
            option.textContent = service.nom;
            serviceSelect.appendChild(option);
        });
    })
    .catch(error => console.error('Erreur lors du chargement des services :', error));
}
  
// fonction pour recuperer les raisons dans la base de donnée et les affichés dysnamiqement dans le formulaire  
function fetchRaisons() {
    fetch('http://localhost:3000/api/raisons')
    .then(response => response.json())
    .then(result => {
        const raisons = result.data; // 🔥 pareil ici
        const raisonSelect = document.getElementById('raisonvisit');
        raisons.forEach(raison => {
            const option = document.createElement('option');
            option.value = raison.id;
            option.textContent = raison.typeRaison;
            raisonSelect.appendChild(option);
        });
    })
    .catch(error => console.error('Erreur lors du chargement des raisons :', error));
}

// appeler les deux fonctions lorsque le page se charge 
document.addEventListener('DOMContentLoaded', () => {
    fetchServices();
    fetchRaisons();
});
  
//envoi des donnée du formulaire dans la base de donnée 
document.getElementById('satisfactionForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const formData = new FormData(this);
    const rawData = Object.fromEntries(formData.entries());

    const data = {
        date: rawData.visit_date,
        email: rawData.mail,
        satisfaction: rawData.satisfaction,
        commentaire: rawData.comments,
        serviceId: rawData.service,
        raisonId: rawData.raisonvisit
    }
  
    
    // Si la raison sélectionnée est "Autre", remplace raisonId par une valeur personnalisée
    if (data.raisonId === 'autre') {
      data.raisonId = null;
      data.autreRaison = formData.get('autre_raison');
    }
  
    try {
        const response = await fetch('http://localhost:3000/api/visite', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();
            if (response.ok) {
            alert('Visite enregistrée avec succès !');
            this.reset();
        } else {
            alert('Erreur : ' + result.message);
        }
  
    } catch (err) {
        console.error('Erreur réseau :', err);
        alert("Une erreur est survenue");
    }
});
  