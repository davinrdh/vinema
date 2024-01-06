import { useEffect, useState } from 'react'
import { getPeopleMovie, getPersonDetail, getSocmed } from '../services/Api'
import { useNavigate, useParams } from 'react-router-dom'
import { Card, Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import LessMoreText from './LessMoreText'
import '../styles/Detail.scss'

export default function DetailPerson() {
  const [person, setPerson] = useState<any>()
  const [movie, setMovie] = useState<any>()
  // const [viewMore, setViewMore] = useState<boolean>(false)
  const [socmed, setSocmed] = useState<any>()

  const { id } = useParams()
  const navigate = useNavigate()

  const getDetail = (id: any) => {
    try {
      getPersonDetail(id).then((res) => {
        setPerson(res)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getMovie = (id: any) => {
    try {
      getPeopleMovie(id).then((res) => {
        setMovie(res)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDetail(id)
    getMovie(id)

    getSocmed(id).then((res) => {
      setSocmed(res)
    })
  }, [id])


  const renderSosmed = () => {
    return (
      <div className="d-flex justify-content-center mt-3 fs-3">
        <div className='d-flex gap-3'>
          {/* <BadgeRounded> */}
          {socmed?.instagram_id !== null &&
            <a href={`https://instagram.com/${socmed?.instagram_id}`} target='_blank'>
              <i className="bi bi-instagram"></i>
            </a>
          }
          {/* </BadgeRounded> */}
          {/* <BadgeRounded className='align-items-center text-black'> */}
          {socmed?.twitter_id !== null &&
            <a href={`https://x.com/${socmed?.twitter_id}`} target='_blank' className='d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>
          }
          {/* </BadgeRounded> */}
          {/* <BadgeRounded> */}
          {socmed?.facebook_id !== null &&
            <a href={`https://facebook.com/${socmed?.facebook_id}`} target='_blank'>
              <i className="bi bi-facebook"></i>
            </a>
          }
          {/* </BadgeRounded> */}
          {/* <BadgeRounded> */}
          {socmed?.youtube_id !== null &&
            <a href={`https://youtube.com/@${socmed?.youtube_id}`} target='_blank'>
              <i className="bi bi-youtube"></i>
            </a>
          }
          {/* </BadgeRounded> */}
          {/* <BadgeRounded> */}
          {socmed?.tiktok_id !== null &&
            <a href={`https://tiktok.com/@${socmed?.tiktok_id}`} target='_blank'>
              <i className="bi bi-tiktok"></i>
            </a>
          }
          {/* </BadgeRounded> */}
        </div>
      </div>
    )
  }

  const renderPersonalInfo = () => (
    <div className='mt-3'>
      <h5><b>Personal Info</b></h5>
      <TextPersonal><b>Known For</b></TextPersonal>
      <TextPersonal>{person?.known_for_department}</TextPersonal>
      <TextPersonal><b>Birthday</b></TextPersonal>
      <TextPersonal>{person?.birthday}</TextPersonal>
      <TextPersonal><b>Place of Birth</b></TextPersonal>
      <TextPersonal>{person?.place_of_birth}</TextPersonal>
      <TextPersonal><b>Popularity</b></TextPersonal>
      <TextPersonal>{person?.popularity}</TextPersonal>
      <TextPersonal><b>Also Known as</b></TextPersonal>
      {person?.also_known_as.map((item: any, i: number) => (
        <TextPersonal key={i}>{item}</TextPersonal>
      ))}
    </div>
  )

  // const renderMovie = () => {
  //   return movie?.cast?.map((item:any, i:number) => (
  //     <CardMovieStyled key={i}>
  //       <img src={`${import.meta.env.VITE_APP_BASEIMG}${item?.poster_path}`} alt="" className='img-fluid' />
  //       <p className='m-0'>{item?.original_title}</p>
  //     </CardMovieStyled>
  //   ))
  // }

  // const breakParagraph = (text: any) => {
  //   if (!text) {
  //     return null
  //   }

  //   const sentences = text.split('. ')
  //   const paragraphs: any = []
  //   let paragraph = ''

  //   sentences.forEach((sentence: any, index: number) => {
  //     paragraph += sentence + '. '

  //     if ((index + 1) % 5 === 0 || index === sentences.length - 1) {
  //       paragraphs.push(paragraph)
  //       paragraph = ''
  //     }
  //   })

  //   return paragraphs.map((item: any, i: number) => (
  //     <p key={i}>{item} <br /></p>
  //   ))
  // }

  const renderMovie = () => {
    return movie?.cast?.map((data: any, key: number) => (
      <CardStyled className="" key={key} onClick={() => detailMovie(data)} style={{ background: 'none' }}>
        <img src={`${data?.poster_path == null ? '/default-movie.png' : import.meta.env.VITE_APP_BASEIMG + data?.poster_path}`} alt="" className="img-cast" />
        <div className="text-truncate" style={{ color: 'var(--white)' }}>{data.title}</div>
      </CardStyled>
    ))
  }

  console.log(movie)

  const detailMovie = (data: any) => {
    navigate(`/movie/${data.id}`)
    window.location.reload()
  }

  return (
    <>
      <Container className='my-5'>
        <Row>
          <Col md={4} className='d-flex justify-content-center'>
            <div>
              <img src={`${person?.profile_path == null ? '/default-avatar.svg' : import.meta.env.VITE_APP_BASEIMG + person?.profile_path}`} alt="" className="img-fluid rounded" />
              {renderSosmed()}
              {renderPersonalInfo()}
            </div>
          </Col>
          <Col md={8}>
            <h1>{person?.name}</h1>
            <h5 className='mt-4 mb-3' style={{ fontWeight: '600' }}>Biography</h5>
            {/* <TruncateText className={viewMore === true ? '' : 'overflow'}> */}
            {/* <p>{person?.biography}</p> */}
            {/* {breakParagraph(person?.biography || `We don't have a biography for ${person?.name}`)} */}
            <LessMoreText
              template={person?.biography || `We don't have a biography for ${person?.name}`}
            />
            {/* </TruncateText> */}
            {/* {person?.biography === "" ? '' :
              (
                <Button
                  onClick={() => setViewMore(!viewMore)}
                  className={`${viewMore === true ? 'd-none' : ''} w-100 p-0 text-primary`}
                  style={{ color: 'var(--white)' }}
                  variant=''>Read More <i className="bi bi-arrow-down"></i></Button>
              )
            } */}
            {/* <ContainerMovie>
              {renderMovie()}
            </ContainerMovie> */}
            <h5 className="mt-4">Known For</h5>
            <div className="cast">
              {renderMovie()}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const CardStyled = styled(Card)`
  min-width: 140px;
  max-width: 140px;
  cursor: pointer;
  overflow: hidden;
  background-color: transparent;
  color: var(--white);
  transition: .2s ease;
  text-align: center;

  img {
      border-radius: 8px;
      height: 210px;
      // min-height: 255px;
  }
`

// const TruncateText = styled.p`

//   &.overflow {
//     -webkit-line-clamp: 12;
//     overflow : hidden;
//     text-overflow: ellipsis;
//     display: -webkit-box;
//     -webkit-box-orient: vertical;
//   }
// `

// const BadgeRounded = styled.div`
//   display: flex;
//   justify-content: center;
//   // align-items: center;
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background: var(--white);

//   i {
//     color: var(--background);
//   }
// `

// const TextPersonal = styled.p`
//   font-size: 16px;
//   margin: 0;
//   margin-bottom: 5px;
// `

// const ContainerMovie = styled.div`
// display: flex;
// width: auto;
// overflow-y: hidden;
// overflow-x: auto;
// margin: 1rem 0;
// `

// const CardMovieStyled = styled(Card)`
//   	width: 170px;
//     height: 300px;
//     cursor: pointer;
//     overflow: hidden;
//     background-color: transparent;
//     color: var(--white);
//     transition: .2s ease;
//     text-align: center;

//     img {
//             border-radius: 8px;
//     }

// `