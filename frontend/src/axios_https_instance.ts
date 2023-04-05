import axios from 'axios';
const https = require('https');

// Créez un agent HTTPS avec des options de sécurité personnalisées
const agent = new https.Agent({
    rejectUnauthorized: false, // Empêche les connexions à des serveurs avec un certificat invalide
    // Autres options de sécurité peuvent être définies ici
});

// Configurez axios pour utiliser l'agent HTTPS
const axiosInstance = axios.create({
    httpsAgent: agent,
});

// Effectuez une requête HTTPS en utilisant axios avec l'agent HTTPS
axiosInstance.get('https://example.com/api/data')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });

export default axiosInstance;
