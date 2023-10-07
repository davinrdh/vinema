import { useNavigate } from "react-router-dom";
import '../styles/CardMovie.scss'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from "react";

interface ICardMovie {
  movie: any,
}

const CardMovie = ({ movie }: ICardMovie) => {
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
        <div className="movie card" onClick={() => navigate(`/movie/${movie.id}`)}>
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
          <div className="movie-rate"><i className="bi bi-star-fill"></i> {movie.vote_average} </div>
        </div>
      }
      {
        !emulator &&
        <Skeleton count={1} width="170px" height="300px" />
      }
    </>
  )
}


export default CardMovie