import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import CardMovie from "../components/CardMovie"
import { getMovie } from "../services/Api"
import '../styles/Home.scss'
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import Rightbar from "../shared/Rightbar"

const Home = () => {
  const [movies, setMovies] = useState<any>()
  const [activeBackground, setActiveBackground] = useState<any>()

  useEffect(() => {
    getMovie().then((res) => {
      setMovies(res)
      // console.log(res);

    })
  }, [])

  const handleMouseOverParent = (movie: any) => {
    setActiveBackground(movie.id)
  }


  const MovieList = () => {
    return movies?.map((movie: any, i: number) => (
      <CardMovie movie={movie} key={i} handleMouseOver={(movie: any) => handleMouseOverParent(movie)}/>
    ))
  }


  return (
    <>
      <div className="position-relative">
        <Container id='container' className=''>
          <div className="d-flex justify-content-center">
            <div className="hero">
            {/* {
              movies?.map((movie: any, i:number) => (
                <div className="bg-hero" key={i}>
                  <img src={`${import.meta.env.VITE_APP_BASEIMGORI}/${movie?.backdrop_path}`} alt="" className={activeBackground == null || activeBackground == movie?.id ? 'active' : ''} />
                </div>
              ))
            } */}
              <div>
                <h1>Welcome.</h1>
                <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
              </div>
            </div>
          </div>
          <div className='header'>
            {/* <h2 className='kategori'>Popular Movie</h2> */}
          </div>
          <div className="content text-center">
            {MovieList() || <Skeleton />}
          </div>
        </Container>
        <Rightbar />
      </div>
    </>
  )
}

export default Home