import axios from 'axios';
import { toast } from 'react-toastify';

const API_KEY = '58e3b7ceceb51aa1e95a679f50fa8e58';
const BASE_URL = 'https://api.themoviedb.org/3';
const paramsURL = axios.create({
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY,
    },
  });

export const getTrendMovies = async () => {
  try {
    const response = await paramsURL.get('/trending/movie/day');
    const { data } = response;
    return data;
  } catch (error) {
    toast.error('Sorry error server!', {});
  }
};

export const getDetailsMovie = async id => {
  try {
    const response = await paramsURL.get(`/movie/${id}`);
    return response;
  } catch (error) {
    toast.error('Sorry error server!', {});
  }
};

export const getSearchMovies = async query => {
  try {
    const response = await paramsURL.get('/search/movie', {
      params: query,
    });
    return response;
  } catch (error) {
    toast.error('Sorry error server!', {});
  }
};

export const getCreditMovie = async id => {
  try {
    const response = await paramsURL.get(`/movie/${id}/credits`);
    return response;
  } catch (error) {
    toast.error('Sorry error server!', {});
  }
};

export const getReviewsMovie = async id => {
  try {
    const response = await paramsURL.get(`/movie/${id}/reviews`);
    return response;
  } catch (error) {
    toast.error('Sorry error server!', {});
  }
};

