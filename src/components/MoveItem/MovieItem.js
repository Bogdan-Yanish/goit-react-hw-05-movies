import PropTypes from 'prop-types';
import { Genres } from 'components/Genres/Genres';
import {
  MovieInfoCard,
  MovieInfoImg,
  MovieInfoTitle,
  MovieInfoBlock,
  PreInfoTitle,
  RatingStyled
} from './MovieItem.styled';

export const MovieInfo = ({ movie }) => {
  const { overview, poster_path, title, name, original_title, original_name, release_date, vote_average, genres } = movie;
  const movieName = title ?? name ?? original_title ?? original_name ?? 'No data';
  const movieDateRelease = release_date.slice(0, 4);
  const movieRating = Math.ceil(vote_average * 10) + '%';
  
  return (
    <MovieInfoCard>
      <MovieInfoImg
        src={
          poster_path
            ? 'https://image.tmdb.org/t/p/w500' + poster_path
            : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
        }
        alt=""
      />
      <div>
        <MovieInfoTitle>
          {movieName}
          {'  '}
          ({movieDateRelease})
        </MovieInfoTitle>
        <MovieInfoBlock>
        <PreInfoTitle>User Score:</PreInfoTitle> 
        <RatingStyled>{movieRating}</RatingStyled>
        </MovieInfoBlock>
        <MovieInfoBlock>
          <PreInfoTitle>Overview:</PreInfoTitle> {overview}
        </MovieInfoBlock>
        <MovieInfoBlock>
          <PreInfoTitle>Genres:</PreInfoTitle>
          {<Genres movieGenres={genres} />}
        </MovieInfoBlock>
      </div>
    </MovieInfoCard>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};
