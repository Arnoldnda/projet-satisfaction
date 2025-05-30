document.addEventListener('DOMContentLoaded', () => {
    fetchServices();
    fetchRaisons();
  });
  
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
  