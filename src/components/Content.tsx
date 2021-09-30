import { MovieProps as Movie } from '../App'
import { Header } from './Header';

import { MovieCard } from './MovieCard';

interface ContentProps {
  movies: Movie[];
  selectedGenreTitle: string;
}

export function Content({ movies, selectedGenreTitle }: ContentProps) {
  return (
    <div className="container">
      <Header selectedGenreTitle={selectedGenreTitle} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}