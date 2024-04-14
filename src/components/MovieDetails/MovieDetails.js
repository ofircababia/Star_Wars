import React, { useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton'; // Import IconButton

function MovieDetails({ movie, onFavoriteToggle, favorites }) {
  
  
  if (!movie) return null;
  let class_num = 'class' + movie.episode_id;
  return (
    <div className={class_num} id='backgroundimage'>
      <h2>{movie.title}</h2>
      <IconButton id='icon' onClick={() => onFavoriteToggle(movie)}>
        {favorites.some(fav => fav.episode_id === movie.episode_id) ? <StarBorderIcon /> : <StarIcon />}
      </IconButton>
    </div>
  );
}

export default MovieDetails;