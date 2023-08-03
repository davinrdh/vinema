import { useEffect, useState } from "react"
import { getCredits, getMovieId, getSimilar, getVideos } from "../services/Api"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Container, Spinner } from "react-bootstrap"
import '../styles/Detail.scss'

const Detail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [movieDetail, setMovieDetail] = useState<any>()
  const [movieTrailer, setMovieTrailer] = useState<any>()
  const [show, setShow] = useState<any>(false)
  const [cast, setCast] = useState<any>()
  const [similar, setSimilar] = useState<any>()
  // const [isLoading, setIsLoading] = useState(false)

  const { id } = useParams()

  useEffect(()=> {
    window.scrollTo(0, 0)
  },[location.pathname])

  useEffect(() => {
    getMovieId(id).then((res) => {
      setMovieDetail(res)
      console.log(res)
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
      // console.log(res)
    })
  }, [])

  useEffect(() => {
    getSimilar(id).then((res) => {
      setSimilar(res)
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

  // const DateConverter = () => {
  //   return movieDetail?.release_date.moment("YYYY-MM-DD").format("DD-MM-YYYY")
  // }

  const detailSimilar = (data: any) => {
    navigate(`/detail/${data.id}`)
    window.location.reload()
  }


  const renderCast = () => {
    const LimitCast = cast?.slice(0, 10)
    return LimitCast?.map((data: any, key: number) => (
      <div className="box-cast card" key={key}>
        <img src={`${data?.profile_path == null ? '/placeholder.jpg' : import.meta.env.VITE_APP_BASEIMG + data?.profile_path}`} alt="" className="img-cast" />
        <p className="fw-bold">{data?.original_name}</p>
        <p>as</p>
        <h6>{data?.character}</h6>
      </div>
    ))
  }

  const renderSimilar = () => {
    return similar?.map((data: any, key: number) => (
      <div className="box-movie card" key={key} onClick={() => detailSimilar(data)}>
        <img src={`${data?.poster_path == null ? '/placeholder.jpg' : import.meta.env.VITE_APP_BASEIMG + data?.poster_path}`} alt="" className="img-cast" />
        <div className="text-truncate">{data.title}</div>
      </div>
    ))
  }


  const renderProduction = () => {
    return movieDetail?.production_companies.map((production: any, i: number) => (
      <div key={i} className="production">
        <img src={`${production?.logo_path == null ? '/placeholder.jpg' : import.meta.env.VITE_APP_BASEIMG + production?.logo_path}`} alt="" className="img-cast" />
        {production.name}
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
          <div className="d-flex gap-2 align-items-center">
            <div className="title">{movieDetail?.title}</div>
            <div className="fs-2 year">( {movieDetail?.release_date.slice(0, 4)} )</div>
          </div>
          <div className="tagline">{movieDetail?.tagline}</div>

          <div className="d-flex align-items-center my-2">
            <div className="release">{movieDetail?.release_date.replaceAll("-", "/")}</div>
            <i className="bi bi-dot fs-3"></i>
            <div className="d-flex gap-1">
              {movieDetail?.genres.map((genre: any, i: number) => (
                <div key={i} className="box-genre">
                  {genre?.name}
                </div>
              )
              )}
            </div>
          </div>
          <div className="runtime my-2">
            <i className="bi bi-clock"></i> {Math.floor(movieDetail?.runtime / 60)} Hour {movieDetail?.runtime % 60} Minutes
          </div>
          <div className="rate">
            <i className="bi bi-star-fill"></i> {Math.floor(movieDetail?.vote_average)} /   10 From {movieDetail?.vote_count} users
          </div>
          <p className="fw-bold">Overview</p>
          <div className="overview">{movieDetail?.overview}</div>

          <button className="handleShow align-items-center d-flex gap-2" onClick={handleShow}>
            <i className="bi bi-play-circle-fill fs-2"></i>  <p>{show ? 'Hide Trailer' : 'See Trailer'}</p>
          </button>

          {show && (
            <div className="trailer">
              <iframe width="560" height="315" src={urlVideo} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
          )}
          {/* <div className="list-production">
          {renderProduction()}
        </div> */}
        </div>
      </div>
    )
  }

  return (
    <>
      {/* <Header /> */}
      <Container>
        <div className="bg-img">
          <img src={`${import.meta.env.VITE_APP_BASEIMGORI}/${movieDetail?.backdrop_path}`} alt="" className="lighten" />
          <div className="lighten"></div>
          <div className="fade"></div>
        </div>

        {movieDetail ? renderMovieDetail() :
          <div className="loading">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>

        }



        <div className="d-flex">
          {/* <div className="vertikal"></div> */}
          <h2 className="mt-5">Cast</h2>
        </div>
        <div className="cast">
          {renderCast()}
        </div>

        <h2 className="text-center mt-5">Similar Movie</h2>
        <div className="cast">
          {renderSimilar()}
        </div>


      </Container>
    </>
  )
}

export default Detail