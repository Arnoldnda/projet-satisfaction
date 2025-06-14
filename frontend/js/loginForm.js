//recuperer le formulaire 
const loginForm = document.getElementById('loginForm') ;

//ecouter l'evemement submit sur le formulaire 
loginForm.addEventListener('submit', async function (e) {
    e.preventDefault();
  
    //recuperation est donnée entré par l'utilisateur dans me formulaire 
    const formData = new FormData(this);
    const rawData = Object.fromEntries(formData.entries());

    const data = {
        email: rawData.mail,
        passwd: rawData.password
    }

    try {
        //envoi des données a l'api 
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
  
        //récupération du resulatat de l'api
        const result = await response.json();
  
        if (response.ok) {

            // Connexion réussie : stocker le token
            localStorage.setItem('jwt', result.token); 
            this.reset()
            // Rediriger vers le tableau de bord, par exemple
            window.location.href = './dashboard.html';
            
        } else {
            const loginError = document.getElementById('loginError') ;

            loginError.textContent = result.message;
            loginError.style.display = 'block';
        }
  
    } catch (err) {
      console.error('Erreur réseau :', err);
      document.getElementById('loginError').textContent = 'Erreur de connexion au serveur.';
      document.getElementById('loginError').style.display = 'block';
    }
});
  