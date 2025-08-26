function exportCSV() {
    fetch('http://localhost:4000/api/visites/exports/cvs', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de l\'exportation CSV');
        }
        return response.blob();
    })
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'visites.csv';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    })
    .catch(error => {
        console.error(error);
        alert("Une erreur est survenue lors du téléchargement CSV.");
    });
}

function exportExcel() {
    fetch('http://localhost:4000/api/visites/exports/excel', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de l\'exportation Excel');
        }
        return response.blob();
    })
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'visites.xlsx';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    })
    .catch(error => {
        console.error(error);
        alert("Une erreur est survenue lors du téléchargement Excel.");
    });
}