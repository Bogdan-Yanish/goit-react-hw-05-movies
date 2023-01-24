import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewsMovie } from 'services/api';
import { ReviewsItem, ReviewsTitle } from 'components/Reviews/Reviews.styled';
import { scrollOptions, scroll } from 'components/Scroll/Scroll';


export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviewsMovie(movieId).then(result => {
      setReviews(result.data.results);
    });
  }, [movieId]);

  useEffect(() => {
    scroll.scrollToBottom(scrollOptions);
  }, []);

  return (
    <ul>
      {reviews.length > 0 
        ? reviews.map(({ id, author, content }) => (
          <ReviewsItem key={id}>
            <ReviewsTitle>{author}</ReviewsTitle>
            <p>{content}</p>
          </ReviewsItem>
      )): 'We don`t have reviews for this movie!'}
    </ul>
  );
}

