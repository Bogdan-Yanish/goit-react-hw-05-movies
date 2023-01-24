import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { MovieList, MovieListItem } from './TrendMoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  
  return (
    <MovieList>
      {movies.map(({id, title, name }) => {
        return (
          <MovieListItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
                {title ?? name}
            </Link>
          </MovieListItem>
        );
      })}
    </MovieList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
