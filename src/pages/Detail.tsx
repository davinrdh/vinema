import { useEffect, useState } from "react"
import { getCredits, getMovieId, getVideos } from "../services/Api"
import { useParams } from "react-router-dom"
import { Container, Spinner } from "react-bootstrap"
import '../styles/Detail.scss'
import Header from "../shared/Header"

const Detail = () => {
  const [movieDetail, setMovieDetail] = useState<any>()
  const [movieTrailer, setMovieTrailer] = useState<any>()
  const [show, setShow] = useState<any>(false)
  const [cast, setCast] = useState<any>()
  // const [isLoading, setIsLoading] = useState(false)

  const { id } = useParams()


  useEffect(() => {
    getMovieId(id).then((res) => {
      setMovieDetail(res)
      // console.log(res.genres)
    })
  }, [])

  useEffect(() => {
    getVideos(id).then((res) => {
      setMovieTrailer(res)
    })
  }, [])

  useEffect(() => {
    getCredits(id).then((res) => {
      setCast(res)
      console.log(res)
    })
  }, [])

  const keyVideo = movieTrailer?.find(
    (el: any) => el.type === "Trailer"
  ).key

  const handleShow = () => {
    setShow(!show)
  }


  // const keyVideo = cek.key
  // const urlVideo = `youtube.com/watch?v=${keyVideo}`

  // console.log(urlVideo)


  // const renderTrailer = () => {
  //   return (
  //     // <div>{movieTrailer?.find((i: any) => {
  //     //   i.type == "Trailer"
  //     // })}
  //     // </div>
  //     <div>{`https://www.youtube.com/embed/${cek}`}</div>
  //   )
  // }

  const urlVideo = `https://www.youtube.com/embed/${keyVideo}`


  const renderCast = () => {
    return cast?.map((data: any, key: number) => (
      <div className="box-cast card" key={key}>
        <img src={`${data?.profile_path == null  ? '/placeholder.jpg' : import.meta.env.VITE_APP_BASEIMG + data?.profile_path}`}  alt="" className="img-cast" />
        <p className="fw-bold">{data?.original_name}</p>
        <p>as</p>
        <h6>{data?.character}</h6>
      </div>
    ))
  }


  const renderMovieDetail = () => {
    return (
      <div className="detail">
        <div className="img">
          <div className="card">
            <img src={`${import.meta.env.VITE_APP_BASEIMG}/${movieDetail?.poster_path}`} alt="" />
          </div>
        </div>
        <div className="desc">
          <div className="title">{movieDetail?.title}</div>
          <div className="tagline">{movieDetail?.tagline}</div>
          <p className="fw-bold">Release Date :</p>
          <div className="release">{movieDetail?.release_date}</div>
          <p className="fw-bold">Rate :</p>
          <div className="rate">
            <i className="bi bi-star-fill"></i> {movieDetail?.vote_average}/10 From {movieDetail?.vote_count} users
          </div>
          <p className="fw-bold">Genres :</p>
          <div className="genre">
            {movieDetail?.genres.map((genre: any, i: number) => (
              <div className="box">
                <div key={i} >
                  <p>{genre.name}</p>
                </div>
              </div>
            )
            )}
          </div>
          <p className="fw-bold">Overview :</p>
          <div className="overview">{movieDetail?.overview}</div>
          <button className="handleShow" onClick={handleShow}>
            <i className="bi bi-caret-down-fill"></i>  {show ? 'Hide Trailer' : 'See Trailer'}
          </button>

          {show && (
            <div className="trailer">
              <iframe width="560" height="315" src={urlVideo} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <>
      {/* <Header /> */}
      <Container>
        <div className="bg-img">
          <img src={`${import.meta.env.VITE_APP_BASEIMG}/${movieDetail?.backdrop_path}`} alt="" className="lighten"/>
          <div className="lighten">
          </div>
        </div>

        {movieDetail ? renderMovieDetail() :
          <div className="loading">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>

        }

          <div className="d-flex mt-5">
          {/* <div className="vertikal"></div> */}
          <h2 className="mt-5">Cast</h2>
          </div>
        <div className="cast">
          {renderCast()}
        </div>
        

      </Container>
    </>
  )
}

export default Detail