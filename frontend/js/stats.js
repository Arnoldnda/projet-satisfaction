document.addEventListener('DOMContentLoaded', () => {

    fetch('http://localhost:4000/api/stats/satisfaction', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
    .then(res => res.json())
    .then(result => {
        const data = result.stats;

        const ctx = document.getElementById('satisfactionChart').getContext('2d');

        new Chart(ctx, {
            type: 'pie', // ou 'pie'
            data: {
                labels: Object.keys(data),
                datasets: [{
                    label: '% de satisfaction',
                    data: Object.values(data),
                    backgroundColor: [
                        '#2ecc71',
                        '#3498db',
                        '#f1c40f',
                        '#e67e22',
                        '#e74c3c'
                    ],
                    borderColor: '#fff',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#333',
                            font: { size: 14 }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: context => {
                                return `${context.label}: ${context.raw}%`
                            }
                        }
                    }
                }
            }
        });
    })
    .catch(error => {
        console.error('Erreur de chargement des statistiques de satisfaction:', error);
    });


    

});


document.addEventListener('DOMContentLoaded', () => {

    fetch('http://localhost:4000/api/stats/satisfaction-par-service', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
    .then(res => res.json())
    .then(stats => {
        const services = Object.keys(stats);
        const categories = ['Très satisfait', 'Satisfait', 'Neutre', 'Insatisfait', 'Très insatisfait'];

        const datasets = categories.map((categorie, index) => ({
            label: categorie,
            data: services.map(service => parseFloat(stats[service][categorie])),
            backgroundColor: [
                '#2ecc71', '#3498db', '#f1c40f', '#e67e22', '#e74c3c'
            ][index],
            borderWidth: 1
        }));

        const ctx = document.getElementById('satisfactionByServiceChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: services,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: '% de satisfaction'
                        }
                    },
                    x: {
                        ticks: {
                            autoSkip: false,
                            maxRotation: 45,
                            minRotation: 45
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    })
    .catch(error => {
        console.error("Erreur de chargement des stats par service :", error);
    });
})


document.addEventListener('DOMContentLoaded', () => {

    fetch('http://localhost:4000/api/stats/visite-par-raison-visite', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
    .then(res => res.json())
    .then(data => {
        const motifs = Object.keys(data);
        const values = Object.values(data);

        const ctx = document.getElementById('motifsChart').getContext('2d');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: motifs,
                datasets: [{
                    label: 'Nombre de visites',
                    data: values,
                    backgroundColor:[
                        '#1abc9c', '#3498db', '#9b59b6', '#f1c40f',
                        '#e67e22', '#e74c3c', '#95a5a6', '#2ecc71'
                    ],
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Visites'
                        }
                    },
                    x: {
                        ticks: {
                            autoSkip: false,
                            maxRotation: 45,
                            minRotation: 30
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    })
    .catch(error => {
        console.error('Erreur lors du chargement des motifs de visite :', error);
    });
});


document.addEventListener('DOMContentLoaded', () => {

    fetch('http://localhost:4000/api/stats/visite-par-service', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
    .then(res => res.json())
    .then(data => {
        const motifs = Object.keys(data);
        const values = Object.values(data);

        const ctx = document.getElementById('serviceChart').getContext('2d');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: motifs,
                datasets: [{
                    label: 'Nombre de visites',
                    data: values,
                    backgroundColor:[
                        '#1abc9c', '#3498db', '#9b59b6', '#f1c40f',
                        '#e67e22', '#e74c3c', '#95a5a6', '#2ecc71'
                    ],
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Visites'
                        }
                    },
                    x: {
                        ticks: {
                            autoSkip: false,
                            maxRotation: 45,
                            minRotation: 30
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    })
    .catch(error => {
        console.error('Erreur lors du chargement des visite :', error);
    });
});