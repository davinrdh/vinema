import { useEffect, useState } from "react"
import { getUpcoming } from "../services/Api"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../styles/Upcoming.scss'
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Upcoming = () => {
  const [upcomings, setUpcomings] = useState<any>()
  const [emulatorImg, setEmulatorImg] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    getUpcoming().then((res) => {
      setUpcomings(res)
      // console.log(res)
    })
  }, [])

  useEffect(()=> {
    const img = upcomings
    setTimeout(()=>{
      setEmulatorImg(img)
    }, 1*1000)
  })

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false
        }
      }
    ]
  };

  const renderUpcoming = () => {
    return upcomings?.map((movie: any, key: number) => {
      return (

        <div className="carousel">
          <div className="carousel">
            <div className="movie card" onClick={() => navigate(`/detail/${movie.id}`)} key={key}>
              {/* <img src={`${import.meta.env.VITE_APP_BASEIMG}/${movie?.poster_path}`} alt="" /> */}
              { emulatorImg &&
                <img src={`${import.meta.env.VITE_APP_BASEIMG}/${movie?.poster_path}`} alt="" />}
              { !emulatorImg &&
                <Skeleton count={1} width="250px" height="360px" />}
              <div className="overlay">
                <div className="movie-title">{movie.title}</div>
                <p>Release Date:</p>
                <div className="movie-date">{movie.release_date}</div>
                <div className="movie-rate">{movie.vote_average} <i className="bi bi-star-fill"></i></div>
              </div>
            </div>
          </div>
        </div>



      )
    })
  }


  return (
    <Container>
      <div className="flex mt-3">
        <div className="vertikal"></div>
        <h4 className="mb-2">Upcoming Movie</h4>
      </div>
      <div className="slide text-center">
        <Slider {...settings}>
          {renderUpcoming()}
        </Slider>
      </div>

    </Container>
  )
}

export default Upcoming