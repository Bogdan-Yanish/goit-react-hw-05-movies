import { useState, useEffect } from 'react';
import { getTrendMovies } from 'services/api';
import { MoviesList } from 'components/TrendMovieList/TrendMoviesList';
import { MainTitle } from 'components/CommonStyles/MainTitle.styled';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendMovies().then(result => {
      const { results } = result;
      console.log(results);
      setTrendingMovies(results);
    });
  }, []);

  return (
    <div>
      <MainTitle>Trending movies</MainTitle>
      <MoviesList movies={trendingMovies} />
    </div>
  );
}
