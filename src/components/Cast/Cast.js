import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCreditMovie } from 'services/api';
import { CastList, CastItem, CastImg, CastName } from 'components/Cast/Cast.styled';
import { scrollOptions, scroll } from 'components/Scroll/Scroll';


export default function Cast() {
    const [credits, setCredits] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
      getCreditMovie(movieId).then(result => {
        setCredits(result.data.cast);
      });
    }, [movieId]);

    useEffect(() => {
      scroll.scrollToBottom(scrollOptions);
    }, []);

    if (!credits) return null;

    return (
      <div>
        <CastList>
          {credits.length > 0 &&
              credits.map(({credit_id, profile_path, name}) => (
              <CastItem key={credit_id}>
                <CastImg
                  src={
                    profile_path
                      ? 'https://image.tmdb.org/t/p/w500' + profile_path
                      : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
                  }
                  alt=""
                />
                <CastName>{name}</CastName>
              </CastItem>
            
          ))}
        </CastList>
      </div>
    );
}

