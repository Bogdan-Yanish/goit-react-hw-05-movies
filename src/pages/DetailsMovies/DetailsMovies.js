import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getDetailsMovie } from 'services/api';
import { MovieInfoTitle } from './DetailsMovies.styled';
import { MovieInfo } from 'components/MoveItem/MovieItem';
import {  BackLink, BackLinkIcon } from 'components/CommonStyles/BackLink.styled';
import { LoaderSpinner } from 'components/Loader/Loader';
import { MovieData, AddListItem, Link  } from './DetailsMovies.styled';
import { scrollOptions, scroll } from 'components/Scroll/Scroll';

export default function DetailsMovies() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState();
  const location = useLocation().state?.from ?? '/'

  useEffect(() => {
    getDetailsMovie(movieId).then(result => {
      setMovieInfo(result.data);
    });
  }, [movieId]);

  useEffect(() => {
    scroll.scrollToBottom(scrollOptions);
  }, []);

  if (!movieInfo) return null;

  return (
    <MovieData>
      <BackLink to={location}>
        <BackLinkIcon />
        Back 
      </BackLink>
      {movieInfo && (
        <div>
          <MovieInfo movie={movieInfo} />
          <MovieInfoTitle>Addictional information:</MovieInfoTitle>
          <ul
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              marginBottom: '10px',
            }}
          >
            <AddListItem>
              <Link to="cast" state={{ from: location }}>
                Cast
              </Link>
            </AddListItem>
            <AddListItem>
              <Link to="reviews" state={{ from: location }}>
                Reviews
              </Link>
            </AddListItem>
          </ul>
          <Suspense fallback={<LoaderSpinner />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </MovieData>
  );
}
