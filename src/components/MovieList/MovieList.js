import React, { useState, useEffect } from 'react';
import { fetchMovies } from '@/services/api';
import MovieItem from '@/components/MovieItem/MovieItem';
import Loading from '@/components/Loading/Loading';

function MovieList({ onMovieSelect }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        console.error("Failed fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  movies.sort((a, b) => a.episode_id - b.episode_id);
  console.log(movies);

  return (
    <div className={`row movie movie-list ${isLoading ? '' : 'visible'}`}>
        {isLoading ? (
            <Loading/>
        ) : (
          movies.map(movie => (
            <MovieItem key={movie.episode_id} movie={movie} onMovieSelect={onMovieSelect} />
          ))
        )}
    </div>
);
}

export default MovieList;
