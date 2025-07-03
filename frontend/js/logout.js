function logout() {
    localStorage.removeItem('token'); // ou 'jwt' selon ce que tu utilises
    window.location.href = 'login_admin.html'; // ou la page de login de ton projet
}