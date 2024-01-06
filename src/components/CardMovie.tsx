import { useNavigate } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

interface ICardMovie {
  movie: any,
  showRating?: boolean
}

const CardMovie = ({ movie, showRating = true }: ICardMovie) => {
  const navigate = useNavigate()
  const [emulatorImg, setEmulatorImg] = useState('')
  const [emulator, setEmulator] = useState('')


  useEffect(() => {
    const img = movie
    const emt = movie
    setTimeout(() => {
      setEmulatorImg(img)
      setEmulator(emt)
    }, 1 * 1000)
  })

  return (
    <>
      {emulator &&
        <CardStyled onClick={() => navigate(`/movie/${movie.id}`)}>
          <div className="release">{movie?.release_date.slice(0, 4)}</div>
          {emulatorImg &&
            <img src={`${import.meta.env.VITE_APP_BASEIMG}/${movie?.poster_path}`} alt="" />}
          {!emulatorImg &&
            <Skeleton count={1} width="170px" height="300px" />}
          <div className="overlay">
            <div className="movie-title">{movie.title}</div>
            <p>Release Date:</p>
            <div className="movie-date">{movie.release_date}</div>
            <div className="movie-rate">{movie.vote_average} <i className="bi bi-star-fill"></i></div>
          </div>
          <div className="movie-title text-truncate">{movie.title}</div>
          {showRating === true ? <div className="movie-rate"><i className="bi bi-star-fill"></i> {movie.vote_average} </div> : ''}
        </CardStyled>
      }
      {
        !emulator &&
        <Skeleton count={1} width="170px" height="300px" />
      }
    </>
  )
}


export default CardMovie

const CardStyled = styled(Card)`
      width: 170px;
      height: 300px;
      cursor: pointer;
      overflow: hidden;
      background-color: transparent;
      color: var(--white);
      transition: .2s ease;
      text-align: center;

      img {
          border-radius: 8px;
      }

      .release {
          position: absolute;
          width: 35px;
          height: 15px;
          font-size: 10px;
          border-radius: 0 0 8px 0;
          background-color: red;
      }

      .bi-star-fill {
          color: yellow;
      }

      .movie-title {
          // padding: 5px;
          height: 20px;
          font-size: 14px;
          margin-top: 5px;
      }

      .movie-rate {
          font-size: 12px;
          font-weight: 400;
      }

      img {
          transition: 0.5s ease;
      }

      p {
          margin: 0;
          padding: 0;
      }

      .hover-effect {
          opacity: 0;
          padding: 2px;
          // background-color: #3F2E3E;
          position: absolute;
          top: -30px;
      }

      &:hover {
          transform: scale(1.05);

          .hover-effect {
              opacity: 1;
          }
      }

      .overlay {
          position: absolute;
          top: 100%;
          opacity: 0;
          width: 100%;
          height: 50%;
          transition: 0.5s ease;
          color: whitesmoke;

          .movie-title {
              font-weight: 700;
          }

          .bi-star-fill {
              color: yellow;
          }
      }

`