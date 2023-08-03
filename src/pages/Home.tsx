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
      // console.log(res);
      
    })
  }, [])


  const MovieList = () => {
    return movies?.map((movie: any, i: number) => (
      <CardMovie movie={movie} key={i} />
    ))
  }


  return (
    <>
      {/* <Header /> */}
      {/* <input type="text" onChange={({target}) => search(target.value)} /> */}
      {/* <Container>
        <div className="hero">
          <h1>Welcome To VINEMA.<span>I</span>D</h1>
        </div>
      </Container> */}
      {/* <Upcoming /> */}
      <div className="position-relative">
      {/* <Sidebar /> */}
      <Container id='container' className=' mt-4'>

        {/* <div className="flex">
          <div className="vertikal"></div>
          <h4 className="">Popular Movie</h4>
        </div> */}
         <div className='header'>
        <h2 className='kategori'>Popular Movie</h2>
        {/* <div className='d-flex gap-3'>
          <p>Sort By :</p>
          <Form.Select aria-label="Default select example">
            <option>---</option>
            <option value="">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div> */}
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