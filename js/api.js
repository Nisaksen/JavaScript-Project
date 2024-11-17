// api.js
const API_URL = 'https://nisaksen.github.io/JavaScript-Project/movies.html';


export async function fetchMovies() {
    try {
      const response = await fetch(API_URL);
      const movies = await response.json();
      displayMovies(movies);
    } catch (error) {
      console.error('Error fetching movies:', error);
      alert('Failed to load movies. Please try again later.');
    }
  }
  
  window.onload = fetchMovies; 