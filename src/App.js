import React, { useState, useEffect } from 'react';
import MovieList from '@/components/MovieList/MovieList';
import MovieDetails from '@/components/MovieDetails/MovieDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(initialFavorites); 
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  
   const handleFavorite = (movie) => { 
     if (favorites.some(fav => fav.episode_id === movie.episode_id)) {
       setFavorites(favorites.filter(fav => fav.episode_id !== movie.episode_id)); 
     } 
     else {
       setFavorites([...favorites, selectedMovie]); 
     }
   };
  

  function handleMovieSelect(movie) {
    setSelectedMovie(movie);
  }
  return (
    <div className="App" >
      <MovieDetails movie={selectedMovie} favorites={favorites} onFavoriteToggle={handleFavorite} /> <br/> <br/>
       {/* Propery "onFavoriteToggle" did not receive any value
        As a result movie objects were not classified as liked/disliked and the "favorite" button did not function.
        Therefore I added "handleFavorite" function to propery "onFavoriteToggle"*/}
      <MovieList onMovieSelect={handleMovieSelect}/>
    </div>
  );
}

export default App;