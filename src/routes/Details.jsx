import { useParams } from 'react-router-dom';
import { useMovie } from '../hooks/useMovie';
import { Link } from "react-router-dom";

// import { MovieImage, Paragraph } from './Movielist'
import {
    MovieDetailsContainer,
    LeftColumn,
    RightColumnContainer,
    MovieTitleDetails,
    MovieDetailsDescription,
    MovieDetailsButton,
  } from "../style";
// import styled from 'styled-components';



function Details() {
    const { movieId } = useParams();
    const { getMoviesById } = useMovie();
    const movie = getMoviesById(movieId);

        return (
            <div>
              <h1 title={movie?.title} />
              <MovieDetailsContainer>
                <LeftColumn>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt={movie?.title}
                    style={{ width: "100%", height: "100%" }}
                  />
                </LeftColumn>
                <RightColumnContainer>
                  <MovieTitleDetails>
                    <span>Título:</span> {movie?.title}
                  </MovieTitleDetails>
                  <MovieDetailsDescription>
                    <span>Sinopse:</span> {movie?.overview}
                  </MovieDetailsDescription>
                  <p className="movie-title-date">
                    <span>Data de lançamento:</span> {movie?.release_date}
                  </p>
                  <p className="movie-title-rating">
                    <span>Nota:</span> {movie?.vote_average}
                  </p>
                  <Link to="/">
                    <MovieDetailsButton>Voltar para Home</MovieDetailsButton>
                  </Link>
                </RightColumnContainer>
              </MovieDetailsContainer>
              <footer />
            </div>
          );
    
}

export default Details