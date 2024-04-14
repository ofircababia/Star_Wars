import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


function MovieItem({ movie, onMovieSelect, }) {
  console.log(movie.episode_id);
  let class_num = 'class'+ movie.episode_id;
  return (
    <div key={movie.episode_id} className={'col-md-6 col-lg-2 chgPos'}>
      <button onClick={() => onMovieSelect(movie)} className={`${class_num} images`}>
        {/* "onMovieSelect" function did not receive any value.
         As a result the button of the movie did not work since "selectedMovie" variable did not have a value
         and "MovieDetails" component did not receive any movie object to display.
         Therefore I added "movie" object to "onMovieSelect"*/}
        <p><strong>{movie.title}</strong></p>
      </button>
    </div>
  );
}

export default MovieItem;