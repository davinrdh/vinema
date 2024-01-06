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

  useEffect(() => {
    getMovie().then((res) => {
      setMovies(res)
    })
  }, [])


  const MovieList = () => {
    return movies?.map((movie: any, i: number) => (
        <CardMovie movie={movie} key={i} />
    ))
  }


  return (
    <>
      <div className="desktop">
        <div className="position-relative">
          <Container id='container' className=''>
            <div className="d-flex justify-content-center">
              <div className="hero">
                <div>
                  <h1>Welcome.</h1>
                  <h2>Millions of movies to find overview and ratings. Explore now.</h2>
                </div>
              </div>
            </div>
            <div className='header'>
            </div>
            <div className="content text-center">
              {MovieList() || <Skeleton />}
            </div>
          </Container>
          <Rightbar />
        </div>
      </div>
      <div className="mobile">
        <div className="d-flex align-items-center h-100 text-center">
          <h1>Not available in mobile mode please switch to desktop mode</h1>
        </div>
      </div>
    </>
  )
}

export default Home