import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getSearchMovies } from 'services/api';
import { MoviesList } from 'components/TrendMovieList/TrendMoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesContainer } from './Movies.styled';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    let filmName = searchParams.get('name') ?? '';
    if (filmName === '') {
      return;
    } else {

      getSearchMovies({
        query: filmName,
        page: 1,
      }).then(result => {
        setSearchResult(result.data.results);
      });
    }
  }, [searchParams]);

  const handleSubmit = value => {
    if (value.query.trim() === '') {
      toast('Please, enter movie name!', {});
      return;
    } else {
      const nextParams = value.query !== '' ? { name: value.query } : {};
      setSearchParams(nextParams);
    }
  };

  return (
    <MoviesContainer>
      <SearchForm onSubmit={handleSubmit} value={searchParams.get('name')} />
      <MoviesList movies={searchResult} />
    </MoviesContainer>
  );
}
