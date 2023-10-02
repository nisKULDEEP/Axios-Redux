import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.publicapis.org',
  headers: {
    // 'X-RapidAPI-Key': 'e93b63dbc6msh7a0aa2932164aabp12fa43jsn2bd490661c88',
    // 'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
    'Content-Type': 'application/json' // Add this line if you're sending JSON data
  }
});

export default instance;
